(function() {
	console.log(angular);
	var app = angular.module('app',[ ]);

	app.controller('AppMainCtrl', AppMainCtrl);

	function AppMainCtrl() {
		this.name = "My new page";
	};

	app.controller()	
})();
