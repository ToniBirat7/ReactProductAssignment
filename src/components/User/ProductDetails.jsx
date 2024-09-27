import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://66e7cb40b17821a9d9d9f6b4.mockapi.io/product/Products/${id}`).then((response) => {
            setProduct(response.data);
            console.log(response.data)
        });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.Name}</h1>
            <p>Price: {product.Price}</p>
            <p>Description: {product.Description}</p>
        </div>
    );
}

export default ProductDetails;
