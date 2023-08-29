import { deleteBannerApi, getBannerApi, postBannerApi, updateBannerApi } from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getBanner = () => (dispatch) => {
  dispatch({ type: actions.GET_BANNER_BEGIN });
  getBannerApi()
    .then((res) => {
      dispatch({ type: actions.GET_BANNER_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_BANNER_ERROR });
    });
};

export const postBanner = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_BANNER_BEGIN });
  postBannerApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_BANNER_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getBanner());
      successToast('Your message sent successfully');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_BANNER_ERROR });
    });
};

export const deleteBanner =
  (Data, refetch = () => {}) =>
  async (dispatch) => {
    dispatch({ type: actions.DELETE_BANNER_BEGIN });

    try {
      await deleteBannerApi(Data);
      console.log('dataaa', Data);
      refetch && refetch();
      dispatch({
        type: actions.DELETE_BANNER_SUCCESS,
        payload: ''
      });
      successToast('Banner has been deleted');
    } catch (error) {
      dispatch({ type: actions.DELETE_BANNER_ERROR });
      console.log(error);
      errorToast(error);
    }
  };

export const updateBanner =
  (Data, slug, refetch = () => {}) =>
  async (dispatch) => {
    dispatch({ type: actions.UPDATE_BANNER_BEGIN });

    try {
      await updateBannerApi(Data, slug);
      refetch && refetch();
      console.log('dataaasssssssssssss', Data);
      dispatch({
        type: actions.UPDATE_BANNER_SUCCESS,
        payload: ''
      });
      successToast('Banner has been updated');
    } catch (error) {
      dispatch({ type: actions.UPDATE_BANNER_ERROR });
      console.log({ error });
      errorToast(error);
    }
  };
