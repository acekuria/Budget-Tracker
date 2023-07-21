import { createEntry } from "./budgetModule";
import { displayEntries} from "./UI";
import { saveData } from "./localStorage";
import { addEntryToArray } from "./budgetModule";
import { entries } from "./budgetModule";

  export const entryButton = document.querySelector('.new-entry');

  entryButton.addEventListener('click', (e) => {

    const newEntry =  createEntry('', '', 'income', '')
      
      addEntryToArray(newEntry);

      saveData('entries', entries);

      displayEntries(entries);
  })





