import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Container, Typography, Button } from '@mui/material';
// Image
import { ReactComponent as Beaten } from '../../assets/beaten.svg';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Page from '../../components/Page';
import { MHidden } from '../../components/@material-extend';
import { LoginForm } from '../../components/authentication/login';
import AuthFirebaseSocials from '../../components/authentication/AuthFirebaseSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  position: 'relative',
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
  minHeight: '80vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(13, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  const { method, login } = useAuth();

  const handleLoginAuth0 = async () => {
    try {
      await login();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RootStyle title="Login | Beaten Games">
      <MHidden width="mdDown">
        <SectionStyle>
          <ImageStyle>
            <Link href="/" alt="Home">
              <Beaten />
            </Link>
          </ImageStyle>
          <img src="/static/illustrations/auth.png" alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1, color: 'white' }}>
              <Typography variant="h4" gutterBottom>
                Sign in
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Free forever.</Typography>
            </Box>
          </Stack>

          <AuthFirebaseSocials />

          {method !== 'auth0' ? (
            <LoginForm />
          ) : (
            <Button fullWidth size="large" type="submit" variant="contained" onClick={handleLoginAuth0}>
              Login
            </Button>
          )}
        </ContentStyle>
        <Box width="smUp">
          <Typography variant="subtitle2" sx={{ pt: 11, textAlign: 'center', color: 'white' }}>
            Already have an account?&nbsp;
            <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
              Get started
            </Link>
          </Typography>
        </Box>
      </Container>
    </RootStyle>
  );
}
