import {
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
} from "../constants/action_types";
import baseUrl from "../../adapters/axios.config";
import axios from "axios";

export const fetchPosts = (products) => async (dispatch, getState) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST });

    try {
        const response = await axios.get(baseUrl);
        dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_PRODUCT_FAILURE,
            error: error,
        });
    }
};

// REMEMBER
// in products component following code should be written
// const dispatch = useDispatch();
// const state = useSelector((state) => state)

// useEffect(() => {
//     dispatch(fetchPosts())
// }, [])
