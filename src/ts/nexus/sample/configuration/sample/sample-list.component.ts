namespace Nexus.Sample.Configuration {

    const component: angular.IComponentOptions = {
        template: `<h1>This is a sample view</h1>`,
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