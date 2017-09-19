import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
    theMovieDb: Ember.inject.service(),
    host: 'https://api.themoviedb.org',
    namespace: '/3/discover/movie',
    buildURL (modelName, id, snapshot, requestType, query){
        if(Object.keys(query).length){
            this.set('namespace', '/3/search/movie');
        }else{
            this.set('namespace', '/3/discover/movie');
        }
        return this.get('host') + this.get('namespace') + '?api_key=' + this.get('theMovieDb').webApiKey;
    }
});
