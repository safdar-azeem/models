import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface IProps {
	title: string;
	buttonText: string;
	buttonLink: string;
}

function App(props: IProps) {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Typography variant='h4' fontWeight='bold'>
				{props.title}
			</Typography>
			<Link to={props.buttonLink} style={{ textDecoration: 'none' }}>
				<Button
					sx={{
						backgroundColor: 'black',
						color: 'white',
						'&:hover': {
							backgroundColor: 'black',
							color: 'white',
						},
					}}
				>
					{props.buttonText}
				</Button>
			</Link>
		</Box>
	);
}

export default App;
