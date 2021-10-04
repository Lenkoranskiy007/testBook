import React, { ChangeEvent } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//Типизация для Компоненты TextField
type InputBaseType = {
  search: string;
  setSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: any;
};

//Компонент TextField
export function CustomizedInputBase(props: InputBaseType) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search book"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={props.search}
        onChange={props.setSearch}
      />

      <IconButton onClick={props.handleSubmit} type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

// Компонент Loader
export function CircularIndeterminate() {
  return (
    <Box className="circular" sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

type BtnType = {
  showeMoreItems: () => void;
};
//@ts-ignore
export function BasicButtons(props: BtnType) {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={props.showeMoreItems} variant="text">
        Load more
      </Button>
    </Stack>
  );
}
