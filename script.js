
const rulesBtn = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".btn-close");
const modalRules = document.querySelector(".modal");


    rulesBtn.addEventListener("click", () => {
        modalRules.classList.toggle ("modal-shown")
    } );


   
    closeBtn.addEventListener('click', () => {
        modalRules.classList.toggle("modal-shown")
    });

