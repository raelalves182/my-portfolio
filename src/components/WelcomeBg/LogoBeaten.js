import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Logo from '../../assets/logo-beaten.svg';

const LogoStyle = styled(Box)(() => ({
  position: 'absolute',
  transform: 'translate(0, -50%)',
  top: '50%',
  right: '34%',
  width: '52%'
}));

export default function LogoBeaten() {
  return (
    <Box>
      <LogoStyle>
        <img alt="logo" width="100%" height="100%" src={Logo} />
      </LogoStyle>
    </Box>
  );
}
