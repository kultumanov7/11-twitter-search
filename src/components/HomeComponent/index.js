import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH } from "./images";
import SearchSide from "../SearchComponent";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      tweets,
      content,
      onChangeTextInput,
      addToTweets,
      deleteTweet,
      searching,
      filteredTweets,
    } = this.props;
    return (
      <div className="w-50 mt-3">
        <h5 className="mx-3">Home</h5>
        <NewTweet
          content={content}
          onChangeTextInput={onChangeTextInput}
          onTweet={addToTweets}
        />
        {/* <div>
                    <button onClick={()=>this.filterTweetsByTopic('politics')}>{`Politics ${this.state.count}`}</button>
                    <button onClick={()=>this.filterTweetsByTopic('education')}>Education</button>
                    <button onClick={()=>this.filterTweetsByTopic('blabla')}>Blabla</button>
                </div>  */}
        {searching ? (
          <TweetsList tweets={filteredTweets} deleteTweet={deleteTweet} />
        ) : (
          <TweetsList tweets={tweets} deleteTweet={deleteTweet} />
        )}
      </div>
    );
  }
}

export default Home;
