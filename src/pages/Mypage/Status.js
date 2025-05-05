import React from "react";

const Status = () => {
    return(
        <div className="container-red"> {/*빨간박스*/}
            <div className="box-yellow top">나의주문현황 {/*노란박스1*/}

            </div>
            <div className="box-yellow bottom"> {/*노란박스2*/}
                <div className="box-green">
                    <div className="box-blue">입금완료

                    </div>
                    <div className="box-blue">1

                    </div>
                </div>
                <div className="box-green">
                    <div className="box-blue">배송중

                    </div>
                    <div className="box-blue">10

                    </div>
                </div>
                <div className="box-green">
                    <div className="box-blue">배송완료

                    </div>
                    <div className="box-blue">100

                    </div>
                </div>
                <div className="box-green">
                    <div className="box-blue">주문취소

                    </div>
                    <div className="box-blue">0

                    </div>
                </div>
                

            </div>

        </div>
 
    );
};
export default Status;