

import { displayEntries } from "./UI";

import { entries } from "./budgetModule";
import { entryButton } from "./events";

window.addEventListener("load", () => {
  displayEntries(entries);
})

