friendsApp.controller('FriendController', function FriendController($scope, $http){
    $http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json').success(function(response) {
    	console.log(response)
    	$scope.friends = response.results;
    	$scope.searchName = '';
    	$scope.searchLocation = '';
    	$scope.sort1 = 'name';
    	$scope.sort2 = 'false';

   }); 
    
  


    
});
       


//$scope.$apply();


