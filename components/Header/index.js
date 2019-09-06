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

function Header() {
    const header = document.createElement('div');
    const date = document.createElement('h1');
    const temp = document.createElement('span')
    
    // classlist
    header.classList.add('header-container')

    // data
    header.textContent = `Lambda Times`;
    date.textContent = `SEPTEMBER 6, 2019`;
    temp.textContent = `98°`;
    
    // appends
    header.appendChild(date);
    header.appendChild(temp);

    return header;
}
