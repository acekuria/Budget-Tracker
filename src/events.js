import { createEntry } from "./budgetModule";
import { displayEntry } from "./UI";
import { saveData } from "./localStorage";
import { getData } from "./localStorage";
import { addEntryToArray } from "./budgetModule";
import { editEntry } from "./budgetModule";
import { deleteEntry } from "./budgetModule";

export function addEntry () {
  const table = document.querySelector('table');
  const tbodyElements = table.querySelectorAll('tbody');
  const addEntryButton = document.querySelector('.add-entry');
  
  addEntryButton.addEventListener('click', (e) => {

    for (let i = 0; i < tbodyElements.length -1; i++) {
      tbodyElements[i].innerhtml = '';

      let date = document.querySelector('.date');
      let description = document.querySelector('.description');
      let type = document.querySelector('.type');
      let amount = document.querySelector('.amount');

      createEntry(date.value, description.value, type.value, amount.value);

      addEntryToArray(createEntry);

      saveData('entries', entries);

    }

  })
}