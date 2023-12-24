import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "./actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.Price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, Price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.Price - b.Price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.Price - a.Price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.Name.localeCompare(b.Name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.Name.localeCompare(a.Name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, Category, Speciality, Color, Price, Shipping } =
      state.filters;
    let tempProducts = [...all_products];
    //filtering
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return (
          product.Name &&
          product.Name.toLowerCase().includes(text.toLowerCase())
        );
      });
    }
    //category
    if (Category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.Category === Category
      );
    }
    //company
    if (Speciality !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.Speciality === Speciality
      );
    }
    //color
    if (Color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.Colors.find((c) => c === Color);
      });
    }
    //price
    tempProducts = tempProducts.filter((product) => product.Price <= Price);
    //shipping
    if (Shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        Speciality: "all",
        Category: "all",
        Color: "all",
        Price: state.filters.max_price,
        Shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
