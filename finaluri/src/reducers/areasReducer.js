
const initialUserState = {
    array: []
}

//REDUCER 
const areasReducer = (state = [] , action) => {
    switch(action.type){
      case 'fetchAreasDis':
        state = action.payload;
      default:
        return state;

    }
}

export default areasReducer;