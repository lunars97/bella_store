import {
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
} from "../constants/action_types";
const initialState = {
    products: [],
    loading: false,
    error: null,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PRODUCT_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                products: [],
            };
        default:
            return state;
    }
};
