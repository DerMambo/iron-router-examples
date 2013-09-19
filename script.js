
// The Iron-Router Route Configuration
Router.map(function() {
  // configurated route with
  // name 'home' that matches
  // specific route '/' and automatically renders
  // template 'home'
  this.route('home', {
    path: '/'
  });

  // simple route with
  // name 'posts' that automatically matches
  // route '/posts' and automatically renders
  // template 'posts'
  this.route('posts');

  // simple route with
  // name 'goodBye' that automatically matches
  // route '/goodBye' and automatically renders
  // template named 'goodBye'
  this.route('goodBye');
});




if (Meteor.isClient) {

}

if (Meteor.isServer) {

}
