Router.configure({
  autoRender: false
});

// The Iron-Router Route Configuration
Router.map(function() {

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
