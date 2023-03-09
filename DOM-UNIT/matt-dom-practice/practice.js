(function () {

    // const q1 = document.getElementById('question-1');

    // q1.style.color = 'blue';

    // const q2 = document.querySelector('.question-2');

    // q2.style.color = 'red';

    // const q3s = document.querySelectorAll('.question-3');

    // for (q3 of q3s) {
    //     q3.style.color = 'orange';
    // }

    // const question4 = document.getElementById('question-4');
    // console.log(question4)
    // question4.parentNode.style.backgroundColor = 'purple';




    // const button = document.getElementById('alert-button');

    // button.addEventListener('click', () => {
    //     alert('Click!!!');
    // });

    // //  add-tv-show-button

    // const button2 = document.getElementById('add-tv-show-button');

    // button2.addEventListener('click', () => {
    //     const show = document.createElement('li');
    //     show.innerText = 'I Think You Should Leave';
    //     const ul = document.querySelector('ul');
    //     ul.append(show);

    // });



    // const question7 = document.getElementById('question-7-remove-button')

    // question7.addEventListener('click', () => {
    //     const pTag = document.getElementById('comment-7')
    //     pTag.remove;

    // });


    // //Do 11-16

    // const eleven = document.getElementById('question-11');
    // console.log(eleven.innerText);
    // // for (i = 0; i < eleven.length; i++) {
    // //     console.log(eleven[i].innerText);
    // // }


    // //question-12-name input ID
    // const button36 = document.getElementById('say-hello')
    // button36.addEventListener("click", () => {
    //     const inputName = document.getElementById('question-12-name');
    //     const output = document.getElementById('message');
    //     output.innerText = `Hello, ${inputName.value}`;
    // })



    // const button45 = document.getElementById('add-user');

    // button45.addEventListener("click", () => {
    //     const newUser = document.getElementById('question-13-name');
    //     const newOne = document.getElementById('users');
    //     const newLi = document.createElement('li');
    //     newLi.innerText = newUser.value;
    //     newOne.append(newLi);
    // })

    const showButton = document.getElementById("show-button");
    showButton.addEventListener("click", () => {
        const secretText = document.getElementById("secret-text")
        secretText.style.display = "block";
    })

    const hideButton = document.getElementById("hide-button");
    hideButton.addEventListener("click", () => {
        const secret = document.getElementById("secret-text")
        secret.style.display = "none";
    })

    const addButton = document.getElementById('add-calc-button')

    addButton.addEventListener("click", () => {
        const input1 = document.getElementById('question-15-x');
        const input2 = document.getElementById('question-15-y');
        const answer = document.getElementById('question-15-answer')
        answer.innerText = +input1.value + +input2.value

    })


    const calcButton = document.getElementById('calc-button')

    calcButton.addEventListener("click", () => {
        const input1 = document.getElementById('question-16-x');
        const input2 = document.getElementById('question-16-y');
        const operator = document.getElementById('operator').value;
        if (operator === "+") {
            result = +input1 + +input2;
        } else if (operator === "-") {
            result = +input1 - +input2;
        } else if (operator === "*") {
            result = +input1 * +input2;
        } else {
            result = +input1 / +input2;
        }
        const answerTwo = document.getElementById('question-16-answer')
        answerTwo.innerText = result;

    })

    //if else

}());