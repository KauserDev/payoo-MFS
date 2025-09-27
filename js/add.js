
document.getElementById('add-money-btn').addEventListener('click', function(event){

    event.preventDefault();

    const addMoney = getInputFieldById('enter-amount-add');
    const pinNumber = getInputFieldById('enter-pin-add');


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
})

//cash out style

document.getElementById('cash-out-btn').addEventListener('click', function(event){

    event.preventDefault();

    const cashMoney = getInputFieldById('enter-amount-cash');
    const pinCash = getInputFieldById('enter-pin-cash');


    if(isNaN(cashMoney)){
        alert('Failed to cash out money !');
        return;
    }

    if(pinCash === 1234){
        

        const Balence = getTextFieldById('corrent-balence');
        const newBalence = Balence - cashMoney;

        document.getElementById('corrent-balence').innerText = newBalence;


        // trasition items
        const div = document.createElement('div');
        div.classList.add('bg-red-200');
        div.innerHTML = `
            <p>Cash out: ${cashMoney} Tk. New Balence: ${newBalence} Tk.</p>


        `

        document.getElementById('Transactions-container').appendChild(div);

    }
    else{
        alert('Worng Pin Number, submit the correct Pin Number !');
    }
})


//get bonus style

document.getElementById('Get-Bonus-btn').addEventListener('click', function(event){

        event.preventDefault();

        const BonusGet = getInputFieldById('Enter-your-coupon');
        const bonusPrice = 2000;

        if(BonusGet === 1590){

            const Balence = getTextFieldById('corrent-balence');
            const newBalence = Balence + bonusPrice;

            document.getElementById('corrent-balence').innerText = newBalence;


            const p = document.createElement('p');
            p.classList.add('bg-orange-200')
            p.innerText = `Get Bonus: ${bonusPrice} Tk. New balence: ${newBalence} Tk.`;

            document.getElementById('Transactions-container').appendChild(p);
        }
        else{
            alert('Worng coupon code !')
        }
})
