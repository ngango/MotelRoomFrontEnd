import React from 'react';
import PropTypes from 'prop-types';

export function Table(props){
    return(
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
      {
        props.listMotelRoom.map(value => {
          return( <tr key={ value.id }>
            <td>{value.name}</td>
            <td>{value.name}</td>
            <td>{value.name}</td>
            <td>{value.name}</td>
            <td>{value.name}</td>
            <td><button type="button" className="btn btn-block btn-primary">Edit</button><button type="button" className="btn btn-block btn-danger">Delete</button></td>
          </tr>)
       
        })
      }  
    </tbody>
  </table>
  )
}

Table.propTypes = {
  listMotelRoom: PropTypes.array,
};

export default  Table;