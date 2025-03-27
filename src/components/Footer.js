import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-section">
                <div className="footer-title">LIKELION PROCESS</div>
                <div className="footer-subtitle">
                    멋쟁이사자처럼은 창업동아리이므로 뭐시기저시기
                </div>
            </div>
            <div className="footer-section">
                <div className="info-text-row">
                    <div className="info-text-wrapper">
                        <div className="info-text-1">LIKELION PROCESS</div>
                        <div className="info-text-2">멋쟁이사자처럼은 창업동아리이므로 뭐시기저시기</div>
                    </div>
                    <div className="info-text-wrapper">
                        <div className="info-text-1">대표</div>
                        <div className="info-text-2">아리</div>
                    </div>
                    <div className="info-text-wrapper">
                        <div className="info-text-1">계좌번호</div>
                        <div className="info-text-2">00908764801015 기업은행 강민준준</div>
                    </div>
                    <div className="info-text-wrapper">
                        <div className="info-text-1">주소</div>
                        <div className="info-text-2">경기도 고양시 덕양구 한국항공대학로 뭐시기기</div>
                    </div>
                </div>
            </div>
            <div className="info-text-row">
                <div className="info-text-wrapper">
                    <div className="info-text-1">전번</div>
                    <div className="info-text-2">01051558081</div>
                </div>
                <div className="info-text-wrapper">
                    <div className="info-text-1">개인정보책임자</div>
                    <div className="info-text-2">아리</div>
                </div>
                <div className="info-text-wrapper">
                    <div className="info-text-1">입금계좌</div>
                    <div className="info-text-2">119</div>
                </div>
            </div>
        </div>
    );
    
};

export default Footer;