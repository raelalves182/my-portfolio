import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
// material
import { styled } from '@mui/material/styles';
import { Box, Input, Stack, Avatar, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// components
import { MIconButton } from '../../components/@material-extend';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 42;

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  marginRight: '32px',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #171137',
  borderRadius: '5px',
  height: APPBAR_MOBILE,
  padding: theme.spacing(0, 3),
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 1)
  }
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  return (
    <Box display="flex">
      <SearchbarStyle>
        <Input
          autoFocus
          fullWidth
          disableUnderline
          placeholder="Search for games…"
          sx={{ mr: 1, fontWeight: 'fontWeightNormal', fontSize: '14px' }}
        />
        <MIconButton sx={{ borderLeft: '1px solid #171137', borderRadius: '0', color: '#ffffff', padding: '0 8px' }}>
          <Icon icon={searchFill} width={20} height={20} />
        </MIconButton>
      </SearchbarStyle>
      <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar alt="Avatar" src="/static/aulus.png" />
        <Typography margin={1.25}>Aulus</Typography>
        <ArrowDropDownIcon />
      </Stack>
    </Box>
  );
}
