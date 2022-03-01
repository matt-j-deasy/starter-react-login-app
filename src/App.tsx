import { ChakraProvider } from "@chakra-ui/react";
import AuthenticationWrapper from "components/AuthenticationWrapper";
import { Provider } from "react-redux";
import { store } from "store";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <AuthenticationWrapper />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
