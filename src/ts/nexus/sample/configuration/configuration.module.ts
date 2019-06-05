namespace Nexus.Sample.Configuration {

    angular.module('nexus.sample.configuration', [])
        .config(() => {
            // Manage any module-wide configuration here
        })
        .run(['TileService', 'nsaCache',
            (tileService: GlobalServices.ITileService, nsaCache: any) => {
                nsaCache.getCache().then(() => {
                    tileService.createTile('Sample', 'Sample Configuration Screen', `list-reference-data.list-samples`, undefined, undefined, 'Reference Data');
                }).catch(angular.noop);
            }]);
}