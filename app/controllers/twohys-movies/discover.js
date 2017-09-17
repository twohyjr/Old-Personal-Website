import Ember from 'ember';

export default Ember.Controller.extend({
    movieToSearch: 'hello',
    movieSearchChanged: function() {
        let text = this.get('movieToSearch').trim();
        if(text.length > 0){
            console.log(text);
        }
    }.observes('movieToSearch')

});
