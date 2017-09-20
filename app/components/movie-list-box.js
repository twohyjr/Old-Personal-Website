import Ember from 'ember';

export default Ember.Component.extend({
    movie:null,
    actions: {
        clicked: function(){
            this.sendAction('showMovieDetails', this.get('movie').data);
        }
    }
});
