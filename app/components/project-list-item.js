import Ember from 'ember';

export default Ember.Component.extend({
    project: null,
    techListWidth: 0,
    isNavigationVisible: function(){
        let project = this.get('project');
        return project.navigation !== null;
    }.property('project.navigation'),
    didRender(){
        var project = this.get('project');
        
    }
});
