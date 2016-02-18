app.factory('FlashCardsFactory', function ($http) {
    return {
    	getFlashCards: function (category) {
    		var obj = {};
    		if(category) {
    			obj.category = category
    		}
    		return $http.get('/cards', {params: obj})
    		.then(function (res) {
   				return res.data;
  			});
    	}
    }
});