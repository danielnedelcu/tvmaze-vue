import { MUTATE_ADD_SHOW } from "../../constants/mutations.type";

const mutations = {

    /**
     * Adds tv shows array to state
     * 
     * @param {*} state 
     * @param {*} obj 
     */
    [MUTATE_ADD_SHOW](state, obj) {    
        state.shows.splice(0, state.shows.length);
        state.shows = obj;
     }
}

export default mutations;