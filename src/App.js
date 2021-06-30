import React from "react";
import axios from "axios";
import Post from "./Post.js";
import "./App.css";
import HorizonLine from "./utils/HorizontallLine.js";

const postList = [
    {
        id: 1,
        title: "아이패드 프로 4세대 12.9 128기가 판매합니다",
        poster: "/img/111.PNG",
        summary: "https://cafe.naver.com/joonggonara/836077538",
    },
    {
        id: 2,
        title: "갤럭시 버즈 화이트 팝니다.",
        poster: "/img/222.PNG",
        summary: "https://cafe.naver.com/joonggonara/812930528",
    },
    {
        id: 3,
        title: "아이패드 프로 2세대 12.9 스마트 폴리오 키보드 판매합니다.(택포)",
        poster: "/img/333.PNG",
        summary: "https://cafe.naver.com/joonggonara/773619742",
    },
    {
        id: 4,
        title: "(미개봉)iPhone 아이폰 Xs 정품 가죽 폴리오 케이스 판매합니다.(직,택)",
        poster: "/img/444.PNG",
        summary: "https://cafe.naver.com/joonggonara/772190690",
    },
    {
        id: 5,
        title: "(미개봉) 에어팟 2세대 유선모델 팝니다(택포 12.5만)",
        poster: "/img/555.PNG",
        summary: "https://cafe.naver.com/joonggonara/827459778",
    },
    {
        id: 6,
        title: "PS4 스파이더맨 리미티드 에디션 양도합니다",
        poster: "/img/666.PNG",
        summary: "https://cafe.naver.com/joonggonara/509746091",
    },
];

class App extends React.Component {
    state = {
        isLoading: true,
        posts: [],
    };

    handleClick = () => {
        let data;

        axios
            .get("http://101.101.216.11:1337/tests")
            .then((Response) => {
                data = Response.data[0];
                const view = parseInt(data.test1) + 1;
                data.test1 = view.toString();
                console.log(data);
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

    componentDidMount() {
        // this.getMovies();
        this.setState({ posts: postList });
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 100);
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
                        <div className="topBar">
                            <h1>중고거래신용보증협회</h1>
                            <div className="nav">
                                <button className="button" onClick={this.handleClick}>
                                    Login
                                </button>
                                <button className="button" onClick={this.handleClick}>
                                    Signup
                                </button>
                            </div>
                        </div>

                        <div className="main_content">
                            <div className="left item"></div>
                            <div className="information">
                                <div className="private">
                                    <HorizonLine />
                                    <h2 id="info">한태희</h2>
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
                                    <p id="nickname">당근마켓: 닉네임</p>
                                    <p id="detail">활동내역</p>
                                    <p id="nickname">번개장터: 닉네임</p>
                                    <p id="detail">활동내역</p>
                                    <div className="last_underline">
                                        <HorizonLine />
                                    </div>
                                </div>
                            </div>
                            <div className="posts item">
                                {posts.map((post) => (
                                    <Post
                                        key={post.id}
                                        id={post.id}
                                        title={post.title}
                                        poster={post.poster}
                                        summary={post.summary}
                                    />
                                ))}
                            </div>
                            <div className="right item"></div>
                        </div>
                    </div>
                )}
            </section>
        );
    }
}

export default App;
