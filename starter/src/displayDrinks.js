import get from './getElement.js';

import { hideLoading,showLoading } from './toggleLoading.js';
const displayDrinks = ({drinks}) =>{
    const section = get('.section-center')
    const title = get('.title')
     if(!drinks){
      hideLoading()
        title.textContent = `Your Search Item Is Not Found`;
        section.innerHTML = null
        return
     }
       const newDrinks = drinks.map((drink)=>{
        
          const {idDrink:id,strDrink:name,strDrinkThumb:src} = drink;
            return `<a href="./drink.html">
            <article class="cocktail" data-id="${id}">
             <img src="${src}" alt="cocktail">
             <h3>${name}</h3>
            </article>
          </a>`
       }).join('')
       hideLoading()
     title.textContent = '';
     section.innerHTML = newDrinks
     return section
}

export default displayDrinks;