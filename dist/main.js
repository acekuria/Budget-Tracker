/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayEntries: () => (/* binding */ displayEntries)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");

function displayEntries (entries) {
  
  const table = document.querySelector('table');
  const newEntryBody = document.querySelector('.new-entry-body');
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  let total = 0; // Initialize total amount variable


  entries
  .sort((a, b) => {
    return b.date - a.date
  })
  .forEach((entry) => {
    // Create row for the tbody
    const row = document.createElement('tr');

    // Create td elements for the row
    const td1 = document.createElement('td');
    const inputDate = document.createElement('input');
    inputDate.classList.add('input', 'date');
    inputDate.setAttribute('type', 'date');
    inputDate.value = entry.date; //this needs to be there so that the browser knows to what to show for the inputDate 
    td1.appendChild(inputDate);

    const td2 = document.createElement('td');
    const inputDescription = document.createElement('input');
    inputDescription.classList.add('input', 'description');
    inputDescription.setAttribute('type', 'text');
    inputDescription.value = entry.description;
    td2.appendChild(inputDescription);

    const td3 = document.createElement('td');
    const selectType = document.createElement('select');
    selectType.classList.add('input', 'type');
    selectType.setAttribute('name', 'type');
    selectType.setAttribute('id', '');
    const optionIncome = document.createElement('option');
    optionIncome.value = 'income';
    optionIncome.textContent = 'Income';
    const optionExpense = document.createElement('option');
    optionExpense.value = 'expense';
    optionExpense.textContent = 'Expense';
    selectType.appendChild(optionIncome);
    selectType.appendChild(optionExpense);
    selectType.value = entry.type;
    td3.appendChild(selectType);

    const td4 = document.createElement('td');
    const inputAmount = document.createElement('input');
    inputAmount.classList.add('input', 'amount');
    inputAmount.setAttribute('type', 'number');
    inputAmount.value = entry.amount;
    td4.appendChild(inputAmount);

    const td5 = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('input', 'delete');
    deleteButton.textContent = 'X';
    td5.appendChild(deleteButton);

    // Append td elements to the row
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    // Append the row to the tbody
    tbody.appendChild(row);

    table.insertBefore(tbody, newEntryBody);

    inputDate.addEventListener('change', (e) => {
      entry.date = inputDate.value;
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveData)('entries', entries);
      displayEntries(entries)
    })
    
    inputDescription.addEventListener('change', (e) => {
      entry.description = inputDescription.value;
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveData)('entries', entries);
      displayEntries(entries)
    })

    inputAmount.addEventListener('change', (e) => {
      // let totalText = document.querySelector('.total');
      const amountValue = parseFloat(inputAmount.value);
      entry.amount = amountValue;
      total += entry.amount;
      
      // total += entry.amount;
      // saveData('total', total);
      // total.innerText = total.toFixed(2);
      
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveData)('entries', entries);
      displayEntries(entries);
      
    })

    selectType.addEventListener('change', (e) => {
      // if (entry.amount === '' ) {
      //  alert('Please first enter an amount for this entry')
      // }
      // else {
        const amountValue = parseFloat(inputAmount.value);
      entry.amount = -(amountValue)
      
      entry.type = selectType.value;
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveData)('entries', entries);
      displayEntries(entries);
      // }
      
      
    })

  deleteButton.addEventListener('click', (e) => {
    entries.splice(entries.indexOf(entry), 1);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveData)('entries', entries);
    displayEntries(entries);
  })

  total += entry.amount;

  })

  ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveData)('total', total);
 // Update the display of the total amount on the webpage
 const totalElement = document.querySelector('.total');
 totalElement.textContent = Number(total).toFixed(2);
}


/***/ }),

/***/ "./src/budgetModule.js":
/*!*****************************!*\
  !*** ./src/budgetModule.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEntryToArray: () => (/* binding */ addEntryToArray),
/* harmony export */   createEntry: () => (/* binding */ createEntry),
/* harmony export */   entries: () => (/* binding */ entries)
/* harmony export */ });
let entries = JSON.parse(localStorage.getItem('entries')) || [];

function createEntry (date, description, type, amount) {
  return {
    date,
    description,
    type, 
    amount,
    
  }
};

function addEntryToArray (createEntry) {
  entries.push(createEntry);
}




