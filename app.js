function getProfiles(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','http://192.168.100.9:5000/suspect',true);

    xhr.onload = function(){
  if(this.status === 200){
      
      data = JSON.parse(this.responseText);
      data.forEach(function(user){
        output += `
        
        <div class="card mb-3">
          <img class="card-img-top" src="${user.image}.jpg"  onclick='deletePost()' alt="Card image cap">

          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">${user.message}</p>
            <p class="card-text">${user.id}</p>
            <button class="btn btn-primary id="deletePost" onclick='deletePost(${user.id})' ">Delete</button>
            <button class="btn btn-primary id="deletePost" onclick='updatePost(${user.id})' ">update</button>
          </div>
        </div>

        `;
      }
    );
      document.getElementById('output').innerHTML = output;
  }
}

xhr.send();
}

function deletePost(sus_id){
    const obj = document.getElementById('deletePost');
    obj.parentElement.parentElement.remove();
var url = "http://192.168.100.9:5000/suspect";
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url+`/${sus_id}`, true);
xhr.onload = function () {
	var users = JSON.parse(JSON.stringify(xhr.responseText));
	if (xhr.readyState == 4 && xhr.status == "200") {
        console.log('users');
        // const obj = document.getElementById('deletePost');
        // obj.parentElement.parentElement.remove();
	} else {
		console.log(users);
    }
    
}
xhr.send(null);

}
document.querySelector('body').addEventListener('onload',getProfiles());