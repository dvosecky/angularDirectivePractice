var goalBarHtml = `
	<div class="bar-background">
		<div class="bar" style="width: calc(100% * {{current}}/{{total}})"></div>
	</div>
	<div class="row">
		<h4>{{current}}</h4>
		<h4>{{total}}</h4>
	</div>
	<div class="row">
		<h5>{{currenttitle}}</h5>
		<h5>{{totaltitle}}</h5>
	</div>
`;

(function(angular) {
angular.module('myDirectives', [])
	.controller('Controller', ['$scope', function($scope) {
		$scope.current = 42;
		$scope.total = 100;
	}])

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
	
	.directive('goalBar', function() {
		return {
			scope: {
				current: '@',
				total: '@',
				currenttitle: '@',
				totaltitle: '@'
			},
			template: goalBarHtml,
		}
	})
})(window.angular);
