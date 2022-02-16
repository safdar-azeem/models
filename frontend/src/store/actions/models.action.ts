import { modelActionTypes } from '../reducers/searchModel.types';
let env = import.meta.env;

export const modelLoading = () => ({
	type: modelActionTypes.MODEL_LOADING,
});

export const modelSuccess = (data: any[]) => ({
	type: modelActionTypes.MODEL_SUCCESS,
	payload: data,
});

export const modelError = (error: any) => ({
	type: modelActionTypes.MODEL_ERROR,
	payload: error,
});

export const getModels = (): any => {
	return async (dispatch: any) => {
		dispatch(modelLoading());
		try {
			const data = await fetch(env.VITE_REACT_APP_API_URL + '/model/all');
			const jsonData = await data.json();
			dispatch(modelSuccess(jsonData));
		} catch (error) {
			dispatch(modelError("Error while fetching models"));
		}
	};
};

export const searchModels = (search: string): any => {
	return async (dispatch: any) => {
		dispatch(modelLoading());
		try {
			const data = await fetch(env.VITE_REACT_APP_API_URL + '/model/search?search=' + search);
			const jsonData = await data.json();
			if (jsonData.length === 0) {
				dispatch(modelError('No models found'));
			} else {
				dispatch(modelSuccess(jsonData));
			}
		} catch (error) {
			dispatch(modelError('Error while fetching models'));
		}
	};
};

export const filterModels = (filter: string, search: string): any => {
	return async (dispatch: any) => {
		dispatch(modelLoading());
		try {
			const data = await fetch(
				env.VITE_REACT_APP_API_URL + `/model/filter?${filter}=${search}`,
			);
			const jsonData = await data.json();
			if (jsonData.length === 0) {
				dispatch(modelError('No models found'));
			} else {
				dispatch(modelSuccess(jsonData));
			}
		} catch (error) {
			dispatch(modelError('Error while fetching models'));
		}
	};
};
