import ProductCard from "../ProductCard/ProductCard";
import { products } from "./products";
import { ProductListStyled } from "./ProductsListStyled";

export const ProdutList = () => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          path="productList"
        />
      ))}
    </ProductListStyled>
  );
};
