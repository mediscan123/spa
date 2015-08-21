(function () {
    'use strict';

    angular
        .module('app')
        .service('service1', service1);

    service1.$inject = ['$http'];

    function service1($http) {
        this.getData = getData;

        function getData() { }
    }
})();