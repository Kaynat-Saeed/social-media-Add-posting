// logout and locate at login page
let name=localStorage.getItem('fname')?localStorage.getItem('fname'):''
        console.log(name);
        if(name=='')
        {
          alert('U need to login first');
          window.location.href="login.html";
        }
        function Logout()
        {
          localStorage.removeItem('fname');
          localStorage.removeItem('lname');
          localStorage.removeItem('email');
          localStorage.removeItem('psw');
          localStorage.removeItem('signupdate');
          window.location.href="login.html";
        }