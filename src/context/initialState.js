import { fetchUser } from "../utils.js/fetchLocalStorageData";

const userInfo = fetchUser();

export const initialState = {
    user : userInfo,
};