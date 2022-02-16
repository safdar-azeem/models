import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, TextField } from '@mui/material';

interface IProps {
	label: string;
	value: any;
	handleChange: (fieldName: string, value: any) => void;
	name: string;
}

const Calendar = (props: IProps) => {
	return (
		<Box>
			<LocalizationProvider dateAdapter={AdapterDateFns} sx={{ width: '100%' }}>
				<DatePicker
					label={props.label}
					value={props.value}
					onChange={(newValue: any) => {
						props.handleChange(props.name, newValue);
					}}
					renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
				/>
			</LocalizationProvider>
		</Box>
	);
};

export default Calendar;