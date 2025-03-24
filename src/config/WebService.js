// BASE URL
export const BASE_URL = "https://api.tvmaze.com";
export const X_API_TOKEN = "X-Access-Token";

// REQUEST TYPES
export const REQUEST_TYPE = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
  PATCH: "patch",
};

// CONSTANTS
export const LIMIT = 20;
export const API_TIMEOUT = 30000;
export const API_SHOWS = "/shows/";
export const API_LOG = true;

// API'S Auth
export const API_GET_SHOW = {
  route: `${API_SHOWS}44458`,
  access_token_required: false,
  type: REQUEST_TYPE.GET,
};

export const API_GET_EPISODE_LIST = {
  route: `${API_SHOWS}44458/episodes`,
  access_token_required: false,
  type: REQUEST_TYPE.GET,
};

export const API_GET_EPISODE_DETAIL = {
  route: `/episodes`,
  access_token_required: false,
  type: REQUEST_TYPE.GET,
};


