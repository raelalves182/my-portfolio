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
    display: 'flex',
    height: '100vh'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: 'none',
  display: 'flex',
  justifyContent: 'center',
  margin: theme.spacing(0)
}));

const ImageStyle = styled(Box)(() => ({
  position: 'absolute',
  zIndex: '1',
  top: '45%'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 384,
  margin: 'auto',
  display: 'flex',
  minHeight: '97vh',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: theme.spacing(0)
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Register | Beaten Games">
      <MHidden width="mdDown">
        <SectionStyle>
          <ImageStyle>
            <Link href="/" alt="Home">
              <Beaten />
            </Link>
          </ImageStyle>
          <img alt="register" src="/static/illustrations/bg-auth-image.png" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
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
            By registering, I agree to Beaten&nbsp;
            <Link underline="none" color="text.secondary" href="#">
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="none" color="text.secondary" href="#">
              Privacy Policy
            </Link>
            .
          </Typography>
        </ContentStyle>
        <Box width="smUp">
          <Typography variant="subtitle2" sx={{ textAlign: 'center', color: 'white' }}>
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
