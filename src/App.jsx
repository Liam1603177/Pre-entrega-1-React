import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./layouts";
import { PublicRouter } from "./router";

//SOLID --> Single Responsability

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <PublicRouter />
      </Layout>
    </ChakraProvider>
  );
}

export default App;