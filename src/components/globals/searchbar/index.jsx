import { Paper, IconButton, InputBase } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => (
  <Paper
    component="form"
    sx={{
      p: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      height: '32px',
      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      alignSelf: 'flex-end !important',
      marginLeft: 'auto !important'
    }}>
    <InputBase sx={{ ml: 1, flex: 1, fontSize: '14px !important' }} placeholder="Search" />
    <IconButton sx={{ padding: '5px' }} aria-label="search">
      <SearchIcon sx={{ fontSize: '24px !important' }} />
    </IconButton>
  </Paper>
);

export default SearchBar;
