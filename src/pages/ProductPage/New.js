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

     const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 5;
    
      const totalPages = Math.ceil(products.length / itemsPerPage);
    
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentProducts = products.slice(startIndex, endIndex);
    
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

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

                 <div className="paging">
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>
              Prev
            </button>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={currentPage === pageNumber ? 'active' : ''}
              >
                {pageNumber}
              </button>
            )
          )}
          
          {currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          )}
        </div>
            </div>
              {isModalOpen && (
        <PayModal product={selectedProduct} onClose={handleCloseModal} />
    )}
        </div>
    );
};

export default New;