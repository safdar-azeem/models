import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchModels, filterModels } from '../store/actions/models.action';

const SearchBar = () => {
	const dispatch = useDispatch();

	const [filter, setFilter] = React.useState('');
	const handleChange = (event: any) => setFilter(event.target.value);

	const [search, setSearch] = React.useState('');
	const handleSearch = (event: any) => {
		const value = event.target.value;
		setSearch(value);
	};

	useEffect(() => {
		if (filter !== '' && search !== '') {
			dispatch(filterModels(filter, search));
		}

		if (filter === '' && search !== '') {
			setTimeout(() => {
				dispatch(searchModels(search));
			}, 500);
		}
	}, [filter, search]);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '3rem',
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
					shrink={false}
					sx={{
						color: 'white',
					}}
				>
					{!filter && "Filter"}
				</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={filter}
					label='Filter'
					onChange={handleChange}
					sx={{
						color: 'white',
					}}
				>
					<MenuItem value={'hairColor'}>Hair Color</MenuItem>
					<MenuItem value={'gender'}>Gender</MenuItem>
					<MenuItem value={'weight'}>Weight</MenuItem>
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
