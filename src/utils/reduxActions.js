import {makeRequest} from './request';

const initActionType = (type) => `INIT_${type}`;
const successActionType = (type) => `SUCCESS_${type}`;
const failActionType = (type) => `FAIL_${type}`;

const makeAction = (convertType) => ({type, payload, meta}, response) => {
    return {
        type: convertType(type),
        payload: response || payload,
        meta: {...(meta || {})}
    };
};

const makeRequestAction = makeAction(initActionType);
const makeSuccessAction = makeAction(successActionType);
const makeFailAction = makeAction(failActionType);

const getUrlRequest = ({ request }) => {
    // TODO: need more handle
    return request;
};
const parseJsonResponse = (response) => {
    if (response !== 'string') return {};
    try {
        return JSON.parse(response);
    } catch (e) {
        return {};
    }
};

const getRequestParams = ({ method, body, params, headers, options }, state) => {
    const hasJsonBody = !!body;
    const customHeaders = {
        // TODO: need to update later
        ...headers
    };
    if (hasJsonBody) {
        headers['Content-Type'] = 'application/json; charset=UTF-8';
    }

    return {
        headers: customHeaders,
        method: method || 'GET',
        params: { ...params },
        body: hasJsonBody ? JSON.stringify(body) : body
    };
};


const createAction = (action) => (dispatch, getState) => {
    const { type, payload = {}, meta = {}, onSuccess } = action;
    try {
        dispatch({ type, payload, meta });

        if(onSuccess && typeof onSuccess === 'function') {
            onSuccess(dispatch, getState);
        }

    } catch (error) {
        console.log('Error when create action', error);
    }
};

const createAsyncAction = (action) => async (dispatch, getState) => {
    const state = getState();
    const { payload, onSuccess, onError } = action;
    if(!payload || typeof payload.request !== 'string') {
        console.log('Error request url is not existed!');
        return false;
    }
    dispatch(makeRequestAction(payload));
    const { request, method, body, params, options, headers } = payload;
    try {
        const url = getUrlRequest({ request, ...options });
        const paramsForSend = getRequestParams({ method, body, params, headers, options }, state);
        const response = await makeRequest( {url, ...paramsForSend} );
        //TODO: need more validate on response

        if(onSuccess && typeof onSuccess === 'function') {
            onSuccess(dispatch, getState);
        }

        dispatch(makeSuccessAction(action, response));

        return response;

    } catch (error) {
        if (error.readyState === 0) {
            console.log('the internet connection is not good!');
        }
        const response = parseJsonResponse(error.message);

        if (typeof onError === 'function') {
            onError(dispatch, response, getState);
        }

        // TODO: need more handle
        return dispatch(makeFailAction(action));
    }
};


export {
    createAction,
    createAsyncAction
};
