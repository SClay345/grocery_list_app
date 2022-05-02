document.getElementById('add').addEventListener('click', addItem)

const frozen = document.createElement('p')


function addItem() {
    let choice = document.getElementById('categories')
    let dropDown = choice.options[choice.selectedIndex].value
    let input = document.querySelector('input').value
    if (dropDown === 'Frozen') {
        document.getElementById('Frozen').appendChild(frozen).innerText = input
    }
}