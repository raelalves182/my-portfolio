import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@mui/material';
// Image
import { ReactComponent as Beaten } from '../../assets/logo-beaten.svg';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 80;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.none
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  boxShadow: theme.customShadows.none,
  marginRight: 80
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: '#0B071B' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <BoxStyle>
            <RouterLink to="/">
              <Beaten />
            </RouterLink>
          </BoxStyle>

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <Box>
              <Button
                sx={{ borderRadius: 50 }}
                variant="outlined"
                color="secondary"
                to={PATH_AUTH.login}
                component={RouterLink}
              >
                Login
              </Button>

              <Button
                sx={{ ml: 2, borderRadius: 50 }}
                variant="contained"
                to={PATH_AUTH.register}
                component={RouterLink}
              >
                Sign up
              </Button>
            </Box>
          </MHidden>

          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
