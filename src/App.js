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
        summary: "설명란?",
    },
    {
        id: 2,
        title: "갤럭시 버즈 화이트 팝니다.",
        poster: "/img/222.PNG",
        summary: "설명란",
    },
    {
        id: 3,
        title: "아이패드 프로 2세대 12.9 스마트 폴리오 키보드 판매합니다.(택포)",
        poster: "/img/333.PNG",
        summary: "설명란",
    },
    {
        id: 4,
        title: "아이패드 프로 4세대 12.9 128기가 판매합니다",
        poster: "/img/111.PNG",
        summary: "설명란?",
    },
    {
        id: 5,
        title: "갤럭시 버즈 화이트 팝니다.",
        poster: "/img/222.PNG",
        summary: "설명란",
    },
    {
        id: 6,
        title: "아이패드 프로 2세대 12.9 스마트 폴리오 키보드 판매합니다.(택포)",
        poster: "/img/333.PNG",
        summary: "설명란",
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
                            <h1></h1>
                            <div className="nav">
                                <button className="button">Overview</button>
                                <button className="button">HelpCenter</button>
                                <button className="button">Login</button>
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
                                    <h2 id="info">협회 아이디</h2>
                                    <p id="private_in">정회원</p>
                                    <HorizonLine />
                                </div>
                                <div className="history">
                                    <p id="nickname">중고나라: 닉네임</p>
                                    <p>활동내역</p>
                                    <p id="nickname">당근마켓: 닉네임</p>
                                    <p>활동내역</p>
                                    <p id="nickname">번개장터: 닉네임</p>
                                    <p>활동내역</p>
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
