var taplistApp = angular.module('taplistApp',['ngSailsBind']);
taplistApp.controller('tapController',function ($scope, $sailsBind) {
    // $http , $scope , $log injections

    $scope.newTap = {}
    $sailsBind.bind("tap",$scope);


});
app.filter("toArray", function(){
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val, key) {
            result.push(val);
        });
        return result;
    };
});
app.directive("contenteditable", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});
