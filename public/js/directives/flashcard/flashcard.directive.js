app.directive('flashCard', function (FlashCardsFactory) {
	return {
		restrict: 'E',
		templateUrl: '/js/directives/flashcard/flashcard.html',
		scope:{
			card: "="
		},
		link: function (scope) {
			scope.showSpinner = true;
			FlashCardsFactory.getFlashCards()
			.then(function(flashCards) {
			scope.flashCards = flashCards;
			scope.showSpinner = false;
			})
		}
	}
});