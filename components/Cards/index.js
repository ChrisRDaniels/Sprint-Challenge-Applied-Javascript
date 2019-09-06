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

const container = document.querySelector('.card');

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
    console.log(response.data.articles.javascript)
    response.data.articles.javascript.forEach((item) =>{
        const getCard = cardCreator(item)
        container.appendChild(getCard);
    })

    
})
.catch(error => {
    error
})

function cardCreator(data) {
    const newCard = document.createElement('div');
    card.classList.add('newCard')
    
    const headline = document.createElement('div');
    headline.classList.add('headline');
    
    const author = document.createElement('div');
    author.classList.add('author');

    const image = document.createElement('div');
    image.classList.add('image-container');
    image.src = `${authorPhoto}`;
    author.appendChild(image);

    const span = document.createElement('span');
    span.classList.add(`${authorName}`);
    card.appendChild(span);

    // appends

    container.appendChild(newCard);
}