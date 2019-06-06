namespace Nexus.Sample.StudentProfile {

    const component: angular.IComponentOptions = {
        template: `
            <div>
              <h4>Displaying details about Student Id: {{$ctrl.student.id}}</h4>
              <p>The current campus is {{$ctrl.campusId}}</p>
              <p>The student's name is {{$ctrl.student.firstName}} {{$ctrl.student.lastName}}</p>
            </div>
            `,
        controller: 'SampleStudentProfileItemComponentController',
        bindings: {
            student: '<'
        }
    };

    class SampleStudentProfileItemComponentController {

        private student: any;   // This is set to the current student via bindings

        public static $inject: string[] = [
            'DEFAULT_CAMPUS_ID' //This will be the currently selected Campus Id
        ];

        constructor(private campusId: number) {}

        public $onInit() {
            console.log(`Initilized component with campus Id ${this.campusId} and student Id ${this.student.id}`);
            console.log(this.student);
        }
    }

    angular.module('nexus.sample.configuration')
        .component('cnsxSampleStudentProfileItem', component)
        .controller('SampleStudentProfileItemComponentController', SampleStudentProfileItemComponentController);
}