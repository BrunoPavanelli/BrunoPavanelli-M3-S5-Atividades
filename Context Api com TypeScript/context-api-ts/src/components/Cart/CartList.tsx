import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import ProductCard from "../ProductCard/ProductCard";
import { ProductListStyled } from "../ProductList/ProductsListStyled";

export const CartList = () => {
  const { cartList } = useContext(CartContext);

  return (
    <ProductListStyled>
      {cartList.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          id={product.id}
          path="cartList"
        />
      ))}
    </ProductListStyled>
  );
};
