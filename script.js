console.log('it works');

// code your solution in here

// Access the form element but it's unneccessary

const myForm = document.querySelector('form');

// Add an id attribute in the form element

myForm.setAttribute('id', "form_body");

// Add an onsubmit attribute in div form group
const myTextAreaAttr = document.querySelector('textarea');
myTextAreaAttr.setAttribute('name', "value");

const newPost = () => {
    let parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', 'post-list')

    let newDiv = document.createElement('div');
    newDiv.classList.add("card");
    newDiv.classList.add("some-space");

    let childOfNewDiv = document.createElement('div');
    childOfNewDiv.classList.add("card-body");

    // Add a new Post Title

    let newHeading = document.createElement('h5');
    newHeading.classList.add("card-title");
    newHeading.textContent =  document.querySelector('#new-post-title').value;

    // Add a new Post Content
    let newParagraph = document.createElement('p');
    newParagraph.classList.add("card-text");
    newParagraph.textContent =  document.querySelector('#new-post-content').value;

    //Checkbox buttons

    // let firstSpan = createElement('span');
    // firstSpan.classList.add('badge');
    // firstSpan.classList.add('badge-light');

    // let secondSpan = createElement('span');
    // secondSpan.classList.add('badge');
    // secondSpan.classList.add('badge-light');

    // let thirdSpan = createElement('span');
    // thirdSpan.classList.add('badge');
    // thirdSpan.classList.add('badge-light');

    // AppendChild all of them

    childOfNewDiv.appendChild(newHeading);
    childOfNewDiv.appendChild(newParagraph);
    newDiv.appendChild(childOfNewDiv);  
    return newDiv;
  }


//Function for event listener

const addNewPost = document.querySelector('#submit-form');

addNewPost.addEventListener("click", ($event) => {
const postListDiv = document.querySelector('#post-list');
    postListDiv.appendChild(newPost());
    $event.preventDefault();
  });

