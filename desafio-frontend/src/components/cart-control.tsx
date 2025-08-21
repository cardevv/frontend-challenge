import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ShoppingBag } from "@/images/shopping-bag";
import styled from "styled-components";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  background-color: var(--delete-color);
  color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;


  position:absolute;
 left: 48%;
  top: 48%;
`;

const ContainerCart = styled.div`
  position: relative;
  
`;

import { useEffect, useState } from "react";


export function CartControl() {
  const { value: cartItems } = useLocalStorage<any[]>("cart-items", []);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <ContainerCart>
      <ShoppingBag />
      {isHydrated && cartItems.length > 0 && <CartCount>{cartItems.length}</CartCount>}
    </ContainerCart>
  );
}


