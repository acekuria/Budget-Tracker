import { saveData } from "./localStorage"

export function CalculateTotal(total, entry) {
 total += entry.amount;
 saveData('total', total);
 total.innerText = total.toFixed(2);
 return total;
};

