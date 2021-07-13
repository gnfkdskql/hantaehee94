import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div>
            <div className="footer_area">
                <div className="footer_left">
                    <p>택스트리(아이콘?)</p>
                </div>
                <div className="footer_right">
                    <div className="item">
                        <p>
                            대표: 한태희 | 경기도 안산시 단원구
                            선부광장남로 17, 110동 601호(선부동, 안산
                            라프리모) | 010-6349-1413
                        </p>
                        <p>
                            사업자 등록번호: 512-10-52183 통신판매업
                            신고번호: 111111 | 직업정보제공사업신고:
                            ㅁㅁㄴㅇㅁㄴㅇ
                        </p>
                        <p>Copyright by~~~~~~</p>
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
