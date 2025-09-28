
document.getElementById('add-money-btn').addEventListener('click', function(event){

    event.preventDefault();

    const addMoney = getInputFieldById('enter-amount-add');
    const pinNumber = getInputFieldById('enter-pin-add');


    showModalById('add_money_modal');


    if(isNaN(addMoney)){
        alert('Failed to add money !')

        return;
    }

    if(pinNumber === 1234){
        
        const Balence = getTextFieldById('corrent-balence');
        const newBalence = Balence + addMoney ;

        document.getElementById('corrent-balence').innerText = newBalence;

        // transition items
        const p = document.createElement('p');
        p.classList.add('bg-green-200');
        p.innerText = `Added: ${addMoney} Tk. New balence: ${newBalence} Tk.`;

        document.getElementById('Transactions-container').appendChild(p);

    }
    
    else{
        alert('Worng Pin Number, submit the correct Pin Number !');
    }

    document.getElementById('enter-amount-add').value = '';
    document.getElementById('enter-pin-add').value = '';
})

//cash out style

document.getElementById('cash-out-btn').addEventListener('click', function(event){

    event.preventDefault();

    const cashMoney = getInputFieldById('enter-amount-cash');
    const pinCash = document.getElementById('enter-pin-cash').value; 
    const currentBalance = getTextFieldById('corrent-balence');

    if(pinCash !== '1234'){
        alert('Worng Pin Number, submit the correct Pin Number !');
        return;
    }
    
    if(cashMoney > currentBalance){
        alert('Failed to cash out money! Insufficient Balance.');
        
        document.getElementById('enter-amount-cash').value = '';
        
        return;
    }
    
    
    
    const newBalence = currentBalance - cashMoney; 
    
    
    document.getElementById('corrent-balence').innerText = newBalence;


    showModalById('cash_money_modal');

    const transactionsContainer = document.getElementById('Transactions-container');
    const div = document.createElement('div');
    div.classList.add('bg-red-200');
    div.innerHTML = `
        <p>Cash out: ${cashMoney} Tk. New Balence: ${newBalence} Tk.</p>
    `;

    if(transactionsContainer){
        transactionsContainer.appendChild(div);
    }

    document.getElementById('enter-amount-cash').value = '';
    document.getElementById('enter-pin-cash').value = '';
});


//get bonus style

document.getElementById('Get-Bonus-btn').addEventListener('click', function(event){

        event.preventDefault();

        const BonusGet = getInputFieldById('Enter-your-coupon');
        const bonusPrice = 2000;

        if(BonusGet === 1590){

            const Balence = getTextFieldById('corrent-balence');
            const newBalence = Balence + bonusPrice;

            document.getElementById('corrent-balence').innerText = newBalence;

            showModalById('coupon_money_modal');


            const p = document.createElement('p');
            p.classList.add('bg-orange-200')
            p.innerText = `Get Bonus: ${bonusPrice} Tk. New balence: ${newBalence} Tk.`;

            document.getElementById('Transactions-container').appendChild(p);
        }
        else{
            alert('Worng coupon code !')
        }
})
