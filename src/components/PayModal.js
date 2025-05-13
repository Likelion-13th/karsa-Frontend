import React, {useState, useEffect} from "react";
import "../styles/PayModal.css";

const PayModal = ({product, onClose}) => {
    // 주문할 상품 개수(기본값 1개)
    const [quantity, setQuantity] = useState(1);
    // 사용자가 입력한 마일리지 금액
    const [mileageToUse, setMileageToUse] = useState("");
    // 최대 사용 가능 마일리지
    const maxMileage = 100000;
    // 상품 가격
    const [, setProductPrice] = useState(product.price);
    // 총 결제 금액
    const [totalPrice, setTotalPirce] = useState(product.price);

    // 수량 증가 및 감소 함수
    const handleQuantityChange = (type) => {
        setQuantity((prev) => (type === "plus" ? prev + 1 : Math.max(1, prev -1)));
    };

    useEffect(() => {
        const newProductPrice = product.price * quantity;
        setProductPrice(newProductPrice);
        setTotalPirce(Math.max(newProductPrice-mileageToUse, 0));
    }, [quantity, mileageToUse, product.price]);

    //input에 입력할 때 실행
    const handleMileageChange = (e) => {
        const value = e.target.value;
        const numericValue = value === "" ? 0 : Math.min(Number(value), maxMileage);
        setMileageToUse(numericValue);
    };

    return (
        <div className="modal">
            <div className="overlay" onClick={onClose}></div>

            <div className="container">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="title">주문 / 결제</div>

                <div className="section">
                    <div className="section-title">주문 상품</div>
                    <div className="order-info">
                        <img
                        src={product.imagePath}
                        alt={product.name}
                        className="order-image"
                    />
                    <div>
                        <div className="order-name">{product.name}</div>
                        <div className="order-brand">{product.brand}</div>
                        <div className="order-price">
                            {product.price.toLocaleString()}원
                        </div>

                        <div className="quantity-control">
                            <button
                             className="quantity-button"
                             onClick={() => handleQuantityChange("minus")}
                             >
                                -
                             </button>
                             <div className="quantity">{quantity}</div>
                             <button
                              className="quantity-button"
                              onClick={() => handleQuantityChange("plus")}
                              >
                                +
                             </button>
                        </div>
                    </div>
                    </div>
                </div>
                {/* 배송지 정보 */}
                <div className="section">
                    <div className="section-title">배송지</div>
                    <div className="user-info">아리</div>
                    <div className="user-info">010-0000-0000</div>
                    <div className="user-info">
                        경기도 고양시 덕양구 항공대학로 76 국제은익관 1생활관 F000
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PayModal;