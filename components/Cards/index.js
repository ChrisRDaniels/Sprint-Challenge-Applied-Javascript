// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const NewCard = document.querySelector('.card');

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
    console.log(response.data)

    NewCard.appendChild(cardCreator(response.data))
})
.catch(error => {
    error
})

function cardCreator(data) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const images = document.createElement('img');
    const imgurl = document.createElement('a');
    const author = document.createElement('span');

    card.classList.add('card');
    card
}