import React from "react";
import "./Post.css";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import PropTypes from "prop-types";
import M from "materialize-css";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
require("bootstrap/dist/css/bootstrap.css");

function Post({ title, poster, summary, junggo, thunder, carrot }) {
    console.log(junggo);
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

                    <DropdownButton
                        variant="secondary"
                        alignRight
                        className="postDropdown"
                        id="dropdown-basic-button"
                        title="링크"
                        size="nor"
                    >
                        {junggo === "" ? (
                            <Dropdown.Item disabled eventKey="1">
                                중고나라
                            </Dropdown.Item>
                        ) : (
                            <Dropdown.Item
                                href={junggo}
                                target="_blank"
                                rel="noopener noreferrer"
                                eventKey="1"
                            >
                                중고나라
                            </Dropdown.Item>
                        )}
                        {thunder === "" ? (
                            <Dropdown.Item disabled eventKey="2">
                                번개장터
                            </Dropdown.Item>
                        ) : (
                            <Dropdown.Item
                                href={thunder}
                                target="_blank"
                                rel="noopener noreferrer"
                                eventKey="2"
                            >
                                번개장터
                            </Dropdown.Item>
                        )}

                        {carrot === "" ? (
                            <Dropdown.Item disabled eventKey="3">
                                당근마켓
                            </Dropdown.Item>
                        ) : (
                            <Dropdown.Item
                                href={carrot}
                                target="_blank"
                                rel="noopener noreferrer"
                                eventKey="3"
                            >
                                당근마켓
                            </Dropdown.Item>
                        )}
                    </DropdownButton>
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
                    <DropdownButton
                        variant="secondary"
                        alignRight
                        className="postDropdown"
                        id="dropdown-basic-button"
                        title="링크"
                    >
                        {junggo === "" ? (
                            <Dropdown.Item disabled eventKey="1">
                                중고나라
                            </Dropdown.Item>
                        ) : (
                            <Dropdown.Item
                                href={junggo}
                                target="_blank"
                                rel="noopener noreferrer"
                                eventKey="1"
                            >
                                중고나라
                            </Dropdown.Item>
                        )}
                        {thunder === "" ? (
                            <Dropdown.Item disabled eventKey="2">
                                번개장터
                            </Dropdown.Item>
                        ) : (
                            <Dropdown.Item
                                href={thunder}
                                target="_blank"
                                rel="noopener noreferrer"
                                eventKey="2"
                            >
                                번개장터
                            </Dropdown.Item>
                        )}

                        {carrot === "" ? (
                            <Dropdown.Item disabled eventKey="3">
                                당근마켓
                            </Dropdown.Item>
                        ) : (
                            <Dropdown.Item
                                href={carrot}
                                target="_blank"
                                rel="noopener noreferrer"
                                eventKey="3"
                            >
                                당근마켓
                            </Dropdown.Item>
                        )}
                    </DropdownButton>
                </div>
            </MobileView>
        </div>
    );
}

Post.prototypes = {
    //대충 필요한 것을 적는 공간.
};

export default Post;
