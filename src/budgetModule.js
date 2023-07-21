export let entries = JSON.parse(localStorage.getItem('entries')) || [];

export function createEntry (date, description, type, amount) {
  return {
    date,
    description,
    type, 
    amount,
    currentDate: new Date(),
  }
};

export function addEntryToArray (createEntry) {
  entries.push(createEntry);
}


