export let entries = JSON.parse(localStorage.getItem('entries')) || [];

export function createEntry (date, description, type, amount) {
  return {
    date,
    description,
    type, 
    amount,
    deleted: false,
    edited: false,
  }
};

export function addEntryToArray (createEntry) {
  entries.push(createEntry);
}

export function editEntry () {
  edited: true;
}

