const advice_texts = document.querySelector("#advice_texts")
const advice_number = document.querySelector("#advice_number");
const advice_text = document.querySelector("#advice_text");
const generate_advice_el = document.querySelector("#generate_advice");

//get advice from api.adviceslip.com
function getAdvice()
{
    return fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => data);
}

//update elements functions
function update_advice_text(text)
{
    advice_text.innerText = text;
}

function update_advice_number(number)
{
    advice_number.innerText = `ADVICE #${number}`;
}

function initialize()
{
    generate_advice();
    advice_number.style.animationPlayState = "Running"
    advice_texts.style.animationPlayState = "Running"
}

initialize()

function generate_advice()
{
    getAdvice()
        .then(({ slip }) => {
            update_advice_number(slip.id);
            update_advice_text(slip.advice);
        })
}

generate_advice_el.onclick = () => generate_advice();