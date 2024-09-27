const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  // jika active classnya ada, maka akan dihapus, jika tidak ada maka akan ditambah
  navbarLinks.classList.toggle("active");
});

function submit() {
  regisForm = document.getElementById("regisForm");
  username = document.getElementById("username");
  email = document.getElementById("email");
  phone = document.getElementById("phone");
  error = document.getElementById("error");
  preferences = document.getElementById("pre");

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const preferencesValue = preferences.value.trim();

  
  if (username.value.length < 5) {
    // msg error
    error.innerHTML = "*User name must be at least 5 characters";
    // pop up error
    alert("User must be at least 5 charracters");
  }else if (emailValue === '') {
    error.innerHTML = "*Email is required";
    alert("Email is required");
  }
   else if (!email.value.endsWith("@gmail.com")) {
    error.innerHTML = "*Email must end with '@gmail.com'";
    alert("Email must end with @gmail.com");
  }else if(phoneValue ===''){
    error.innerHTML = "*Phone number is required"
    alert("Phone number is required");
  }
  else if(preferencesValue !== "ramen" && preferencesValue !=="dry ramen"){
    error.innerHTML = "*Input the correct preferences (ramen / dry ramen)";
    alert("Input the correct preferences (ramen / dry ramen)");
  }
  else if (!agree.checked) {
    error.innerHTML = "*You must agree to receive newsletter";
    alert("You must agree to receive newsletter");
  }
  else {
    // kosongin msg errror
    error.innerHTML = "";
    // pop up success
    alert("Succesfull!");
    // kirim data
    regisForm.submit();
  }
}
