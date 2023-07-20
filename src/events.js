import { createEntry } from "./budgetModule";
import { displayEntries} from "./UI";
import { saveData } from "./localStorage";
import { getData } from "./localStorage";
import { addEntryToArray } from "./budgetModule";
import { editEntry } from "./budgetModule";
import { deleteEntry } from "./budgetModule";
import { entries } from "./budgetModule";


  const table = document.querySelector('table');
  const tbodyElements = table.querySelectorAll('tbody');
  const entryButton = document.querySelector('.new-entry');

  entryButton.addEventListener('click', (e) => {
      let date = tbodyElements[i].querySelector('.date');
      let description = tbodyElements[i].querySelector('.description');
      let type = tbodyElements[i].querySelector('.type');
      let amount = tbodyElements[i].querySelector('.amount');

      if () {
// stop same name entries
      }
      createEntry(date.value, description.value, type.value, amount.value);
      
      addEntryToArray(createEntry);

      saveData('entries', entries);

      displayEntry(date.value, description.value, type.value, amount.value);

  })

