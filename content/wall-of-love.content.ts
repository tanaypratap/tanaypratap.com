const wallOfLoveContent: WallOfLoveContent = {
  tweets: [
    {
      id: "1561591563846762496",
      tags: ["letters"],
    },

    {
      id: "1598355790406254592",
      tags: ["levelZero", "feedbackReview", "bestTweets"],
    },
    {
      id: "1601899497516601344",
      tags: ["bestTweets"],
    },
    {
      id: "1531612440684658688",
      tags: ["bestTweets"],
    },
    {
      id: "1563731071929237505",
      tags: ["bestTweets"],
    },
    {
      id: "1600816854158954496",
      tags: ["bestTweets"],
    },
  ],
};

type WallOfLoveContent = {
  tweets: {
    id: string;
    tags: string[];
  }[];
};

export default wallOfLoveContent;
