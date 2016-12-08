angular.module('rogerApp.service', []).factory('channelFactory', ['$http','$cookies', function($http, $cookies){
	return (function(){
		let getAllRovers = () => {
			return $http.get('https://roguerovers-api-develop.azurewebsites.net/api/channel').then(function(data) {
                console.log(data);
                return data.data;
			}).catch(function(err) {
				return err;
			});
		}
		
		
		return{
			getAllRovers: getAllRovers
		}
	})();
}]);