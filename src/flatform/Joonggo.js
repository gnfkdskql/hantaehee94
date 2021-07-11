import React from "react";
import "./Joonggo.css";

function Joonggo() {
    return (
        <div>
            <div className="joonggo">
                <div className="joonggo_icon">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/img/joonggo.jpg"
                        }
                        alt=""
                    />
                </div>
                <div className="joonggo_data">
                    <div className="visit item1">
                        <p>방문</p>
                        <p>1,719</p>
                    </div>
                    <div className="post item1">
                        <p>게시글</p>
                        <p>79</p>
                    </div>
                    <div className="comment item1">
                        <p>댓글</p>
                        <p>273</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Joonggo;
