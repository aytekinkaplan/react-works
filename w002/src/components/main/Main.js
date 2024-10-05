import React from "react";
import "./Main.css";
import Tweet from "../card/Tweet";

const Main = () => {
  const tweets = [
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
    {
      username: "Jane Smith",
      handle: "janesmith",
      content:
        "Just finished reading 'The Midnight Library' by Matt Haig. What a thought-provoking book! Has anyone else read it? I'd love to discuss! 📚 #BookRecommendation",
      date: new Date("2023-10-05T10:15:00"),
      likes: 78,
      retweets: 23,
      replies: 12,
      isLiked: true,
      isRetweeted: false,
    },
    {
      username: "Tech Enthusiast",
      handle: "techenthusiast",
      content:
        "Breaking: Apple announces its new line of MacBooks with revolutionary AI capabilities. The future of computing is here! 🖥️ #AppleEvent #NewMacBook",
      date: new Date("2023-10-05T11:30:00"),
      imageUrl: "https://source.unsplash.com/random/800x600?macbook",
      likes: 1024,
      retweets: 512,
      replies: 128,
      isLiked: false,
      isRetweeted: true,
    },
    {
      username: "Travel Bug",
      handle: "travelbug",
      content:
        "Sunrise at Machu Picchu. No words can describe this breathtaking view. If it's not on your bucket list, add it now! 🌄 #MachuPicchu #TravelGoals",
      date: new Date("2023-10-05T12:45:00"),
      imageUrl: "https://source.unsplash.com/random/800x600?machupicchu",
      likes: 2048,
      retweets: 1024,
      replies: 256,
      isLiked: true,
      isRetweeted: true,
    },
    {
      username: "Foodie Fanatic",
      handle: "foodiefan",
      content:
        "Made homemade pizza for the first time and it turned out amazing! Here's the recipe for those who asked. Enjoy! 🍕 #HomemadePizza #CookingAdventures",
      date: new Date("2023-10-05T14:00:00"),
      likes: 89,
      retweets: 34,
      replies: 21,
      isLiked: false,
      isRetweeted: false,
    },
  ];

  return (
    <div className="main">
      <header className="main-header">
        <h2>Home</h2>
      </header>
      <div className="tweet-list">
        {tweets.map((tweet, index) => (
          <Tweet
            key={index}
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
            className="featured-tweet"
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
