import { entries } from "./budgetModule";
import { saveData } from "./localStorage";
export function displayEntries (entries) {
  
  const table = document.querySelector('table');
  const newEntryBody = document.querySelector('.new-entry-body');
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  
  entries
  .sort((a, b) => {
    return b.date - a.date
  })
  .forEach((entry) => {
    // Create row for the tbody
    const row = document.createElement('tr');

    // Create td elements for the row
    const td1 = document.createElement('td');
    const inputDate = document.createElement('input');
    inputDate.classList.add('input', 'date');
    inputDate.setAttribute('type', 'date');
    inputDate.value = entry.date; //this needs to be there so that the browser knows to what to show for the inputDate 
    td1.appendChild(inputDate);

    const td2 = document.createElement('td');
    const inputDescription = document.createElement('input');
    inputDescription.classList.add('input', 'description');
    inputDescription.setAttribute('type', 'text');
    inputDescription.value = entry.description;
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
    selectType.value = entry.type;
    td3.appendChild(selectType);

    const td4 = document.createElement('td');
    const inputAmount = document.createElement('input');
    inputAmount.classList.add('input', 'amount');
    inputAmount.setAttribute('type', 'number');
    inputAmount.value = entry.amount;
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
    tbody.appendChild(row);

    table.insertBefore(tbody, newEntryBody);

    inputDate.addEventListener('change', (e) => {
      entry.date = inputDate.value;
      saveData('entries', entries);
      displayEntries(entries)
    })
    inputDescription.addEventListener('change', (e) => {
      entry.description = inputDescription.value;
      saveData('entries', entries);
      displayEntries(entries)
    })
    selectType.addEventListener('change', (e) => {
      entry.type = selectType.value;
      saveData('entries', entries);
      displayEntries(entries)
    })
    inputAmount.addEventListener('change', (e) => {
      entry.amount = inputAmount.value;
      saveData('entries', entries);
      displayEntries(entries)
    })

  deleteButton.addEventListener('click', (e) => {
    entries.splice(entries.indexOf(entry), 1);
    saveData('entries', entries);
    displayEntries(entries);
  })
  })

}
