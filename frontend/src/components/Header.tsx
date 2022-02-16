import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
function App() {
  return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Typography variant='h4' fontWeight='bold'>
				Models
			</Typography>
			<Link to='/upload' style={{ textDecoration: 'none' }}>
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
					Post New Model
				</Button>
			</Link>
		</Box>
	);
}

export default App
