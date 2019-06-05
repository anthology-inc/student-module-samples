namespace Nexus.Sample.StudentProfile {

    angular.module('nexus.sample.studentProfile', [])
        .config(() => {
            // Manage any module-wide configuration here
        })
        .run(['TileService', 'nsaCache',
            (tileService: GlobalServices.ITileService, nsaCache: any) => {
                nsaCache.getCache().then(() => {
                    tileService.createTile('Sample', 'Sample Student Profile Screen', `students.list-samples`);
                }).catch(angular.noop);
            }]);
}