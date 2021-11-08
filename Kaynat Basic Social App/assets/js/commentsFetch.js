//fetch comments:

var ApiKey = "6184b7894b8402020de4a539";



function cmt(){
const req = fetch('https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10', {    method: 'GET',    headers: { 

           'app-id': "6184b7894b8402020de4a539",    }});


req.then(function(response) {   
     console.log(response);   
      return response.json();}).then(function(data) {
    console.log(data);

    comment = document.getElementById("cmt");
    let cm="";
    data.data.forEach( C=>{
        cm+=`
        <div class="mb-3 mt-3" id="cmt">

            <input type="text" class="form-control border-light" id="exampleFormControlInput1" placeholder=${C.message}>
                 
        </div>
         `

    });
    comment.innerHTML = cm;

});
}
cmt()
