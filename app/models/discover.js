import DS from 'ember-data';

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
    release_date: attr('date')
});
