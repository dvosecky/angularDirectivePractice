(function(angular) {
angular.module('myDirectives', [])
  .directive('myHelloWorld', function() {
    return {
      template: 'hello, world'
    };
  })

  .directive('myInputAndDisplay', function() {
    return {
      template: 'hello, {{name}}'
    }
  })

  .directive('myWhackAMole', ['$timeout', function($timeout) {
    return {
      link: function(scope, element) {
        element.on('click', function() {
          element.css({visibility: 'hidden'});
      	  $timeout(function() {
      	    element.css({visibility: 'visible'});
          }, 500);
        });
      }
    };
  }])
})(window.angular);
