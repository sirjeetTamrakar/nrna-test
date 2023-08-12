/* Third party libraries */
import React from 'react';

/* Third party libraries */
import { InputLabel } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

/* Components */
import Error from '../Error';
import { Box } from '@mui/system';

const HookFormReactSelect = ({
  name,
  fieldName,
  label,
  placeholder = '',
  type = 'text',
  required = false
}) => {
  const {
    control,
    formState: { errors },
    setValue
  } = useFormContext();

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      padding: 5,
      fontSize: '13px'
    }),
    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      minHeight: '29px',
      height: '29px',
      boxShadow: state.isFocused ? null : null,
      borderRadius: '0px',
      fontSize: '14px'
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: '29px',
      padding: '0 6px'
    }),

    input: (provided, state) => ({
      ...provided,
      margin: '0px'
    }),
    indicatorSeparator: (state) => ({
      display: 'none'
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '29px'
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        fontSize: '13px'
      };
    }
  };

  const data = [
    { value: 'nepal', label: 'Nepal' },
    { value: 'china', label: 'China' },
    { value: 'india', label: 'India' }
  ];
  return (
    <>
      <Box display="flex" columnGap={0.5} alignItems="center">
        <InputLabel
          sx={{ fontSize: '14px', color: '#201F37', paddingBottom: '4px', fontWeight: '500' }}>
          {label}
        </InputLabel>
        {required && <span style={{ color: 'red' }}>*</span>}
      </Box>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select styles={customStyles} options={data} onChange={onChange} value={value} />
        )}
      />
      {Object.keys(errors).length > 0 && <Error>{errors[fieldName]?.message}</Error>}
    </>
  );
};

export default HookFormReactSelect;
