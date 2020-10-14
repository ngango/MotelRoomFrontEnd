import { call, put, takeLatest, all } from 'redux-saga/effects';
import { LOAD_LIST_MOTEL_ROOM } from 'containers/App/constants';
import { repoLoadListSuccess } from 'containers/App/actions';


import request from 'utils/request';

export function* getRepoListMotelRoom(){
    const requestURL = `http://localhost:61786/api/Districts`;
    
    try{

        const repos = yield call(request,requestURL);
        yield put(repoLoadListSuccess(repos));

    }catch(e){
      console.log(e);
    }
}

export default function* githubData(){
    yield takeLatest(LOAD_LIST_MOTEL_ROOM,getRepoListMotelRoom);
}