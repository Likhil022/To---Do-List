'use strict'

const todo = document.querySelector('.todoApp');
const input = document.querySelector("input");
const addbutton = document.querySelector(".addbutton");
const list = document.querySelector(".list");
const ulist = document.querySelector(".ulist");
const delt = document.querySelector(".delete");
const image = document.querySelector("img") 

addbutton.addEventListener('click',function(){
    const content = input.value;
    if(!content)return;
    const html = `<li class="items">
                    <span>
                        <img src="./assets/unchecked.png" alt="checkbox">
                        <text>${content}</text>
                    </span>
                    <button class="delete">X</button>
                   </li>`;
    ulist.insertAdjacentHTML('beforeend',html);
    input.value="";
    input.focus();
})
ulist.addEventListener('click', function(e) {
    const listItem = e.target.closest('li.items'); 
    if (listItem) {
        const image = listItem.querySelector('img');
        listItem.classList.toggle('checked');
        if (listItem.classList.contains('checked')) {
            image.setAttribute('src', './assets/checked.png');
        } else {
            image.setAttribute('src', './assets/unchecked.png');
        }
    }
    if (e.target.classList.contains('delete')) {
        const listItem = e.target.closest('li.items');
        if (listItem) {
            listItem.remove();
        }
    }
});





//animations
// Example JavaScript to dynamically change the placeholder text
const placeholderText = "Enter items . . ."; // Text to be typed out
const typingSpeed = 200; // Typing speed in milliseconds

function typePlaceholder(text, element, speed) {
    let index = 0;
    element.placeholder = '';

    function type() {
        if (index < text.length) {
            element.placeholder += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

typePlaceholder(placeholderText, input, typingSpeed);

