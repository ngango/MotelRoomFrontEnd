import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMotelRoom = state => state.MotelRoom || initialState;

const makeListMotelRoom = () =>
 createSelector(
     selectMotelRoom,
     motelRoom => motelRoom.listMotelRoom
    );

export { selectMotelRoom, makeListMotelRoom};