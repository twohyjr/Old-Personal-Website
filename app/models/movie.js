import DS from 'ember-data';

const{
    attr
} = DS;

export default DS.Model.extend({
    title: attr(),
    vote_average: attr(),
    vote_count: attr(),
    video: attr(),
    popularity: attr(),
    poster_path: attr(),
    original_language: attr(),
    original_title: attr(),
    backdrop_path: attr(),
    adult: attr(),
    overview: attr(),
    release_date: attr()
});
