import {
  Show,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/react";
import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
// import CartPage from "./pages/CartPage";
// import OrdersPage from "./pages/OrdersPage";
// import CheckoutReturnPage from "./pages/CheckoutReturnPage";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import { SentryDemoPage } from "./pages/SentryDemoPage";
// import OrderDetailPage from "./pages/OrderDetailPage";
// import OrderSummaryPage from "./pages/OrderSummaryPage";
// import OrderChatPage from "./pages/OrderChatPage";
// import OrderVideoPage from "./pages/OrderVideoPage";
// import AdminProductsPage from "./pages/AdminProductsPage";

function App() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <PageLoader />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
