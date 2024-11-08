// IMPORTS
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';

// FRONTEND
const CustomDateCalendar = styled(DateCalendar)(() => ({
  width: '50%', // Default width for smaller screens
  margin: 'auto', // Center the calendar horizontally
  '& .MuiDayCalendar-weekDayLabel': {
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center', // Center week day labels
  },
  '& .MuiTypography-root.MuiPickersCalendarHeader-yearSelection, & .MuiTypography-root.MuiPickersCalendarHeader-monthSelection': {
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center', // Center the month and year selector
  },
  '& .MuiTypography-root.MuiPickersCalendarHeader': {
    display: 'flex',
    justifyContent: 'center', // Center the header content horizontally
    textAlign: 'center', // Ensure the text in the header is also centered
  },
  '& .MuiPickersDay-root.Mui-selected': {
    backgroundColor: '#1976d2',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#115293',
    },
  },
  '& .MuiIconButton-root': {
    color: '#1976d2',
    '&:hover': {
      color: '#115293',
    },
  },
}));

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomDateCalendar
        defaultValue={dayjs()}
        sx={{
          // Adjust size for larger screens using media queries
          '@media (min-width: 1280px)': {
            width: '40%', // Decrease width for xl screens
          },
          // Ensure the calendar is aligned left on medium screens and larger
          '@media (min-width: 768px)': {
            marginLeft: 0, // Remove margin-left for medium and above
            marginRight: 'auto', // Align to the left side
          },
        }}
      />
    </LocalizationProvider>
  );
}
