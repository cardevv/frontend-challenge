import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = async (): Promise<ProductsFetchResponse> => {
  const response = await axios.post<{ data: ProductsFetchResponse }>(API_URL, 
    
    {query:
      
     `
      query {
        allProducts {
          id
          name
          price_in_cents
          image_url
          description
        }
      }
    `,
  });

  return response.data.data; // já retorna { allProducts: [...] }
};


export function useProducts() {
  const { data } = useQuery<ProductsFetchResponse>({
    queryFn: fetch,
    queryKey: ["products"],
  });

  return {
    data: data?.allProducts, // mais limpo
  };
}

