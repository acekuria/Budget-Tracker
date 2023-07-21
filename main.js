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



window.addEventListener("load", () => {
  (0,_UI__WEBPACK_IMPORTED_MODULE_0__.displayEntries)(_budgetModule__WEBPACK_IMPORTED_MODULE_1__.entries);
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDbkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7O0FBR2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLHVEQUFRO0FBQ2Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBUTtBQUNkO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQVE7QUFDZDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxJQUFJLHVEQUFRO0FBQ1o7QUFDQSxHQUFHOztBQUVIOztBQUVBLEdBQUc7O0FBRUgsRUFBRSx3REFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJTzs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RPO0FBQ1A7QUFDQTs7Ozs7OztVQ0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0c7O0FBRXpDO0FBQ0EsRUFBRSxtREFBYyxDQUFDLGtEQUFPO0FBQ3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWRnZXQtdHJhY2tlci8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9idWRnZXQtdHJhY2tlci8uL3NyYy9idWRnZXRNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYnVkZ2V0LXRyYWNrZXIvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL2J1ZGdldC10cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2J1ZGdldC10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9idWRnZXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2J1ZGdldC10cmFja2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnVkZ2V0LXRyYWNrZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RW50cmllcyAoZW50cmllcykge1xuICBcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xuICBjb25zdCBuZXdFbnRyeUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWVudHJ5LWJvZHknKTtcbiAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xuICB0Ym9keS5pbm5lckhUTUwgPSAnJztcblxuICBsZXQgdG90YWwgPSAwOyAvLyBJbml0aWFsaXplIHRvdGFsIGFtb3VudCB2YXJpYWJsZVxuXG5cbiAgZW50cmllc1xuICAuc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiBiLmRhdGUgLSBhLmRhdGVcbiAgfSlcbiAgLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgLy8gQ3JlYXRlIHJvdyBmb3IgdGhlIHRib2R5XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgIC8vIENyZWF0ZSB0ZCBlbGVtZW50cyBmb3IgdGhlIHJvd1xuICAgIGNvbnN0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dERhdGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQnLCAnZGF0ZScpO1xuICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGlucHV0RGF0ZS52YWx1ZSA9IGVudHJ5LmRhdGU7IC8vdGhpcyBuZWVkcyB0byBiZSB0aGVyZSBzbyB0aGF0IHRoZSBicm93c2VyIGtub3dzIHRvIHdoYXQgdG8gc2hvdyBmb3IgdGhlIGlucHV0RGF0ZSBcbiAgICB0ZDEuYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICAgIGNvbnN0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpbnB1dCcsICdkZXNjcmlwdGlvbicpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gZW50cnkuZGVzY3JpcHRpb247XG4gICAgdGQyLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBzZWxlY3RUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0VHlwZS5jbGFzc0xpc3QuYWRkKCdpbnB1dCcsICd0eXBlJyk7XG4gICAgc2VsZWN0VHlwZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndHlwZScpO1xuICAgIHNlbGVjdFR5cGUuc2V0QXR0cmlidXRlKCdpZCcsICcnKTtcbiAgICBjb25zdCBvcHRpb25JbmNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25JbmNvbWUudmFsdWUgPSAnaW5jb21lJztcbiAgICBvcHRpb25JbmNvbWUudGV4dENvbnRlbnQgPSAnSW5jb21lJztcbiAgICBjb25zdCBvcHRpb25FeHBlbnNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uRXhwZW5zZS52YWx1ZSA9ICdleHBlbnNlJztcbiAgICBvcHRpb25FeHBlbnNlLnRleHRDb250ZW50ID0gJ0V4cGVuc2UnO1xuICAgIHNlbGVjdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uSW5jb21lKTtcbiAgICBzZWxlY3RUeXBlLmFwcGVuZENoaWxkKG9wdGlvbkV4cGVuc2UpO1xuICAgIHNlbGVjdFR5cGUudmFsdWUgPSBlbnRyeS50eXBlO1xuICAgIHRkMy5hcHBlbmRDaGlsZChzZWxlY3RUeXBlKTtcblxuICAgIGNvbnN0IHRkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgaW5wdXRBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0QW1vdW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0JywgJ2Ftb3VudCcpO1xuICAgIGlucHV0QW1vdW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICBpbnB1dEFtb3VudC52YWx1ZSA9IGVudHJ5LmFtb3VudDtcbiAgICB0ZDQuYXBwZW5kQ2hpbGQoaW5wdXRBbW91bnQpO1xuXG4gICAgY29uc3QgdGQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5wdXQnLCAnZGVsZXRlJyk7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIHRkNS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgLy8gQXBwZW5kIHRkIGVsZW1lbnRzIHRvIHRoZSByb3dcbiAgICByb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQodGQzKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQodGQ0KTtcbiAgICByb3cuYXBwZW5kQ2hpbGQodGQ1KTtcblxuICAgIC8vIEFwcGVuZCB0aGUgcm93IHRvIHRoZSB0Ym9keVxuICAgIHRib2R5LmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICB0YWJsZS5pbnNlcnRCZWZvcmUodGJvZHksIG5ld0VudHJ5Qm9keSk7XG5cbiAgICBpbnB1dERhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGVudHJ5LmRhdGUgPSBpbnB1dERhdGUudmFsdWU7XG4gICAgICBzYXZlRGF0YSgnZW50cmllcycsIGVudHJpZXMpO1xuICAgICAgZGlzcGxheUVudHJpZXMoZW50cmllcylcbiAgICB9KVxuICAgIFxuICAgIGlucHV0RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGVudHJ5LmRlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgIHNhdmVEYXRhKCdlbnRyaWVzJywgZW50cmllcyk7XG4gICAgICBkaXNwbGF5RW50cmllcyhlbnRyaWVzKVxuICAgIH0pXG5cbiAgICBpbnB1dEFtb3VudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgLy8gbGV0IHRvdGFsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbCcpO1xuICAgICAgY29uc3QgYW1vdW50VmFsdWUgPSBwYXJzZUZsb2F0KGlucHV0QW1vdW50LnZhbHVlKTtcbiAgICAgIGVudHJ5LmFtb3VudCA9IGFtb3VudFZhbHVlO1xuICAgICAgdG90YWwgKz0gZW50cnkuYW1vdW50O1xuICAgICAgXG4gICAgICAvLyB0b3RhbCArPSBlbnRyeS5hbW91bnQ7XG4gICAgICAvLyBzYXZlRGF0YSgndG90YWwnLCB0b3RhbCk7XG4gICAgICAvLyB0b3RhbC5pbm5lclRleHQgPSB0b3RhbC50b0ZpeGVkKDIpO1xuICAgICAgXG4gICAgICBzYXZlRGF0YSgnZW50cmllcycsIGVudHJpZXMpO1xuICAgICAgZGlzcGxheUVudHJpZXMoZW50cmllcyk7XG4gICAgICBcbiAgICB9KVxuXG4gICAgc2VsZWN0VHlwZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgLy8gaWYgKGVudHJ5LmFtb3VudCA9PT0gJycgKSB7XG4gICAgICAvLyAgYWxlcnQoJ1BsZWFzZSBmaXJzdCBlbnRlciBhbiBhbW91bnQgZm9yIHRoaXMgZW50cnknKVxuICAgICAgLy8gfVxuICAgICAgLy8gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChpbnB1dEFtb3VudC52YWx1ZSk7XG4gICAgICBlbnRyeS5hbW91bnQgPSAtKGFtb3VudFZhbHVlKVxuICAgICAgXG4gICAgICBlbnRyeS50eXBlID0gc2VsZWN0VHlwZS52YWx1ZTtcbiAgICAgIHNhdmVEYXRhKCdlbnRyaWVzJywgZW50cmllcyk7XG4gICAgICBkaXNwbGF5RW50cmllcyhlbnRyaWVzKTtcbiAgICAgIC8vIH1cbiAgICAgIFxuICAgICAgXG4gICAgfSlcblxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGVudHJpZXMuc3BsaWNlKGVudHJpZXMuaW5kZXhPZihlbnRyeSksIDEpO1xuICAgIHNhdmVEYXRhKCdlbnRyaWVzJywgZW50cmllcyk7XG4gICAgZGlzcGxheUVudHJpZXMoZW50cmllcyk7XG4gIH0pXG5cbiAgdG90YWwgKz0gZW50cnkuYW1vdW50O1xuXG4gIH0pXG5cbiAgc2F2ZURhdGEoJ3RvdGFsJywgdG90YWwpO1xuIC8vIFVwZGF0ZSB0aGUgZGlzcGxheSBvZiB0aGUgdG90YWwgYW1vdW50IG9uIHRoZSB3ZWJwYWdlXG4gY29uc3QgdG90YWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsJyk7XG4gdG90YWxFbGVtZW50LnRleHRDb250ZW50ID0gTnVtYmVyKHRvdGFsKS50b0ZpeGVkKDIpO1xufVxuIiwiZXhwb3J0IGxldCBlbnRyaWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW50cmllcycpKSB8fCBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVudHJ5IChkYXRlLCBkZXNjcmlwdGlvbiwgdHlwZSwgYW1vdW50KSB7XG4gIHJldHVybiB7XG4gICAgZGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0eXBlLCBcbiAgICBhbW91bnQsXG4gICAgXG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFbnRyeVRvQXJyYXkgKGNyZWF0ZUVudHJ5KSB7XG4gIGVudHJpZXMucHVzaChjcmVhdGVFbnRyeSk7XG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVEYXRhKGtleSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG59IFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkaXNwbGF5RW50cmllcyB9IGZyb20gXCIuL1VJXCI7XG5pbXBvcnQgeyBlbnRyaWVzIH0gZnJvbSBcIi4vYnVkZ2V0TW9kdWxlXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIGRpc3BsYXlFbnRyaWVzKGVudHJpZXMpO1xufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9