const {friendRecommendations} = require("./friendRecommendations");


const network = {
    Alice: ["Bob", "Charlie"],
    Bob: ["Alice", "David"],
    Charlie: ["Alice", "Eve"],
    David: ["Bob"],
    Eve: ["Charlie"]
};

console.log(friendRecommendations(network, "Alice"));
// 출력: ["David", "Eve"]