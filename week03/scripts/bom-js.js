const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

button.addEventListener('click', () => {
    if (input.value != '') {
        // call displayList with the input.value argument
        displayList(input.value);

        // push the input.value into the chaptersArray,
        chaptersArray.push(input.value);

        // update the localStorage with the new array by calling a function named setChapterList
        setChapterList();

        // set the input.value to nothing,
        input.value = '';
        // set the focus back to the input.
        input.focus();

    }

})

// send the focus to the input element
input.focus();

// change the input value to nothing or the empty string to clean up the interface for the user
input.value = '';

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

function displayList(item) {
    // create a li element & create a delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // populate the li elements textContent with the input value
    li.textContent = item;

    // populate the button textContent with a ❌
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button

    // append the li element with the delete button
    li.append(deleteButton);
    // append the li element to the unordered list in your HTML
    list.append(li);

    // add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus();
    })

}

function setChapterList() {
    localStorage.setItem('MyFavBoMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('MyFavBoMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

