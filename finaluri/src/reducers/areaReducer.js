import { act } from "@testing-library/react";

//REDUCER 
const areaReducer = (state = [] , action) => {
    switch(action.type){
      case 'setArticleDetails':
        return state = action.payload;
      default:
        return state;
    }
}

export default areaReducer;