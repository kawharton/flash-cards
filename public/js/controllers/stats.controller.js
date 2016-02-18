app.controller('StatsController', function ($scope, ScoreFactory) {
    $scope.scores = ScoreFactory;
    console.log($scope.scores);
});
