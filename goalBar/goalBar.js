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

module.exports = function() {
	return {
		scope: {
			current: '=',
			total: '=',
			currenttitle: '@',
			totaltitle: '@'
		},
		template: goalBarHtml,
		link: function(scope) {
			scope.$watch('current', function() {
				checkCurrentLessThanTotal();
				if (scope.current < 0) {
					scope.current = 0;
				}
			});

			scope.$watch('total', function() {
				checkCurrentLessThanTotal();
				if (scope.total < 0) {
					scope.total = 0;
				}
			});

			function checkCurrentLessThanTotal() {
				if (scope.current > scope.total) {
					scope.current = scope.total;
				}
			}
		}
	}
};
