import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Typography } from '@mui/material';
// import Error from 'components/UI/Form/Error';
import { Controller } from 'react-hook-form';
import style from './style';

const CustomEditor = ({ name, control }) => {
  const classes = style();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <div className={classes.richTextEditor}>
            <Typography className={classes.descriptionLable}>Description</Typography>
            <CKEditor
              onReady={(editor) => {
                //  editor.ui.view.editable.element.style.height = "200px";
                console.log({ editor });
              }}
              editor={ClassicEditor}
              data={value}
              onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
        )}
      />

      {/* <Error>{errors?.[name]?.message}</Error> */}
    </>
  );
};

export default CustomEditor;
