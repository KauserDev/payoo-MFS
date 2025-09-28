
function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;

}

function getTextFieldById(id){
    const inputText = document.getElementById(id).innerText;
    const TextNumber = parseFloat(inputText);

    return TextNumber;
    
}


function showSelectById(id){
    document.getElementById('add-hidden').classList.add('hidden');
    document.getElementById('cash-out-hidden').classList.add('hidden');
    document.getElementById('Transactions').classList.add('hidden');
    document.getElementById('Get-Bonus').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


function showModalById(id) {
    const modal = document.getElementById(id);
    
    if (modal && typeof modal.showModal === 'function') {
        modal.showModal();
    }
}