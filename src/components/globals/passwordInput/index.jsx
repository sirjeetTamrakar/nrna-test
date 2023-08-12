import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';
import useToggle from 'hooks/useToggle';

import useStyles from './styles';

const PasswordField = ({ name, register, label, error, placeholder, helperText, isRequired }) => {
  const [notVisible, setNotVisible] = useToggle(false);
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
          type={!notVisible ? 'password' : 'text'}
          name={name}
          {...register(name)}
        />
        <span>
          {notVisible && (
            <VisibilityOutlined
              onClick={setNotVisible}
              fontSize="large"
              className={`${classes.inputIcon} ${error && classes.inputIconError}`}
            />
          )}
          {!notVisible && (
            <VisibilityOffOutlined
              onClick={setNotVisible}
              fontSize="large"
              className={`${classes.inputIcon} ${error && classes.inputIconError}`}
            />
          )}
        </span>
      </Box>
      {!error && helperText && <small className={classes.helperMessage}>{helperText}</small>}
      {error && (
        <small className={`${classes.helperMessage} ${error && classes.inputIconError}`}>
          {error.message}
        </small>
      )}
    </Box>
  );
};

export default PasswordField;

PasswordField.defaultProps = {
  error: null,
  label: 'Enter password label',
  isRequired: false,
  placeholder: 'Placeholder here',
  helperText: '',
  name: '',
  register: () => {}
};
