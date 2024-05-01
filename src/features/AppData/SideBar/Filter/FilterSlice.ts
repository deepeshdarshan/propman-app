import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import FilterUtils from "../../../../utils/FilterUtils";
import FilterTypes from "./Filter.types";

const initialState: Readonly<FilterTypes.State> = {
  filters: [],
  status: "idle",
};

const updateFilter = (
  filters: FilterTypes.Filter[],
  payload: FilterTypes.Filter
) => {
  const idx = filters.findIndex((f) => f.type.value === payload.type.value);
  if (idx > -1) filters.splice(idx, 1);
  filters.push(payload);
};

const toggleFilter = (
  filters: FilterTypes.Filter[],
  payload: FilterTypes.Filter
) => {
  const idx = filters.findIndex((filter) =>
    FilterUtils.isEqual(filter, payload)
  );
  if (idx > -1) filters.splice(idx, 1);
  else filters.push(payload);
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    add: (state, action) => {
      const filters = [...state.filters];
      const payload: FilterTypes.Filter = action.payload;
      if (payload.type === FilterTypes.Type.HN) updateFilter(filters, payload);
      else toggleFilter(filters, payload);
      state.filters = filters;
      // console.log("filter: " + JSON.stringify(state.filters));
    },
    remove: (state, action) => {
      const filters = [...state.filters];
      const payload: FilterTypes.Filter = action.payload;
      const idx = filters.findIndex((filter) =>
        FilterUtils.isEqual(filter, payload)
      );
      if (idx > -1) filters.splice(idx, 1);
      state.filters = filters;
      // console.log("filter: " + JSON.stringify(state.filters));
    },
    reset: (state) => {
      state.filters = [];
    },
  },
});

export const { add, remove, reset } = FilterSlice.actions;

export const filters = (state: RootState) => state.filter.filters;

export default FilterSlice.reducer;
