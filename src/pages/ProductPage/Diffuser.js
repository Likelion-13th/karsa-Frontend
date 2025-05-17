import React, {useState} from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";

const Diffuser = () => {
    const products = [
        {
            id: 1,
            name: "시레나 오 드",
            brand: "플로리스 런던",
            price: 30000,
            imagePath: "/img/diffuser_15.png",
            isNew: false,
        },
         {
            id: 2,
            name: "시레나 오 드",
            brand: "플로리스 런던",
            price: 30000,
            imagePath: "/img/diffuser_15.png",
            isNew: false,
        },
         {
            id: 3,
            name: "시레나 오 드",
            brand: "플로리스 런던",
            price: 30000,
            imagePath: "/img/diffuser_15.png",
            isNew: false,
        },
         {
            id: 4,
            name: "시레나 오 드",
            brand: "플로리스 런던",
            price: 30000,
            imagePath: "/img/diffuser_15.png",
            isNew: false,
        },
         {
            id: 5,
            name: "시레나 오 드",
            brand: "플로리스 런던",
            price: 30000,
            imagePath: "/img/diffuser_15.png",
            isNew: false,
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
            <Banner title = "Diffuser" imagePath={"/banner_diffuser3.png"} />
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

export default Diffuser;