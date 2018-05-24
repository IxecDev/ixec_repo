ApplicationModel.controller('HomeController', ['UsersService', '$scope', function (UsersService, $scope) {

    /* SCOPE VARIABLES */
    $scope.origin = '';

    /* LOCAL FUNCTIONS */
    function init() {
        UsersService.getInfo(function successCallback(response) {
            $scope.origin = response.data.origin;
        }, function errorCallback(jqxhr, textStatus, error) {

        });
    }

    /* INITIALIZATION */
    init();

}]);