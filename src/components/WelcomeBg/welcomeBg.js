import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Welcome from '../../assets/welcome.svg';

const BgStyle = styled(Box)(() => ({
  position: 'absolute',
  transform: 'translate(34%, 0)',
  top: '57px',
  minWidth: '50vh',
  minHeight: '57vw'
}));

export default function welcomBg() {
  return (
    <Box>
      <BgStyle>
        <Welcome />;
      </BgStyle>
    </Box>
  );
}
