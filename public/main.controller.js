app.controller('MainController', function ($scope,FlashCardsFactory, ScoreFactory) {
	FlashCardsFactory.getFlashCards()
	.then(function(flashCards) {
		$scope.flashCards = flashCards;
	});

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			if (flashCard.answeredCorrectly){	
				flashCard.answeredCorrectly = answer.correct;
				ScoreFactory.correct++
			};
			else {
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