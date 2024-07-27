import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { orange } from '@mui/material/colors';



const BookButtonCustomized = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  textTransform: 'none',
  borderRadius: '2px',
  '&:hover': {
    backgroundColor: orange[700],
  },
}));


const BookButton = (props: any) => {
  return (
    <BookButtonCustomized {...props}>
      {props.children}
    </BookButtonCustomized>

  )
}

export default BookButton