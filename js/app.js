(function() {
	console.log(angular);
	var app = angular.module('app',[ ]);

	app.controller('AppMainCtrl', AppMainCtrl);

	function AppMainCtrl() {
		this.name = "My new page";
	}

	app.controller('TabsCtrl', tabsCtrl);

	function tabsCtrl() {
		this.tabs = tabObj;

		this.tab = 1;

		this.setTab = function(newTab){
			console.log(newTab);
			this.tab = newTab;
		};

		this.isTab = function(newTab){
			if(newTab)
				return (this.tab === newTab)?true:false;
		};
	}	

	var tabObj = [
		{
			"id":"1",
			"label":"link1",
			"url":"#link1",
			"content":"Lorem Impsum 1"
		},
		{
			"id":"2",
			"label":"link2",
			"url":"#link2",
			"content":"Lorem Impsum 2"
		},
		{
			"id":"3",
			"label":"link3",
			"url":"#link3",
			"content":"Lorem Impsum 3"
		},
		{
			"id":"4",
			"label":"link4",
			"url":"#link4",
			"content":"Lorem Impsum 4"
		},
	];
})();
