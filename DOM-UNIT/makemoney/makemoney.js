(() => {
    const amountInput = document.getElementById("amount");
    const coinType = document.getElementById("coinType");
    const moneyButton = document.getElementById("moneyButton");
    const coinContainer = document.getElementById("coinContainer")
    console.log(amountInput);
    console.log(coinType);
    console.log(moneyButton);

    function makeMoney(event) {
        event.preventDefault();

        const amountInputValue = +amountInput.value

        for (let i = 0; i < amountInputValue; i++) {
            const newCoin = document.createElement('div');
            const newCoinP = document.createElement('p');
            newCoinP.innerText = coinType.value
            newCoin.append(newCoinP); //could add an if in here
            //if (coinType.value === 'penny') {
            //     newCoin.classList.add('penny') //add .penny in css
            // } else
            newCoin.addEventListener('click', (event) => {
                event.target.remove();
                if (event.target.classList.contains("coin")) {
                    event.target.remove()
                } else {
                    event.target.parentNode.remove();
                }
            });
            newCoin.classList.add("coin")
            newCoin.classList.add(coinType.value);
            coinContainer.append(newCoin)
        }

    }

    moneyButton.addEventListener('click', makeMoney);
})();