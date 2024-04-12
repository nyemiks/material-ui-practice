import InputBase from '@mui/material/InputBase';

export default function SearchIcon2() 
{
 return (<InputBase sx={{
         color: 'inherit',
         width: '100%',
         '& .MuiInputBase-input': {p: 1,
                                   paddingLeft: (theme) =>  theme.spacing(4)
                                  }
 }}>
          </InputBase>);
 }