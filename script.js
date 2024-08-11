
setTimeout(()=> {
    document.body.classList.remove("preload")
}, 500);


const rulesBtn = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".btn-close");
const modalRules = document.querySelector(".modal");


    rulesBtn.addEventListener("click", () => {
        modalRules.classList.toggle ("modal-shown")
    } );


   
    closeBtn.addEventListener('click', () => {
        modalRules.classList.toggle("modal-shown")
    });


    const CHOICES = [
        {
            name:"paper",
            beats: "rock"
        },
        {
            name:"scissors",
            beats: "paper"
        },
        {
            name:"rock",
            beats: "scissors"
        }
    ];
    const choiceButtons = document.querySelectorAll(".choice-btn");
    const gameDiv = document.querySelector(".game");
    const resultDiv = document.querySelector(".results");
    const pickResults = document.querySelectorAll(".results-result");

    choiceButtons.forEach( button => {
        button.addEventListener( "click", () => {
            const choiceName = button.dataset.choice;
            const choice = CHOICES.find(choice => choice.name === choiceName);
            choose(choice);

        })
    })

    function choose(choice) {
        const aichoice = aiChoose();
        displayResults([choice, aichoice]);
    }
    function aiChoose() {
        const rand = Math.floor(Math.random() * CHOICES.length);
        return CHOICES[rand];
    }


        

