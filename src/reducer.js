export const initialState = { basket: [] };

function reducer(state, action) {

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [ ...state.basket, action.item ],
      }
    case "REMOVE_FROM_BASKET":
      state.basket = state.basket.filter( (product) => {
        return product.id != action.item.id
      })
      return { ...state }
    default:
      return state;
  }
}

export default reducer;
