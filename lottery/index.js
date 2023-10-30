let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard1() {
    let randomNumber = Math.floor( Math.random()*19 ) + 1
    if (randomNumber > 19) {
        return 19
    // } else if (randomNumber === 1) {
    //     return 11
    } else {
        return randomNumber
    }
}

function getRandomCard2() {
    let randomNumber = Math.floor( Math.random()*19 ) + 1
    if (randomNumber > 19) {
        return 19
    // } else if (randomNumber === 1) {
        //     return 11
        elseif (getRandomCard2 === getRandomCard1) {
            alert("double number");
        }
    } else {
        return randomNumber
    }
}

function getRandomCard3() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function getRandomCard4() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function getRandomCard5() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function getRandomCard6() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard1()
    let secondCard = getRandomCard2()
    let thirdCard = getRandomCard3()
    let fourthCard = getRandomCard4()
    let fifthCard = getRandomCard5()
    let powerball = getRandomCard6()
    cards = [firstCard, secondCard, thirdCard, fourthCard, fifthCard, "-", powerball]
    // sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
