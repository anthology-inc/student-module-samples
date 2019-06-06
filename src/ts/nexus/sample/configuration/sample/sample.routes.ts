namespace Nexus.Sample.Configuration {

    angular
        .module('nexus.sample.configuration')
        .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
            $stateProvider.state('list-reference-data.list-samples', {
                template: '<cnsx-sample-list></cnsx-sample-list>',
                url: '/samples'
            });
        }]);
  
}