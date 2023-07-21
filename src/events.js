import { createEntry } from "./budgetModule";
import { displayEntries} from "./UI";
import { saveData } from "./localStorage";
import { deleteData } from "./localStorage";
import { getData } from "./localStorage";
import { addEntryToArray } from "./budgetModule";
import { editEntry } from "./budgetModule";
import { deleteEntry } from "./budgetModule";
import { entries } from "./budgetModule";

  export const entryButton = document.querySelector('.new-entry');

  entryButton.addEventListener('click', (e) => {

    const newEntry =  createEntry('', '', 'income', '')
      
      addEntryToArray(newEntry);

      saveData('entries', entries);

      displayEntries(entries);
  })

  export const inputs = document.querySelectorAll('.input');
  
  inputs.forEach(
    (input) => {
      input.addEventListener('change', (e) => {
        saveData('entries', entries);
        displayEntries(entries);
      })
    }
  )



