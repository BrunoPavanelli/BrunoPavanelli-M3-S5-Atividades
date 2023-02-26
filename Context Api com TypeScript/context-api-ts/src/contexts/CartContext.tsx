import { createContext, ReactNode, useState } from "react";
import { iProduts, products } from "../components/ProductList/products";

interface iCartContextProps {
  children: ReactNode;
}

interface iCartContext {
  cartList: iProduts[];
  setCartList: React.Dispatch<React.SetStateAction<iProduts[]>>;
  addProduct: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  removeProduct: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iCartContextProps) => {
  const [cartList, setCartList] = useState<iProduts[]>([]);

  const addProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLElement
    const id = target.id

    const newProdut = products.find(product => id == product.id.toString()) as iProduts

    setCartList([...cartList, newProdut])
  };

  const removeProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLElement
    const id = target.id

    const filteredProduts = cartList.filter(product => id != product.id.toString())

    setCartList(filteredProduts)
  };

  return (
    <CartContext.Provider value={{ cartList, setCartList, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
