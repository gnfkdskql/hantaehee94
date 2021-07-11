import React from "react";
import "./Carrot.css";

function Carrot() {
    return (
        <div>
            <div className="carrot">
                <div className="carrot_icon">
                    <img
                        src={
                            process.env.PUBLIC_URL + "/img/carrot.png"
                        }
                        alt=""
                    />
                </div>

                <div className="carrot_data">
                    <div className="review item1">
                        <p>후기</p>
                        <p>0</p>
                    </div>
                    <div className="following item1">
                        <p>팔로잉</p>
                        <p>0</p>
                    </div>
                    <div className="follower item1">
                        <p>팔로워</p>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrot;
