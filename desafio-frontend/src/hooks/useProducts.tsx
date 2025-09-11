import { FilterType } from "@/types/filter-types";
import { ProductsFetchResponse } from "@/types/products-response";
import { Query, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFilter } from "./useFilter";
import { getCategoryByType, getFieldByPriority } from "@/app/utils/graphql-filters";
import { PriorityTypes } from "@/types/priority-types";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = async (query: string): Promise<ProductsFetchResponse> => {
  const response = await axios.post<{ data: ProductsFetchResponse }>(
    API_URL, 
    
    {
      query
  });

  return response.data.data; // já retorna { allProducts: [...] }
};

const mountQuery = (type: FilterType , priority: PriorityTypes ) => {
if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY

) {

return   `
      query {
        allProducts (sortField: "sale", sortOrder: "DESC") {
          id
          name
          price_in_cents
          image_url
          description
        }
      }
    `

}

const sortSettings = getFieldByPriority(priority)
const categoryFilter = getCategoryByType(type)
  return (
    `
      query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}"
 , ${categoryFilter ? `filter: { category: "${categoryFilter}" }` : ""}
 ) {
          id
          name
          price_in_cents
          image_url
          description
        }
      }
    `
  )

}


export function useProducts() {
const { type , priority ,search }= useFilter()
const searchDeffered = useDeferredValue(search)

const query = mountQuery(type , priority)



  const { data } = useQuery<ProductsFetchResponse>({
    queryFn: () => fetch(query),
    queryKey: ['products' , type , priority],
  });

 const products = data?.allProducts
  const filteredProducts =  products?.filter(product => product.name.toLocaleLowerCase().includes(searchDeffered.toLocaleLowerCase()))

  return {
    data: filteredProducts, // mais limpo
  };
}

