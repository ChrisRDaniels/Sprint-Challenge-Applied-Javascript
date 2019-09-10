// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const NewHeader = document.querySelector('.header-container')


function Header() {
    const date = document.createElement('span');
    const header = document.createElement('div');
    const headText = document.createElement('h1');
    const temp = document.createElement('span');
    
    
    // classlist
    // header.classList.add('header-container');
    date.classList.add('date');
    header.classList.add('header');
    temp.classList.add('temp');

    // data
    headText.textContent = 'Lambda Times';
    date.textContent = `SEPTEMBER 6, 2019`;
    temp.textContent = `98°`;
    

    // appends
    header.appendChild(date);
    header.appendChild(temp);
    header.appendChild(headText);
    // header.appendchild(header)
    
    NewHeader.appendChild(header);
}
Header();