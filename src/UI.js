import * as myModule from './budgetModule';

export function displayEntry () {

  const table = document.querySelector('table');
  const newEntryBody = document.querySelector('.new-entry-body');

  const tbodyEntries = document.createElement('tbody');
tbodyEntries.classList.add('entries');

// Create row for the tbody
const row = document.createElement('tr');

// Create td elements for the row
const td1 = document.createElement('td');
const inputDate = document.createElement('input');
inputDate.classList.add('input', 'date');
inputDate.setAttribute('type', 'date');
td1.appendChild(inputDate);

const td2 = document.createElement('td');
const inputDescription = document.createElement('input');
inputDescription.classList.add('input', 'description');
inputDescription.setAttribute('type', 'text');
td2.appendChild(inputDescription);

const td3 = document.createElement('td');
const selectType = document.createElement('select');
selectType.classList.add('input', 'type');
selectType.setAttribute('name', 'type');
selectType.setAttribute('id', '');
const optionIncome = document.createElement('option');
optionIncome.value = 'income';
optionIncome.textContent = 'Income';
const optionExpense = document.createElement('option');
optionExpense.value = 'expense';
optionExpense.textContent = 'Expense';
selectType.appendChild(optionIncome);
selectType.appendChild(optionExpense);
td3.appendChild(selectType);

const td4 = document.createElement('td');
const inputAmount = document.createElement('input');
inputAmount.classList.add('input', 'amount');
inputAmount.setAttribute('type', 'number');
td4.appendChild(inputAmount);

const td5 = document.createElement('td');
const deleteButton = document.createElement('button');
deleteButton.classList.add('input', 'delete');
deleteButton.textContent = 'X';
td5.appendChild(deleteButton);

// Append td elements to the row
row.appendChild(td1);
row.appendChild(td2);
row.appendChild(td3);
row.appendChild(td4);
row.appendChild(td5);

// Append the row to the tbody
tbodyEntries.appendChild(row);

table.insertBefore(tbodyEntries, newEntryBody);
}

export function updateUI (entries) {
  entries.forEach((entry) => {
    displayEntry
  })
}