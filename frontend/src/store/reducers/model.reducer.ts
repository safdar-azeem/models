import { modelState, modelActionTypes, initialState } from './searchModel.types';

const modelReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case modelActionTypes.MODEL_LOADING:
            return {
                ...state,
                loading: true,
            };
        case modelActionTypes.MODEL_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case modelActionTypes.MODEL_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}

export default modelReducer;