import axios from 'axios';
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './index';

export const searchStart = () => {
  return {
    type: SEARCH_REQUEST,
  };
};

export const searchSuccess = (items) => {
  return {
    type: SEARCH_SUCCESS,
    payload: items,
  };
};

export const searchError = (errors) => {
  return {
    type: SEARCH_ERROR,
    errors,
  };
};

export const fetchImage = (keyword) => {
  return (dispatch) => {
    dispatch(searchStart());
    // axios.get(`https://api.github.com/search/users?q=${keyword}`)
    axios.get('https://api.github.com/users/'+keyword+'/repos')
      .then((response) => {
        // console.log(response.data);
        const items = response.data;
        // const {items} = response.data;
        // console.log(items);
        dispatch(searchSuccess(items));
      })
      .catch((error) => {
        dispatch(searchError(error));
      });
  };
};
