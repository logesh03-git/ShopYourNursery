import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CartProvider from "./contexts/CartProvider.tsx";
import WishListProvider from "./contexts/WishListProvider.tsx";
import PreOrderProvider from "./contexts/PreOrderProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <WishListProvider>
        <PreOrderProvider>
          <App />
        </PreOrderProvider>
      </WishListProvider>
    </CartProvider>
  </StrictMode>
);
