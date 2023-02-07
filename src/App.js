import React from "react";
import "./App.css";
import Home from "./components/HomeComponent";
import SearchSide from "./components/SearchComponent";
import SideMenu from "./components/SideMenuComponent";
import {
  KZ_IMG_PATH,
  NFACTORIAL_IMG_PATH,
  PROFILE_IMG_PATH,
} from "./components/HomeComponent/images";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      content: "",
      tweets: [
        {
          id: 0,
          authorName: "Free KZ today",
          authorUsername: "@kz",
          img: KZ_IMG_PATH,
          content:
            "UPDATE: Alibek says he has not considered becoming finance minister again",
          replies: 200,
          retweets: 1000,
          likes: 500,
          topic: "politics",
        },
        {
          id: 1,
          authorName: "nFactorial",
          authorUsername: "@nfactorial",
          img: NFACTORIAL_IMG_PATH,
          content: "Data analytics course starts today!",
          replies: 10000000,
          retweets: 1000000,
          likes: 500,
          topic: "education",
        },
        {
          id: 2,
          authorName: "nFactorial",
          authorUsername: "@nfactorial",
          img: NFACTORIAL_IMG_PATH,
          content: "Black friday! Успей купить курсы сегодня!",
          replies: 10000000,
          retweets: 1000000,
          likes: 500,
          topic: "education",
        },
      ],
      filteredTweets: [
        {
          id: 0,
          authorName: "Free KZ today",
          authorUsername: "@kz",
          img: KZ_IMG_PATH,
          content:
            "UPDATE: Alibek says he has not considered becoming finance minister again",
          replies: 200,
          retweets: 1000,
          likes: 500,
          topic: "politics",
        },
        {
          id: 1,
          authorName: "nFactorial",
          authorUsername: "@nfactorial",
          img: NFACTORIAL_IMG_PATH,
          content: "Data analytics course starts today!",
          replies: 10000000,
          retweets: 1000000,
          likes: 500,
          topic: "education",
        },
        {
          id: 2,
          authorName: "nFactorial",
          authorUsername: "@nfactorial",
          img: NFACTORIAL_IMG_PATH,
          content: "Black friday! Успей купить курсы сегодня!",
          replies: 10000000,
          retweets: 1000000,
          likes: 500,
          topic: "education",
        },
      ],
      searching: false,
    };
  }

  onChangeTextInput = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  addToTweets = () => {
    const newTweet = {
      id: this.state.tweets.length,
      authorName: "Aldiyar Kultumanov",
      authorUsername: "@aldiyar_k",
      img: PROFILE_IMG_PATH,
      content: this.state.content,
      replies: 0,
      retweets: 0,
      likes: 0,
      topic: "blabla",
    };

    this.setState({
      tweets: [newTweet, ...this.state.tweets],
      content: "",
    });
  };

  deleteTweet = (id) => {
    // id = 0
    this.setState({
      tweets: this.state.tweets.filter((item) => item.id !== id),
    });
  };

  filterTweetsByTopic = (topic) => {
    console.log("filter", topic);
    this.setState({
      filteredTweets: this.state.tweets.filter((item) => item.topic === topic),
    });
  };

  filterSearch = (event) => {
    if (event.target.value === "") {
      this.setState({
        searching: false,
        filteredTweets: this.state.tweets,
      });
    } else {
      this.setState({
        searching: true,
        filteredTweets: this.state.tweets.filter((item) =>
          item.content.includes(event.target.value)
        ),
      });
      console.log(this.state.filteredTweets);
    }
  };

  render() {
    const { tweets, content, filteredTweets, searching } = this.state;
    return (
      <div className="App d-flex flex-row">
        <SideMenu />
        <div className="vertical-divider"></div>
        <Home
          tweets={tweets}
          content={content}
          onChangeTextInput={this.onChangeTextInput}
          deleteTweet={this.deleteTweet}
          addToTweets={this.addToTweets}
          searching={searching}
          filteredTweets={filteredTweets}
        />
        <div className="vertical-divider"></div>
        <SearchSide filterSearch={this.filterSearch} />
      </div>
    );
  }
}

export default App;
