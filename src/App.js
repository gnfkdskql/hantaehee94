import React from "react";
import axios from "axios";
import Post from "./Post.js";
import "./App.css";
import HorizonLine from "./utils/HorizontallLine.js";
import { BrowserView, MobileView } from "react-device-detect";
import { Dropdown, DropdownButton } from "react-bootstrap";

const postList = [
    {
        id: 11,
        title: "아이패드 에어4 64gb 와이파이 모델 팝니다.",
        poster: "/img/11.PNG",
        summary:
            "https://m.bunjang.co.kr/products/158036107?utm_source=kakaotalk&utm_campaign=viral_kakaotalk&utm_medium=message",
        junggo: "https://cafe.naver.com/joonggonara/851775886",
        thunder: "https://m.bunjang.co.kr/products/158173006",
        carrot: "",
    },
    {
        id: 10,
        title: "버즈라이브 택포 9만원",
        poster: "/img/10.PNG",
        summary:
            "https://m.bunjang.co.kr/products/158036550?utm_source=kakaotalk&utm_campaign=viral_kakaotalk&utm_medium=message",
        junggo: "https://cafe.naver.com/joonggonara/851778199",
        thunder: "https://m.bunjang.co.kr/products/158173779",
        carrot: "",
    },
    {
        id: 9,
        title: "아이패드 프로 4세대 12.9 128기가 판매합니다",
        poster: "/img/111.PNG",
        summary: "https://cafe.naver.com/joonggonara/836077538",
        junggo: "https://cafe.naver.com/joonggonara/836077538",
        thunder: "",
        carrot: "",
    },
    {
        id: 8,
        title: "갤럭시 버즈 화이트 팝니다.",
        poster: "/img/222.PNG",
        summary: "https://cafe.naver.com/joonggonara/812930528",
        junggo: "https://cafe.naver.com/joonggonara/812930528",
        thunder: "",
        carrot: "",
    },
    {
        id: 7,
        title: "아이패드 프로 2세대 12.9 스마트 폴리오 키보드 판매합니다.(택포)",
        poster: "/img/333.PNG",
        summary: "https://cafe.naver.com/joonggonara/773619742",
        junggo: "https://cafe.naver.com/joonggonara/773619742",
        thunder: "",
        carrot: "",
    },
    {
        id: 6,
        title: "(미개봉)iPhone 아이폰 Xs 정품 가죽 폴리오 케이스 판매합니다.(직,택)",
        poster: "/img/444.PNG",
        summary: "https://cafe.naver.com/joonggonara/772190690",
        junggo: "https://cafe.naver.com/joonggonara/772190690",
        thunder: "",
        carrot: "",
    },
    {
        id: 5,
        title: "(미개봉) 에어팟 2세대 유선모델 팝니다(택포 12.5만)",
        poster: "/img/555.PNG",
        summary: "https://cafe.naver.com/joonggonara/827459778",
        junggo: "https://cafe.naver.com/joonggonara/827459778",
        thunder: "",
        carrot: "",
    },
    {
        id: 4,
        title: "PS4 스파이더맨 리미티드 에디션 양도합니다",
        poster: "/img/666.PNG",
        summary: "https://cafe.naver.com/joonggonara/509746091",
        junggo: "https://cafe.naver.com/joonggonara/509746091",
        thunder: "",
        carrot: "",
    },
    {
        id: 3,
        title: "컴퓨터부품 판매합니다.(가격인하) 직거래, 택배가능",
        poster: "/img/777.PNG",
        summary: "https://cafe.naver.com/joonggonara/375190549",
        junggo: "https://cafe.naver.com/joonggonara/375190549",
        thunder: "",
        carrot: "",
    },
    {
        id: 2,
        title: "에일린기타 레스풀타입, 팬더 프론트맨15G 팝니다!(급매!!!)",
        poster: "/img/888.PNG",
        summary: "https://cafe.naver.com/joonggonara/314176226",
        junggo: "https://cafe.naver.com/joonggonara/314176226",
        thunder: "",
        carrot: "",
    },
    {
        id: 1,
        title: "도서 판매글 2013년 2월 14일 12시 20분 수정 글입니다.",
        poster: "/img/empty.PNG",
        summary: "https://cafe.naver.com/joonggonara/149077498",
        junggo: "https://cafe.naver.com/joonggonara/149077498",
        thunder: "",
        carrot: "",
    },
];

