import { getState } from 'redux'
import appConfig from '../config'
import { GET_APP_PARAMS, SET_APP_ERROR } from './types'

export const getUserMenu = () => {
    return async (dispatch) => {
        try {
            const menuURL = appConfig.getMenuURL
            let response = await fetch(menuURL,
            {       
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                timeout: 15000, 
            })
            try{
                let responseJSON = await response.json()
                appConfig.env = responseJSON
                dispatch({
                    type: GET_APP_PARAMS,
                    payload: responseJSON
                })
            } catch(error) {
                dispatch({
                    type: SET_APP_ERROR,
                    payload: {
                        title: 'Failed to parse JSON ' + error,
                        from: 'getUserMenu',
                        component: 'HomeScreen',
                        severity: 'Critical'
                    }
                })
            }
        }
        catch(error) {
            dispatch({
                type: SET_APP_ERROR,
                payload: {
                    title: 'Failed fetch data from Backend ' + error,
                    from: 'getUserMenu',
                    component: 'HomeScreen',
                    severity: 'Critical'
                }
            })
        }
    }
}

export const setAppError = (e) => {
    return {
        type: SET_APP_ERROR,
        payload: e
    }
}

export const appCallBackend = (caller, path, method='get') => {
    const { env } = appConfig
    appId = appConfig.apps[caller].appId
    return fetch(`${appConfig.backendURL}${path}`, { 
        method: method, 
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-appid': appId,
            'x-msisdn': env.msisdn,
            'x-pincode': env.PinCode,
            'x-token': env.token,
            'x-username': env.userName
        })
    })
}