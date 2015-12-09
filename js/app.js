(function() {
	console.log(angular);
	var app = angular.module('app',[ ]);

	app.controller('AppMainCtrl', AppMainCtrl);

	function AppMainCtrl() {
		this.products = productObj;
	}


	var productObj = [
		{
			"id":"1",
			"name": "family guy",
			"image": [
				"http://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/12/12/family%20guy.jpg",
				"http://s2.favim.com/orig/28/family-guy-funny-griffin-haha-lmao-Favim.com-233176.gif",
				"http://www.zemwallpapers.com/wp-content/uploads/2015/08/Family-Guy-Funny-Pictures-5.jpg"
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
				"http://cdndata.bigfooty.com/2015/02/106075_85609c587aedee9e54ef77a43b1f11f4.jpg",
				"http://xaxor.com/wp-content/uploads/2012/12/Funny-witty-Simpsons-moments3.jpg",
				"http://i.imgur.com/br5EWbc.png"
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
				"https://i.ytimg.com/vi/9vU_l4Ttts0/maxresdefault.jpg",
				"https://i.ytimg.com/vi/p7NUMsSznWI/hqdefault.jpg",
				"http://m.vive.in/contenido/planes/bogota/IMAGEN/IMAGEN-9744064-2.JPG"
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
