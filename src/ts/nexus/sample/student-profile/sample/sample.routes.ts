namespace Nexus.Sample.Configuration {

    angular
        .module('nexus.sample.studentProfile')
        .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
            $stateProvider.state('show-student.sample', {
                url: '/sample',
                template: '<cnsx-sample-student-profile-item student="$ctrl.student"></cnsx-sample-student-profile-item>',
                controller: ['student', function(student) {
                    this.student = student;
                }],
            });
        }]);
  
}