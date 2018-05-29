ELEMENT_FOLDER = '/ui-alert';

ApplicationModel.component('uiAlert', {
    templateUrl: COMPONENTS_FOLDER + ELEMENT_FOLDER + '/ui-alert.component.html',
    controller: function UIAlertController($scope) {
        $scope.message = 'Hello World!';
        console.log($scope.message);
    }
});