import { displayEntries } from "./UI";
import { entries } from "./budgetModule";

window.addEventListener("load", () => {
  displayEntries(entries);
})

