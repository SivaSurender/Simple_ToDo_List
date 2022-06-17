const newItem = document.querySelector(".add");
const existingTodo = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generatedTemplate = (addedItem) =>{

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${addedItem}</span>
                <i class="far fa-trash-alt delete"></i>
                 </li>`;

    existingTodo.innerHTML += html;     
}


newItem.addEventListener("submit", (event) =>{
    event.preventDefault();
    // add is the name tag of add class from html, trim helps in trimming the additional space from the gathered string
    const addedItem = newItem.add.value.trim();

    if  (addedItem.length){
        generatedTemplate(addedItem);
        // reset method helps in clearing the item from the form after its ben added to the list
        newItem.reset();

    }
} );

// To delete the item once trash icon is clicked

existingTodo.addEventListener("click", (event) =>{

    // event is the default event when clicked in browser , classlist - contains looks for a particular keyword ie delet in html
    if (event.target.classList.contains("delete")){
        // parentelement looks for the target's parent class i.e ul whic is parent of i delete
        event.target.parentElement.remove();
    }
});

//To match and filter the items based on the input

//2.

const filterTodos = (term) =>{
    //convertig html collection to node list so that array operation can be performed

    Array.from(existingTodo.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add("filtered"));

    Array.from(existingTodo.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add("filtered"));

};




// 1. keyup event
search.addEventListener("keyup", () =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});