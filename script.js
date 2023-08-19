const add_btn = document.querySelector(".add");

const remove_btn = document.querySelector(".remove");

const container = document.querySelector(".container");


add_btn.addEventListener("click",()=>{

    const note = document.createElement('div');
    
    note.classList.add("note");

    note.innerHTML = '<div class="bar"><button class="edit">✏️</button><button class="remove">❌</button></div><div class="main"><textarea name="" id="textarea" cols="30" rows="10"></textarea></div>';

    container.append(note);

});

remove_btn.addEventListener("click",()=>{
    
})