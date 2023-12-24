export const SIDEBAR_OPEN = 'SIDEBAR_OPEN'
export const SIDEBAR_CLOSE = 'SIDEBAR_CLOSE'
export const GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR'
export const GET_SINGLE_PRODUCT_BEGIN = 'GET_SINGLE_PRODUCT_BEGIN'
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS'
export const GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR'
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const SET_GRIDVIEW = 'SET_GRIDVIEW'
export const SET_LISTVIEW = 'SET_LISTVIEW'
export const UPDATE_SORT = 'UPDATE_SORT'
export const SORT_PRODUCTS = 'SORT_PRODUCTS'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'
export const SEARCH_SORT = 'UPDATE_SORT'

export const actionType = {
  SET_USER: 'SET_USER',
  SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
  SET_CART_SHOW: 'SET_CART_SHOW',
  SET_CARTITEMS: 'SET_CARTITEMS',
}

const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      }

    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      }

    default:
      return state
  }
}

export default reducer
