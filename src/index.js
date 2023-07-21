import { displayEntries } from "./UI";
import { inputs } from "./events";
import { entries } from "./budgetModule";
import { entryButton } from "./events";

window.addEventListener("load", () => {
  displayEntries(entries);
})

