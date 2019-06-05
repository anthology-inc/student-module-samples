// Campus Nexus Student command entity and query model typings
// Generated from PocoGen 4/25/2019 5:29 AM

// ========== Type definitions for Nexus command entities ==========

declare namespace Cmc.Core.ComponentModel {

    interface IAuditable {
        createdDateTime?: any;
        lastModifiedDateTime?: any;
        lastModifiedUserId?: number;
    }

    interface IIdentifiable {
        id?: number;
    }

}

declare namespace Cmc.Core.EntityModel {

    const enum EntityState {
        Added,
        Removed,
        Modified,
        Unchanged
    }

    interface IStateful {
        entityState: EntityState;
    }

    interface IEntity extends IStateful, Cmc.Core.ComponentModel.IAuditable, Cmc.Core.ComponentModel.IIdentifiable {
    }

}

declare namespace Cmc.Nexus.Common.Entities {

    interface ICampusListEntity extends Cmc.Core.EntityModel.IEntity {
        campusGroupId?: number;
        campusId: number;
        isCampusActive?: boolean;
        isSystemCode?: boolean;
        rowVersion?: any;
    }
}