(() => {
    const numbers = document.getElementById('numbers');
    const letters = document.getElementById('letters');
    const menuButton = document.querySelector('dropbtn');
    //numbers.remove();

    // numbers.addEventListener('click', (event) => {
    //     event.preventDefault();
    // }

    function showLetters() {
        const theNumbers = document.getElementById('theNumbers');
        const theLetters = document.getElementById('theLetters');
        theLetters.style.display = 'block';
        theNumbers.style.display = 'none';
    }

    function showNumbers() {
        const theNumbers = document.getElementById('theNumbers');
        const theLetters = document.getElementById('theLetters');
        theNumbers.style.display = 'block';
        theLetters.style.display = 'none';
    }




})();