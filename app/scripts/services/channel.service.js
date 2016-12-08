angular.module('rogerApp.service', []).factory('channelFactory', ['$http','$cookies', function($http, $cookies){
	return (function(){
		let rovers = [];
		let requestList = [];
		const base = {x: 200, y:200};
		let getAllRoversIds = () => {
			return ["f83e5330-428a-4701-9723-abd5fc3286b8",
			"6ea5ddac-b723-42c8-9056-ece39550aa05",
			"8b9395c4-d2fe-453e-9b73-50d18a9164da",
			"89737740-0da6-4a8f-a761-ccd4dcb60747",
			"0e94cfca-7967-42f6-b5bd-d41fc9f8118f",
			"1b2111ca-f008-4763-ba6c-59996be49765",
			"bb7407f2-d71c-4d49-8f52-962966b19146",
			"7718c900-a254-444e-bcd0-8551fefc684f",
			"8d8e13cc-01bc-4696-a39a-2b1b70a4fcc4",
			"6bfd9c3d-b261-4d41-b8bc-e915531537c9",
			"03337806-2544-4959-b829-b305f148e29b",
			"94e33c9f-f76c-4841-a69c-ccebad002eb6"
			]
			
		}
		let getAllRovers = () => {
			getAllRoversIds().forEach((id) => {
				let request = $http.get('https://roguerovers-api-develop.azurewebsites.net/api/channel/'+id)
				.then(function(data) {
					if(data.status === 200){
						let rover = data.data;
						rover.distanceToBase = calculateDistanceToBase(rover);
						rover.isFavorite = isFavorite(rover);
						rover.id = id;
						rovers.push(rover);
					}
				}).catch(function(err) {
					console.log(err);
				});
				requestList.push(request);
			});
			return Promise.all(requestList).then(function(data) {
				return rovers;
			}).catch(function(err) {
				console.log(err);
			});
		}
		let calculateDistanceToBase = (rover) => {
			const xCoord = rover.position.x;
			const yCoord = rover.position.y;
			const dist = Math.sqrt(Math.pow(base.x - xCoord, 2) + Math.pow(base.y -yCoord, 2));
			return parseInt(dist);
		}
		let sortRovers = (rovers, type) => {
			switch(type){
				case 'd': {
					return rovers.sort((a, b) => { return a.distanceToBase - b.distanceToBase});
				}
				case 'x': {
					return rovers.sort((a, b) => { return a.position.x - b.position.x});
				}
				case 'y': {
					return rovers.sort((a, b) => { return a.position.y - b.position.y});
				}
			}
		}

		let toggleFavorite = (rover) => {
			let favoriteRovers = $cookies.getObject('favorite');

			if(angular.isUndefined(favoriteRovers)){
				favoriteRovers = [];	
			}
			const index = favoriteRovers.map((r) => {return r.name}).indexOf(rover.name);
			// If rover is in favorites
			if(index > -1){
				favoriteRovers.splice(index, 1);
			}
			else{
				favoriteRovers.push(rover);
			}
			$cookies.putObject('favorite', favoriteRovers);
		}
		let isFavorite = (rover) => {
			let favoriteRovers = $cookies.getObject('favorite');

			if(angular.isUndefined(favoriteRovers)){
				return false;
			}
			else{
				const index = favoriteRovers.map((r) => {return r.name}).indexOf(rover.name);
				return index > -1;
			}
		}
		let getRoverById = (id) => {
			return $http.get('https://roguerovers-api-develop.azurewebsites.net/api/channel/'+id).then(function(data) {
				let rover = data.data;
				rover.distanceToBase = calculateDistanceToBase(rover);
				rover.isFavorite = isFavorite(rover);
				rover.id = id;
				return rover;
			});
		}
		
		
		return{
			getAllRovers: getAllRovers,
			sortRovers: sortRovers,
			toggleFavorite: toggleFavorite,
			isFavorite: isFavorite,
			getRoverById: getRoverById
		}
	})();
}]);