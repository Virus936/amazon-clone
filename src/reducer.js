const basket = JSON.parse(localStorage.getItem('basket'))||[]
export const initialState = { basket };

function reducer(state, action) {

  switch (action.type) {
    case "ADD_TO_BASKET":
      const newBasket = [ ...state.basket, action.item ]
      localStorage.setItem('basket', JSON.stringify( newBasket ))
      return {
        basket:newBasket
      }
    case "REMOVE_FROM_BASKET":
      state.basket = state.basket.filter( (product) => {
        return product.id != action.item.id
      })

      localStorage.setItem('basket', JSON.stringify( state.basket ))
      return { ...state }
    default:
      return state;
  }
}

export default reducer;
