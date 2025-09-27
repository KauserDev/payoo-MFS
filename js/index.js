
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const phonNumber = document.getElementById('enter-phon').value;
    const pinNumber = document.getElementById('enter-pin').value;

    if(phonNumber === '015' && pinNumber === '1234'){
        console.log('Your Login sucsses');

        window.location.href = '/home.html';
    }
    else{
        alert('Wormg Phon Number and Pin Number, Submit With Correct Number & Pin !');
    }
})