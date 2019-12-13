/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios 
  .get('https://api.github.com/users/ShawnBatson')
  .then((res) => {
    console.log(res);
    const followCard = (res.data);
    createCard(followCard);

    followersArray.forEach((input) => {
      for (i = 0; i < followersArray.length; i++);
      const followerCard = (input.res.data);
      createCard(followerCard);

 
      })

    })

  .catch((err) => {
    console.log("you hit an error", err);
  })




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['avpimblesr', 'tanveersaleem786', "mtrew2015", "williamschwindt", "scratchglory", "HeyMichelle"];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const cards = document.querySelector('.cards');



function createCard(obj) {
    const card = document.createElement ('div');
    const img = document.createElement('img');
    const cardInfo = document.createElement('div');
    const title = document.createElement('h3');
    const nameUser = document.createElement('p');
    const loc = document.createElement('p');
    const prof = document.createElement('p');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');


cards.appendChild(img);
cards.appendChild(cardInfo);
cardInfo.appendChild(title);
cardInfo.appendChild(nameUser);
cardInfo.appendChild(loc);
cardInfo.appendChild(prof);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
cardInfo.appendChild(bio);

cards.classList.add('card');
cardInfo.classList.add('card-info');
title.classList.add('name');
nameUser.classList.add('username');

img.src = obj.avatar_url;
title.textContent = obj.name;
nameUser.textContent = obj.login;
loc.textContent =  "Location: " + obj.location;
prof.textContent = "Profile: " + obj.html_url;
followers.textContent = "Followers: " + obj.followers;
following.textContent = "Following: " + obj.following;
bio.textContent = "Bio: " + obj.bio;

return cards

}




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
