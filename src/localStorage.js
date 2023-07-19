let entries = JSON.parse(localStorage.getItem('entries')) || [];

export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
} 

export function getData(key) {
  return JSON.parse(localStorage.getItem(key))
};

export function deleteData(key) {
  localStorage.removeItem(key)
}