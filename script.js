const mail = document.getElementById("mail");
const password = document.getElementById("password");
const passsize = document.getElementById("passinput");
function submit() {
  const mail = document.getElementById("mail");
  mail.textContent = mail.value;
  const pass = document.getElementById("password");
  pass.textContent = pass.value;
  const check = document.getElementById("check");
  const passsize = document.getElementById("passinput");

  // form.append(para);
  // para.style.color = "green";
  if(!check.checked){
    alert("please check once more and click the remember")
    return;
  }
  if (!mail.value.trim() || !password.value.trim()) {
    alert("please check mail and password");
    return;
  } else {
    alert(`${mail.value}`);
    setTimeout(() => {
      alert("login details submitted");
    }, 500);
    const login = document.createElement("span");
    login.textContent = "login Successful";
    login.setAttribute("id", "spans");
    passsize.append(pass, login);
    setTimeout(() => login.remove(), 3000);
  }
  mail.value = "";
  pass.value = "";
}
