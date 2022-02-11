// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the input field value
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);
    // console.log(depositAmount);

    if( depositAmount > 0 ){
    // get the deposit total 
    const depositTotal = document.getElementById('deposit-total');
    const prevDepositAmount = parseFloat(depositTotal.innerText);
    depositTotal.innerText = depositAmount + prevDepositAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = balanceAmount + depositAmount;

    };

    depositInput.value = '';
});


// handle withdraw button event
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get the input field value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
    // console.log(withdrawAmount);

    if ( withdrawAmount > 0 ){
    // get the withdraw total and update 
    const withdrawTotal = document.getElementById('withdraw-total');
    const prevWithdrawAmount = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = withdrawAmount + prevWithdrawAmount;
    
    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = balanceAmount - withdrawAmount;
    };
    withdrawInput.value = '';
});