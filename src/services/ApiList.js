import Api from './Api'

/**
 * API abstraction for the tvshow service
 */
export default {
    /**
     * Fetch TV show data
     * 
     * @type GET
     * @param {String} params 
     */
    getTvShows(substr) {
        return Api().get(`search/shows?q=${substr}`); 
    }
}