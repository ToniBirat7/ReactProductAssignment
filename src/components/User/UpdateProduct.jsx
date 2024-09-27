import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function ProductPage() {
    let [product, setProduct] = React.useState({
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://66e7cb40b17821a9d9d9f6b4.mockapi.io/product/Products/${id}`)
            .then((response) => {
                setProduct(response.data);
                console.log(product)
            })
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            [name]: value,
        });
        console.log(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://66e7cb40b17821a9d9d9f6b4.mockapi.io/product/Products/${id}`, product)
            .then(() => {
                console.log("Product updated successfully!");
                navigate("/"); // Navigate back to the home page after updating
            })
            .catch((error) => {
                console.error("Error updating product:", error);
            });
    };

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        name="Name"
                        value={product.Name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="text"
                        name="Price"
                        value={product.Price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="Description"
                        value={product.Description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
}

export default ProductPage;