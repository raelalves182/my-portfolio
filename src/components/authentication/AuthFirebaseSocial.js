import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
// material
import { Stack, Button, Divider, Typography } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

export default function AuthFirebaseSocials() {
  const { loginWithGoogle, loginWithFaceBook, loginWithTwitter } = useAuth();

  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginFaceBook = async () => {
    try {
      await loginWithFaceBook();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginTwitter = async () => {
    try {
      await loginWithTwitter();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Stack direction="row" spacing={4}>
        <Button fullWidth size="large" color="primary" variant="outlined" onClick={handleLoginGoogle}>
          <Icon icon={googleFill} color="#FF0099" height={24} />
        </Button>

        <Button fullWidth size="large" color="primary" variant="outlined" onClick={handleLoginFaceBook}>
          <Icon icon={facebookFill} color="#FF0099" height={24} />
        </Button>

        <Button fullWidth size="large" color="primary" variant="outlined" onClick={handleLoginTwitter}>
          <Icon icon={twitterFill} color="#FF0099" height={24} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body1" sx={{ color: 'white' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
