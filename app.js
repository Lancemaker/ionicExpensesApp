const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-ammount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expenseList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () =>{
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click', ()=>{
    const enteredReason = reasonInput.value;
    const enteredAmmount = amountInput.value;
    if (enteredAmmount.trim().length <= 0 ||
        enteredAmmount <=0 ||
        enteredAmmount.trim().length <=0){
            return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason+ ': $' + enteredAmmount; 
    expenseList.appendChild(newItem);

    totalExpenses += +enteredAmmount;

    totalExpensesOutput.textContent = totalExpenses; 
    clear();
});

cancelBtn.addEventListener('click', clear);