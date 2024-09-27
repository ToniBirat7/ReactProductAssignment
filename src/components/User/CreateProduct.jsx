import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ProductDetails from "./ProductDetails.jsx";
function HomePage() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get("https://66e7cb40b17821a9d9d9f6b4.mockapi.io/product/Products").then((response) => {
            setProducts(response.data);
            console.log(response.data)
        });
    }, []);
    const handleDelete = (id) => {
        axios.delete(`https://66e7cb40b17821a9d9d9f6b4.mockapi.io/product/Products/${id}`).then((response) => {
            console.log(response.data)
        });
        axios.get("https://66e7cb40b17821a9d9d9f6b4.mockapi.io/product/Products").then((response) => {
            setProducts(response.data);
            console.log(response.data)
        });
    }
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.Name}</h3>
                        <p>Price: {product.Price}</p>
                        <p>Desc: {product.Description}</p>
                        <NavLink to={`/product/${product.id}`}>
                            <button>View Product</button>
                        </NavLink>
                        <br></br>
                        <NavLink to={`/update/${product.id}`}>
                            <button>Update Product</button>
                        </NavLink>
                        <br></br>
                        <button onClick={ 
                            () => {
                                handleDelete(product.id);
                            }
                        }>
                            Delete Product
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
