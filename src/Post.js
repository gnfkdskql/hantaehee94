import React from "react";
import "./Post.css";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import PropTypes from "prop-types";

function Post({ title, poster, summary }) {
    return (
        <div>
            <BrowserView>
                <div className="post">
                    <a href={summary} target="_blank" rel="noopener noreferrer">
                        <img src={process.env.PUBLIC_URL + poster} alt="" />
                    </a>
                    <div className="post_data">
                        <a href={summary} target="_blank" rel="noopener noreferrer">
                            <h3 className="post_title">{title}</h3>
                        </a>
                        {/* <p className="post_summary">{summary}</p> */}
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="m__post">
                    <a href={summary} target="_blank" rel="noopener noreferrer">
                        <div className="m__make_rect">
                            <img src={process.env.PUBLIC_URL + poster} alt="" />
                        </div>
                    </a>
                    <div className="m__post_data">
                        <a href={summary} target="_blank" rel="noopener noreferrer">
                            <h3 className="m__post_title">{title}</h3>
                        </a>

                        {/* <p className="post_summary">{summary}</p> */}
                    </div>
                </div>
            </MobileView>
        </div>
    );
}

Post.prototypes = {
    //대충 필요한 것을 적는 공간.
};

export default Post;
