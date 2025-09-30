import React, { useState} from "react";
import ProductCard from "./Products";


function ProductList() {
    const cardCount = 1;
    const cardsToRender = Array.from({ length: cardCount }); 

    return (
        <div> 
            <div>
                <div> 
                    {cardsToRender.map((_, index) => (
                        <ProductCard key={index} /> 
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ProductList;