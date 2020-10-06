import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_LIST_MOTEL_ROOM } from 'containers/App/constants';
import { repoLoadListMotelRoom } from 'containers/App/actions';

import request from 'utils/request';

export function* getRepoListMotelRoom(){
    const requestURL = `https://localhost:44300/api/Districts`;
    try{

        const repos = yield call(request,requestURL);
        yield put(repoLoadListMotelRoom(repos));

    }catch{

    }
}

export default function* githubData(){
    yield takeLatest(LOAD_LIST_MOTEL_ROOM,getRepoListMotelRoom);
}