import { MAF_GET_PROC, MAF_GET_BACKLOG } from '../../../actions/types'
import appConfig from '../../../config'

export const mafGetProc = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(appConfig.backendURL + 'maf/proc')
            let responseJSON = await response.json()
            dispatch({
                type: MAF_GET_PROC,
                payload: responseJSON.processes
            })
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const mafGetBacklog = () => {
    return {
        type: MAF_GET_BACKLOG
    }
}
