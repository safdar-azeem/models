import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchModels } from '../store/actions/models.action';
const SearchBar = () => {
	const dispatch = useDispatch();

	const [age, setAge] = React.useState('');
	const handleChange = (event: any) => setAge(event.target.value);

	const [search, setSearch] = React.useState('');
	const handleSearch = (event: any) => {
		const value = event.target.value;
		setSearch(value);
		setTimeout(() => {
			dispatch(searchModels(value));
		}, 500);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '2rem',
			}}
		>
			<FormControl
				sx={{
					minWidth: 110,
					backgroundColor: 'black',
					transform: 'translateX(2px)',
					borderRadius: '5px 0px 0px 5px',
				}}
				size='small'
			>
				<InputLabel
					id='demo-simple-select-label'
					sx={{
						color: 'white',
					}}
				>
					Filter
				</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={age}
					label='Filter'
					onChange={handleChange}
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<TextField
				id='outlined-basic'
				label='Search'
				variant='outlined'
				size='small'
				sx={{ minWidth: 320 }}
				value={search}
				onChange={handleSearch}
			/>
		</Box>
	);
};

export default SearchBar;
