var goalBarHtml = `
	<div class="bar-background">
		<div class="bar" style="width: calc(100% * {{current}}/{{total}})"></div>
	</div>
	<div>
		<span class="current-value">{{current}}</span>
		<span class="total-value">{{total}}</span>
	</div>
	<div>
		<span class="current-title">{{currenttitle}}</span>
		<span class="total-title">{{totaltitle}}</span>
	</div>
`;

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

	.directive('goalBar', function() {
		return {
			scope: {
				current: '@',
				total: '@',
				currenttitle: '@',
				totaltitle: '@'
			},
			template: goalBarHtml
		}
	})
})(window.angular);
