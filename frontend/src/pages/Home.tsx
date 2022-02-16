import { Box, CircularProgress, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import ModelPost from '../components/ModelPost';
import SearchBar from '../components/SearchBar';
import { getModels } from '../store/actions/models.action';

const Home = () => {
	const dispatch = useDispatch();

	const { data, loading, error } = useSelector((state: any) => state.modelReducer);
	useEffect(() => {
		dispatch(getModels());
	}, []);

	return (
		<Box>
			<Header></Header>
			<SearchBar></SearchBar>
			{loading ? (
				<Box display='flex' justifyContent='center' alignItems='center' height='50vh'>
					<CircularProgress />
				</Box>
			) : error ? (
				<div>{error}</div>
			) : (
				<Grid container spacing={9} sx={{ marginTop: '4px', marginBottom: '90px' }}>
					{data.map((model: any) => (
						<Grid item xs={12} sm={12} md={6} lg={6} key={model.id}>
							<ModelPost model={model}></ModelPost>
						</Grid>
					))}
				</Grid>
			)}
		</Box>
	);
};

export default Home;
