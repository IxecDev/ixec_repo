ApplicationModel.directive('uiDialog', function () {

    return {
        restrict: 'E',
        transclude: true,
        templateUrl: DIRECTIVES_FOLDER + 'ui-dialog/ui-dialog.directive.html'
    };

});