/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
__webpack_require__.r(__webpack_exports__);


function resize() {
  const productCards = document.querySelectorAll('.product-cards__product-card');
  
  if (window.innerWidth < 767) {
    for (let i = 0; i < productCards.length; i++) {
      let productBtn = productCards[i].querySelector('.product-card__btn');
      productBtn.innerHTML = 'Добавить в запрос';
      if (i >= 3) {
        productCards[i].style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < productCards.length; i++) {
      let productBtn = productCards[i].querySelector('.product-card__btn');
      productBtn.innerHTML = 'Выбрать объем';

      if (i >= 3) {
        productCards[i].style.display = "block";
      }
    }
  }
}

window.addEventListener('load', resize);
window.addEventListener('resize', resize);

function updatePagination() {
  const paginationContainer = document.getElementById("paginationList");
  const pagesMobile = [1, 2, "...", 88, 89, "arrow"];
  const pagesDesktop = [1, 2, 3, 4, "...", 88, 89, 90, "arrow"];
  
  const windowWidth = window.innerWidth;

  const pages = (windowWidth < 576) ? pagesMobile : pagesDesktop;

  const paginationHTML = pages.map(page => {
    if (page === "...") {
      return `<li class="pagination__item between"><a class="pagination__link" href="#" aria-label="Текущая">${page}</a></li>`;
    } else if (page === "arrow") {
      return `<li class="pagination__item next"><a class="pagination__link" href="#" aria-label="Вперед"></a></li>`;
    } else {
      const activeClass = (page === 1) ? " active" : "";
      return `<li class="pagination__item${activeClass}"><a class="pagination__link" href="#" aria-label="Текущая">${page}</a></li>`;
    }
  }).join("");

  paginationContainer.innerHTML = paginationHTML;
}

updatePagination();

window.addEventListener("resize", updatePagination);
/******/ })()
;