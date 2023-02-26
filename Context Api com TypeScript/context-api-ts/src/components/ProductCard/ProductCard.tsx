import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ButtonStyled } from "../Button/ButtonStyled";
import { iProduts } from "../ProductList/products";
import { ProductCardStyled } from "./ProdutCardStyled";

const ProductCard = ({ image, title, price, id, path }: iProduts) => {
  const { addProduct, removeProduct } = useContext(CartContext);

  return (
    <ProductCardStyled>
      <img src={image} alt={`${title} image`} />
      <p>{title}</p>
      <p>{price}</p>
      {path === "productList" ? (
        <ButtonStyled id={id.toString()} onClick={(e) => addProduct(e)}>
          ADICIONAR AO CARRINHO
        </ButtonStyled>
      ) : (
        <ButtonStyled id={id.toString()} onClick={(e) => removeProduct(e)}>REMOVER DO CARRINHO</ButtonStyled>
      )}
    </ProductCardStyled>
  );
};

export default ProductCard;
