const JsUser = {
    name: "Dhananjay",
    "full name": "Dhananjay Singh",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "dhannjay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email="dhannjay@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "dhannjay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());