import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
    theMovieDb: Ember.inject.service(),
    host: 'https://api.themoviedb.org',
    namespace: '/3/movie/now_playing',
    buildURL (){
        return this.get('host') + this.get('namespace') + '?api_key=' + this.get('theMovieDb').webApiKey;
    }
});
