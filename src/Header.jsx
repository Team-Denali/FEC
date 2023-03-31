import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import logo from './logo.png';

const AppHeader = styled(AppBar)({
  backgroundColor: '#3f51b5',
});

const LogoImg = styled('img')({
  height: 50,
  marginRight: 16,
});

const TitleText = styled(Typography)({
  flexGrow: 1,
  fontWeight: 'bold',
});

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
}));

function Header() {
  return (
    <AppHeader position="static" style={{ marginBottom: '20px'}}>
      <Toolbar>
        <LogoImg src={logo} alt="logo" />
        <TitleText variant="h6">
        </TitleText>
        <SearchContainer>
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
          <SearchInput
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchContainer>
      </Toolbar>
    </AppHeader>
  );
}

export default Header;