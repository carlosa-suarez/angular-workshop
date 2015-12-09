(function() {
	console.log(angular);
	var app = angular.module('app',[ ]);

	app.controller('AppMainCtrl', AppMainCtrl);

	function AppMainCtrl() {
		this.products = productObj;
	}
	/*
	app.controller('PanelCtrl', PanelCtrl(detail));
	function PanelCtrl(detail){
		this.description = detail.description;	
	};
	*/

	var productObj = [
		{
			"id":"1",
			"name": "family guy",
			"image": [
				"img/family1.jpg",
				"img/family2.gif",
				"img/family3.jpg"
			],
			"details":{
				"description":"Lorem ipsum 1",
				"value":[
					{
						"Usd": 1000,
						"Cops": 3000000
					}
				],
				"stores":[
					{
						"name": "store1",
						"address": "store1 address",
					},
					{
						"name": "store2",
						"address": "store2 address",
					},
					{
						"name": "store3",
						"address": "store3 address",
					}
				]
			}
		},
		{
			"id":"2",
			"name": "simpson",
			"image": [
				"img/simpson1.jpg",
				"img/simpson2.jpg",
				"img/simpson3.jpg"
			],
			"details":{
				"description":"Lorem ipsum 2",
				"value":[
					{
						"Usd": 1000,
						"Cops": 3000000
					}
				],
				"stores":[
					{
						"name": "store4",
						"address": "store4 address",
					},
					{
						"name": "store5",
						"address": "store5 address",
					},
					{
						"name": "store6",
						"address": "store6 address",
					}
				]
			}
		},{
			"id":"3",
			"name": "Humor Colombiano",
			"image": [
				"img/humor1.jpg",
				"img/humor2.jpg",
				"img/humor3.jpg"
			],
			"details":{
				"description":"Lorem ipsum 3",
				"value":[
					{
						"Usd": 1000,
						"Cops": 3000000
					}
				],
				"stores":[
					{
						"name": "store7",
						"address": "store7 address",
					},
					{
						"name": "store8",
						"address": "store8 address",
					},
					{
						"name": "store9",
						"address": "store9 address",
					}
				]
			}
		}
	];


})();
