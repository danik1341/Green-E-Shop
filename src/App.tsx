import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import queryClient from "../api/config/queryClient";
import store, { persistor } from "../store";
import { Pages } from "./Routes";

import "./App.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <QueryClientProvider client={queryClient}>
            <Pages />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
