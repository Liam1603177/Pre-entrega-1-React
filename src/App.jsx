import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./layouts";
import { PublicRouter } from "./router";
import { CartProvider } from "./context";
import { LoginRouter } from "./router/LoginRouter";

function App() {
  const isUserConnected = localStorage.getItem("isUserConnected");
  return (
    <CartProvider>
      <ChakraProvider>
        <Layout>
          {isUserConnected === "true" ? <PublicRouter /> : <LoginRouter />}
        </Layout>
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;