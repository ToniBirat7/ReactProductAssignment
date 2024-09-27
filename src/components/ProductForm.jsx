import React from "react";
function ProductPage() {
    let [productName, setProductName] = React.useState("");
    let [price, setPrice] = React.useState("");
    let [description, setDescription] = React.useState("");

    return (
        <form onSubmit={
            (e) => {
                e.preventDefault();
                console.log("Form submitted");
                console.log("Product Name: ", productName);
                console.log("Price: ", price);
                console.log("Description: ", description);
            }
        }>
            <div>
                <label htmlFor="productName">
                    Product Name:
                </label>
                <input
                    type="text"
                    id="productName"
                    name="productName"
                    autoComplete="off"
                    onChange={
                        (e) => {
                            setProductName(e.target.value);
                        }
                    }
                />
            </div>
            <div>
                <label htmlFor="price">
                    Price:
                </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    autoComplete="off"
                    onChange={
                        (e) => {
                            setPrice(e.target.value);
                        }
                    }
                />
            </div>
            <div>
                <label htmlFor="description">
                    Description:
                </label>
                <textarea
                    id="description"
                    name="description"
                    autoComplete="off"
                    onChange={
                        (e) => {
                            setDescription(e.target.value);
                        }
                    }
                />
            </div>
            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ProductPage;