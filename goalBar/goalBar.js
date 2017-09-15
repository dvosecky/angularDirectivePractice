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
			current: '@',
			total: '@',
			currenttitle: '@',
			totaltitle: '@'
		},
		template: goalBarHtml,
	}
};
