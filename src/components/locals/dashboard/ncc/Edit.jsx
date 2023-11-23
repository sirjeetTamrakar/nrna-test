import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import NCCForm from './Form';
import { updateNCC } from './redux/actions';
import { useStyles } from './styles';
import { editValidationSchema } from './ValidationSchema';

const EditForm = ({ handleClose, detail }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { update_ncc_loading } = useSelector((state) => state.ncc);

  const onSubmit = (data) => {
    console.log('nccDataaa', { data });
    const formData = new FormData();
    formData.append('country_name', data?.country_name);
    formData.append('admin_id', data?.admin_id);
    formData.append('_method', 'PUT');

    let obj = {};
    data?.regions?.forEach((item, index) => {
      const fieldName = `regions[${index}][region_id]`;
      obj[fieldName] = item;
    });

    Object.keys(obj)?.map((key) => {
      formData.append(key, obj?.[key]);
    });

    formData.append('color', data?.color ? data?.color : '#276FC4');
    if (data?.logo?.length > 0) {
      formData.append('logo', data?.logo[0]);
    }
    dispatch(updateNCC(formData, detail?.slug, handleClose));
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <NCCForm logo={detail?.logo} />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={update_ncc_loading} />
      </Box>
    </CustomForm>
  );
};

const Edit = ({ data, handleClose }) => {
  console.log('jasbjsab', { data });
  const defaultRegions = data?.ncc_regions?.map((region) => Number(region?.region_id)) || [];

  console.log('ppooppopp', { defaultRegions });
  const defaultValues = {
    country_name: data?.country_name,
    admin_id: data?.admin?.id,
    color: data?.color,
    regions: defaultRegions
  };
  console.log('mnnnmmmmm', { data });
  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(editValidationSchema)}>
        <EditForm detail={data} handleClose={handleClose} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
