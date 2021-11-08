//fetch data

// fetch data in post form

var ApiKey = "6184b7894b8402020de4a539";

function postCall(){
const req = fetch('https://dummyapi.io/data/v1/post?limit=10', {    method: 'GET',    headers: { 

           'app-id': "6184b7894b8402020de4a539",    }});


req.then(function(response) {   
     console.log(response);   
      return response.json();}).then(function(data) {
    console.log(data);

    Posts = document.getElementById("User-post");
    let out="";
    data.data.forEach( user=>{
        out+=` <div class="post-container" id="User-post">
        <div class="post-row">
            <div class="user-profile">
                <img src="${user.owner.picture}">
                <div>
                    <p>${user.owner.firstName}</p>
                    <span>${user.publishDate}</span>
                </div>
            </div>
            <a href="#"><i class="fas fa-ellipsis-v"></i></a>

        </div>
        
        <p class="post-text">${user.text}</a>
        </p>
        <img src="${user.image}" class="post-img">
        <div class="post-row">
            <div class="activity-icons">
                <div><img src="assets/img/like-blue.png" alt="">${user.likes}</div>
                <div><img src="assets/img/comments.png" alt=""></div>
                <div><img src="assets/img/share.png" alt="">20</div>
            </div>
            <div class="post-profile-icon">
                <img src="${user.owner.picture}" alt=""> <i class="fas fa-caret-down"></i>

            </div>
        </div>
        <div class="mb-3 mt-3">

         <input type="text" class="form-control border-light" id="exampleFormControlInput1" placeholder="comments">
                            
         </div>

    </div>
        `

    });
    Posts.innerHTML = out;

});
}
postCall()
