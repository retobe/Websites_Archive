const User = require("Schema.js")

function Submit() {
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var respond = document.getElementById("result")
  if (!email || !password) {
    return respond.innerHTML = "Invaild Email or Password!"
  }
  respond.innerHTML = "Success!"
  const user = new User({
    email: email,
    password: password
  });
  
  user.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('User saved successfully!');
    }
  });
  console.log(user)
  console.log("Clicked!");
  console.log(password, email);
}
