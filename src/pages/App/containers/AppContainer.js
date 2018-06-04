import { connect } from 'react-redux';
import App from '../components/App';

import { fetchImage } from '../modules/actions';

export default connect(
  ({ app }) => ({ ...app }),
  (dispatch) => ({
    fetchImage: (keyword) => dispatch(fetchImage(keyword)),
  }),
)(App);
