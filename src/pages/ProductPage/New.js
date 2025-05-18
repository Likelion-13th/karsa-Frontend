import React, { useState } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";

const New = () => {
    const products = [
        {
            id: 1,
            name: "시레나 오 드",
            brand: "플로리스 런던",
            price: 30000,
            imagePath: "/img/diffuser_1.png",
            isNew: true,
        },
         {
            id: 2,
            name: "시레나 오 드",
            brand: "플로리스 런던",
            price: 30000,
            imagePath: "/img/diffuser_2.png",
            isNew: true,
        },
         {
            id: 3,
            name: "시레나 오 드",
            brand: "플로리스 런던",
            price: 30000,
            imagePath: "/img/diffuser_3.png",
            isNew: true,
        },
         {
            id: 4,
            name: "시레나 오 드",
            brand: "플로리스 런던",
            price: 30000,
            imagePath: "/img/diffuser_4.png",
            isNew: true,
        },
         {
            id: 5,
            name: "시레나 오 드",
            brand: "플로리스 런던",
            price: 30000,
            imagePath: "/img/diffuser_5.png",
            isNew: true,
        },
    ];



    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    };


    return (
        <div>
            <Banner title = "New" imagePath={"/banner_diffuser4.png"} />
            <div className="product-container">
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard 
                        key={product.id} 
                        product={product}
                        onClick={() => handleCardClick(product)} />
                    ))}
                </div>

     
            </div>
              {isModalOpen && (
        <PayModal product={selectedProduct} onClose={handleCloseModal} />
    )}
        </div>
    );
};

export default New;