'use strict';

app.factory('loginService', function($http, $location, sessionService){
	return{
		login:function(user, scope){
			var $promise=$http.post('data/user.php', user); //sne data to user.php
			$promise.then(function(msg){
				var uid = msg.data;
				if(uid){
					//console.log('Correct information');//scope.msgtxt='Correct information';
					sessionService.set('uid', uid);
					$location.path('/home');
				} 
				else {
					//console.log('Error information');//scope.msgtxt='Error information';
					scope.msgtxt='incorrect information';
					$location.path('/login');
				}
			});
		},
		logout:function(user){
			sessionService.destroy('uid');
			$location.path('/login');
		},

		islogged:function(){
			var $checkSessionServer = $http.post('data/check_session.php');
			return $checkSessionServer;
			/*
			if(sessionService.get('user')) return true;
			else return false;
			*/
		}
	}

});