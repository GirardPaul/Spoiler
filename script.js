let button = document.querySelector('button');
let message = document.querySelector('p');

let show = true;

message.style.display = "none";


button.addEventListener('click', () => {
    if(show){
        message.style.display = "block";
        button.textContent = "Cacher";
        show = false;
    }else{
        message.style.display = "none";
        button.textContent = "Afficher";
        show = true;
    }
})