const moreLink =
    "https://cafe.naver.com/joonggonara?iframe_url=/CafeMemberNetworkView.nhn%3Fm=view%26clubid=10050146%26memberid=hantaehee94#";

const landingLink = "https://studiotaea.imweb.me/";

class App extends React.Component {
    state = {
        landingLink: "",
        isLoading: true,
        posts: [],
        moreLink: "",
    };

    handleClick = () => {
        let data;

        axios
            .get("http://101.101.216.11:1337/tests")
            .then((Response) => {
                data = Response.data[0];
                const view = parseInt(data.test1) + 1;
                data.test1 = view.toString();
                // console.log(data);
                axios.put("http://101.101.216.11:1337/tests/3", data);
            })
            .catch((Error) => {
                console.log(Error);
            });

        alert("죄송합니다 사실 존재하지 않은 페이지였습니다.");
    };

    // getMovies = async () => {
    //     const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // };

    changingViewCnt = () => {
        let data;

        axios
            .get("/tests")
            .then((Response) => {
                data = Response.data[0];
                const view = parseInt(data.test1) + 1;
                data.test1 = view.toString();
                console.log(data);
                axios.put("/tests/3", data);
            })
            .catch((Error) => {
                console.log(Error);
            });
    };

    setMetaTags = ({
        title = "기본 타이틀",
        description = "기본 설명",
        imageUrl = "기본 사이트 이미지 경로",
    }) => {
        //set title
        https: document
            .querySelector('meta[property="og:title"]')
            .setAttribute("content", `${title}`);
        //set description
        document
            .querySelector('meta[property="og:description"]')
            .setAttribute("content", description);
        //set images
        document.querySelector('meta[property="og:image"]').setAttribute("content", imageUrl);
        //set url
        document
            .querySelector('meta[property="og:url"]')
            .setAttribute("content", window.location.href);
    };

