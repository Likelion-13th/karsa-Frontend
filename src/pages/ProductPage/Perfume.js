import React, {useState} from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";


const Perfume = () => {
    const products = [
        {
            id:1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_1.png",
            isNew:true,
        },
        {
            id:2,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_3.png",
            isNew:true,
        },
        {
            id:3,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_15.png",
            isNew:true,
        },
        {
            id:4,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_13.png",
            isNew:true,
        },
        {
            id:5,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_7.png",
            isNew:true,
        },
        {
            id:6,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_4.png",
            isNew:true,
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };
    const handleCardClose = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    };

    return(
        <div>
            <Banner title="Perfume" imagePath={"/banner_diffuser3.png"} />
            <div className="product-container">
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard 
                        key={product.id} 
                        product={product} 
                        onClick={() => handleCardClick(product)} 
                        />
                    ))}
                </div>
            </div>
            {isModalOpen && <PayModal product={selectedProduct}
            onClose={() => handleCardClose()}/>}
        </div>
    );
};

export default Perfume;