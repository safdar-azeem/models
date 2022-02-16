import { Box, Grid, FormControl, TextField, Button, Typography, CircularProgress } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import { formInputs } from '../data/UploadForm.data';
import { useDispatch, useSelector } from 'react-redux';
import { postModel } from '../store/actions/models.action';
import Calendar from '../components/Calendar';
import {useHistory} from 'react-router-dom';

const Upload = () => {
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state: any) => state.modelReducer);
	const history = useHistory();
	const [formData, setFormData] = React.useState<any>({
		firstName: '',
		lastName: '',
		picture: '',
		profession: '',
		shoeSize: '',
		hairColor: '',
		hairLength: '',
		dateOfBirth: new Date(),
		braSize: '',
		waistSize: '',
		height: '',
		weight: '',
		casting: '',
		gender: '',
	});

	const handleSubmit = (e: any) => {
		e.preventDefault();
		dispatch(postModel(formData)).then((isTrue:boolean)=>{
			if(isTrue){
				history.push('/');
			}
		})
	};

	const handleChange = (fieldName: any, value: any) => {
		setFormData({
			...formData,
			[fieldName]: value,
		});
	};

	const handleCancel = () => {
		history.push('/');
	};

	return (
		<Box>
			<Header title='Models' buttonText='Go Back To Home' buttonLink='/'></Header>
			<Box mt={4}>
				<Typography variant='h5' fontWeight='semiBold'>
					Post New Model
				</Typography>
			</Box>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={4} sx={{ marginTop: '4px', marginBottom: '50px' }}>
					{formInputs.map((input: any) => {
						if (input.type === 'calendar') {
							return (
								<Grid item xs={12} sm={12} md={6} lg={6} key={input.name}>
									<Calendar
										label={input.label}
										name={input.name}
										value={formData[input.name]}
										handleChange={handleChange}
									/>
								</Grid>
							);
						} else {
							return (
								<Grid item xs={12} sm={12} md={6} lg={6} key={input.name}>
									<TextField
										id={input.name}
										label={input.label}
										type={input.type}
										required={input.required}
										value={formData[input.name]}
										onChange={(e: any) => {
											handleChange(input.name, e.target.value);
										}}
										fullWidth
									/>
								</Grid>
							);
						}
					})}
				</Grid>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						marginBottom: '50px',
					}}
				>
					<Button variant='contained' color='inherit' onClick={handleCancel}>
						Cancel
					</Button>
					<Button
						variant='contained'
						color='primary'
						type='submit'
						sx={{
							backgroundColor: 'black',
							color: 'white',
							marginLeft: '13px',
							'&:hover': {
								backgroundColor: 'black',
								color: 'white',
							},
						}}
						disabled={loading}
					>
						{
							loading ? <CircularProgress size={20} /> : 'Post'
						}
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default Upload;
