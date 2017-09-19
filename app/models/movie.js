import DS from 'ember-data';
import Ember from 'ember';

const{
    attr
} = DS;

export default DS.Model.extend({
    title: attr('string'),
    vote_average: attr('number'),
    vote_count: attr('number'),
    video: attr('boolean'),
    popularity: attr('number'),
    poster_path: attr('string'),
    original_language: attr('string'),
    original_title: attr('string'),
    backdrop_path: attr('string'),
    adult: attr('boolean'),
    overview: attr('string'),
    release_date: attr('moment', {format: 'yyyy-MM-dd'}),
    hasRating: Ember.computed('release_date', function() {
        return this.get('vote_average') > 0;
    })
});
