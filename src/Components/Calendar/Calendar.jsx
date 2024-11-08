// IMPORTS
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';

// FRONTEND
const CustomDateCalendar = styled(DateCalendar)(() => ({
  width: '50%', 
  margin: 'auto', 
  '& .MuiDayCalendar-weekDayLabel': {
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center', 
  },
  '& .MuiTypography-root.MuiPickersCalendarHeader-yearSelection, & .MuiTypography-root.MuiPickersCalendarHeader-monthSelection': {
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  '& .MuiTypography-root.MuiPickersCalendarHeader': {
    display: 'flex',
    justifyContent: 'center', 
    textAlign: 'center', 
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
          '@media (min-width: 1280px)': {
            width: '40%', 
          },

          '@media (min-width: 768px)': {
            marginLeft: 0, 
            marginRight: 'auto', 
          },
        }}
      />
    </LocalizationProvider>
  );
}
