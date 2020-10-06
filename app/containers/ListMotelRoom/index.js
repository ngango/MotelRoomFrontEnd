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
import { repoLoadListMotelRoom } from '../App/actions';


const key = 'listMotelRoom';

export  function ListMotelRoom({
  listMotelRoom
}
){
  useInjectSaga({key, saga});
    return(
      <Router history={hashHistory}>
        <section className="content">
        <div className="row">
        <div className="col-12">
        <div className="card">
        <div className="card-header">
       <div className="col-2">
       <NavLink type="button" className="btn btn-block btn-primary"to="/createMotelRoom">Create</NavLink>
       </div>
        </div>
        <div className="card-body">
        <table id="example2" className="table table-bordered table-hover">
          <thead>
          <tr>
            <th>Rendering engine</th>
            <th>Browser</th>
            <th>Platform(s)</th>
            <th>Engine version</th>
            <th>CSS grade</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            { listMotelRoom.array.forEach(element => {
              <tr>
              <td>Trident</td>
              <td>Internet
                Explorer 4.0
              </td>
              <td>Win 95+</td>
              <td> 4</td>
              <td>X</td>
              <td><button type="button" className="btn btn-block btn-primary">Edit</button><button type="button" className="btn btn-block btn-danger">Delete</button></td>
            </tr>
            })}
          
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
     <Switch>
     <Route path="/createMotelRoom" component={CreateMotelRoom} />
     </Switch>
    </section>
    </Router>
    );
}

ListMotelRoom.propTypes = {
  listMotelRoom: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  listMotelRoom: makeListMotelRoom(),
})

export function mapDispatchToProps(dispatch){
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMotelRoom);