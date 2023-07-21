
import { entries } from "./budgetModule"

export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
} 

export function getData(key) {
  return JSON.parse(localStorage.getItem(key))
};
