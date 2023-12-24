import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  SEARCH_SORT,
} from "../reducers/actions";
import { ProductContext, useProductContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    Speciality: "all",
    Category: "all",
    Color: "all",
    min_price: 0,
    max_price: 0,
    Price: 0,
    Shipping: false,
  },
};
const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const productss = useContext(ProductContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: productss });
  }, [productss]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [productss, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const Searchparam = (e) => {
    const value = e.target.value;
    dispatch({ type: SEARCH_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "Category") {
      value = e.target.textContent;
    }
    if (name === "Color") {
      value = e.target.dataset.color;
    }
    if (name === "Price") {
      value = Number(value);
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTERS, payload: productss });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilter,
        Searchparam,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
