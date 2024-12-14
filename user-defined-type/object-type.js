var users;
users = [];
var user1;
user1 = { userName: "jerin", userId: 1 };
users.push(user1);
var user2;
user2 = { userName: "islam", userId: 2 };
users.push(user2);
for (var key in users) {
    console.log(users[key]["userName"]);
}
