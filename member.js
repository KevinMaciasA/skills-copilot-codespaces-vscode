function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/members/skills-member.html',
    scope: {
      member: '='
    },
    controller: function ($scope) {
      $scope.skills = $scope.member.skills;
    }
  };
}