/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   entryButton: () => (/* binding */ entryButton)
/* harmony export */ });
/* harmony import */ var _budgetModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budgetModule */ "./src/budgetModule.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");






  const entryButton = document.querySelector('.new-entry');

  entryButton.addEventListener('click', (e) => {

    const newEntry =  (0,_budgetModule__WEBPACK_IMPORTED_MODULE_0__.createEntry)('', '', 'income', '')
      
      ;(0,_budgetModule__WEBPACK_IMPORTED_MODULE_0__.addEntryToArray)(newEntry);

      (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveData)('entries', _budgetModule__WEBPACK_IMPORTED_MODULE_0__.entries);

      (0,_UI__WEBPACK_IMPORTED_MODULE_1__.displayEntries)(_budgetModule__WEBPACK_IMPORTED_MODULE_0__.entries);
  })







/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
} 


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _budgetModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budgetModule */ "./src/budgetModule.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.js");




window.addEventListener("load", () => {
  (0,_UI__WEBPACK_IMPORTED_MODULE_0__.displayEntries)(_budgetModule__WEBPACK_IMPORTED_MODULE_1__.entries);
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDbkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7O0FBR2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLHVEQUFRO0FBQ2Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBUTtBQUNkO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQVE7QUFDZDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxJQUFJLHVEQUFRO0FBQ1o7QUFDQSxHQUFHOztBQUVIOztBQUVBLEdBQUc7O0FBRUgsRUFBRSx3REFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJTzs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q2QztBQUNSO0FBQ0s7QUFDTztBQUNSOztBQUV6QyxFQUFTOztBQUVUOztBQUVBLHNCQUFzQiwwREFBVztBQUNqQztBQUNBLE1BQU0sK0RBQWU7O0FBRXJCLE1BQU0sdURBQVEsWUFBWSxrREFBTzs7QUFFakMsTUFBTSxtREFBYyxDQUFDLGtEQUFPO0FBQzVCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJJO0FBQ1A7QUFDQTs7Ozs7OztVQ0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNHO0FBQ0Y7O0FBRXZDO0FBQ0EsRUFBRSxtREFBYyxDQUFDLGtEQUFPO0FBQ3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWRnZXQtdHJhY2tlci8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9idWRnZXQtdHJhY2tlci8uL3NyYy9idWRnZXRNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYnVkZ2V0LXRyYWNrZXIvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL2J1ZGdldC10cmFja2VyLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9idWRnZXQtdHJhY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9idWRnZXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnVkZ2V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9idWRnZXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J1ZGdldC10cmFja2VyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVudHJpZXMgKGVudHJpZXMpIHtcbiAgXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgY29uc3QgbmV3RW50cnlCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1lbnRyeS1ib2R5Jyk7XG4gIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGJvZHknKTtcbiAgdGJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgbGV0IHRvdGFsID0gMDsgLy8gSW5pdGlhbGl6ZSB0b3RhbCBhbW91bnQgdmFyaWFibGVcblxuXG4gIGVudHJpZXNcbiAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYi5kYXRlIC0gYS5kYXRlXG4gIH0pXG4gIC5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIC8vIENyZWF0ZSByb3cgZm9yIHRoZSB0Ym9keVxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICAvLyBDcmVhdGUgdGQgZWxlbWVudHMgZm9yIHRoZSByb3dcbiAgICBjb25zdCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXREYXRlLmNsYXNzTGlzdC5hZGQoJ2lucHV0JywgJ2RhdGUnKTtcbiAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBpbnB1dERhdGUudmFsdWUgPSBlbnRyeS5kYXRlOyAvL3RoaXMgbmVlZHMgdG8gYmUgdGhlcmUgc28gdGhhdCB0aGUgYnJvd3NlciBrbm93cyB0byB3aGF0IHRvIHNob3cgZm9yIHRoZSBpbnB1dERhdGUgXG4gICAgdGQxLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG5cbiAgICBjb25zdCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaW5wdXQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IGVudHJ5LmRlc2NyaXB0aW9uO1xuICAgIHRkMi5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3Qgc2VsZWN0VHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdFR5cGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQnLCAndHlwZScpO1xuICAgIHNlbGVjdFR5cGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3R5cGUnKTtcbiAgICBzZWxlY3RUeXBlLnNldEF0dHJpYnV0ZSgnaWQnLCAnJyk7XG4gICAgY29uc3Qgb3B0aW9uSW5jb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uSW5jb21lLnZhbHVlID0gJ2luY29tZSc7XG4gICAgb3B0aW9uSW5jb21lLnRleHRDb250ZW50ID0gJ0luY29tZSc7XG4gICAgY29uc3Qgb3B0aW9uRXhwZW5zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbkV4cGVuc2UudmFsdWUgPSAnZXhwZW5zZSc7XG4gICAgb3B0aW9uRXhwZW5zZS50ZXh0Q29udGVudCA9ICdFeHBlbnNlJztcbiAgICBzZWxlY3RUeXBlLmFwcGVuZENoaWxkKG9wdGlvbkluY29tZSk7XG4gICAgc2VsZWN0VHlwZS5hcHBlbmRDaGlsZChvcHRpb25FeHBlbnNlKTtcbiAgICBzZWxlY3RUeXBlLnZhbHVlID0gZW50cnkudHlwZTtcbiAgICB0ZDMuYXBwZW5kQ2hpbGQoc2VsZWN0VHlwZSk7XG5cbiAgICBjb25zdCB0ZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGlucHV0QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dEFtb3VudC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcsICdhbW91bnQnKTtcbiAgICBpbnB1dEFtb3VudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgaW5wdXRBbW91bnQudmFsdWUgPSBlbnRyeS5hbW91bnQ7XG4gICAgdGQ0LmFwcGVuZENoaWxkKGlucHV0QW1vdW50KTtcblxuICAgIGNvbnN0IHRkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2lucHV0JywgJ2RlbGV0ZScpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICB0ZDUuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIC8vIEFwcGVuZCB0ZCBlbGVtZW50cyB0byB0aGUgcm93XG4gICAgcm93LmFwcGVuZENoaWxkKHRkMSk7XG4gICAgcm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgcm93LmFwcGVuZENoaWxkKHRkMyk7XG4gICAgcm93LmFwcGVuZENoaWxkKHRkNCk7XG4gICAgcm93LmFwcGVuZENoaWxkKHRkNSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHJvdyB0byB0aGUgdGJvZHlcbiAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgdGFibGUuaW5zZXJ0QmVmb3JlKHRib2R5LCBuZXdFbnRyeUJvZHkpO1xuXG4gICAgaW5wdXREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBlbnRyeS5kYXRlID0gaW5wdXREYXRlLnZhbHVlO1xuICAgICAgc2F2ZURhdGEoJ2VudHJpZXMnLCBlbnRyaWVzKTtcbiAgICAgIGRpc3BsYXlFbnRyaWVzKGVudHJpZXMpXG4gICAgfSlcbiAgICBcbiAgICBpbnB1dERlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBlbnRyeS5kZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24udmFsdWU7XG4gICAgICBzYXZlRGF0YSgnZW50cmllcycsIGVudHJpZXMpO1xuICAgICAgZGlzcGxheUVudHJpZXMoZW50cmllcylcbiAgICB9KVxuXG4gICAgaW5wdXRBbW91bnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIC8vIGxldCB0b3RhbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwnKTtcbiAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChpbnB1dEFtb3VudC52YWx1ZSk7XG4gICAgICBlbnRyeS5hbW91bnQgPSBhbW91bnRWYWx1ZTtcbiAgICAgIHRvdGFsICs9IGVudHJ5LmFtb3VudDtcbiAgICAgIFxuICAgICAgLy8gdG90YWwgKz0gZW50cnkuYW1vdW50O1xuICAgICAgLy8gc2F2ZURhdGEoJ3RvdGFsJywgdG90YWwpO1xuICAgICAgLy8gdG90YWwuaW5uZXJUZXh0ID0gdG90YWwudG9GaXhlZCgyKTtcbiAgICAgIFxuICAgICAgc2F2ZURhdGEoJ2VudHJpZXMnLCBlbnRyaWVzKTtcbiAgICAgIGRpc3BsYXlFbnRyaWVzKGVudHJpZXMpO1xuICAgICAgXG4gICAgfSlcblxuICAgIHNlbGVjdFR5cGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIC8vIGlmIChlbnRyeS5hbW91bnQgPT09ICcnICkge1xuICAgICAgLy8gIGFsZXJ0KCdQbGVhc2UgZmlyc3QgZW50ZXIgYW4gYW1vdW50IGZvciB0aGlzIGVudHJ5JylcbiAgICAgIC8vIH1cbiAgICAgIC8vIGVsc2Uge1xuICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoaW5wdXRBbW91bnQudmFsdWUpO1xuICAgICAgZW50cnkuYW1vdW50ID0gLShhbW91bnRWYWx1ZSlcbiAgICAgIFxuICAgICAgZW50cnkudHlwZSA9IHNlbGVjdFR5cGUudmFsdWU7XG4gICAgICBzYXZlRGF0YSgnZW50cmllcycsIGVudHJpZXMpO1xuICAgICAgZGlzcGxheUVudHJpZXMoZW50cmllcyk7XG4gICAgICAvLyB9XG4gICAgICBcbiAgICAgIFxuICAgIH0pXG5cbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlbnRyaWVzLnNwbGljZShlbnRyaWVzLmluZGV4T2YoZW50cnkpLCAxKTtcbiAgICBzYXZlRGF0YSgnZW50cmllcycsIGVudHJpZXMpO1xuICAgIGRpc3BsYXlFbnRyaWVzKGVudHJpZXMpO1xuICB9KVxuXG4gIHRvdGFsICs9IGVudHJ5LmFtb3VudDtcblxuICB9KVxuXG4gIHNhdmVEYXRhKCd0b3RhbCcsIHRvdGFsKTtcbiAvLyBVcGRhdGUgdGhlIGRpc3BsYXkgb2YgdGhlIHRvdGFsIGFtb3VudCBvbiB0aGUgd2VicGFnZVxuIGNvbnN0IHRvdGFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbCcpO1xuIHRvdGFsRWxlbWVudC50ZXh0Q29udGVudCA9IE51bWJlcih0b3RhbCkudG9GaXhlZCgyKTtcbn1cbiIsImV4cG9ydCBsZXQgZW50cmllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VudHJpZXMnKSkgfHwgW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbnRyeSAoZGF0ZSwgZGVzY3JpcHRpb24sIHR5cGUsIGFtb3VudCkge1xuICByZXR1cm4ge1xuICAgIGRhdGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgdHlwZSwgXG4gICAgYW1vdW50LFxuICAgIFxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRW50cnlUb0FycmF5IChjcmVhdGVFbnRyeSkge1xuICBlbnRyaWVzLnB1c2goY3JlYXRlRW50cnkpO1xufVxuXG5cbiIsImltcG9ydCB7IGNyZWF0ZUVudHJ5IH0gZnJvbSBcIi4vYnVkZ2V0TW9kdWxlXCI7XG5pbXBvcnQgeyBkaXNwbGF5RW50cmllc30gZnJvbSBcIi4vVUlcIjtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBhZGRFbnRyeVRvQXJyYXkgfSBmcm9tIFwiLi9idWRnZXRNb2R1bGVcIjtcbmltcG9ydCB7IGVudHJpZXMgfSBmcm9tIFwiLi9idWRnZXRNb2R1bGVcIjtcblxuICBleHBvcnQgY29uc3QgZW50cnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWVudHJ5Jyk7XG5cbiAgZW50cnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgY29uc3QgbmV3RW50cnkgPSAgY3JlYXRlRW50cnkoJycsICcnLCAnaW5jb21lJywgJycpXG4gICAgICBcbiAgICAgIGFkZEVudHJ5VG9BcnJheShuZXdFbnRyeSk7XG5cbiAgICAgIHNhdmVEYXRhKCdlbnRyaWVzJywgZW50cmllcyk7XG5cbiAgICAgIGRpc3BsYXlFbnRyaWVzKGVudHJpZXMpO1xuICB9KVxuXG5cblxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlRGF0YShrZXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxufSBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGlzcGxheUVudHJpZXMgfSBmcm9tIFwiLi9VSVwiO1xuaW1wb3J0IHsgZW50cmllcyB9IGZyb20gXCIuL2J1ZGdldE1vZHVsZVwiO1xuaW1wb3J0IHsgZW50cnlCdXR0b24gfSBmcm9tIFwiLi9ldmVudHNcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgZGlzcGxheUVudHJpZXMoZW50cmllcyk7XG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=