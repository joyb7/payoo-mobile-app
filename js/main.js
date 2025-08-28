const validPin = 1234

// add money btn
document.getElementById("add-money-btn").addEventListener("click", function(event) {
    event.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = parseInt(document.getElementById("pin-number").value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    console.log(amount , availableBalance)

    if(accountNumber.length < 11) {
        alert("Please enter a valid 11-digit account number.")
        return;
    }
    if(pin !== validPin) {
        alert("Invalid pin number.")
        return;
    }

    const totalNewBalance = availableBalance + amount
    document.getElementById("available-balance").innerText = totalNewBalance
})

// cashout money feature

document.getElementById("withdraw-btn").addEventListener("click", function(event) {
    event.preventDefault()
    const agentNumber = document.getElementById("agent-number").value
    const amount = parseInt(document.getElementById("withdraw-amount").value)
    const pin = parseInt(document.getElementById("withdraw-pin").value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if(agentNumber.length < 11) {
        alert("Please enter a valid 11-digit agent number.")
        return;
    }
    if(pin !== validPin) {
        alert("Invalid pin number.")
        return;
    }

    if(amount > availableBalance) {
        alert("Insufficient balance.")
        return;
    }

    const totalNewBalance = availableBalance - amount
    document.getElementById("available-balance").innerText = totalNewBalance
})

// toggling feature
document.getElementById("add-button").addEventListener("click", function() {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener("click", function() {
    document.getElementById("cash-out-parent").style.display = "block"
    document.getElementById("add-money-parent").style.display = "none"
})