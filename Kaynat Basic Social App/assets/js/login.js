//sign-up data store in localstorage
let name=localStorage.getItem('fname')?localStorage.getItem('fname'):''
        console.log(name);
        if(name!='')
        {
          window.location.href="index.html";
        }
  
  //create a function 
function saveData()
{
let email,psw;
email=document.getElementById("email").value;
psw=document.getElementById("psw").value;

// create a array
let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

if ((email && psw) != "") {
  if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
{
  alert("Login Pass");
  // filter checks the function test.
  let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
 localStorage.setItem('fname',current_user.fname);
 localStorage.setItem('lname',current_user.lname);
 localStorage.setItem('email',current_user.email);
 localStorage.setItem('psw',current_user.psw);
 localStorage.setItem('signupdate',current_user.signupdate);
  window.location.href="index.html"
}
else
{
  alert('Please Enter Correct Email or password');
}
}
}