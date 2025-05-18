import React from "react";

const Status = () => {
    return(
        <div className="status-container"> {/*빨간박스*/}
            <div className="stauts-orderbox">나의주문현황 {/*노란박스1*/}

            </div>
            <div className="status-bottombox"> {/*노란박스2*/}
                <div className="status-subbox">
                    <div className="status-subsubsubbox">입금완료

                    </div>
                    <div className="status-subsubbox">1

                    </div>
                </div>
                <div className="status-subbox">
                    <div className="status-subsubsubbox">배송중

                    </div>
                    <div className="status-subsubbox">10

                    </div>
                </div>
                <div className="status-subbox">
                    <div className="status-subsubsubbox">배송완료

                    </div>
                    <div className="status-subsubbox">100

                    </div>
                </div>
                <div className="status-subbox">
                    <div className="status-subsubsubbox">주문취소

                    </div>
                    <div className="status-subsubbox">0

                    </div>
                </div>
                

            </div>

        </div>
 
    );
};
export default Status;