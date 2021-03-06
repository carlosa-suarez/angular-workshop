(function() {
	var app = angular.module('app',[ ]);

	app.controller('AppMainCtrl', AppMainCtrl);

	function AppMainCtrl() {
		this.products = productObj;

		this.notf = 0;
		this.setActive = function(notf) {
			this.notf = notf;
		};

		this.isActive = function(notf) {
			return this.notf === notf;
		};
	}
	
	app.controller('GalleryController', galleryontroller);
	function galleryontroller(){
		this.image = 0;

		this.setImg = function(img){
			this.image = img;	
		};
	};

	app.controller('TabsController', tabsController);
	function tabsController(){
		this.tab = 0;

		this.setTab = function(tab){
			this.tab = tab;	
		};
	};

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
				"description":"Lorem ipsum 1 Lorem ipsum 1 Lorem ipsum 1 Lorem ipsum 1 Lorem ipsum 1 Lorem ipsum 1",
				"value":{
						"Usd": 1000,
						"Cops": 3000000
				},
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
			},
			"reviews": [
				{
					"stars": 4,
					"body": "Lorem Ipsum",
					"author": "mail@test.com"
				},
				{
					"stars": 2,
					"body": "Lorem Ipsum",
					"author": "mail@test.com"
				},
				{
					"stars": 4,
					"body": "Lorem Ipsum",
					"author": "mail@test.com"
				}
			]
		},
		{
			"id":"2",
			"name": "simpson",
			"image": [
				"img/simpson1.jpg",
				"img/simpson2.jpg",
				"img/simpson3.png"
			],
			"details":{
				"description":"Lorem ipsum 2 Lorem ipsum 2 Lorem ipsum 2 Lorem ipsum 2 Lorem ipsum 2",
				"value": {
						"Usd": 1000,
						"Cops": 3000000
				},
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
			},
			"reviews": [
				{
					"stars": 4,
					"body": "Lorem Ipsum",
					"author": "mail@test.com"
				},
				{
					"stars": 2,
					"body": "Lorem Ipsum",
					"author": "mail@test.com"
				},
				{
					"stars": 4,
					"body": "Lorem Ipsum",
					"author": "mail@test.com"
				}
			]
		},{
			"id":"3",
			"name": "Humor Colombiano",
			"image": [
				"img/humor1.jpg",
				"img/humor2.jpg",
				"img/humor3.jpg"
			],
			"details":{
				"description":"Lorem ipsum 3 Lorem ipsum 3 Lorem ipsum 3 Lorem ipsum 3 Lorem ipsum 3 Lorem ipsum 3 Lorem ipsum 3 Lorem ipsum 3 Lorem ipsum 3 Lorem ipsum 3 Lorem ipsum 3",
				"value":{
					"Usd": 1000,
					"Cops": 3000000
				},
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
			},
			"reviews": [
				{
					"stars": 4,
					"body": "Lorem Ipsum",
					"author": "mail@test.com"
				},
				{
					"stars": 2,
					"body": "Lorem Ipsum",
					"author": "mail@test.com"
				},
				{
					"stars": 4,
					"body": "Lorem Ipsum",
					"author": "mail@test.com"
				}
			]
		}
	];


})();
