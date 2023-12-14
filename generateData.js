const fs = require("fs");

const numberOfPosts = 200;
const fakePosts = {
  posts: [],
};

for (let i = 1; i <= numberOfPosts; i++) {
  fakePosts.posts.push({
    id: i,
    title: `Post ${i}`,
    price: Math.floor(Math.random() * 10000).toString(),
  });
}

const jsonContent = JSON.stringify(fakePosts, null, 2);

fs.writeFileSync("fakeData.json", jsonContent);

console.log("Fake data generated and saved to fakeData.json");
