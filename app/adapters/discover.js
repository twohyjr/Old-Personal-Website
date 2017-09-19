import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    theMovieDb: Ember.inject.service(),
    host: 'https://api.themoviedb.org',
    namespace: '/3/movie/now_playing',
    buildURL (modelName, id, snapshot, requestType, query){
        return this.get('host') + this.get('namespace') + '?api_key=' + this.get('theMovieDb').webApiKey;
    }
});
