/*
    Creates $NAME_REQUEST, $NAME_SUCESS, $NAME_FAILURE actions
    accessed by $NAME.$STATE, e.g. FETCH_MESSAGE.REQUEST
*/
import { createAction } from 'redux-actions'
import update from 'immutability-helper'

export const INIT = 'INIT'
export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const TYPES = {
    INIT,
    REQUEST,
    SUCCESS,
    FAILURE,
}

export const PUSH = 'PUSH'
export const UNSHIFT = 'UNSHIFT'
export const SPLICE = 'SPLICE'
export const SET = 'SET'
export const UNSET = 'UNSET'
export const MERGE = 'MERGE'
export const APPLY = 'APPLY'

export const COMMAND = {
    MERGE,
    SET,
    PUSH,
}

/**
 * Action Type을 생성해주는 함수.
 * @param {string} base Action의 베이스 문자
 * @return {ReduxActionTypes}
 */
export const createActionTypes = (base) =>
    [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`
        return acc
    }, {})

/**
 * 단일 Action을 생성해주는 함수.
 * @param {string} base Action의 베이스 문자
 * @return {ReduxActions.ActionFunctionAny<ReduxActions.Action<any>>}
 */
export const createActionHelper = (base) => createAction(base)

export const createActionsHelper = (base) =>
    Object.keys(base).reduce((acc, type) => {
        acc[type] = createAction(base[type])
        return acc
    }, {})

/**
 * 비동기 Action을 생성해주는 함수.
 * @param {string} base Action의 베이스 문자
 * @param {import('axios').AxiosPromise} api 비동기 Service API
 * @param {*} payload Action 페이로드
 * @param {*} headers Service API의 헤더 값
 * @return {import('axios').AxiosPromise}
 */
export const createRequestHelper = (base, api, payload, headers) => (dispatch) => {
    const actionCreators = createActionsHelper(base)
    dispatch(actionCreators.REQUEST(payload))
    return api(payload, headers)
        .then((response) => {
            dispatch(actionCreators.SUCCESS(response.data))
            return response
        })
        .catch((error) => {
            if (!error.response) {
                const data = {
                    message: error.message,
                    status: 0,
                }
                dispatch(actionCreators.FAILURE(data))
            } else {
                dispatch(actionCreators.FAILURE(error.response.data))
            }
            return error
        })
}

export const createRequestHelperV1 = (base, api, payload, headers) => () => (dispatch) => {
    const actionCreators = createActionsHelper(base)
    dispatch(actionCreators.REQUEST(payload))
    return api(payload, headers)
        .then((response) => {
            dispatch(actionCreators.SUCCESS(response.data))
        })
        .catch((error) => {
            if (!error.response) {
                const data = {
                    message: error.message,
                    status: 0,
                }
                dispatch(actionCreators.FAILURE(data))
            } else {
                dispatch(actionCreators.FAILURE(error.response.data))
            }
        })
}

export const createAsyncRequestHelper = (base, api, payload, headers) => async (dispatch) => {
    const actionCreators = createActionsHelper(base)
    dispatch(actionCreators.REQUEST(payload))
    try {
        const response = await api(payload, headers)
        dispatch(actionCreators.SUCCESS(response.data))
    } catch (error) {
        if (!error.response) {
            const data = {
                message: error.message,
                status: 0,
            }
            dispatch(actionCreators.FAILURE(data))
        } else {
            dispatch(actionCreators.FAILURE(error.response.data))
        }
    }
}

export const createAsyncRequestHelperV1 = (base, api, payload, headers) => () => async (dispatch) => {
    const actionCreators = createActionsHelper(base)
    dispatch(actionCreators.REQUEST(payload))
    try {
        const response = await api(payload, headers)
        dispatch(actionCreators.SUCCESS(response.data))
    } catch (error) {
        if (!error.response) {
            const data = {
                message: error.message,
                status: 0,
            }
            dispatch(actionCreators.FAILURE(data))
        } else {
            dispatch(actionCreators.FAILURE(error.response.data))
        }
    }
}

/**
 * Reducer Update 함수
 * @param {*} state Reducer State
 * @param {ReduxActionType} actionType Action 종류
 * @param {*} payload Action 페이로드
 * @param {ReduxActionCommand} command SET, MERGE, PUSH
 */
export const updateReducer = (state, actionType, payload, command) => {
    if (!payload) {
        return update(state, {
            statusMessage: {
                $set: actionType,
            },
        })
    }
    return Object.keys(payload).reduce((prev, curr) => {
        if (command === SET) {
            return update(prev, {
                statusMessage: {
                    $set: actionType,
                },
                [curr]: {
                    $set: payload[curr],
                },
            })
        } else if (command === MERGE) {
            return update(prev, {
                statusMessage: {
                    $set: actionType,
                },
                [curr]: {
                    $merge: payload[curr],
                },
            })
        } else if (command === PUSH) {
            return update(prev, {
                statusMessage: {
                    $set: actionType,
                },
                [curr]: {
                    $push: payload[curr],
                },
            })
        }
        return update(prev, {
            statusMessage: {
                $set: actionType,
            },
            [curr]: {
                $set: payload[curr],
            },
        })
    }, state)
}
