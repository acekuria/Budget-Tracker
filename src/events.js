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
  export const entryButton = document.querySelector('.new-entry');

  entryButton.addEventListener('click', (e) => {

    const newEntry =  createEntry('', '', 'income', '')
//       if () {
// // stop same name entries
//       }
      
      addEntryToArray(newEntry);

      saveData('entries', entries);

      displayEntries();
  })

