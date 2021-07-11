import React from "react";
import "./Thunder.css";

function Thunder() {
    return (
        <div>
            <div className="thunder">
                <div className="thunder_icon">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/img/thunder.png"
                        }
                        alt=""
                    />
                </div>
                <div className="thunder_data">
                    <div className="review item1">
                        <p>후기</p>
                        <p>0</p>
                    </div>
                    <div className="follower item1">
                        <p>팔로워</p>
                        <p>0</p>
                    </div>
                    <div className="goods item1">
                        <p>상품</p>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thunder;
