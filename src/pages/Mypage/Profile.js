import React from "react";

const Profile = () => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    };
    return(
        <div className="profile-container"> {/*빨간박스*/}
            <div className="profile-section"> {/*노란박스*/}
                <div className="profile-name">
                    <sapn className="profile-realName">제리</sapn>
                    님
                </div> {/*초록박스*/}
                <div className="profile-membership">[VVIP] 회원</div> {/*초록박스*/}
            </div> {/*노란박스*/}
            <div className="profile-section">  {/*노란박스*/}
                <div className="profile-stat-label">총 결제 금액</div> {/*초록박스*/}
                <div className="profile-stat-value">
                    <span>{formatCurrency(100000)}</span>
                    원
                </div> {/*초록박스*/}
            </div> {/*노란박스*/}
            <div className="profile-section">  {/*노란박스*/}
                <div className="profile-stat-label">마일리지</div> {/*초록박스*/}
                <div className="profile-stat-value">
                    <span>{formatCurrency(10000)}</span>
                    원
                </div> {/*초록박스*/}
            </div>
        </div>
    );
};
export default Profile;