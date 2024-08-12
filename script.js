
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
    const gameDiv = document.querySelector(".hands");
    const resultDiv = document.querySelector(".results");
    const pickResults = document.querySelectorAll(".result-picked");

    choiceButtons.forEach(button => {
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
    function displayResults(results) {
        pickResults.forEach((resultDiv, idx) => {
            setTimeout(() => {
                resultDiv.innerHTML = `
                <button class="choice-btn" >
                <div class="choice ${results[idx].name}">
                <img src="/rock-paper-scissors/src/images/icon-${results[idx].name}.svg"} alt="${results[idx].name}" />
                </div>
                </button>
                `
            }, idx * 1000);
        });
        gameDiv.classList.toggle("hidden")
        resultDiv.classList.toggle("hidden")
    }


        

