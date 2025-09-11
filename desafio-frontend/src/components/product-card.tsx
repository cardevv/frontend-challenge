import { formatarValorReais } from "@/app/utils/format-price";
import styled from "styled-components";

interface ProductCardProps {
    id:string,
    image: string,
    title: string,
    price: number,

    
}


const Card = styled.div `
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;

background: rgba(255,255,255,0.4);
border-radius: 0px 0px 4px 4px;
backdrop-filter: blur(10px);

width: 256px;


img {
width: 256px;
height: 300px
}

h3 {

font-weight: 300;
font-size: 16px;
line-height: 150%;
color: var(--text-dark-2)

}

p {
font-weight: 600;
font-size: 14px;
line-height: 150%;
color: var(--shapes-dark);

}

div {

display:flex;
align-items:start;
justify-content:center;
flex-direction: column;
padding: 8px 0px;

> div {
width: 228px;
padding:0px;
height: 1px;
margin: 8px 0;
background: var(--shapes)

}

}


`

export function ProductCard(props: ProductCardProps) {

   

    const price = formatarValorReais(props.price)

    return (

        <Card>
            <img src={props.image}></img>
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )

}