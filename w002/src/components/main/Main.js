import React, { useState, useEffect } from "react";
import "./Main.css";
import Tweet from "../card/Tweet";

const Main = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // API'den veri çekmek için bir fetch işlemi eklenebilir
    const fetchedTweets = [
      {
        username: "John Doe",
        handle: "johndoe",
        content:
          "Just had an amazing coffee at the new café downtown! ☕️ Highly recommend it to all coffee lovers out there. #CoffeeLover #NewCafeInTown",
        date: new Date("2023-10-05T09:24:00"),
        imageUrl: "https://source.unsplash.com/random/800x600?coffee",
        likes: 42,
        retweets: 15,
        replies: 7,
        isLiked: false,
        isRetweeted: false,
      },
      // Diğer tweetler...
    ];

    setTweets(fetchedTweets);
  }, []);

  return (
    <div className="main">
      <header className="main-header">
        <h2>Home</h2>
      </header>
      <div className="tweet-list">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.handle} // Benzersiz bir key olarak handle kullanılıyor
            username={tweet.username}
            handle={tweet.handle}
            content={tweet.content}
            date={tweet.date}
            imageUrl={tweet.imageUrl}
            likes={tweet.likes}
            retweets={tweet.retweets}
            replies={tweet.replies}
            onTweetClick={() =>
              console.log(`Tweet by ${tweet.username} clicked`)
            }
            onLike={(isLiked) =>
              console.log(
                `Like status for ${tweet.username}'s tweet: ${isLiked}`
              )
            }
            onRetweet={(isRetweeted) =>
              console.log(
                `Retweet status for ${tweet.username}'s tweet: ${isRetweeted}`
              )
            }
            onReply={() =>
              console.log(`Reply clicked for ${tweet.username}'s tweet`)
            }
            onShare={() =>
              console.log(`Share clicked for ${tweet.username}'s tweet`)
            }
            isLiked={tweet.isLiked}
            isRetweeted={tweet.isRetweeted}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
