import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const CartPage = React.lazy(() => import("./pages/Cart/CartPage"));
const ShopProducts = React.lazy(
  () => import("./components/SearchProducts/ShopProducts")
);
const FavoritePage = React.lazy(() => import("./pages/Favorite/FavoritePage"));
import Layout from "./layout/Layout";
import { Suspense } from "react";
import ProductLanding from "./components/SearchProducts/ProductLanding";
import Loading from "./components/Loading/Loading";
import AddressPage from "./pages/Address/AddressPage";
import OrderPlaced from "./components/OrderPlaced/OrderPlaced";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/orderplaced"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <OrderPlaced />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/shop-plants"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <ShopProducts />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/shop-plants/:id"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <ProductLanding />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <CartPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/shipping-address"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <AddressPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/favorite"
          element={
            <Layout>
              <Suspense fallback={<Loading />}>
                <FavoritePage />
              </Suspense>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
