let userId: (number | string | boolean);

userId = "101";
userId = 101;
userId = true;

function displayUserInfo(userId: string | number | boolean) {
    console.log(userId);
}
displayUserInfo("101");
displayUserInfo(101);