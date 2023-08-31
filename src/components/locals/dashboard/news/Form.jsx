import { Box, Grid } from '@mui/material';
import CustomEditor from 'components/common/CustomEditor';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomInput from 'components/common/Form/CustomInput';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

const NewsForm = ({ featureImage }) => {
  const classes = useStyles();
  const { usersData } = useSelector((state) => state.auth);

  const createdByUsers = usersData?.map((item) => ({
    label: item?.name,
    value: item?.id
  }));

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CustomInput name="title" label="Title" required />
        </Grid>

        <Grid item sm={12}>
          <FileUploader
            title="News Image"
            imageText="Resolution: height: 1024 x width: 768"
            name="feature_image"
            image={featureImage}
            label="Select Photo"
            widthFull
          />
        </Grid>
        <Grid item sm={12}>
          <CustomEditor name="description" />
        </Grid>
        <Grid item sm={12}>
          <CustomAutoComplete
            placeholder="Created By"
            name="created_by"
            label="Created By"
            options={createdByUsers ?? []}
            required
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsForm;
