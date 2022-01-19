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
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0)
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

const NavStyle = styled(Box)(({ theme }) => ({
  maxWidth: 384,
  margin: 'auto',
  display: 'flex',
  minHeight: '90vh',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: theme.spacing(0)
}));

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <RootStyle title="Reset Password | Beaten Games">
      <MHidden width="mdDown">
        <SectionStyle>
          <ImageStyle>
            <Beaten />
          </ImageStyle>
          <img alt="register" src="/static/illustrations/auth.png" />
        </SectionStyle>
      </MHidden>

      <Container>
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

                <Typography variant="h3" gutterBottom>
                  Request sent successfully
                </Typography>
                <Typography>
                  We have sent a confirmation email to &nbsp;
                  <strong>{email}</strong>
                  <br />
                  Please check your email.
                </Typography>

                <Button size="large" variant="contained" component={RouterLink} to={PATH_AUTH.login} sx={{ mt: 5 }}>
                  Back
                </Button>
              </Box>
            )}
          </Box>
        </NavStyle>
        <Box>
          <Typography variant="subtitle2" sx={{ pt: 11, textAlign: 'center', color: 'white' }}>
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
