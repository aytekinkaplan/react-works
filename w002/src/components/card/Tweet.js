import React from "react";
import "./Tweet.css";

const formatDate = (date) => {
  const options = { month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

const Tweet = ({
  username,
  handle,
  content,
  date,
  imageUrl,
  likes,
  retweets,
  replies,
  onTweetClick,
  onLike,
  onRetweet,
  onReply,
  onShare,
  isLiked,
  isRetweeted,
}) => {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="tweet" onClick={onTweetClick}>
      <img
        className="tweet-avatar"
        src={imageUrl || `https://via.placeholder.com/48`} // Boş gelirse yedek avatar kullanır
        alt={username}
      />
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="tweet-username">{username}</span>
          <span className="tweet-handle">@{handle}</span>
          <span className="tweet-date">{formatDate(date)}</span>
        </div>
        <p className="tweet-text">{content}</p>
        {imageUrl && (
          <div className="tweet-image">
            <img src={imageUrl} alt="Tweet content" />
          </div>
        )}
        <div className="tweet-actions">
          <button
            className="tweet-action reply"
            onClick={(e) => {
              handleClick(e);
              onReply();
            }}
          >
            Reply <span>{replies}</span>
          </button>
          <button
            className={`tweet-action retweet ${isRetweeted ? "active" : ""}`}
            onClick={(e) => {
              handleClick(e);
              onRetweet();
            }}
          >
            Retweet <span>{retweets}</span>
          </button>
          <button
            className={`tweet-action like ${isLiked ? "active" : ""}`}
            onClick={(e) => {
              handleClick(e);
              onLike();
            }}
          >
            Like <span>{likes}</span>
          </button>
          <button
            className="tweet-action share"
            onClick={(e) => {
              handleClick(e);
              onShare();
            }}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

// Burada dışa aktarıyoruz
export default Tweet;
