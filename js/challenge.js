const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const counter = document.getElementById("counter");

let count = 0;
let intervalID;


document.addEventListener("DOMContentLoaded", (event) => {
    intervalID = setInterval(function () {
        count += 1;
        counter.textContent = count;
    }, 1000);

    plus.addEventListener("click", function () {
        count ++;
        counter.textContent = count;
    })

    minus.addEventListener("click", function () {
        count --;
        counter.textContent = count;
    })

    heart.addEventListener("click", function () {
        if ("click") {
            count ++;
            counter.textContent = count;
        }
        
    })

    pause.addEventListener("click", function () {
        clearInterval(intervalID);
    });

    const button = document.getElementsByTagName("button")

    let buttonArray = [];

    for (let i = 0; i < button.length; i ++) {
        if (button[i].id = "pause"){
            buttonArray.push(button[i])
        };
    };

    const resume = document.getElementsByClassName("resume")

    function disableButton(button) {
        button.setAttribute("disabled", true)
    };

    pause.addEventListener("click", function() {
        clearInterval(intervalID);
        buttonArray.forEach(button=> disableButton(button));
    });

    function replacePause(){
        
        pause.textContent = "resume"
    };

    pause.addEventListener("click", function(){
        clearInterval(intervalID);
        buttonArray.forEach(button=> disableButton(button));
        replacePause()
    });

    function enableButton(resume){
        resume.removeAttribute("disabled", true)
    }

    pause.addEventListener("click", function(){
        if (pause)
        {
            intervalID = setInterval(count, 1000);
            replacePause()

            buttonArray.forEach(button=>
                enableButton(button)
            )
        }
    })
  
});