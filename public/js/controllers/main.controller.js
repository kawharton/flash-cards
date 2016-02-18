app.controller('MainController', function ($scope,FlashCardsFactory, ScoreFactory) {
	// $scope.showSpinner = true;
	// FlashCardsFactory.getFlashCards()
	// .then(function(flashCards) {

	// 	$scope.flashCards = flashCards;
	// 	$scope.showSpinner = false;
	// });

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			// flashCard.answeredCorrectly = answer.correct;
			
			if (answer.correct === true) {
				flashCard.answeredCorrectly = true;
				console.log(flashCard.answeredCorrectly)
				ScoreFactory.correct++
			}
			else {
				flashCard.answeredCorrectly = false;
				ScoreFactory.incorrect++;
			}	
		}	
	}

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.getCategoryCards = function(category) {
		$scope.activeCat = category;
		return FlashCardsFactory.getFlashCards(category)
		.then(function(flashCards) {
			$scope.flashCards = flashCards;
		});
	}

	$scope.getFlashCards = function() {
		FlashCardsFactory.getFlashCards().then(function (flashCards){
			$scope.flashCards = flashCards;
		});
		$scope.activeCat = null;
	}
});