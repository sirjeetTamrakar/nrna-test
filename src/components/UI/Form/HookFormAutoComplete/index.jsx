/* Third party libraries */
import React from 'react';

/* Third party libraries */
import { Autocomplete, InputLabel, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import Error from '../Error';

const useStyles = makeStyles((theme) => ({
  inputField: {
    '& .MuiOutlinedInput-input': {
      padding: '7px 16px',
      fontSize: '13px'
    },
    '& .MuiOutlinedInput-root': {
      padding: '0px 16px !important'
    }
  },
  autoCompleteField: {
    fontSize: '14px !important',
    '& .MuiAutocomplete-option': {
      fontSize: '14px'
    }
  }
}));

const HookFormAutoComplete = ({ name, label, placeholder = '', type = 'text', icon = '' }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  const classes = useStyles();

  return (
    <>
      <InputLabel
        sx={{ fontSize: '14px', color: '#201F37', paddingBottom: '4px', fontWeight: '500' }}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            freeSolo
            sx={{ fontSize: '14px !important' }}
            options={['Nepal', 'China']}
            className={classes.autoCompleteField}
            renderInput={(params) => (
              <TextField
                className={classes.inputField}
                {...params}
                onChange={onChange}
                value={value}
              />
            )}
          />
        )}
      />
      {errors && <Error>{errors[name]?.message}</Error>}
    </>
  );
};

export default HookFormAutoComplete;
