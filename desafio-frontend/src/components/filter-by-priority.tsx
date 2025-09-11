

import { useFilter } from "@/hooks/useFilter"
import { ArrowIcon } from "@/images/arrow-icon"
import { PriorityTypes } from "@/types/priority-types"
import { useState } from "react"
import styled from "styled-components"



const FilterContainer = styled.div `

display:flex;
align-items:center;
position:relative;


button {
border:none;
background: transparent;
cursor:pointer;
font-family: inherit;
font-weight: 400;
font-size: 14px;
line-height: 22px;

display: flex;
align-items:center;
text-align: center;

svg {
margin-left: 16px;
}

}





`

const PriorityFilter = styled.ul `



width: 250px;

position:absolute;
background: #FFFFFF
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
border-radius: 4px;
padding: 12px 16px;
list-style: none;
z-index: 999;
top:100%;

li {
cursor:pointer;
color: var(--text-dark);
font-weight: 400;
font-size:14px;
line-height: 22px;
}

li + li {
margin-top:4px;
}

`




export function FilterByPriority() {
    const [IsOpen, setIsOpen] = useState(false)
    const {setPriority ,priority} = useFilter()

const handleOpen = ( ) => setIsOpen(prev => !prev);
const handlePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
    console.log(priority)
}

    return (
        <FilterContainer >
            <button onClick={handleOpen}>Organizar por
                <ArrowIcon></ArrowIcon>
            </button>
            {IsOpen && <PriorityFilter>
                <li onClick={() => handlePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handlePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - Menor</li>
                <li onClick={() => handlePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - Maior</li>
                <li onClick={() => handlePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>}

        </FilterContainer>
    )
}