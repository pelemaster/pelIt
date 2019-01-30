//import { CC_GET_ENV } from '../../../actions/types'
import { appCallBackend } from '../../../actions/commonActions'

export const CcGetEnv = () => {
    return async (dispatch) => {
            try {
                let response = await appCallBackend('CC', 'cc/getenv')
                let responseJSON = await response.json()
                let result = responseJSON.EnvList.filter(env => env.Environment).sort()
                console.log(result)
              /*  dispatch({
                    type: MAF_GET_PROC,
                    payload: responseJSON.processes
                }) */
            }
            catch(error) {
                console.error(error)
            }
        }        
}