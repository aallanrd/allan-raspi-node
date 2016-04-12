/**
 * Created by aroja on 11/04/2016.
 */


var appAng = angular.module('myApp', []);


appAng.controller("HttpGetController", function ($scope, $http) {

    $scope.keyword = '';

    $scope.GetAllData = function () {
        $http.get('/stream/image_stream1.jpg')
            .success(function (data, status, headers, config) {
                $scope.Details = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<br />status: " + status +
                    "<br />headers: " + jsonFilter(header) +
                    "<br />config: " + jsonFilter(config);
            });
    };

  });
