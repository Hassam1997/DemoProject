import { makeAction, makeRequesActions } from "../ActionTypes";
import { createReducer } from "@reduxjs/toolkit";
import { Util } from "../../utils";

// action creators
export const toggleEpisodeFavourite = makeAction("TOGGLE_EPISODE_FAVOURITE");
export const homeGetShow = makeRequesActions("HOME_GET_SHOW");
export const homeGetEpisodes = makeRequesActions("HOME_GET_EPISODE");
export const homeGetEpisodeDetail = makeRequesActions("HOME_GET_EPISODE_DETAIL");

// init state
const initalState = {
  show_detail: {},
  episodes: [],
  episode_detail: {}
};

// init reducer
export default createReducer(initalState, (builder) => {
  builder.addCase(homeGetShow.success, (state, action) => {
    const { data, identifier } = action.payload;
    if (state.show_detail?.[identifier]) {
      state.show_detail[identifier] = {
        ...state.show_detail[identifier],
        ...data,
      };
    } else {
      state.show_detail = {
        ...state.show_detail,
        [identifier]: data,
      };
    }
  });
  builder.addCase(homeGetEpisodes.success, (state, action) => {
    Util.concatDataArray(state, action, "episodes");
  });
  builder.addCase(homeGetEpisodeDetail.success, (state, action) => {
    const { data, identifier } = action.payload;
    const previousFavourite = state.episode_detail[identifier]?.favourite ?? false;
    const updatedData = { ...data, favourite: previousFavourite };
    if (state.episode_detail?.[identifier]) {
      state.episode_detail[identifier] = {
        ...state.episode_detail[identifier],
        ...updatedData,
      };
    } else {
      state.episode_detail = {
        ...state.episode_detail,
        [identifier]: updatedData,
      };
    }
  });
  builder.addCase(toggleEpisodeFavourite, (state, action) => {
    const { identifier } = action.payload;
    if (state.episode_detail[identifier]) {
      state.episode_detail[identifier].favourite = !state.episode_detail[identifier].favourite;
    }
  });
});

// // selectors
export const getShowDetail =
  (identifier) => (state) => state?.home?.show_detail?.[identifier] ?? {};
export const getEpisodesList = (state) => state?.home?.episodes ?? [];
export const getEpisodeDetail =
  (identifier) => (state) => state?.home?.episode_detail?.[identifier] ?? {};

