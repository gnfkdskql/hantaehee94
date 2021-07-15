import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div>
            <div className="footer_area">
                <div className="footer_left">
                    <p>택스트리</p>
                </div>
                <div className="footer_right">
                    <div className="item">
                        <p>
                            대표: 한태희 | 경기도 안산시 단원구
                            선부광장남로 17, 110동 601호(선부동, 안산
                            라프리모)
                        </p>
                        <p>
                            사업자 등록번호: 512-10-52183 |
                            010-6349-1413
                        </p>
                    </div>
                    <div className="item">
                        <p>이용약관 | 개인정보처리방침</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
