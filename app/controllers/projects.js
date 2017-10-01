import Ember from 'ember';

const Project = Ember.Object.extend({
  techs: null,
  image: null
});

export default Ember.Controller.extend({
    twohysMoviesProject: Project.create({
        name: "Twohy's Movies",
        techs:['Javascript', 'Ember', 'SASS','HTML'],
        image: '/projects/thiswebsite/thiswebsite.png',
        description: 'An application that allows the user to find a movie and save it.',
        yearCreated: '2017 - Now',
        navigation: 'twohys-movies'
    }),
    twohysLazerHarp: Project.create({
        name: "Twohy's Lazer Harp 2.0",
        techs:['Java', 'C', 'Arduino','Midi'],
        image: '/projects/lazerharp2/lazerharp2.jpg',
        description: 'Lazer harp that connects to a MIDI controller to play realisitic instrument sounds by touching the lazer beam.',
        yearCreated: '2016 (Hackathon)',
        navigation: null
    }),

});
