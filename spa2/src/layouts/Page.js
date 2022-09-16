import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage"
const Page = () => {
    return (
        <Routes>
            <Route path="/" end element={<HomePage />}> </Route>
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/products" element={<ProductListPage/>} />
            <Route path="/products/:id" element={<ProductPage/>} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route  element={<ErrorPage/>} />
        </Routes>
    )
}
export default Page