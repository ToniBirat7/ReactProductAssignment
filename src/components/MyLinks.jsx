import React from "react";
import {NavLink, Routes, Route} from "react-router-dom";
import CreateUser from "./User/CreateUser.jsx";
import Product from "./User/Product.jsx";
import CreateProduct from "./User/CreateProduct.jsx";
import NewApp from "../NewApp.jsx";
import ProductForm from "./ProductForm.jsx";
import ProductDetails from "./User/ProductDetails.jsx";
import UpdateProduct from "./User/UpdateProduct.jsx";
const MyLinks = () => {
    return (
        <>
            <NavLink to="/products">View All Product</NavLink>
            <br/>
            <NavLink to="/product/create">Create Product</NavLink>
            <br/>
            <Routes>
                <Route path="/product/create" element={<ProductForm/>}></Route>
                <Route path="/products" element={<CreateProduct/>}></Route>
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/update/:id" element={<UpdateProduct />} />
            </Routes>
        </>
    );
}

export default MyLinks;
