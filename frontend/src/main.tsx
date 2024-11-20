import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CartProvider from "./contexts/CartProvider.tsx";
import WishListProvider from "./contexts/WishListProvider.tsx";
import PreOrderProvider from "./contexts/PreOrderProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "./contexts/AppContext.tsx";
import store from "./store/store.ts";
import { Provider } from "react-redux";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 3, // Cache for 5 minutes
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppContextProvider>
          <CartProvider>
            <WishListProvider>
              <PreOrderProvider>
                <App />
              </PreOrderProvider>
            </WishListProvider>
          </CartProvider>
        </AppContextProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
