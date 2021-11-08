 // this will show your password in alart.
 function showPwd()
{
let email;
email=document.getElementById("email").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
const user = user_records.filter((d)=>d.email===email);
console.log({user});


if ((email && email) != "") {
  if(user_records.some((v)=>{return v.email==email}))
  {
    alert("Your Password is : " + user[0]?.psw); 
  
  }
  else
  {
    alert('You Type a Worng E-mail');
  }
  
  }
}