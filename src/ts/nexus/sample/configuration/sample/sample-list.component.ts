namespace Nexus.Sample.Configuration {

    const component: angular.IComponentOptions = {
        templateUrl: 'dist/modules/sample/templates/nexus/sample/configuration/sample/sample-list.component.html',
        controller: 'SampleListComponentController'
    };

    class SampleListComponentController {

        public static $inject: string[] = [];

        constructor() {
        }

        public $onInit() {
            console.log('Sample List Component Initalized');
        }
    }

    angular.module('nexus.sample.configuration')
        .component('cnsxSampleList', component)
        .controller('SampleListComponentController', SampleListComponentController);
}