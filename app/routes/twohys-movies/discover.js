import Ember from 'ember';

export default Ember.Route.extend({
    theMovieDb: Ember.inject.service(),
    currentMovieToSearch: null,
    model(){
        var obj = {};
        var currentMovieToSearch = this.get('currentMovieToSearch');
        if(currentMovieToSearch !== '' && currentMovieToSearch !== null){
            obj = {query: this.get('currentMovieToSearch')};
        }

        return Ember.RSVP.hash({
          now_playing: this.store.findAll('discover'),
          movies: this.store.query('movie', obj)
        });
    },
    setupController(controller, models) {
        controller.set('now_playing', models.now_playing);
        controller.set('movies', models.movies);
    },
    actions: {
        setTheThing(movie){
            this.set('currentMovieToSearch', movie);
            this.refresh();
        }
    }

});
