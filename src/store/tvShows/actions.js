import { MUTATE_ADD_SHOW } from "../../constants/mutations.type";
import Services from '../../services/ApiList'


/**
* Assigns tv show
 * 
 * @param {state} commit 
 * @param {Object} payload 
*/
export async function AssignTvShow ({ commit }, payload) {
    try {
        let response = await Services.getTvShows(payload);	      
        commit(MUTATE_ADD_SHOW, response.data);
    } catch (e) {
        console.log('Data fetch failure:', e)
    }    
}