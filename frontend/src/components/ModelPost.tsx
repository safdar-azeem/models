import { Box, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { typographyUtils } from '../utils/typography.utils';

interface IProps {
	model: any;
}

const ModelPost = (props: IProps) => {
	const { model } = props;
	return (
		<Box boxShadow='0px 0px 10px rgba(0, 0, 0, 0.1)' padding={2} sx={{ borderRadius: '10px' }}>
			<img
				src={model.picture}
				alt={model.name}
				style={{
					width: '100%',
					height: '29rem',
					borderRadius: '5px',
				}}
			/>
			<Box mt={2}>
				<Typography variant='h5' sx={{ fontWeight: 'bold' }}>
					{typographyUtils.captalize(model.firstName) +
						' ' +
						typographyUtils.captalize(model.lastName)}
				</Typography>
				<Box
					mt={3}
					px={1}
					sx={{
						color: '#595959',
					}}
				>
					<Grid container spacing={4}>
						<Grid
							item
							xs={4}
							sm={4}
							md={4}
							lg={3}
							key={model.id}
							display={'flex'}
							alignItems='center'
						>
							<i className='fa-solid fa-user' style={{ marginRight: '10px' }}></i>
							<Typography variant='body1'>{model.gender}</Typography>
						</Grid>
						<Grid
							item
							xs={4}
							sm={4}
							md={4}
							lg={3}
							key={model.id}
							display={'flex'}
							alignItems='center'
						>
							<i className='fa-solid fa-clock' style={{ marginRight: '10px' }}></i>
							<Typography variant='body1'>
								{model.dateOfBirth
									? new Date().getFullYear() -
									  new Date(model.dateOfBirth).getFullYear() +
									  ' yrs'
									: ''}
							</Typography>
						</Grid>
						<Grid
							item
							xs={4}
							sm={4}
							md={4}
							lg={3}
							key={model.id}
							display={'flex'}
							alignItems='center'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/542/542606.png'
								style={{
									width: '20px',
									marginRight: '10px',
								}}
								alt='Not Found'
							/>
							<Typography variant='body1'>{model.braSize}</Typography>
						</Grid>
						<Grid
							item
							xs={4}
							sm={4}
							md={4}
							lg={3}
							key={model.id}
							display={'flex'}
							alignItems='center'
						>
							<i className='fa-solid fa-ruler-vertical' style={{ marginRight: '10px' }}></i>
							<Typography variant='body1'>{model.height}</Typography>
						</Grid>
						<Grid
							item
							xs={4}
							sm={4}
							md={4}
							lg={3}
							key={model.id}
							display={'flex'}
							alignItems='center'
						>
							<i className='fa-solid fa-dumbbell' style={{ marginRight: '10px' }}></i>
							<Typography variant='body1'>{model.weight}</Typography>
						</Grid>
						<Grid
							item
							xs={4}
							sm={4}
							md={4}
							lg={3}
							key={model.id}
							display={'flex'}
							alignItems='center'
						>
							<i className='fa-solid fa-shoe-prints' style={{ marginRight: '10px' }}></i>
							<Typography variant='body1'>{model.shoeSize}</Typography>
						</Grid>
						<Grid
							item
							xs={4}
							sm={4}
							md={4}
							lg={3}
							key={model.id}
							display={'flex'}
							alignItems='center'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/31/31457.png'
								style={{
									width: '20px',
									marginRight: '10px',
								}}
								alt='Not Found'
							/>
							<Typography variant='body1'>{model.hairColor}</Typography>
						</Grid>
						<Grid
							item
							xs={4}
							sm={4}
							md={4}
							lg={3}
							key={model.id}
							display={'flex'}
							alignItems='center'
						>
							<i className='fa-solid fa-briefcase' style={{ marginRight: '10px' }}></i>
							<Typography variant='body1'>{model.profession}</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default ModelPost;
