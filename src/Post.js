import React from "react";
import "./Post.css";
import PropTypes from "prop-types";

function Post({ id, title, poster, summary }) {
    console.log(poster);
    return (
        <div class="post">
            <img src={poster} alt="" />
            <div class="post_data">
                <h3 class="post_title">{title}</h3>
                <p class="post_summary">{summary}</p>
            </div>
        </div>
    );
}

Post.prototypes = {
    //대충 필요한 것을 적는 공간.
};

export default Post;
