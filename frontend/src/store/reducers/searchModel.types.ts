export enum modelActionTypes {
	MODEL_LOADING = 'MODEL_LOADING',
	MODEL_SUCCESS = 'MODEL_SUCCESS',
	MODEL_ERROR = 'MODEL_ERROR',
}

export interface modelState {
	data: any[];
	loading: boolean;
	error: any;
}

export const initialState: modelState = {
	data: [],
	loading: false,
	error: null,
};
