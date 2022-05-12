document.getElementById('add').addEventListener('click', addItem)

const frozen = document.createElement('p')


class Item {
    constructor(name){
        this._name = name
        this._bought = false
    }
    get name() {
        return this._name
    }
    get bought() {
        return this._bought
    }

    isBought(){
        this._bought = true
        return
    }
}

function addItem() {
    let choice = document.getElementById('categories')
    let dropDown = choice.options[choice.selectedIndex].value
    let input = document.querySelector('input').value
    if (dropDown === 'Frozen') {
        document.getElementById('Frozen').appendChild(frozen).innerText += input +"\n "
    }
}