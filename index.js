const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;
  console.log("this button was clicked");
  const data = {};
  data.email = email;
  data.password = password;
  console.log(data);
});
