namespace Nexus.Academics.Configuration {

    angular
        .module('nexus.sample.configuration')
        .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
            $stateProvider.state('list-reference-data.list-samples', {
                controller: 'SampleListComponentController',
                url: '/samples'
            });
        }]);
  
  }