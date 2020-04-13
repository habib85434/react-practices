import { fetchUserLists } from '../../../actions/user-list-actions';
import { connect } from 'react-redux';
import { destroy, submit } from 'redux-form';
import ProjectHome from './nxt-project-home';

const mapDispatchToProps = dispatch => {
  return {
    handleUserListFetch: () => {
      dispatch(fetchUserLists());
    },
    destroyProjectWizardForm: () => dispatch(destroy('wizard')),
    handleWizardSubmit: () => dispatch(submit('wizard'))
  };
};

const mapStateToProps = ({ projects, userListData }) => {
  return {
    project: projects,
    userListData: userListData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectHome);
