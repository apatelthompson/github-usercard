/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/apatelthompson
*/

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

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "brockfalfas",
  "apatelthompson"
];

followersArray.forEach(elem => {
  axios
    .get(`https://api.github.com/users/${elem}`)
    .then(response => {
      console.log("response", response.data);
      cards.appendChild(createUserCard(response.data));
    })
    .catch(error => {
      console.log(
        "The gitub api is currently down, please come back later.",
        error
      );
    });
});

const cards = document.querySelector(".cards");

// axios
//   .get(`https://api.github.com/users/apatelthompson`)
//   .then(response => {
//     console.log("response", response.data);
//     cards.appendChild(createUserCard(response.data));
//   })
//   .catch(error => {
//     console.log(
//       "The gitub api is currently down, please come back later.",
//       error
//     );
//   });

function createUserCard(users) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileUrl = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  img.src = users.avatar_url;
  name.textContent = "Name: " + users.name;
  userName.textContent = users.login;
  location.textContent = "Location: " + users.location;
  profile.textContent = "Profile: ";
  profileUrl.textContent = users.url;
  profileUrl.href = users.url;
  followers.textContent = "Followers: " + users.followers;
  following.textContent = "Following: " + users.following;
  bio.textContent = "Bio: " + users.bio;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(profileUrl);

  return card;
}
