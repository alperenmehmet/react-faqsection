const questions = [
  {
    id: 1,
    que: "How are stories ranked?",
    ans: "The basic algorithm divides points by a power of the time since a story was submitted. Comments in threads are ranked the same way.Other factors affecting rank include user flags, anti-abuse software, software which demotes overheated discussions, account or site weighting, and moderator action.",
  },
  {
    id: 2,
    que: "How is a user's karma calculated?",
    ans: "Roughly, the number of upvotes on their posts minus the number of downvotes. These don't match up exactly. Some votes are dropped by anti-abuse software.",
  },
  {
    id: 3,
    que: "Why don't I see down arrows?",
    ans: "There are no down arrows on stories. They appear on comments after users reach a certain karma threshold, but never on direct replies.",
  },
  {
    id: 4,
    que: "How do I make a link in a text submission?",
    ans: "You can't. This is to prevent people from submitting a link with their comments in a privileged position at the top of the page. If you want to submit a link with comments, just submit it, then add a regular comment.",
  },
  {
    id: 5,
    que: "What does [flagged] mean?",
    ans: "It means that users flagged a post as breaking the guidelines or otherwise not belonging on Hacker News.Moderators sometimes also add [flagged] (though not usually on submissions), and sometimes turn flags off when they are unfair.",
  },
  {
    id: 6,
    que: "How do I flag a comment?",
    ans: "Click on its timestamp to go to its page, then click the 'flag' link at the top. There's a small karma threshold before flag links appear.",
  },
];

export default questions;
