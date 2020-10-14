import React from 'react';
import CreateMotelRoom from 'containers/CreateMotelRoom/Loadable';
import { hashHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeListMotelRoom } from  'containers/App/selectors';
import saga from './saga';
import { useInjectSaga } from 'utils/injectSaga';
import Table from 'components/Table';
import reducer from '../App/reducer';
import { useInjectReducer } from 'utils/injectReducer';
import { repoLoadListMotelRoom } from '../App/actions';

const key = 'listMotelRoom';

export  function ListMotelRoom({
  listMotelRoom,
  onSubmit
}
){
  console.log(listMotelRoom);
  console.log("index");
  useInjectReducer({ key, reducer });
  useInjectSaga({key, saga});
  
    return(
        <section className="content">
        <div className="row">
        <div className="col-12">
        <div className="card">
        <div className="card-header">
       <div className="col-2">
       <button type="submit" onClick= { onSubmit } className="btn btn-block btn-primary"to="/createMotelRoom">Create</button>
       </div>
        </div>
        <div className="card-body">
          <Table listMotelRoom = {listMotelRoom} />
      </div>
    </div>
    </div>
    </div>
    </section>
    );
}

ListMotelRoom.propTypes = {
  listMotelRoom: PropTypes.array,
  onSubmit: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  listMotelRoom: makeListMotelRoom(),
})

export function mapDispatchToProps(dispatch){
return{
  onSubmit: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(repoLoadListMotelRoom());
  },
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMotelRoom);