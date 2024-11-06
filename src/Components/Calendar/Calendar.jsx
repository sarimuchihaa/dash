import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';

const CustomDateCalendar = styled(DateCalendar)({
  '& .MuiDayCalendar-weekDayLabel': {
    fontWeight: 'bold',
    color: '#000000',
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
});

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomDateCalendar defaultValue={dayjs()} />
    </LocalizationProvider>
  );
}
