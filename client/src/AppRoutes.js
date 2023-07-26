import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Purchases from "./pages/Purchases";
import Customers from "./pages/Customers";
import EditCustomer from "./pages/EditCustomer";
import EditProduct from "./pages/EditProduct";
import NotFound from "./components/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useAuth } from "./contex/auth";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";

const ROLES = {
  User: 2001,
  Admin: 5150,
};

const AppRoutes = () => {
  const { auth } = useAuth();

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={!auth ? <Login /> : <Products />} />
      <Route path="unauthorized" element={<Unauthorized />} />

      {/* we want to protect these routes */}
      <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}>
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/purchases" element={<Purchases />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="/editCustomer/:customerId" element={<EditCustomer />} />
        <Route path="/editProduct/:productId" element={<EditProduct />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
