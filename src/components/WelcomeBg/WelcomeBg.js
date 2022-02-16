import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Welcome from '../../assets/welcome.svg';

const BgStyle = styled(Box)(() => ({
  position: 'absolute',
  transform: 'translate(0, -50%)',
  top: '50%',
  right: '20px',
  width: '30%'
}));

export default function WelcomBg() {
  return (
    <Box>
      <BgStyle>
        <img alt="logo" width="100%" height="100%" src={Welcome} />
      </BgStyle>
    </Box>
  );
}
