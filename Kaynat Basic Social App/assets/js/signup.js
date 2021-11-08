// signup data store in localstorage
function saveData()
{
let fname,lname,email,psw,signupdate,agent;
fname=document.getElementById("fname").value;
lname=document.getElementById("lname").value;
email=document.getElementById("email").value;
psw=document.getElementById("psw").value;
signupdate = new Date();
agent = navigator.userAgent;

// create  array
let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

if ((fname && lname && email && psw) != "") {
  if(user_records.some((v)=>{return v.email==email}))
  {
    alert("duplicate data");
  }
  else
  {
    user_records.push({
    "fname":fname,
    "lname":lname,
    "email":email,
    "psw":psw,
    "signupdate" : signupdate
  })
  localStorage.setItem("users",JSON.stringify(user_records));
   alert("Congrats Yours account is successfully created");
   window.location.href="login.html";
  }
  } 
}

