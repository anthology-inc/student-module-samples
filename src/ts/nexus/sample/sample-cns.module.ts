namespace Nexus.Sample {
    angular.module('nexus.sample',
        ['nexus.sample.configuration',
         'nexus.sample.studentProfile'])
        .config(() => {
        })
        .run(() => {
            console.log('Nexus Sample Module Loaded');
        });
}