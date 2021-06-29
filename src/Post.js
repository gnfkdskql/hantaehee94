import React from "react";
import "./Post.css";
import PropTypes from "prop-types";

function Post({ title, poster, summary }) {
    return (
        <div className="post">
            <img src={process.env.PUBLIC_URL + poster} alt="" />
            <div className="post_data">
                <h3 className="post_title">{title}</h3>
                <p className="post_summary">{summary}</p>
            </div>
        </div>
    );
}

Post.prototypes = {
    //대충 필요한 것을 적는 공간.
};

export default Post;
