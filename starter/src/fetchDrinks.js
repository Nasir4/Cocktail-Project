import {showLoading, hideLoading} from './toggleLoading.js';

const fetchDrinks = async(url) =>{
     hideLoading()
   try{
    const resp = await fetch(url)
    const data = await resp.json()
   
  
    return data;
  
   }catch(e){
       console.log(e)
   }
} 

export default fetchDrinks