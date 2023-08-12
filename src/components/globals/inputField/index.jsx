import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box } from '@mui/system';
import useStyles from './styles';

const InputField = ({
  type,
  error,
  label,
  isRequired,
  placeholder,
  helperText,
  register,
  name
}) => {
  const classes = useStyles();
  return (
    <Box display={'flex'} flexDirection={'column'} width={'100%'}>
      <Box display={'flex'}>
        <label className={error ? classes.errorLabel : classes.label}>{label}</label>
        {isRequired && <span className={classes.requiredElement}>*</span>}
      </Box>
      <Box className={classes.inputContainer}>
        <input
          placeholder={placeholder}
          className={`${classes.input} ${error && classes.inputError}`}
          type={type}
          {...register(name)}
        />
        <span>{error && <InfoOutlinedIcon fontSize="medium" className={classes.inputIcon} />}</span>
      </Box>
      {!error && helperText && <small className={classes.helperMessage}> {helperText}</small>}
      {error && (
        <small className={`${classes.helperMessage} ${error && classes.inputIconError}`}>
          {error.message}
        </small>
      )}
    </Box>
  );
};

InputField.defaultProps = {
  type: 'text',
  error: null,
  label: 'Enter label text',
  isRequired: false,
  placeholder: 'Placeholder here',
  helperText: ''
};

export default InputField;
