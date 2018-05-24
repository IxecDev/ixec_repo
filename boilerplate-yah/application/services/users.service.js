ApplicationModel.factory('UsersService', function ($http) {

    var RESTTestURL = 'https://httpbin.org/get';

    return {
        'getInfo': function (successCallback, errorCallback) {
            var success = typeof successCallback === 'function' ? successCallback : function () {};
            var error = typeof errorCallback === 'function' ? errorCallback : function () {};

            $http({
                url: RESTTestURL,
                method: 'GET'
            }).then(success, error);
        }
    };

});