    componentDidMount() {
        // this.getMovies();
        this.setState({ posts: postList });
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 100);
        this.setState({ moreLink: moreLink });
        this.setMetaTags({
            title: "중고거래신용보증협회",
            description: "믿을 수 있는 중고거래",
            imageUrl: process.env.PUBLIC_URL + "/img/title.PNG",
        });
        // this.changingViewCnt();
    }

    render() {
        const { isLoading, posts } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div>
                        <BrowserView>
                            <div className="topBar">
                                <h1 id="headline">중고거래신용보증협회</h1>
                                <div className="nav">
                                    <a href={landingLink} target="_blank" rel="noopener noreferrer">
                                        <button className="button">Login</button>
                                    </a>
                                    <a href={landingLink} target="_blank" rel="noopener noreferrer">
                                        <button className="button">Join</button>
                                    </a>
                                </div>
                            </div>

                            <div className="main_content">
                                <div className="left item"></div>
                                <div className="information">
                                    <div className="private">
                                        <HorizonLine />
                                        <h2 id="info">한태희</h2>
                                        <p id="phoneNum">010-6349-1413</p>
                                        <p id="private_in">정회원</p>
                                        <HorizonLine />
                                    </div>
                                    <div className="history">
                                        <p id="nickname">중고나라: melbourner</p>
                                        <p id="detail">
                                            방문: 1,696회
                                            <br />
                                            게시글: 76개
                                            <br />
                                            댓글: 272개
                                        </p>
                                        <p id="nickname">번개장터: hantaehee9</p>
                                        <p id="detail">
                                            후기: 0<br />
                                            상품: 2<br />
                                            팔로워: 0
                                        </p>
                                        <p id="nickname">당근마켓: 닉네임</p>

                                        <p id="detail">활동내역</p>
                                        <div className="last_underline">
                                            <HorizonLine />
                                        </div>
                                    </div>
                                </div>
                                <div className="item main_page">
                                    <div className="posts">
                                        {posts.map((post) => (
                                            <Post
                                                key={post.id}
                                                id={post.id}
                                                title={post.title}
                                                poster={post.poster}
                                                junggo={post.junggo}
                                                thunder={post.thunder}
                                                carrot={post.carrot}
                                            />
                                        ))}
                                    </div>
                                    <a href={moreLink} target="_blank" rel="noopener noreferrer">
                                        <button id="moreBtn">more</button>
                                    </a>
                                </div>
                                <div className="right item"></div>
                            </div>
                        </BrowserView>
                        <MobileView>
                            <div className="m__body">
                                <div className="m__topBar">
                                    <h1 id="m__h1">중고거래신용보증협회</h1>
                                    <div className="m__nav">
                                        <a
                                            href={landingLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="m__button">Login</button>
                                        </a>
                                        <a
                                            href={landingLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="m__button">Join</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="m__information">
                                    <div className="m__private">
                                        <img
                                            src={process.env.PUBLIC_URL + "/img/profile.png"}
                                            alt=""
                                        ></img>
                                        <div className="m__text">
                                            <p id="m__info">한태희</p>
                                            <p id="m__phoneNum">010-6349-1413</p>
                                        </div>
                                        <p id="m__private_in">정회원</p>
                                    </div>
                                    <div className="m__history">
                                        <div className="m__jungo m__platform">
                                            <div className="m__jungoTop">
                                                <p id="m__nickname">중고나라: melbourner</p>
                                            </div>
                                            <div className="m__jungoBottom">
                                                <div className="m__visit item">
                                                    <p id="m__bottomText">방문</p>
                                                    <p id="m__bottomNum">1,696</p>
                                                </div>
                                                <div className="m__post item">
                                                    <p id="m__bottomText">게시글</p>
                                                    <p id="m__bottomNum">76</p>
                                                </div>
                                                <div className="m__comment item">
                                                    <p id="m__bottomText">댓글</p>
                                                    <p id="m__bottomNum">272</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m__thunder m__platform">
                                            <div className="m__thunderTop">
                                                <p id="m__nickname">번개장터: hantaehee9</p>
                                            </div>
                                            <div className="m__thunderBottom">
                                                <div className="m__visit item">
                                                    <p id="m__bottomText">후기</p>
                                                    <p id="m__bottomNum">0</p>
                                                </div>
                                                <div className="m__post item">
                                                    <p id="m__bottomText">상품</p>
                                                    <p id="m__bottomNum">2</p>
                                                </div>
                                                <div className="m__comment item">
                                                    <p id="m__bottomText">팔로워</p>
                                                    <p id="m__bottomNum">0</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="m__carrot m__platform">
                                            <div className="m__carrotTop">
                                                <p id="m__nickname">당근마켓: 닉네임</p>
                                            </div>
                                            <div className="m__carrotBottom">
                                                <div className="m__visit item">
                                                    <p id="m__bottomText">후기</p>
                                                    <p id="m__bottomNum">0</p>
                                                </div>
                                                <div className="m__post item">
                                                    <p id="m__bottomText">팔로잉</p>
                                                    <p id="m__bottomNum">0</p>
                                                </div>
                                                <div className="m__comment item">
                                                    <p id="m__bottomText">팔로워</p>
                                                    <p id="m__bottomNum">0</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="m__last_underline"></div>
                                    </div>
                                </div>
                                <div className="m__item m__main_page">
                                    <div className="m__posts">
                                        {posts.map((post) => (
                                            <Post
                                                key={post.id}
                                                id={post.id}
                                                title={post.title}
                                                poster={post.poster}
                                                junggo={post.junggo}
                                                thunder={post.thunder}
                                                carrot={post.carrot}
                                            />
                                        ))}
                                    </div>
                                    <a href={moreLink} target="_blank" rel="noopener noreferrer">
                                        <button id="m__moreBtn">more</button>
                                    </a>
                                </div>
                            </div>
                        </MobileView>
                    </div>
                )}
            </section>
        );
    }
}

export default App;
