function main() {


    //#1

    const grow = document.getElementById('grow-me');
    grow.classList.add('big');


    //#2

    const shrink = document.getElementById('shrink-me');
    shrink.classList.remove('big');

    //#3

    const lis = document.querySelectorAll('li');

    for (i = 0; i < lis.length; i++) {
        console.log(lis[i].innerText);
    }

    // for (let li of lis){
    //console.log(li.innerText)
    //}

    //#4

    const linkUp = document.querySelector('.link'); //class
    linkUp.setAttribute('href', 'https://www.example.com');
    linkUp.innerText = 'somewhere';

    //#5

    document.getElementById("hide-me").style.display = "none";


    //#6
    document.getElementById("show-me").style.display = "block";

    //#7

    const inputName = document.getElementById('name').value;
    const h1 = document.querySelector('h1');
    h1.innerText = `Welcome ${inputName}!`;

};