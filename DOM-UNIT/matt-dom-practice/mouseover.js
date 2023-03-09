(function () {
    const box = document.querySelector('.box')
    box.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "blue";
    })

    box.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = "red";
    })


}());
