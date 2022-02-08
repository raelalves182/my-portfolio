import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Button, Container, Typography } from '@mui/material';
// Image
import { ReactComponent as Beaten } from '../../assets/beaten.svg';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
import { ResetPasswordForm } from '../../components/authentication/reset-password';
import { MHidden } from '../../components/@material-extend';
//
import { SentIcon } from '../../assets';

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
  top: '45%',
  right: '30%'
}));

const NavStyle = styled(Box)(({ theme }) => ({
  maxWidth: 384,
  margin: 'auto',
  display: 'flex',
  minHeight: '97vh',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: theme.spacing(0)
}));

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const [setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <RootStyle title="Reset Password | Beaten Games">
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
        <NavStyle>
          <Box sx={{ color: 'white' }}>
            {!sent ? (
              <>
                <Typography variant="h4" paragraph>
                  Forgot your password?
                </Typography>
                <Typography sx={{ mb: 5 }}>
                  Please enter the email address associated with your account and We will email you a link to reset your
                  password.
                </Typography>

                <ResetPasswordForm onSent={() => setSent(true)} onGetEmail={(value) => setEmail(value)} />
              </>
            ) : (
              <Box sx={{ textAlign: 'center' }}>
                <SentIcon sx={{ mb: 5, mx: 'auto', height: 160 }} />

                <Typography variant="h4" gutterBottom>
                  You've got mail!
                </Typography>
                <Typography>
                  You will receive an email with instructions on how to reset your password in a few minutes.
                  <br />
                  <Box
                    sx={{ mt: 1.5, ml: '70px', color: '#FF0099', fontSize: '12px', maxWidth: 230, textAlign: 'center' }}
                  >
                    IF YOU DON’T SEE OUR EMAIL, MAKE SURE TO CHECK YOUR SPAM FOLDER
                  </Box>
                </Typography>
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  component={RouterLink}
                  to={PATH_AUTH.login}
                  sx={{ mt: 5 }}
                >
                  Back
                </Button>
              </Box>
            )}
          </Box>
        </NavStyle>
        <Box>
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
