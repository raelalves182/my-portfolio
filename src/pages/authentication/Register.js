import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// Image
import { ReactComponent as Beaten } from '../../assets/beaten.svg';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
import { MHidden } from '../../components/@material-extend';
import { RegisterForm } from '../../components/authentication/register';
import AuthFirebaseSocials from '../../components/authentication/AuthFirebaseSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  boxShadow: 'none',
  backgroundColor: 'none',
  display: 'flex',
  justifyContent: 'center',
  margin: theme.spacing(0)
}));

const ImageStyle = styled(Box)(() => ({
  position: 'absolute',
  zIndex: '1',
  top: '45%',
  right: '30%'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 384,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: theme.spacing(13)
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Register | Beaten Games">
      <MHidden width="mdDown">
        <SectionStyle>
          <ImageStyle>
            <Beaten />
          </ImageStyle>
          <img alt="register" src="/static/illustrations/auth.png" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1, color: '#fff' }}>
              <Typography variant="h4" gutterBottom>
                Get started absolutely free.
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Free forever.</Typography>
            </Box>
          </Box>

          <AuthFirebaseSocials />

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3, fontSize: '12px' }}>
            By registering, I agree to Minimal&nbsp;
            <Link underline="always" color="text.primary" href="#">
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" color="text.primary" href="#">
              Privacy Policy
            </Link>
            .
          </Typography>
        </ContentStyle>
        <Box width="smUp">
          <Typography variant="subtitle2" sx={{ pt: 12, textAlign: 'center', color: 'white' }}>
            Already have an account?&nbsp;
            <Link to={PATH_AUTH.login} component={RouterLink}>
              Login
            </Link>
          </Typography>
        </Box>
      </Container>
    </RootStyle>
  );
}
