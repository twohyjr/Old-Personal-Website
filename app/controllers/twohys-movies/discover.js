import Ember from 'ember';

export default Ember.Controller.extend({
    movieToSearch: '',
    isShowingModal: false,
    currentSelectedMovie: null,
    actions:{
        toggleModal: function() {
            this.toggleProperty('isShowingModal');
        },
        showMovieDetails(movie){
            this.set('currentSelectedMovie', movie);
            this.toggleProperty('isShowingModal');
        }
    }
});
