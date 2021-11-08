//fetch users

var ApiKey = "6184b7894b8402020de4a539";



function friendCall(){
const req = fetch('https://dummyapi.io/data/v1/user?limit=10', {    method: 'GET',    headers: { 

           'app-id': "6184b7894b8402020de4a539",    }});

req.then(function(response) {   
     console.log(response);   
      return response.json();}).then(function(data) {

    console.log(data);

    friend = document.getElementById("friends");
    let fr="";
    data.data.forEach( F=>{
        fr+=`
       
       <div onclick="fetchSpecificUserData('${F.id}')" id="friends">
       <a href="#"><img src="${F.picture}" data-bs-toggle="modal" data-bs-target="#exampleModal">${F.firstName} ${F.lastName}</a>
    </div>         `

    });
    friend.innerHTML = fr;

});
}
friendCall()



function fetchSpecificUserData(id) {

console.log(id);
  setTimeout(() => {
      const req1 = fetch(`https://dummyapi.io/data/v1/user/${id}/post?limit=10`, {
          method: 'GET',
          headers: {
              'app-id': ApiKey,
          }
      })
      req1.then(function(response) {
          return response.json();
      }).then(function(data) {
          const userData = data.data;
          console.log(userData);
          renderUserPosts(userData);
      })


      // fetchUserProfile(id);

  }, 2000);
}





// ********************* This function will render user data in main contnaier *********************
function renderUserPosts(arr) {

  const userposts = document.querySelector(".userposts");


  arr.forEach(function(element) {


      userposts.insertAdjacentHTML("afterbegin",

          `

          <div class="post-container" id="User-post">
          <div class="post-row">
              <div class="user-profile">
                  <img src="${element.owner.picture}" alt="">
                  <div>
                  <p>${element.owner.firstName}</p>
                  <span>${element.publishDate}</span>
              </div>
          </div>
          <a href="#"><i class="fa fa-ellipsis-v"></i></a>
          
      </div>
      
      <p class="post-text">${element.text}</a>
      </p>
      <img src="${element.image}" class="post-img">
      <div class="post-row">
          <div class="activity-icons">
              <div><img src="assets/img/like-blue.png" alt="">${element.likes}</div>
              <div><img src="assets/img/comments.png" alt="">45</div>
              <div><img src="assets/img/share.png" alt="">20</div>
          </div>
          <div class="post-profile-icon">
              <img src="${element.owner.picture}" alt=""> <i class="fas fa-caret-down"></i>
              
          </div>
          
      </div>
      <div class="mb-3 mt-3" id="cmt">
          
          <input type="text" class="form-control border-light" id="exampleFormControlInput1" placeholder="Comments">
          <p>${element.message}</p>
          </div>
          
      </div>


      `

      )

  });

}