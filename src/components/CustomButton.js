import styled from 'styled-components';
import { Button } from '@mui/material';

const CustomButton = styled(Button)`
  background-color: ${(props) =>
    props.theme.palette.mode === 'dark' ? 'palevioletred' : 'white'};
  color: ${(props) =>
    props.theme.palette.mode === 'dark' ? 'white' : 'palevioletred'};
  border: 2px solid palevioletred;
  &:hover {
    background-color: ${(props) =>
      props.theme.palette.mode === 'dark' ? '#d080a7' : '#f5f5f5'};
  }
`;

export default CustomButton;
