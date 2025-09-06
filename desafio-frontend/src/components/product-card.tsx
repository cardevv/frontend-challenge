import styled from "styled-components";

interface ProductCardProps {

    image: string,
    title: string,
    price: number,

    
}


const Card = styled.div `
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
border-radius: 0px 0px 4px 4px;
backdrop-filter: blur(10px);
background: rgba(255,255,255,0.4)

`

export function ProductCard(props: ProductCardProps) {

    return (

        <Card>
            <image href={props.image}></image>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
        </Card>
    )

}