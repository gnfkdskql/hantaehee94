import React, { useState } from "react";
import "./Post.css";
import { BrowserView, MobileView } from "react-device-detect";
import PropTypes from "prop-types";
import {
    Dropdown,
    DropdownButton,
    Button,
    FormControl,
} from "react-bootstrap";
import HorizonLine from "./utils/HorizontallLine";
require("bootstrap/dist/css/bootstrap.css");

function Post({ title, poster, junggo, thunder, carrot }) {
    // 드랍다운버튼을 만들기 위해 bootstrap사용
    const CustomToggle = React.forwardRef(
        ({ children, onClick }, ref) => (
            <a
                className="btn_link"
                href=""
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
            >
                {children}
            </a>
        )
    );

    const CustomMenu = React.forwardRef(
        (
            {
                children,
                style,
                className,
                "aria-labelledby": labeledBy,
            },
            ref
        ) => {
            const [value, setValue] = useState("");

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    {/* <FormControl
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    /> */}
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value ||
                                child.props.children
                                    .toLowerCase()
                                    .startsWith(value)
                        )}
                    </ul>
                </div>
            );
        }
    );
    // 드랍다운버튼을 만들기 위해 bootstrap사용

    // console.log(junggo);
    return (
        <div>
            <BrowserView>
                <div className="post">
                    <img
                        src={process.env.PUBLIC_URL + poster}
                        alt=""
                    />
                    <div className="post_data">
                        <h3 className="post_title">{title}</h3>
                        {/* <p className="post_summary">{summary}</p> */}
                    </div>
                    <HorizonLine />
                    <Dropdown>
                        <Dropdown.Toggle
                            as={CustomToggle}
                            id="dropdown-custom-components"
                        >
                            Link
                        </Dropdown.Toggle>

                        <Dropdown.Menu as={CustomMenu}>
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
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </BrowserView>
            <MobileView>
                <div className="m__post">
                    <div className="m__make_rect">
                        <img
                            src={process.env.PUBLIC_URL + poster}
                            alt=""
                        />
                    </div>
                    <div className="m__post_data">
                        <h3 className="m__post_title">{title}</h3>

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
