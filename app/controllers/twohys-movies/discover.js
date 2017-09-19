import Ember from 'ember';

export default Ember.Controller.extend({
    movieToSearch: '',
    movieSearchChanged: function() {
        let text = this.get('movieToSearch').trim();

    }.observes('movieToSearch'),


});
