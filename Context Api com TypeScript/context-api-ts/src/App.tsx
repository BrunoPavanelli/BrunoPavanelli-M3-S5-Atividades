import { AppStyled } from "./AppStyled";
import { CartList } from "./components/Cart/CartList";
import { Header } from "./components/Header/Header";
import { ProdutList } from "./components/ProductList/ProdutList";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <AppStyled>
        <Header text="Produtos" />
        <ProdutList />
        <Header text="Cart" />
        <CartList />
      </AppStyled>
    </CartProvider>
  );
}

export default App;
