angular.module('rogerApp.service', []).factory('sensorFactory', ['$http', function($http){
	return (function(){
		let sensor = {};
		
		let getSensorData = (id) => {
			let tempRequest = $http.get('https://roguerovers-api-develop.azurewebsites.net/api/channel/'+id+'/t1')
			.then(function(data) {
				let temp = data.data;
				sensor.temp = temp;
			}).catch(function(err) {
				console.log(err);
			});
			let watRequest =  $http.get('https://roguerovers-api-develop.azurewebsites.net/api/channel/'+id+'/w1')
			.then(function(data) {
				let wat = data.data;
				sensor.wat = wat;
			}).catch(function(err) {
				console.log(err);
			});
			return Promise.all([tempRequest, watRequest]).then(function(data) {
				return sensor;
			}).catch(function(err) {
				console.log(err);
			});
		};


		
		
		return{
			getSensorData: getSensorData
		}
	})();
}]);