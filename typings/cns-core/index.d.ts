/// <reference types="angular-ui-bootstrap" />
/// <reference types="angular" />
/// <reference types="angular-gettext" />
/// <reference types="angular-ui-router" />
/// <reference types="angular-mocks" />
/// <reference types="kendo-ui" />
/// <reference types="cmc" />
/// <reference types="rx-core" />
/// <reference types="jquery" />
/// <reference types="rx-core-binding" />
declare namespace Nexus.Core {
}
declare namespace Nexus.Core {
}
declare namespace Components {
}
declare namespace Nexus.Core.Components.GlobalSearch {
}
declare namespace Modal {
    interface IModalHelperService {
        open: (options: angular.ui.bootstrap.IModalSettings) => angular.ui.bootstrap.IModalInstanceService;
    }
}
declare namespace Nexus.Common.Report {
}
declare namespace Nexus.Crm.StudentMessage {
}
declare namespace Services {
}
declare namespace Nexus.Core.Components.GlobalSearch {
}
declare namespace Nexus.Common.Report {
}
declare namespace StudentMessage {
}
declare namespace Nexus {
    /**
     * @ngdoc interface
     * name IListComponentController
     */
    interface IListComponentController {
        refreshGrid(): void;
        refreshGridToolbar(): void;
        expanded: boolean;
        isNewEdit: boolean;
        enableSplitter: boolean;
    }
    enum ListButtonStyle {
        NewAndDelete = 0,
        AddAndRemove = 1
    }
    abstract class ListComponentController<T extends IEntityService, K extends ISecurityService> implements IListComponentController {
        protected $injector: angular.auto.IInjectorService;
        entityDisplayName: string;
        protected buttonStyle: ListButtonStyle;
        protected enableDuplicate: boolean;
        protected gettextCatalog: angular.gettext.gettextCatalog;
        protected $state: angular.ui.IStateService;
        protected $log: angular.ILogService;
        protected $location: angular.ILocationService;
        protected $rootScope: angular.IRootScopeService;
        protected messages: any;
        protected notifier: any;
        protected entityService: T;
        protected securityService: K;
        protected alertService: Student.AlertService;
        protected securityServiceName: string;
        protected localization: any;
        protected uniqueUserPrefKey: string;
        protected cnsTurnOffPersistence: boolean;
        protected enableMultipageSelections: boolean;
        cnsToolBarItems: kendo.ui.ToolBarItem[];
        cnsToolBarOptions: kendo.ui.ToolBarOptions;
        cnsGridOptions: kendo.ui.GridOptions;
        cnsQuery: string;
        expanded: boolean;
        cnsGrid: Grid.IGridComponentCnsRef;
        dialogId: string;
        dialogPrintId: string;
        gridId: string;
        note: string;
        api: any;
        $q: angular.IQService;
        entityDisplayNameI18n: string;
        isNewEdit: boolean;
        enableSplitter: boolean;
        gridResize: GlobalServices.IGridResizeService;
        constructor($injector: angular.auto.IInjectorService, entityDisplayName: string, entityServiceName: string, securityServiceName: any, buttonStyle?: ListButtonStyle, enableDuplicate?: boolean);
        protected initialize(query?: string): void;
        protected animateToSelf(): void;
        protected onInitialized(): void;
        $onDestroy(): void;
        protected getKendoGrid(): kendo.ui.Grid;
        protected isRowSelected(): boolean;
        protected getSelectedRowItem(): kendo.data.ObservableObject;
        protected getSelectedRowItems(): kendo.data.ObservableObject[];
        protected getRowIdentiferField(): string;
        protected getRowNameField(): string;
        protected onInitializeGridOptions(): kendo.ui.GridOptions;
        protected onInitializeToolBarItems(): kendo.ui.ToolBarItem[] | any;
        protected onInitializeToolBarOptions(): kendo.ui.ToolBarOptions;
        protected onCustomizeToolBarItems(items: kendo.ui.ToolBarItem[]): void;
        protected onCustomizeGridOptions(options: Grid.IGridKendoGridOptions): void;
        protected onCustomizeToolBarOptions(options: kendo.ui.ToolBarOptions): kendo.ui.ToolBarOptions;
        protected changeStateToCreate(stateParams?: any): void;
        protected changeStateToShow(stateParams: any): void;
        protected onNewButtonClick(): void;
        protected onDeleteButtonClick(): void;
        protected onDuplicateButtonClick(): void;
        protected getDeleteConfirmationDialogMessage(message?: string): string;
        protected closeDetailIfCurrent(rowIdentifers: any[]): void;
        protected onDeleteConfirmed(): void;
        protected getOKButtonText(): string;
        protected getIncludePrintButtonText(): string;
        protected getExcludePrintButtonText(): string;
        protected getDialogRef(): any;
        protected getCancelPrintButtonText(): string;
        protected getprintDialogRef(): any;
        refreshGrid(): void;
        protected gridHasData(): boolean;
        refreshGridToolbar(): void;
    }
}
declare namespace Nexus {
    abstract class DetailComponentController<T extends IEntityService, K extends ISecurityService, L extends IListComponentController> {
        protected $injector: angular.auto.IInjectorService;
        protected dirtyCheckingEnabled: boolean;
        protected initialEntity: any;
        protected $log: angular.ILogService;
        protected $state: angular.ui.IStateService;
        protected $stateParams: any;
        protected $q: angular.IQService;
        protected $window: angular.IWindowService;
        protected gettextCatalog: angular.gettext.gettextCatalog;
        protected optionsMetadata: GlobalServices.IOptionsMetadataService;
        protected dirtyCheckService: DirtyCheck.IDirtyCheckService;
        protected printService: Nexus.IPrintService;
        protected entityService: T;
        protected securityService: K;
        protected localization: any;
        protected listComponent: L;
        protected controls: any;
        protected entity: any;
        protected expanded: boolean;
        protected toolbarOptions: any;
        protected componentOptions: any;
        protected cmcStandardValidation: any;
        protected notifier: any;
        protected messages: any;
        protected kendoValidationRuleService: GlobalServices.IKendoValidationRuleService;
        protected formTitle: string;
        protected useChangeTracking: boolean;
        protected changeTrackingRef: any;
        protected eventHandler: any;
        gridResize: GlobalServices.IGridResizeService;
        skipDirtyCheck: boolean;
        isfromSaveAndClose: boolean;
        constructor($injector: angular.auto.IInjectorService, entityServiceName: string, securityServiceName: string, dirtyCheckingEnabled?: boolean);
        protected initialize(id: any, namespaces: string[]): angular.IPromise<any>;
        protected getEntityToInitialize(id: any): angular.IPromise<any>;
        private getEntityToDuplicate;
        protected animateToListView(): void;
        protected animateToSelf(): void;
        protected initializeEntity(entity: any, sourceEntity?: any): boolean;
        private initializeComponentOptions;
        private initializeToolBarItems;
        protected refreshList(): void;
        protected onInitializedEntity(): void;
        protected onInitialized(): void;
        protected customizeComponentOptions(options: any): void;
        protected validate(): boolean;
        protected onValidateFailed(): void;
        protected onSave(): angular.IPromise<any>;
        protected saveAndInvoke(dirtyCheckEnabled: boolean, func: () => void): angular.IPromise<any>;
        protected onSaveButtonClick(): angular.IPromise<any>;
        protected onSaveAndCloseButtonClick(): angular.IPromise<any>;
        protected onSaveAndNewButtonClick(): angular.IPromise<any>;
        protected validateAndSave(): angular.IPromise<any>;
        protected dirtyCheckValidateAndSave(shouldRefreshList?: boolean): angular.IPromise<any>;
        protected onCancelButtonClick(): angular.IPromise<any>;
        protected onPrintButtonClick(title?: string, selector?: string): angular.IPromise<any>;
        protected isDirtyCheckingEnabled(): boolean;
        protected setDirtyCheckingEnabled(enabled?: boolean): void;
        protected dirtyCheckDontSave: (e: DirtyCheck.IDirtyCheckRouterStateChangeEvent) => angular.IPromise<any>;
        protected isDirty: () => DirtyCheck.IDirtyCheckIsDirtyReturnObject;
        protected navigateToEditForm: () => void;
        protected setFormTitle: () => void;
    }
}
declare namespace Nexus {
    abstract class DetailWithFormComponentController<E extends Cmc.Core.EntityModel.IEntity, T extends IEntityService, K extends ISecurityService, L extends IListComponentController> extends DetailComponentController<T, K, L> {
        protected form: IEntityFormComponentReference<E>;
        protected validate(): boolean;
        protected setDirtyCheckingEnabled(enabled?: boolean): void;
        protected isDirty: () => DirtyCheck.IDirtyCheckIsDirtyReturnObject;
        protected onSave(): angular.IPromise<any>;
    }
}
declare namespace Nexus {
    interface IEntityFormComponentReference<E extends Cmc.Core.EntityModel.IEntity> {
        validate(): boolean;
        resetDirty(): void;
        getDirtyInitialEntity(): E;
        isDirty(): boolean;
        onSave(): angular.IPromise<any>;
        reinitialize(): void;
    }
    abstract class EntityFormComponentController<E extends Cmc.Core.EntityModel.IEntity, T extends IEntityService, K extends ISecurityService> {
        protected $injector: angular.auto.IInjectorService;
        private dirtyCheckingEnabled;
        cmcRef: any;
        protected initialEntity: E;
        protected $log: angular.ILogService;
        protected $state: angular.ui.IStateService;
        protected $stateParams: any;
        protected $q: angular.IQService;
        protected $window: angular.IWindowService;
        protected gettextCatalog: angular.gettext.gettextCatalog;
        protected optionsMetadata: GlobalServices.IOptionsMetadataService;
        protected dirtyCheckService: DirtyCheck.IDirtyCheckService;
        protected entityService: T;
        protected securityService: K;
        protected localization: any;
        protected controls: any;
        protected entity: E;
        protected componentOptions: any;
        protected cmcStandardValidation: any;
        protected messages: any;
        protected templateHelper: Services.ITemplateHelperService;
        protected notifier: any;
        protected kendoValidationRuleService: GlobalServices.IKendoValidationRuleService;
        protected securityServiceName: string;
        protected baseUri: string;
        protected api: any;
        constructor($injector: angular.auto.IInjectorService, entityServiceName: string, securityServiceName: string, dirtyCheckingEnabled?: boolean);
        $onInit(): void;
        protected initialize(entity: E, namespaces: Array<string>): void;
        protected setExternalReference(): void;
        protected initializeEntity(entity: E): void;
        private initializeComponentOptions;
        protected onInitializedEntity(): void;
        protected onInitialized(): void;
        protected customizeComponentOptions(options: any): void;
        protected validate(): boolean;
        protected resetDirty(): void;
        protected getDirtyInitialEntity(): E;
        protected isDirty(): boolean;
        protected onSave(): angular.IPromise<any>;
    }
}
declare namespace Nexus {
    /**
     * @ngdoc interface
     * @name IEntityService
     *
     * @description
     * An entity service.
     */
    interface IEntityService {
        get(id: any, command?: string, btnEvent?: string): angular.IHttpPromise<any>;
        create(command?: string, data?: any): angular.IHttpPromise<any>;
        save(entity: any, command?: string, message?: string): angular.IHttpPromise<any>;
        saveNew(entity: any, command?: string): angular.IHttpPromise<any>;
        saveOrSaveNew(entity: any): angular.IHttpPromise<any>;
        delete(entity: any, command?: string): angular.IHttpPromise<any>;
        getOrCreate(id: any): angular.IHttpPromise<any>;
        deleteById(id: any): angular.IPromise<any>;
        deleteMultiple(entities: any[], message?: string): angular.IPromise<any>;
        deleteMultipleById(ids: any[], message?: string, invalidRecordMessage?: string): angular.IPromise<any>;
        isNew(entity: any): boolean;
        getMessage(id: number, parms?: any[]): string;
        buildOdataQuery(options: {
            entitySet?: string;
            select?: string;
            expand?: string;
            orderby?: string;
            filter?: string;
        }): string;
        duplicate(source: any, destination: any): any;
        getOdata(query: string, single?: boolean): angular.IPromise<any>;
        entityNamespace: string;
        entityName: string;
        nameProperty: string;
        getNullSafeIdFilter(id: number): string;
        getSystemSetting(settingName: string): any;
    }
    /**
     * @ngdoc service
     * @name EntityService
     * @requires $log, $q, gettext, campusNexusApi, messages, notifier
     * @description
     *
     * Base module entity service. Subclasses must only supply the
     * `rootUri` for the target module, for example 'Admissions/Deposit',
     * and the this class will automatically implement the basic command-
     * oriented data operations (Create/Delete/Get/Save/SaveNew)..
     * These standard command-oriented operations are used throughout the
     * framework to automatically save the entity state. For example, the base
     * {DetailComponentController} will invoke `getOrCreate` when initialized
     * (based upon if supplied an ID or not. Likewise, the base component
     * controller witll invoke the `save` method when the default "Save" button
     * is clicked.
     *
     * Given the above, in cases where the entity commands don't neatly align with
     * the standard commmands (Create/Delete/Get/Save/SaveNew), it is important
     * that subclasses map those non-standard commands to the standard methods whenever possible.
     * Therefore, if a given command happens to be, for example, MyReallySpecialSave,
     * that the subclass override `save` to ensure that the framework can continue
     * to effective leverage the default method:
     * <code>
     * public save(entity: any): angular.Ipromise<any> {
     *    return super.save(entity, 'MyReallySpecialSave');
     * }
     * </code>
     */
    abstract class EntityService implements IEntityService {
        protected $injector: angular.auto.IInjectorService;
        protected rootUri: string;
        protected entityDisplayName?: string;
        protected $log: angular.ILogService;
        protected $q: angular.IQService;
        protected gettextCatalog: angular.gettext.gettextCatalog;
        protected campusNexusApi: any;
        protected messages: any;
        protected notifier: any;
        protected api: any;
        entityNamespace: string;
        entityName: string;
        nameProperty: string;
        protected resp: any;
        protected systemSettingsCache: any;
        /**
         * @ngdoc constructor
         * @description
         *
         * Constructs an {EntityService} instance for the given `rootUri` injecting
         * $log, $q, $gettext, campusNexusApi, messages, and notifier and makeing them available
         * to subclasses via the respective protected property.
         *
         * @param {angular.auto.IInjectorService} $injector - Angular injector
         * @param {string} rootUrl - the root command URI i.e. 'Admissions/Deposit'
         * @param {string} entityDisplayName - optional display name to use in messages
         */
        constructor($injector: angular.auto.IInjectorService, rootUri: string, entityDisplayName?: string);
        /**
         * @ngdoc function
         * @name getMessage
         * @description
         *
         * Helper nethod to return message from {messages} service with the {entityDisplayName} as the messages argument
         *
         * @param {number} id - message id
         * @param {parms} parms - message parameters
         * @returns {string} - message formated with the entityDisplayName provided in the constructor
         */
        getMessage(id: number, parms?: any[]): string;
        /**
         * @ngdoc @function
         * @name post
         * @description
         *
         * Post the supplied `data` to the given `command` URL and optionally display supplied
         * `message` upon promise resolution
         *
         * @param {string} command
         * @param {any} data to post
         * @param {string} message - optional message to display on promise resolution
         * @param {string} commandNamespace - optional command namespace string to be used instead of namespace associated with the current entity
         * @returns {angular.IPromise<any>}
         */
        protected post(command: string, data?: any, message?: string, commandNamespace?: string): angular.IHttpPromise<any>;
        protected postBtnEvent(command: string, data?: any, message?: string, commandNamespace?: string): angular.IHttpPromise<any>;
        /**
         * @ngdoc function
         * @name getOrCreate
         * @description
         *
         * Helper method that invokes `get` or `create` based upon the optionally supplied `id` argument.
         * @param {number} id - optional identifer that if defined causes `get` to be invoked
         * @returns {angular.Promise<any>} entity
         */
        getOrCreate(id?: number | string): angular.IHttpPromise<any>;
        /**
         * @ngdoc function
         * @name get
         * @description
         *
         * Retrieve entity by `id` using the `Get` command
         *
         * @param {number} id that identifes the target entity
         * @param {string} command - optional command (either the verb only
         * or the full command name if it is different than the namespace).
         */
        get(id: number | string, command?: string, btnEvent?: string): angular.IHttpPromise<any>;
        /**
         * @ngdoc function
         * @name create
         * @description
         *
         * Create entity using the `Create` command
         *
         * @param {string} command - optional command (either the verb only
         * or the full command name if it is different than the namespace).
         */
        create(command?: string, data?: any): angular.IHttpPromise<any>;
        /**
         * @ngdoc function
         * @name save
         * @description
         *
         * Save `entity` using the `Save` command
         *
         * @param {any} entity to save
         * @param {string} command - optional command (either the verb only
         * or the full command name if it is different than the namespace).
         */
        save(entity: any, command?: string, message?: string): angular.IHttpPromise<any>;
        /**
         * @ngdoc function
         * @name saveNew
         * @description
         *
         * Save `entity` using the `SaveNew` command
         *
         * @param {any} entity to save
         * @param {string} command - optional command (either the verb only
         * or the full command name if it is different than the namespace).
         */
        saveNew(entity: any, command?: string): angular.IHttpPromise<any>;
        /**
         * @ngdoc function
         * @name saveOrSaveNew
         * @description
         *
         * Save `entity` using the `Save` or `SaveNew` command depending upon
         * if the entity {isNew}
         *
         * @param {any} entity to save
         */
        saveOrSaveNew(entity: any): angular.IHttpPromise<any>;
        /**
         * @ngdoc function
         * @name delete
         * @description
         *
         * Delete `entity` using the `Delete` command
         *
         * @param {any} entity to delete
         * @param {string} command - optional command (either the verb only
         * or the full command name if it is different than the namespace).
         */
        delete(entity: any, command?: string): angular.IHttpPromise<any>;
        /**
         * @ngdoc function
         * @name deleteById
         * @description
         *
         * Retrieve entity by `id` by invoking `get` then invoke `delete` upon returned entity
         *
         * @param {number} id that identifes the entity to delete
         */
        deleteById(id: number | string): angular.IPromise<any>;
        /**
         * @ngdoc function
         * @name deleteMultiple
         * @description
         *
         * Delete collection of `entities` using the `Delete` command, optionally displaying `message`
         *
         * @param {Array<any>} entities to delete
         * @param {string} command - optional command (either the verb only
         * or the full command name if it is different than the namespace).
         */
        deleteMultiple(entities: any[], command?: string, message?: string): angular.IPromise<any>;
        /**
         * @ngdoc function
         * @name deleteMultipleById
         * @description
         *
         * Delete collection of `entities` using the `Delete` command, optionally displaying `message`
         *
         * @param {Array<number>} ids of entities to delete
         * @param {string} message to display when resolved
         * @param {string} invalidRecordMessage to display when record is invalid
         */
        deleteMultipleById(ids: number[], message?: string, invalidRecordMessage?: string): angular.IPromise<any>;
        /**
         * @ngdoc function
         * @name isNew
         * @description
         *
         * Helper method to evalute if a given `entity` is new
         *
         * @param {any} entity
         * @returns {boolean} if the entity is new
         */
        isNew(entity: any): boolean;
        /**
         * @ngdoc function
         * @name buildOdataQuery
         * @description
         *
         * Constructs an OData query from the passed query options and returns it.
         *
         * @param {Object} Object containing OData query options.
         *
         * @returns {String} Returns the OData query constructed from the passed query options.
         */
        buildOdataQuery(options: {
            entitySet?: string;
            select?: string;
            expand?: string;
            orderby?: string;
            filter?: string;
        }): string;
        duplicate(source: any, destination: any): any;
        /**
         * @ngdoc function
         * @name getOdata
         * @description
         *
         * Runs the passed OData query and returs the response value.
         * By default, all records in the response value are returned.
         * Optionally, only the first record of the response value may be returned.
         *
         * @param {String} query OData query string.
         * @param {boolean} single Optional parameter.
         *                         If true, function returns only the first record of the response value.
         *                         If false, function returns all records of the response value.
         *                         False by default.
         *
         * @returns {Object} Returns a promise that resolves to the OData response value.
         */
        getOdata(query: string, single?: boolean): angular.IPromise<any>;
        /**
         * @ngdoc function
         * @name getNullSafeIdFilter
         * @description
         *
         * Returns a partial OData filter string to filter by the passed id property value.
         * If the passed value is falsy, the function returns an empty string.
         *
         * @param {Number} id Entity id property value.
         *
         * @returns {String} Returns a partial OData filter string to filter by the passed id property value.
         */
        getNullSafeIdFilter: (id: number) => string;
        /**
         * @ngdoc function
         * @name getSystemSetting
         * @description
         *
         * Returns the CampusNexusStudentSetting/SyRegistry setting value for a passed setting name.
         *
         * @param {String} settingName Name of the setting used in the SyRegistry table.
         *
         * @returns {any} Returns the CampusNexusStudentSetting/SyRegistry setting value for a passed setting name.
         */
        getSystemSetting: (settingName: string) => any;
    }
}
declare namespace Nexus {
    /**
     * @ngdoc interface
     * name IPrintComponent
     * @description
     *
     * Defines the interface for a print component.
     */
    interface IPrintComponent {
        print(options: any): void;
    }
    /**
     * @ngdoc interface
     * name IPrintComponentReference
     * @description
     *
     * Defines the interface for a print component reference that allows consumers to access the component's api.
     */
    interface IPrintComponentReference {
        print(options: any): void;
    }
    /**
     * @ngdoc component
     * name PrintComponentController
     * @description
     *
     * Abstract component impl for a component that is to be printed in a popup window.
     */
    abstract class PrintComponentController<T extends IEntityService> implements IPrintComponent {
        protected $injector: angular.auto.IInjectorService;
        protected $element: angular.IAugmentedJQuery;
        cmcRef: IPrintComponentReference;
        protected entityService: T;
        protected printService: Nexus.IPrintService;
        constructor($injector: angular.auto.IInjectorService, $element: angular.IAugmentedJQuery, entityServiceName: string);
        $onInit(): void;
        protected initialize(): void;
        /**
         * @ngdoc function
         * name setExternalReference
         * @description
         *
         * Creates the external reference to this component so that consuming components can access its api
         */
        private setExternalReference;
        /**
         * @ngdoc function
         * name print
         * @description
         *
         * Invoking this function initiates the printing of this component.  Subclasses should override this for customization.
         */
        print(options: any): void;
    }
}
declare namespace Nexus.Common.ReferenceData {
    abstract class ReferenceDataDetailComponentController<T extends IEntityService, K extends ISecurityService, L extends IListComponentController> extends Nexus.DetailComponentController<T, K, L> {
        protected $injector: angular.auto.IInjectorService;
        private entityNamespace;
        private entityName;
        private campusSearchGridSort;
        protected readonly: boolean;
        protected isNew: boolean;
        protected baseUri: string;
        protected componentOption: any;
        protected campusSearchGridColumns: any[];
        protected campusSearchGridSchema: any;
        protected campusList: Cmc.Nexus.Common.Entities.ICampusListEntity[];
        protected useSimleCampusGroupDropDown: boolean;
        protected useCampusCatalog: boolean;
        protected isAllowCopyCatalog: boolean;
        protected isAllowedToModifyIsActive: boolean;
        protected api: any;
        protected permittedCampusIds: number[];
        protected allCampusIds: number[];
        protected isCampusCatalog: boolean;
        protected hideNoOptionLabel: boolean;
        private $systemTimeout;
        constructor($injector: angular.auto.IInjectorService, entityServiceName: string, securityServiceName: string, dirtyCheckingEnabled?: boolean);
        protected animateToSelf(): void;
        protected initializeWithName(id: any, namespaces: Array<string>, entityName: string): void;
        protected setUseSimpleCampusGroupControl(value?: boolean): void;
        protected onCampusChanged(): void;
        protected customizeComponentOptions(options: any): void;
        protected onInitialized(): void;
        private setIsNew;
        private cloneEntityComponentOptions;
        private setReadOnlyIfSystemCode;
        private configureCampusSearchControl;
        codeOnBlur: () => void;
        protected campusesSearchControlChanged(target: any): void;
        protected setDisableIsAllowedToModifyIsActive(): void;
        protected isPermittedAllCampuses(): boolean;
        protected dirtyCheckCancelled: () => void;
        onCampusSearchDataSchemaParse: (response: any) => any;
        private getCampuses;
    }
}
declare namespace Nexus.Common.ReferenceData {
    abstract class ReferenceDataDetailWithFormComponentController<E extends Cmc.Core.EntityModel.IEntity, T extends IEntityService, K extends ISecurityService, L extends IListComponentController> extends Nexus.DetailWithFormComponentController<E, T, K, L> {
        protected $injector: angular.auto.IInjectorService;
        private isNew;
        private componentOption;
        private readonly;
        constructor($injector: angular.auto.IInjectorService, entityServiceName: string, securityServiceName: string, dirtyCheckingEnabled?: boolean);
        protected initializeWithName(id: any, namespaces: Array<string>, entityName: string): angular.IPromise<any>;
        protected onInitialized(): void;
        private setIsNew;
        private cloneEntityComponentOptions;
        private setReadOnlyIfSystemCode;
    }
}
declare namespace Nexus.Common.ReferenceData {
    abstract class ReferenceDataFormComponentController<E extends Cmc.Core.EntityModel.IEntity, T extends IEntityService, K extends ISecurityService> extends Nexus.EntityFormComponentController<E, T, K> {
        protected $injector: angular.auto.IInjectorService;
        private isNew;
        private entityNamespace;
        private entityName;
        private readonly;
        protected componentOption: any;
        protected baseUri: string;
        protected campusSearchGridColumns: Array<any>;
        protected campusList: Array<Cmc.Nexus.Common.Entities.ICampusListEntity>;
        protected useSimleCampusGroupDropDown: boolean;
        protected isAllowedToModifyIsActive: boolean;
        constructor($injector: angular.auto.IInjectorService, entityServiceName: string, securityServiceName: string, dirtyCheckingEnabled?: boolean);
        protected initializeWithName(entity: E, namespaces: Array<string>, entityName: string): void;
        protected setUseSimpleCampusGroupControl(value?: boolean): void;
        protected customizeComponentOptions(options: any): void;
        protected onInitialized(): void;
        private setIsNew;
        private cloneEntityComponentOptions;
        private setReadOnlyIfSystemCode;
        private configureCampusSearchControl;
        protected campusesSearchControlChanged(target: any): void;
    }
}
declare namespace Nexus.Common.ReferenceData {
    /**
     * @ngdoc interface
     * name IEthnicityListComponentController
     * @description
     *
     * Interface of this specific list component. Basic list methods are
     * described on the IListComponentControler interface, so component-specific methods
     * should be added here so consumers understand component behavior.
     */
    interface IReferenceDataListComponentController extends Nexus.IListComponentController {
    }
    abstract class ReferenceDataListComponentController<T extends IEntityService, K extends ISecurityService> extends Nexus.ListComponentController<T, K> implements IReferenceDataListComponentController {
        protected $injector: angular.auto.IInjectorService;
        entityDisplayName: string;
        protected buttonStyle: ListButtonStyle;
        protected campusFilterEnabled: boolean;
        protected loadList: boolean;
        enableSplitter: boolean;
        campusShiftFilterEnabled: boolean;
        protected campusId: string;
        protected baseUri: string;
        protected isAllowedToModifyIsActive: boolean;
        protected locationUrl: string;
        protected isAllowedCopyCatalog: boolean;
        protected isAllowedToCopyCipCode: boolean;
        protected formTitle: string;
        protected selectedCatalogRowId: number;
        splitterApplied: boolean;
        private $systemTimeout;
        protected eventHandlerSubscription$: Rx.IDisposable;
        private splitterControl;
        private splitterTopPanel;
        protected cipCodeRef: any;
        protected cipCodeValue: any;
        exportFileName: string;
        encodedEntityDisplayName: string;
        constructor($injector: angular.auto.IInjectorService, entityDisplayName: string, entityServiceName: string, securityServiceName: any, buttonStyle?: ListButtonStyle, campusFilterEnabled?: boolean, loadList?: boolean, enableSplitter?: boolean);
        protected onAccordianExpanded(value: any): void;
        protected applyCustomGridOptions(options: Grid.IGridKendoGridOptions): void;
        protected splitterEnabled(): boolean;
        protected splitterResize(e: any): void;
        applySplitter(): void;
        protected setSplitterHeight(): void;
        protected onCustomizeGridOptions(options: Grid.IGridKendoGridOptions): void;
        protected onActivateOrDeactivateButtonClick(): void;
        protected onCopyCatalogButtonClick(): void;
        protected onInitializeToolBarItems(): kendo.ui.ToolBarItem[] | any;
        protected onCopyCipCodeButtonClick(): void;
        protected onCampusDropDownChange(payload: any): void;
        protected setDisableIsAllowedToModifyIsActive(): void;
        protected campusesParser: (response: any) => void;
        /**
         * @name exandListDiv
         * @description This function is called when the detail pain is closed to expend the list pane
         */
        protected expandListDiv: () => void;
    }
}
declare namespace Nexus {
    class AuthorizationEvent {
        private authorized;
        private message?;
        constructor(authorized: boolean, message?: string);
        isAuthorized(): boolean;
    }
    /**
     * @ngdoc interface
     * @name ISecurityService
     *
     * @description
     * An entity security service.
     */
    interface ISecurityService {
        applySecurityToControlOptions(options: any, entity: any): any;
        isAllowedToCreate(operation?: string): boolean;
        isAllowedToDelete(operation?: string): boolean;
        isAllowedToGet(operation?: string): boolean;
        isAllowedToSave(operation?: string): boolean;
        isAllowedToSaveNew(operation?: string): boolean;
        isAllowedToSaveOrSaveNew(entity: any): boolean;
        resolveIf(value: boolean): ng.IPromise<any>;
        ensureInitialized(): ng.IPromise<ISecurityService>;
    }
    /**
     * @ngdoc service
     * @name SecurityService
     * @requires $log, $q, notifier
     * @description
     *
     * Base module secuity service. Subclasses must only supply the
     * `namespace` for the target module, for example 'Admissions.Deposit',
     * and the this class will automatically implement the basic command-
     * oriented permissions (Create/Delete/Get/Save/SaveNew) which map
     * one-to-one to standard entity commands on the associated {EntityService}.
     * These standard command-oriented permissions are used throughout the
     * framework to automatically enforce security. For example, the base
     * {ListComponentController} will disable the New/Add button if
     * the the associated module-specific security service method
     * `isAllowedToSaveOrSaveNew` returns false. Likewise, the module
     * router will refuse to route to the `create` state if the associated
     * module-specific security service method `isAllowedToCreate` returns false.
     * The same holds true for the basic list and show routes--if `isAllowedToGet`
     * returns false, access to those routes will be denied, and in fact, the {TileService},
     * by default, won't even render the associated tile.
     *
     * Given the above, in cases where the NSA permissions don't neatly align with
     * the standard commmand-oriented permissions (Create/Delete/Get/Save/SaveNew), it is important
     * that subclasses map those non-standard commands to the standard methods whenever possible.
     * Therefore, if a given NSA permission happens to be, for example, CanViewDeposit,
     * that the subclass override `isAllowedToGet` to ensure that the framework can continue
     * to effective enforce permissions:
     * <code>
     * public isAllowedToGet(): boolean {
     *    return super.isAllowedToGet('CanViewDeposit');
     * }
     * </code>
     */
    abstract class SecurityService implements ISecurityService {
        protected $injector: angular.auto.IInjectorService;
        private namespace;
        protected $log: angular.ILogService;
        protected nsaCache: any;
        protected $q: angular.IQService;
        private notifier;
        protected localization: any;
        /**
         * @ngdoc constructor
         * @description
         *
         * Constructs a {SecurityService} instance for the given `namespace` injecting
         * $log and makeing it available to subclasses via the protected `this.$log`
         * property.
         *
         * @param {angular.auto.IInjectorService} $injector - Angular injector
         * @param {string} namespace - the entity namespace i.e. Common.Student
         */
        constructor($injector: angular.auto.IInjectorService, namespace: string);
        /**
         * @ngdoc function
         * @name getSecurityResolver
         * @description
         *
         * Static helper method to easily get a standard secuity resolver that ensures
         * users cannot route to non-permitted states. This is a one-size-fits all
         * helper method which essentially eliminates the ability to add multipe resolvers
         * to a given state. If more flexibility is required see {isAllowedToResolve}
         *
         * @param {string} securityServiceName - name of module security service used to enforce permissions
         * @param {string} methodName - name which maps to verb in security service methods (Create/Delete/Get/Save/SaveNew)
         * @returns {any} - Angular UI resolver object named `isAllowedTo${methodName}On${SecurityServiceName}`
         */
        static getSecurityResolver(securityServiceName: string, methodName?: string): {};
        /**
         * @nsdoc function
         * @name isAllowedToResolve
         * @description
         *
         *
         * @param {string} securityServiceName - name of module security service used to enforce permissions
         * @param {string} methodName - name which maps to verb in security service methods (Create/Delete/Get/Save/SaveNew)
         * @return {Array} minification-safe resolve function
         */
        static isAllowedToResolve(securityServiceName: string, methodName?: string): (string | ((securityService: ISecurityService) => angular.IPromise<any>))[];
        private hasEntityOrOverriddenOperation;
        /**
         * @ngdoc function
         * @name resolveIf
         * @description
         *
         * Helper method that takes a boolean and converts it into a {ng.IPromise} that is only
         * resolved if the value is true.
         *
         * @param value
         * @returns {ng.IPromise<any>} - promise that only resolves if the supplied `value` is true
         */
        resolveIf(value: boolean): ng.IPromise<any>;
        /**
         * @ngdoc function
         * @name ensureInitialized
         * @description
         *
         * Ensure the underlying NSA service has been initialized
         *
         * @returns {ng.IPromise<ISecurityService>} - promise that is resovled when the underlying NSA Cache service is resolved
         */
        ensureInitialized: () => angular.IPromise<ISecurityService>;
        /**
         * @ngdoc function
         * @name hasOperation
         * @description
         *
         * Since this services makes a reasonable effort to abstract the NSA Cache, this
         * method wraps the `hasOperation` method on the underlying NSA service.
         *
         * @param {string} operation - full operation name i.e. `Common.Student.Get`
         * @returns {boolean} - indicating if the user is authorized to perform the operation
         */
        protected hasOperation(operation: string): boolean;
        /**
         * @ngdoc function
         * @name hasEveryOperation
         * @description
         *
         * Since this services makes a reasonable effort to abstract the NSA Cache, this
         * method wraps the `hasEveryOperation` method on the underlying NSA service.
         *
         * @param {array} operations - array of full operation names i.e. `Common.Student.Get`
         * @returns {boolean} - indicating if the user is authorized to perform the operations
         */
        protected hasEveryOperation(...operations: Array<string>): boolean;
        /**
         * @ngdoc function
         * @name hasOperationOnEntity
         * @description
         *
         * Since this services makes a reasonable effort to abstract the NSA Cache, this
         * method wraps the `hasOperation` method on the underlying NSA service but prepends
         * the supplied namespace to the operation name.
         *
         * @param {string} operation - partial operation name i.e. `Get`
         * @returns {boolean} - indicating if the user is authorized to perform the operation
         */
        protected hasOperationOnEntity(operation: string): boolean;
        /**
         * @ngdoc function
         * @name isAllowedToCreate
         * @description
         *
         * Indicates if the current user has the `Create` permission. When overriding
         * call super.isAllowedToCreate('My.Custom.Nsa.OperationName');
         *
         * @param {string} operation - optional operation name (either the verb only
         * or the full operation name if it is different than the namespace).
         */
        isAllowedToCreate(operation?: string): boolean;
        /**
         * @ngdoc function
         * @name isAllowedToDelete
         * @description
         *
         * Indicates if the current user has the `Delete` permission. When overriding
         * call super.isAllowedToCreate('My.Custom.Nsa.OperationName');
         *
         * @param {string} operation - optional operation name (either the verb only
         * or the full operation name if it is different than the namespace).
         */
        isAllowedToDelete(operation?: string): boolean;
        /**
         * @ngdoc function
         * @name isAllowedToGet
         * @description
         *
         * Indicates if the current user has the `Get` permission. When overriding
         * call super.isAllowedToCreate('My.Custom.Nsa.OperationName');
         *
         * @param {string} operation - optional operation name (either the verb only
         * or the full operation name if it is different than the namespace).
         */
        isAllowedToGet(operation?: string): boolean;
        /**
         * @ngdoc function
         * @name isAllowedToSave
         * @description
         *
         * Indicates if the current user has the `Save` permission. When overriding
         * call super.isAllowedToCreate('My.Custom.Nsa.OperationName');
         *
         * @param {string} operation - optional operation name (either the verb only
         * or the full operation name if it is different than the namespace).
         */
        isAllowedToSave(operation?: string): boolean;
        /**
         * @ngdoc function
         * @name isAllowedToSaveNew
         * @description
         *
         * Indicates if the current user has the `SaveNew` permission. When overriding
         * call super.isAllowedToCreate('My.Custom.Nsa.OperationName');
         *
         * @param {string} operation - optional operation name (either the verb only
         * or the full operation name if it is different than the namespace).
         */
        isAllowedToSaveNew(operation?: string): boolean;
        /**
         * @ngdoc function
         * @name isAllowedToSaveOrSaveNew
         * @description
         *
         * Evalutes a provided `entity`, and if new (as defined by the existance of and id with a value of -1)
         * calls `isAllowedToSaveNew`. Otherwise, calls `isAllowedToSave`

         * @param {any} entity - subject to determine if `Save` or `SaveNew` permissions should be checked
         * @returns {boolean} - indicating if the user is authorized to save or save new (depending upon the state of the supplied entity)
         */
        isAllowedToSaveOrSaveNew(entity: any): boolean;
        /**
         * @ngdoc function
         * @name applySecurityToControlOptions
         *
         * @description
         *
         * Helper mtehod which takes an options object literal (as produced by the {GlobalService.OptionsMetadatService})
         * and sets all controls as `readonly` is `isAllowedToSaveOrSaveNew()` returns false.
         *
         * @param {any} options - options object literal as produced by the {GlobalService.OptionsMetadatService}
         * @param {any} entity - subject entity used to determine if it is new
         */
        applySecurityToControlOptions(options: any, entity: any): void;
    }
}
declare namespace Nexus.Common.Settings {
    abstract class SettingDataDetailComponentController<T extends IEntityService, K extends ISecurityService, L extends IListComponentController> extends Nexus.DetailComponentController<T, K, L> {
        protected $injector: angular.auto.IInjectorService;
        private entityNamespace;
        private entityName;
        protected readonly: boolean;
        protected isNew: boolean;
        protected baseUri: string;
        protected componentOption: any;
        protected api: any;
        protected hideNoOptionLabel: boolean;
        private $systemTimeout;
        constructor($injector: angular.auto.IInjectorService, entityServiceName: string, securityServiceName: string, dirtyCheckingEnabled?: boolean);
        protected animateToSelf(): void;
        protected initializeWithName(id: any, namespaces: Array<string>, entityName: string): void;
        protected onInitialized(): void;
        private setIsNew;
        private cloneEntityComponentOptions;
        protected dirtyCheckCancelled: () => void;
    }
}
declare namespace Nexus.Common.Settings {
    interface ISettingDataListComponentController extends Nexus.IListComponentController {
    }
    abstract class SettingDataListComponentController<T extends IEntityService, K extends ISecurityService> extends Nexus.ListComponentController<T, K> implements ISettingDataListComponentController {
        protected $injector: angular.auto.IInjectorService;
        protected $scope: angular.IScope;
        entityDisplayName: string;
        protected buttonStyle: ListButtonStyle;
        protected loadList: boolean;
        enableSplitter: boolean;
        protected baseUri: string;
        protected locationUrl: string;
        protected isAllowedCopyCatalog: boolean;
        protected isAllowedToCopyCipCode: boolean;
        protected formTitle: string;
        splitterApplied: boolean;
        private $systemTimeout;
        protected eventHandlerSubscription$: Rx.IDisposable;
        private splitterControl;
        private splitterTopPanel;
        protected cipCodeRef: any;
        protected cipCodeValue: any;
        exportFileName: string;
        encodedEntityDisplayName: string;
        filterText: string;
        containerHeight: number;
        filterPlaceHolder: string;
        IncludeExpandCollapse: boolean;
        constructor($injector: angular.auto.IInjectorService, $scope: angular.IScope, entityDisplayName: string, entityServiceName: string, securityServiceName: any, buttonStyle?: ListButtonStyle, loadList?: boolean, enableSplitter?: boolean);
        protected onAccordianExpanded(value: any): void;
        protected applyCustomGridOptions(options: Grid.IGridKendoGridOptions): void;
        protected splitterEnabled(): boolean;
        protected splitterResize(e: any): void;
        applySplitter(): void;
        protected setSplitterHeight(): void;
        protected onCustomizeGridOptions(options: Grid.IGridKendoGridOptions): void;
        protected onInitializeToolBarItems(): kendo.ui.ToolBarItem[] | any;
        /**
         * @name exandListDiv
         * @description This function is called when the detail pain is closed to expend the list pane
         */
        protected expandListDiv: () => void;
        protected onInitialized(): void;
        protected onClearSearchText(): void;
        protected getSearchTextFieldName(): string;
    }
}
declare namespace GlobalServices.Components {
    interface IDataViewConfigurationComponentController extends angular.IComponentController {
        dataView: any;
        gridOptions: any;
        query: string;
    }
}
declare namespace GlobalServices.Components {
    interface IDataViewComponentController extends angular.IComponentController {
        dataView: any;
    }
}
declare namespace GlobalServices.Components {
}
declare namespace Components {
}
declare namespace GlobalServices.Components {
    const tileComponent: angular.IComponentOptions;
    interface ITileComponentController extends angular.IComponentController {
    }
    class TileComponentController implements ITileComponentController {
        protected $element: angular.IRootElementService;
        protected $state: angular.ui.IStateService;
        static $inject: string[];
        cnsId: string;
        cnsLabel: string;
        cnsClass: string;
        cnsSizeClass: string;
        cnsContentClass: string;
        cnsState: string;
        cnsStateParams: any;
        cnsDisabled: boolean;
        cnsOnContextMenuItemSelected: ({}: {}) => void;
        tileSet: ITileSetComponentController;
        private contextMenu;
        constructor($element: angular.IRootElementService, $state: angular.ui.IStateService);
        $onInit(): void;
        $postLink(): void;
        $onDestroy(): void;
        private formatState;
        private onClick;
        private initContextMenu;
    }
}
declare namespace GlobalServices.Components {
    interface ILiveTileComponentController extends ITileComponentController {
    }
}
declare namespace GlobalServices.Components {
    const component: angular.IComponentOptions;
    interface INotificationBarComponentController extends angular.IComponentController {
    }
    class NotificationBarComponentController implements INotificationBarComponentController {
        protected $element: angular.IRootElementService;
        protected $state: angular.ui.IStateService;
        static $inject: string[];
        cnsType: string;
        cnsHideable: boolean;
        private iconClass;
        private isHidden;
        constructor($element: angular.IRootElementService, $state: angular.ui.IStateService);
        $onInit(): void;
        private getIconClass;
    }
}
declare namespace GlobalServices.Components {
    interface IOdataResultSetComponentController extends angular.IComponentController {
        resultSet: any;
        count: number;
    }
}
declare namespace GlobalServices.Components {
}
declare namespace GlobalServices.Components {
    interface IRecentStudentsTabSetComponentController extends angular.IComponentController {
    }
}
declare namespace Components {
}
declare namespace GlobalServices.Components {
    interface ITileSetComponentController extends angular.IComponentController {
        addTile: (tile: ITileComponentController) => void;
    }
}
declare namespace GlobalServices.Components {
}
declare namespace AosTreeList {
    interface IAreaOfStudyTreelist {
    }
}
declare namespace AosTreeList {
    /**
     * @ngdoc interface
     * name IStudentStudentEnrollmentPeriodEntityService
     * @description
     *
     * Interface of this specific entity service. Basic CRUD methods are
     * described on the IEntityService interface, so entity-specific methods
     * should be added here so consumers understand service behavior.
     */
    interface IAosTreeListEntityService extends Nexus.IEntityService {
        updateStudentEnrollmentAreaOfStudy: (payload: {}) => angular.IPromise<any>;
        getStudentEnrollmentPeriodAreaOfStudies: (studentEnrollmentPeriodId: number) => angular.IPromise<any>;
    }
}
/**
* @ngdoc overview
* @name Dirty Check Component
* @description
* Contains the dirty check component definition, its controller and its template.
*/
declare namespace DirtyCheck {
    /**
    * @ngdoc interface
    * @name IDirtyCheckComponent
    * @description
    * Interface exposing the bindings for the dirty check component.
    *
    * @property {string} cnsId Unique string id to be used as part of the HTML ids of dirty check component elements.
    */
    interface IDirtyCheckComponent {
        cnsId: string;
    }
}
/**
* @ngdoc overview
* @name Dirty Check Service
* @description
* Contains all internal and externally exposed functionality of the dirty check component.
*/
declare namespace DirtyCheck {
    /**
    * @ngdoc interface
    * @name IDirtyCheckService
    * @description
    * Interface exposing the external functionality of the dirty check component.
    */
    interface IDirtyCheckRouterStateChangeEvent {
        event: any;
        toState: any;
        toParams: any;
        fromState: any;
        fromParams: any;
    }
    /**
    * @ngdoc interface
    * @name IDirtyCheckService
    * @description
    * Interface exposing the external functionality of the dirty check component.
    *
    * @property {function} registerDirtyCheck Registers dirty check functionality
    * and the display of the 'unsaved changes' dialog.
    *
    * @property {function} _onSave Internal functionality.
    * Called by the dirty check component when the dialog's 'Save' button is clicked.
    *
    * @property {function} _onDontSave Internal functionality.
    * Called by the dirty check component when the dialog's 'Don't Save' button is clicked.
    *
    * @property {function} _onCancel Internal functionality.
    * Called by the dirty check component when the dialog's 'Cancel' button is clicked.
    */
    interface IDirtyCheckService {
        registerDirtyCheck: (originalItem: {}, stateName: string, isDirty: () => IDirtyCheckIsDirtyReturnObject, save: (e: IDirtyCheckRouterStateChangeEvent) => angular.IPromise<any>, dontSave?: (e: IDirtyCheckRouterStateChangeEvent) => angular.IPromise<any>, cancel?: (e: IDirtyCheckRouterStateChangeEvent) => void) => void;
        _onSave: () => void;
        _onDontSave: () => void;
        _onCancel: () => void;
        triggerDirtyCheck: () => angular.IPromise<any>;
    }
    /**
    * @ngdoc interface
    * @name IDirtyCheckIsDirtyReturnObject
    * @description
    * Object returned by the 'isDirty' function.
    * Contains a boolean value to signal if the item has been modified
    * and the modified item itself.
    *
    * @property {boolean} isDirty Boolean value to signal if the item has been modified.
    * @property {object} modifiedItem The modified item.
    */
    interface IDirtyCheckIsDirtyReturnObject {
        /**
        * @ngdoc property
        * @name isDirty
        * @description
        * Boolean value to signal if the item has been modified.
        */
        isDirty: boolean;
        /**
        * @ngdoc property
        * @name modifiedItem
        * @description
        * The modified item.
        */
        modifiedItem: {};
    }
}
declare namespace Nexus.Core.Components.GlobalSearch {
    interface IGlobalAddressSearchService {
        init(): angular.IHttpPromise<any>;
        search(pageSize: number, page: number, searchText: string, campusId: number, selectedRefines: any): angular.IHttpPromise<any>;
        getCounts(searchText: string, campusId: number, selectedRefines: any): angular.IHttpPromise<any>;
        getFieldsDisplayString(dataItem: any): string;
        getLinkFields(): any;
        getDisplayFields(): any;
        navigate(dataItem: any): void;
        getCountsDisplay(totalDisplayRecordCount: number, totalRecordCount: number): any;
        getAllowedRefineNames(): any;
    }
}
declare namespace Nexus.Core.Components.GlobalSearch {
    interface IGlobalAllSearchService {
    }
}
declare namespace Nexus.Core.Components.GlobalSearch {
    interface IGlobalEmployerJobSearchService {
        init(): angular.IHttpPromise<any>;
        search(pageSize: number, page: number, searchText: string, campusId: number, selectedRefines: any): angular.IHttpPromise<any>;
        getCounts(searchText: string, campusId: number, selectedRefines: any): angular.IHttpPromise<any>;
        getFieldsDisplayString(dataItem: any): string;
        getLinkFields(): any;
        getDisplayFields(): any;
        navigate(dataItem: any): void;
        getCountsDisplay(totalDisplayRecordCount: number, totalRecordCount: number): any;
        getAllowedRefineNames(): any;
    }
}
declare namespace Nexus.Core.Components.GlobalSearch {
    interface IGlobalEmployerSearchService {
        init(): angular.IHttpPromise<any>;
        search(pageSize: number, page: number, searchText: string, campusId: number, selectedRefines: any): angular.IHttpPromise<any>;
        getCounts(searchText: string, campusId: number, selectedRefines: any): angular.IHttpPromise<any>;
        getFieldsDisplayString(dataItem: any): string;
        getLinkFields(): any;
        getDisplayFields(): any;
        navigate(dataItem: any): void;
        getCountsDisplay(totalDisplayRecordCount: number, totalRecordCount: number): any;
        getAllowedRefineNames(): any;
    }
}
declare namespace Nexus.Core.Components.GlobalSearch {
    interface IGlobalSearchMetadataService {
        getGlobalSearchEntities(): angular.IHttpPromise<any>;
        getRefines: any;
        getSystemSetting: (settingName: string) => angular.IPromise<any>;
    }
}
declare namespace Nexus.Core.Components.GlobalSearch {
    interface IGlobalSearchQueryBuilderService {
        buildGlobalSearchQuery(entity: any, refines: any, searchText: any, campusId: any): string;
        buildGlobalSearchCountQueries(entities: any, searchText: any): string;
    }
}
declare namespace Nexus.Core.Components.GlobalSearch {
}
declare namespace Nexus.Core.Components.GlobalSearch {
    interface IGlobalSearchSecurityService {
        isAllowedToView(entityName: string): angular.IPromise<{}>;
    }
    class GlobalSearchSecurityService implements IGlobalSearchSecurityService {
        private $injector;
        private $stateParams;
        static $inject: Array<string>;
        $log: angular.ILogService;
        nsaCache: any;
        $q: angular.IQService;
        notifier: any;
        localization: any;
        metadataService: IGlobalSearchMetadataService;
        entityName: string;
        constructor($injector: angular.auto.IInjectorService, $stateParams: angular.ui.IStateParamsService);
        isAllowedToView(entityName: string): angular.IPromise<unknown>;
    }
}
declare namespace Nexus.Core.Components.GlobalSearch {
}
declare namespace Nexus.Core.Components.GlobalSearch {
    interface IGlobalEmployerSearchService {
        init(): angular.IHttpPromise<any>;
        search(pageSize: number, page: number, searchText: string, campusId: number, selectedRefines: any): angular.IHttpPromise<any>;
        getCounts(searchText: string, campusId: number, selectedRefines: any): angular.IHttpPromise<any>;
        getFieldsDisplayString(dataItem: any): string;
        getLinkFields(): any;
        getDisplayFields(): any;
        navigate(dataItem: any): void;
        getCountsDisplay(totalDisplayRecordCount: number, totalRecordCount: number): any;
        getAllowedRefineNames(): any;
    }
}
declare namespace Nexus.Core.Components.GlobalSearch {
    interface IGlobalStudentSearchService {
        init(): angular.IHttpPromise<any>;
        search(pageSize: number, page: number, searchText: string, campusId: number, selectedRefines: any): angular.IHttpPromise<any>;
        getCounts(searchText: string, campusId: number, selectedRefines: any): angular.IHttpPromise<any>;
        getFieldsDisplayString(dataItem: any): string;
        getLinkFields(): any;
        getDisplayFields(): any;
        navigate(dataItem: any): void;
        getCountsDisplay(totalDisplayRecordCount: number, totalRecordCount: number): any;
        getAllowedRefineNames(): any;
    }
}
declare namespace Grid {
}
declare namespace Grid {
}
declare namespace Grid {
    interface IGridSelectionManager {
        getSelections(): any[];
        hasSelections(): boolean;
        clearSelections(): void;
        destroy(grid?: kendo.ui.Grid): void;
    }
    interface IGridSelectionManagerFactory {
        create(gridOptions: kendo.ui.GridOptions, idField?: string, onDataBound?: Function, onChange?: Function, onDataBinding?: Function): IGridSelectionManager;
    }
}
declare namespace Grid {
    interface IGridToolbarComponent {
        cnsId: string;
        cnsRef: IGridToolbarComponentCnsRef;
        cnsKendoToolBarOptions: kendo.ui.ToolBarOptions;
        cnsKendoToolBarActionButtons: kendo.ui.ToolBarItem[] | any;
        cnsExportFileName: string;
        cnsKendoGridOptions: kendo.ui.GridOptions;
        cnsKendoGrid: kendo.ui.Grid;
        cnsReloadGrid: () => void;
    }
    interface IGridToolbarComponentCnsRef {
        element: angular.IRootElementService;
        kendoToolBar: kendo.ui.ToolBar;
        refreshKendoToolBar: () => void;
    }
    interface IGridToolbarKendoToolBarOptions extends kendo.ui.ToolBarOptions {
        cmcHideReloadButton?: boolean;
        cmcHideExportButton?: boolean;
        cmcHideExportExcelAllButton?: boolean;
        cmcHideExportExcelButton?: boolean;
        cmcHideExportPdfAllButton?: boolean;
        cmcHideExportPdfButton?: boolean;
        cmcHideGroupButton?: boolean;
        cmcHideFilterRowButton?: boolean;
        cmcShowResizeButton?: boolean;
        cmcHideSettingsButton?: boolean;
    }
}
declare namespace Grid {
    interface IUserPreferenceRequest {
        id?: number | any;
        uniqueId?: string;
        options?: kendo.ui.GridOptions | any;
        storageType?: string;
        data?: any;
        API?: {
            getUrl?: string;
            saveUrl?: string;
            getAllByUser?: string;
            deleteUrl?: string;
        };
    }
    interface IUserPreferenceResponse {
        id?: number | any;
        key: string;
        data: kendo.ui.GridOptions | any;
    }
    interface IUserPreferencesService {
        saveUserPreference: (userPreferenceRequest: IUserPreferenceRequest) => angular.IPromise<any>;
        getUserPreference: (serPreferenceRequest: IUserPreferenceRequest) => angular.IPromise<IUserPreferenceResponse>;
        getUserPreferenceAndCache: (userPreferenceRequest: IUserPreferenceRequest) => angular.IPromise<IUserPreferenceResponse[]>;
        getStorageType: (storageType: string) => ICmcStorageService;
        removeUserPreferences: (userPreferenceRequest: IUserPreferenceRequest) => angular.IPromise<any>;
        isUpdatedSameAsOriginal: (original: kendo.ui.GridOptions | any, updated: kendo.ui.GridOptions | any) => boolean;
    }
    interface ICmcStorageServiceRequest {
        data?: any;
        key?: string;
        API?: {
            getUrl?: string;
            saveUrl?: string;
            getAllByUser?: string;
            deleteUrl?: string;
        };
    }
    interface ICmcStorageServiceResponse {
        Key: string;
        data: any;
    }
    interface ICmcStorageService {
        clear: () => void;
        getItem: (request: ICmcStorageServiceRequest) => angular.IPromise<ICmcStorageServiceResponse>;
        removeItem: (request: ICmcStorageServiceRequest) => angular.IPromise<any>;
        setItem: (request: ICmcStorageServiceRequest) => angular.IPromise<any>;
        buildGetUrl?: (request: ICmcStorageServiceRequest) => string;
        name: string;
        getAllItems(request: ICmcStorageServiceRequest): angular.IPromise<ICmcStorageServiceResponse[]>;
        destroy?: () => void;
    }
    interface IGridComponent {
        cnsId: string;
        cnsRef: IGridComponentCnsRef;
        cnsKendoGridOptions: IGridKendoGridOptions;
        cnsKendoToolBarOptions: IGridToolbarKendoToolBarOptions;
        cnsQuery: string;
        cnsKendoToolBarActionButtons: kendo.ui.ToolBarItem[] | any;
        cnsResolveMetaData: boolean;
    }
    interface IGridComponentCnsRef {
        element: angular.IRootElementService;
        kendoGrid: kendo.ui.Grid;
        cnsGridToolbar: IGridToolbarComponentCnsRef;
        cnsReload: () => void;
        cnsResize: () => void;
        getSelections: () => any[];
        hasSelections: () => boolean;
        clearSelections: () => void;
        refreshData: () => void;
    }
    interface IGridKendoGridOptions extends kendo.ui.GridOptions {
        columns?: IGridKendoGridColumn[];
        cmcExcelExport?: Array<(e: kendo.ui.GridExcelExportEvent) => void>;
        cmcHideToolBar?: boolean;
        isFreeFlowHeight?: boolean;
        expandGridtoMax?: boolean;
    }
    interface IGridKendoGridColumn extends kendo.ui.GridColumn {
        cmcLinkColumn?: {
            enable?: (dataItem: any) => boolean;
            onClick: (event: any, id: any) => void;
            contextMenu?: {
                standardMenu?: GlobalServices.IContextMenuStandardMenuOptions;
                menu?: GlobalServices.IContextMenuMenuItemOptions[];
            };
        };
    }
    const defaultKendoGridOptions: IGridKendoGridOptions;
}
declare namespace Modal {
}
declare namespace Nexus.Core.Components {
}
declare namespace Modal {
}
declare namespace Nexus.Core.Components {
}
declare namespace Modal {
}
declare namespace Nexus.Core.Components {
}
declare namespace Nexus.Core.Components {
}
declare namespace Modal {
}
/**
 * This is the modal dialog component
 */
declare namespace Modal {
}
/**
 * This is the root component example where the modal will be popped up from
 */
declare namespace Modal {
}
declare namespace Modal {
}
declare namespace Modal {
}
declare namespace PanelBar {
    interface IPanelBarComponent {
        cnsId: string;
    }
}
declare namespace Registration {
}
declare namespace Registration {
}
declare namespace Registration {
}
declare namespace Registration {
}
declare namespace Nexus.Common.Report {
}
declare namespace Nexus.Common.Report {
    interface IReportsComponentController {
        loadReport(title: string, reportServer: string, reportPortal: string, displayPath: string, reportPath: string, reportParameters: any, userId: number): any;
    }
}
declare namespace Nexus.Common.Report {
    /**
     * @ngdoc interface
     * name ISsrsReportEntityService
     * @description
     *
     * Interface of this specific entity service. Basic CRUD methods are
     * described on the IEntityService interface, so entity-specific methods
     * should be added here so consumers understand service behavior.
     */
    interface ISsrsReportEntityService extends IEntityService {
        getReports(): ng.IHttpPromise<any>;
        getReport(reportName: string, reportPath?: string): ng.IHttpPromise<any>;
        clearCache(): any;
        getAvailableReports(): ng.IPromise<any[]>;
        isConfigurationValid(): ng.IPromise<boolean>;
    }
}
declare namespace Nexus.Common.Report {
    interface IStudentReportsComponentController {
        showReport(title: string, url: string): any;
    }
}
declare namespace Nexus.Global.ScheduledJob {
    class ScheduledJobDetailComponentController extends Nexus.Common.ReferenceData.ReferenceDataDetailComponentController<IScheduledJobEntityService, IScheduledJobSecurityService, IScheduledJobListComponentController> {
        protected $injector: any;
        static $inject: Array<string>;
        jobName: string;
        jobCategory: string;
        jobType: string;
        operationName: string;
        jobParameters: any;
        jobParametersTemplate: string;
        jobTypeOptions: any;
        httpVerbOptions: any;
        jobFrequencyOptions: any;
        jsonKeyOptions: any;
        jsonValueOptions: any;
        proceedDisableJob: any;
        cancelDisableJob: any;
        addParameter: any;
        protected operationNameLabel: string;
        private onActiveChange;
        private disableMessage;
        private activeChangeJobDialog;
        private disableJobTitle;
        private jobHelpPage;
        private nsaOperation;
        constructor($injector: any);
        $onInit(): void;
        protected onSave(): angular.IPromise<any>;
        protected onInitializedEntity(): any;
    }
}
declare namespace Nexus.Global.ScheduledJob {
    interface IScheduledJobEntityService extends Nexus.IEntityService {
        getTemplate(batchType: string): angular.IHttpPromise<any>;
        runNow(jobId: string): angular.IHttpPromise<any>;
        resetService(): angular.IHttpPromise<any>;
    }
    class ScheduledJobEntityService extends Nexus.EntityService implements IScheduledJobEntityService {
        protected $injector: angular.auto.IInjectorService;
        static $inject: Array<string>;
        constructor($injector: angular.auto.IInjectorService);
        getTemplate(batchType: string): angular.IHttpPromise<any>;
        runNow(jobId: string): angular.IHttpPromise<any>;
        resetService(): angular.IHttpPromise<any>;
    }
}
declare namespace Nexus.Global.ScheduledJob {
    interface IScheduledJobListComponentController extends Nexus.Common.ReferenceData.IReferenceDataListComponentController {
    }
    class ScheduledJobListComponentController extends Nexus.Common.ReferenceData.ReferenceDataListComponentController<IScheduledJobEntityService, IScheduledJobSecurityService> implements IScheduledJobListComponentController {
        protected $injector: angular.auto.IInjectorService;
        private gettext;
        private proceedDisableJob;
        private cancelDisableJob;
        private cancelJobHistoryDialog;
        private disableMessage;
        private disableJobDialog;
        private disableJobTitle;
        private jobHistoryDialog;
        private jobHistoryDialogResult;
        private jobHistoryDialogState;
        private jobHistoryDialogTitle;
        private jobHelpPage;
        private nsaOperation;
        private childGridQuery;
        static $inject: Array<string>;
        constructor($injector: angular.auto.IInjectorService, gettext: angular.gettext.gettextFunction);
        $onInit(): void;
        protected onGetJobName(): string;
        protected onHistoryLinkClick: (sender: any, e: any) => void;
        protected onActivateOrDeactivateButtonClick(): void;
        protected onInitializeToolBarItems(): kendo.ui.ToolBarItem[] | any;
        protected onRunNowButtonClick(): void;
        protected onResetButtonClick(): void;
        protected detailInit: (e: any) => void;
        protected onJobHistoryClick(e: any): void;
        protected onCustomizeGridOptions(options: Grid.IGridKendoGridOptions): void;
    }
}
declare namespace Nexus.Global.ScheduledJob {
    interface IScheduledJobSecurityService extends Nexus.ISecurityService {
        isAllowedOperation: (operationName: string) => boolean;
    }
    class ScheduledJobSecurityService extends Nexus.SecurityService implements IScheduledJobSecurityService {
        protected $injector: angular.auto.IInjectorService;
        static $inject: Array<string>;
        constructor($injector: angular.auto.IInjectorService);
        isAllowedOperation: (operationName: string) => boolean;
    }
}
declare namespace Nexus.Crm.StudentMessage {
    interface IStudentMessageEntityService extends Nexus.IEntityService {
        getGridDetails: (campusIds: any, staffIds: any, dueDateFrom: any, dueDateTo: any) => angular.IPromise<any>;
        saveMarkAsRead: (eventId: any) => angular.IPromise<any>;
        defaultTaskEntityGet: () => angular.IPromise<any>;
        getTaskType: () => angular.IPromise<any>;
        getTaskStatus: () => angular.IPromise<any>;
        getLoggedInStaff: (staffId: any) => angular.IPromise<any>;
        getTaskDetail: (id: any) => angular.IPromise<any>;
        saveNewTask(entity: any): angular.IHttpPromise<any>;
        getTemplateId: () => angular.IPromise<any>;
        getStudentMessageGridDetails: (campusIds: any, staffIds: any, dueDateFrom: any, dueDateTo: any, advisorsId: any) => angular.IPromise<any>;
        getadvisorddlDetails: (staffId: any, staffIds: any) => angular.IPromise<any>;
    }
}
declare namespace Nexus.Crm.StudentMessage {
    interface IStudentMessageSecurityService extends Nexus.SecurityService {
        isAllowedToViewMessages: () => boolean;
        isAllowedToManageMessages: () => boolean;
        isAllowedToViewStudents: () => boolean;
        isAllowedToAddTask: () => boolean;
    }
    class StudentMessageSecurityService extends Nexus.SecurityService implements IStudentMessageSecurityService {
        static $inject: string[];
        isAllowedToViewMessages: () => boolean;
        isAllowedToManageMessages: () => boolean;
        isAllowedToViewStudents: () => boolean;
        isAllowedToAddTask: () => boolean;
    }
}
declare namespace Nexus.Crm.StudentMessage {
}
declare namespace Nexus.Crm.StudentMessage {
}
declare namespace Nexus.Crm.StudentMessage {
}
declare namespace Nexus.Crm.StudentMessage {
}
declare namespace Nexus.Crm.StudentMessage {
    interface IStudentMessageMessageHeaderControlComponentController {
        getUnreadMessages: () => void;
    }
}
declare namespace Nexus.Crm.StudentMessage {
}
declare namespace Nexus.Crm.StudentMessage {
}
declare namespace Nexus.Crm.StudentMessage {
    interface IStudentMessageMessageComponentController extends Nexus.Common.ReferenceData.IReferenceDataListComponentController {
    }
}
declare namespace Nexus.Crm.StudentMessage {
    interface IStudentMessageMessageHomePageTileComponentController {
    }
}
declare namespace Nexus.Crm.StudentMessage {
    interface IStudentMessageStudentComponentController extends Nexus.Common.ReferenceData.IReferenceDataListComponentController {
    }
}
declare namespace Student {
    interface IAlertService {
        showAlert(alert: string): any;
        hideAlert(): any;
    }
    class AlertService implements IAlertService {
        private $log;
        alert: string;
        static $inject: Array<string>;
        constructor($log: angular.ILogService);
        showAlert(alert: string): void;
        hideAlert(): void;
    }
}
declare namespace Nexus.Core.Services.AzureApplicationInsights {
    enum SeverityLevel {
        Verbose = 0,
        Information = 1,
        Warning = 2,
        Error = 3,
        Critical = 4
    }
}
declare namespace GlobalServices {
    interface IBrowserRequirements {
        isMet: boolean;
    }
}
declare namespace GlobalServices {
    interface IContextMenuService {
        create(options: IContextMenuCreateOptions): any;
    }
    interface IContextMenuStandardMenuOptions {
        open?: IContextMenuStandardMenuItemOptions;
        openNewTab?: IContextMenuStandardMenuItemOptions;
    }
    interface IContextMenuStandardMenuItemOptions {
        selected: (e?: IContextMenuSelectEvent) => IStateAndStateParams | void;
    }
    interface IContextMenuMenuItemOptions {
        text: string;
        selected?: (e?: IContextMenuSelectEvent) => void;
        cssClass?: string;
        spriteCssClass?: string;
        imageUrl?: string;
        encoded?: string;
        content?: string;
        items?: IContextMenuMenuItemOptions[];
    }
    interface IContextMenuSelectEvent extends kendo.ui.ContextMenuSelectEvent {
        dataItem?: any;
    }
    interface IStateAndStateParams {
        state: string;
        stateParams?: any;
    }
    interface IContextMenuCreateOptions {
        element: HTMLElement | JQuery;
        kendoOptions: kendo.ui.ContextMenuOptions;
        standardMenu?: IContextMenuStandardMenuOptions;
        menu?: IContextMenuMenuItemOptions[];
        getDataItem?: (e: kendo.ui.ContextMenuSelectEvent) => any;
    }
}
declare namespace Nexus.Core.Services {
    interface IDashboardSecrityService {
        initialize?: () => angular.IPromise<any>;
        initialized: boolean;
        allowedViewDomainNames: string[] | any[];
        isAllowedViews: boolean;
        isAllowedShowTaskTile: boolean;
        isAllowedShowReportsTile: boolean;
        isAllowedShowDocumentsTile: boolean;
        isAllowedShowStudentGroupsTile: boolean;
        isAllowedShowStudentTile: boolean;
        isAllowedShowListsTile: boolean;
        isAllowedShowDailyTile: boolean;
        isAllowedShowSettingsTile: boolean;
        isAllowedShowClassScheduleTile: boolean;
        isAllowedShowFinancialAidExceptionsTile: boolean;
        isAllowedClearCache: boolean;
        isAllowedShowMessagesTile: boolean;
        isAllowedShowLiveTiles: boolean;
        isAllowedShowCalendarTile: boolean;
        isAllowedToViewMessages: boolean;
        isAllowedShowRecentStudentsTiles: boolean;
    }
}
declare namespace GlobalServices {
    interface IDateHelperService {
        stripOffTime: (dateTime: Date | string) => Date | string;
        getHHMMSS: (totalSeconds: string | number) => string;
        diffInSeconds: (startDate: Date, endDate: Date) => number;
    }
}
/**
* @ngdoc overview
* @name Detail Component Dirty Check Service
* @description
* A common implementation of the dirty check service for a detail component.  It performs such things as automatic list refresh upon dirty check save
* should the user remain on the detail component.
*/
declare namespace Nexus {
    interface IDetailComponentDirtyCheckService {
        registerDirtyCheck(isDirtyFn: () => boolean, saveFn: (e: DirtyCheck.IDirtyCheckRouterStateChangeEvent) => ng.IPromise<any>, listComponent: Nexus.IListComponentController): void;
        setDirtyCheckingEnabled(enabled?: boolean): any;
        triggerDirtyCheck(): ng.IPromise<any>;
    }
}
declare namespace GlobalServices {
    interface IDocumentTitleService {
        registerInterceptor(interceptor: IDocumentTitleInterceptorFunction | IDocumentTitleInterceptor, state: string, stateParams?: any, useCapturePhase?: boolean): any;
    }
    interface IDocumentTitleInterceptor {
        intercept: IDocumentTitleInterceptorFunction;
        state: string;
        stateParams?: any;
        useCapturePhase?: boolean;
    }
    type IDocumentTitleInterceptorFunction = (arg: IInterceptCallbackParam) => string;
    interface IDocumentTitleInterceptorResult {
        title: string;
        state: string;
        stateParams: any;
        phase: DocumentTitleInterceptPhase;
        interceptor: IDocumentTitleInterceptor;
        interceptorNode: IDocumentTitleInterceptorNode;
    }
    interface IInterceptCallbackParam {
        currentTitle: string;
        interceptor: IDocumentTitleInterceptor;
        interceptorNode: IDocumentTitleInterceptorNode;
        phase: DocumentTitleInterceptPhase;
        previousResults: IDocumentTitleInterceptorResult[];
        stopPropagation: () => void;
        isPropagationStopped: () => boolean;
    }
    class DocumentTitleInterceptor implements IDocumentTitleInterceptor {
        intercept: IDocumentTitleInterceptorFunction;
        state: string;
        stateParams?: any;
        useCapturePhase: boolean;
        constructor(intercept: IDocumentTitleInterceptorFunction, state: string, stateParams?: any, useCapturePhase?: boolean);
    }
    interface IDocumentTitleInterceptorNode {
        registerInterceptor(interceptor: IDocumentTitleInterceptor): any;
        findClosest(state: string): IDocumentTitleInterceptorNode;
        findInterceptors(state: string, stateParams?: any, useCapturePhase?: boolean): IDocumentTitleInterceptor[];
        interceptors: IDocumentTitleInterceptor[];
        state: string;
        parent: IDocumentTitleInterceptorNode;
        children: IDocumentTitleInterceptorNode[];
    }
    enum DocumentTitleInterceptPhase {
        CAPTURE = "CAPTURE",
        BUBBLE = "BUBBLE"
    }
}
declare namespace GlobalServices {
    interface IFormatHelperService {
        /**
         * @name formatNumber
         * @description: Abbriviate number by K for 1000, M for 1000000, and B for 1000000000
         * @param numberToFormat the number to be formatted
         * @param decimals the number of decimal places to show in the number for numbers less than 10000
        */
        formatNumber: (numberToFormat: number, decimals?: number) => string;
    }
}
declare namespace GlobalServices {
    interface IGridHelperService {
        noFilterRowAutoComplete: () => kendo.ui.GridColumnFilterable;
    }
}
declare namespace GlobalServices {
    interface IGridResizeService {
        resizeGrid: () => void;
        detailedOpened: boolean;
        enableGridResize: boolean;
        defaultGridHeight: any;
    }
}
declare namespace GlobalServices {
    interface IKendoValidationRule {
        kendoValidation: {
            rules: any;
            messages: any;
        };
    }
    interface IKendoValidationRuleService {
        isInteger(fieldName: string): IKendoValidationRule;
        isDecimal(fieldName: string): IKendoValidationRule;
        characterLimit(fieldName: string, characterLimit: number): IKendoValidationRule;
        isDate(fieldName: string): IKendoValidationRule;
        isLess(fieldName: string, value: number): IKendoValidationRule;
        isGreater(fieldName: string, value: number): IKendoValidationRule;
        isLessOrEqual(fieldName: string, value: number): IKendoValidationRule;
        isGreaterOrEqual(fieldName: string, value: number): IKendoValidationRule;
        isBetween(fieldName: string, min: number, max: number): IKendoValidationRule;
        decimalLimit(fieldName: any, decimalLimit: number): IKendoValidationRule;
        isDateAfter(fieldName: string, toDateFieldName: string, toDateControlId: string, messageId?: number): IKendoValidationRule;
        isDateAfterOrEqual(fieldName: string, toDateFieldName: string, toDateControlId: string, messageId?: number): IKendoValidationRule;
        isDateBefore(fieldName: string, toDateFieldName: string, toDateControlId: string, messageId?: number): IKendoValidationRule;
        isDateBeforeOrEqual(fieldName: string, toDateFieldName: string, toDateControlId: string, messageId?: number): IKendoValidationRule;
        isDateOnOrLaterThan(fieldName: string, onOrLaterThanDate: Date): IKendoValidationRule;
        isDateOnOrEarlierThan(fieldName: string, onOrEarlierThanDate: Date): IKendoValidationRule;
        applyRule: (control: any, ...rules: any[]) => IKendoValidationRuleService;
    }
}
declare namespace GlobalServices {
    interface ILogoutService {
        init: () => void;
        start: () => void;
        stop: () => void;
    }
    interface IClientTiming {
        clientWarning: Date;
        isAfterWarning?: boolean;
        clientTimeout: Date;
        isAfterTimeout?: boolean;
    }
}
declare namespace GlobalServices {
    interface INsaCache {
        data: any[];
        pendingGetRequests: ng.IDeferred<{}>[];
        getCache(): ng.IPromise<INsaCache>;
        hasOperation(operationName: string): boolean;
        hasAnyOperation(operationNames: string[]): boolean;
        hasEveryOperation(operationNames: string[]): boolean;
    }
}
/**
 * Gets the raw metadata object and parses it into segment
 * as well as sets the component options
 */
declare namespace GlobalServices {
    interface IMetadataProperty {
        _Name: string;
        _Type: string;
        _Nullable?: string;
        '_cmcedm:Browsable': string;
        '_cmcedm:Required': string;
        '_cmcedm:MinLength': string;
        '_cmcedm:MaxLength': string;
        '_cmcedm:DisplayControlType'?: string;
        '_cmcedm:Lookup'?: string;
        '_cmcedm:LookupQueryName'?: string;
        '_cmcedm:LookupQueryValueColumn'?: string;
        '_cmcedm:DisplayName': string;
        '_cmcedm:Secure': string;
        '_cmcedm:Format': string;
    }
    interface IMetadataEntityType {
        _Name: string;
        '_cmcedm:DisplayName': string;
        '_cmcedm:PluralDisplayName': string;
        '_cmcedm:Description': string;
        Property: Array<IMetadataProperty>;
        NavigationProperty: Array<IMetadataProperty>;
    }
    interface IMetadataSchema {
        _Namespace: string;
        EntityType: Array<any>;
    }
    interface IMetaDataSchemaList {
        Schema: Array<any>;
    }
    interface IMetaDataEdmx {
        Edmx: {
            DataServices: IMetaDataSchemaList;
        };
    }
    interface IMetadataSecurity {
        hidden: boolean;
        readonly: boolean;
    }
    interface IRawMetadataParsingService {
        getSegment: (raw: IMetaDataEdmx, moduleName: string, entityType: string) => any;
        getPropertyOptions: (raw: IMetaDataEdmx, moduleName: string, entityType: string, gettextCatalog: angular.gettext.gettextCatalog) => any;
        buildTree: (raw: IMetaDataEdmx, moduleName: string, gettextCatalog: angular.gettext.gettextCatalog) => any;
    }
}
/**
 * Gets the metadata xml for a domain namespace
 * and serializes it to json
 *
 * Injects the metadata perser service to
 * convert the raw metadata to component options
 */
declare namespace GlobalServices {
    interface INotifier {
        info: (options: any) => void;
        error: (options: any) => void;
        success: (options: any) => void;
        warning: (options: any) => void;
        hideAll: () => void;
    }
    interface IBasicOptions {
        clazz?: string;
        groupClazz?: string;
        label: string;
        required?: boolean;
        requiredMsg?: string;
        readonly?: boolean;
        style?: string;
        disabled?: boolean;
        visible?: boolean;
        placeholder?: string;
        tooltip?: string;
        type?: string;
        minLength?: string;
        maxLength?: string;
        format?: string;
        kendoOptions?: kendo.ui.DropDownListOptions;
    }
    interface IOptionsMetadataService {
        initialize: (segment: string) => angular.IPromise<any>;
        get: (propertyPath: string) => any;
        getTree: (moduleName: string) => angular.IPromise<any>;
        getTrees: (moduleNames: Array<string>) => angular.IPromise<any>;
    }
}
declare namespace Nexus {
    interface IPersonSearchOdataSearchFilterExpressionOptions {
        idProperty?: string;
    }
    interface IPersonSearchService {
        createOdataSearchFilterExpression(searchText: string, options?: IPersonSearchOdataSearchFilterExpressionOptions): string;
    }
    class PersonSearchService implements IPersonSearchService {
        private $injector;
        static $inject: Array<string>;
        constructor($injector: angular.auto.IInjectorService);
        createOdataSearchFilterExpression(searchText: string, options: IPersonSearchOdataSearchFilterExpressionOptions): string;
    }
}
declare namespace Nexus {
    /**
     * @ngdoc interface
     * @name IPrintService
     *
     * @description
     * Service for printing.
     */
    interface IPrintService {
        print($element: JQuery, options?: IPrintServiceOptions): void;
    }
    interface IPrintServiceOptions {
        title?: string;
        height?: number;
        width?: number;
    }
    class PrintService implements IPrintService {
        protected $injector: angular.auto.IInjectorService;
        protected $window: angular.IWindowService;
        protected $timeout: angular.ITimeoutService;
        static $inject: Array<string>;
        constructor($injector: angular.auto.IInjectorService);
        /**
         * @ngdoc function
         * @name print
         * @description
         *
         * Prints the element in a popup window.
         *
         * @param {JQuery} $element - the element to print
         * @param {IPrintServiceOptions} options - optional configurable print options
         */
        print($element: JQuery, options?: IPrintServiceOptions): void;
    }
}
declare namespace Nexus.Common.ReferenceData {
    /**
     * @name IReferenceEventHandlerService
     * @description A service that uses RxJS to notify listeners of a dispatched event
     */
    interface IReferenceEventHandlerService {
        /**
         * @name routedToList
         * @description dispatch an event
         * @param route route name or path (not being used)
         */
        routedToList: (route: string) => void;
        /**
         * @name routedToListListener
         * @description return an RX Observable that fires an event when routedToList is called
         */
        routedToListListener: () => Rx.Subject<any>;
        /**
         * @name collapse
         * @description sets parameter to true to notify of a collapse
         */
        collapse: () => void;
    }
}
declare namespace GlobalServices {
    interface IRouteError {
        module?: string;
        error?: string;
        message?: string;
    }
    interface IRouteErrorHandlerService {
        handleUnauthorized: () => void;
    }
}
declare namespace Nexus.Common.Settings {
    /**
     * @name ISettingEventHandlerService
     * @description A service that uses RxJS to notify listeners of a dispatched event
     */
    interface ISettingEventHandlerService {
        /**
         * @name routedToList
         * @description dispatch an event
         * @param route route name or path (not being used)
         */
        routedToList: (route: string) => void;
        /**
         * @name routedToListListener
         * @description return an RX Observable that fires an event when routedToList is called
         */
        routedToListListener: () => Rx.Subject<any>;
        /**
         * @name collapse
         * @description sets parameter to true to notify of a collapse
         */
        collapse: () => void;
    }
}
declare namespace Services {
    /**
     * @ngdoc interface
     * @name ITemplateHelperService
     *
     * @description predefind templates for controls
     *
     */
    interface ITemplateHelperService {
        get2ColumnDropdownValueTemplate: (idFieldName: string, textFieldName: string) => string;
        get2ColumnDropdownHeaderTemplate: (idLabel: string, textLabel: string) => string;
        get2ColumnInverseDropdownValueTemplate: (idFieldName: string, textFieldName: string) => string;
        get2ColumnInverseDropdownHeaderTemplate: (idLabel: string, textLabel: string) => string;
        getMultiColumnDropdownValueTemplate: (...valueColumns: (string | ITemplateHelperServiceColumnDefinition)[]) => string;
        getMultiColumnDropdownHeaderTemplate: (...headerColumns: (string | ITemplateHelperServiceColumnDefinition)[]) => string;
        getMultiColumnDropdownValueTemplateForTemplates: (...valueColumnTemplates: (string | ITemplateHelperServiceColumnDefinition)[]) => string;
        getGridColumnOpenStudentProfileLinkTemplate: (studentNameProperty: string, studentIdProperty: string) => (data: any) => string;
        getDateTimeFormattedToLocalTime: (dateValue: any) => string;
        getDuration: (startedDateTime: any, completedDateTime: any) => string;
    }
    interface ITemplateHelperServiceColumnDefinition {
        template: string;
        styles?: string;
    }
}
declare namespace GlobalServices {
    /**
     * @ngdoc interface
     * @name ITileArea
     *
     * @description
     * A named group of tiles
     */
    interface ITileArea {
        name: string;
        groups: ITileGroup[];
    }
    /**
     * @ngdoc interface
     * @name ITileGroup
     *
     * @description
     * A named group of tiles
     */
    interface ITileGroup {
        name: string;
        priority?: number;
        tiles: ITile[];
    }
    /**
     * @ngdoc interface
     * @name ITileStateAndStateParams
     *
     * @description
     * The state and stateparams of a tile
     */
    interface ITileStateAndStateParams {
        state: string;
        stateParams?: any;
    }
    /**
     * @ngdoc interface
     * @name ITile
     *
     * @description
     * A named tile with an associated state and optional query, priority, and alert function
     */
    interface ITile {
        name: string;
        state: string;
        priority: number;
        query?: string;
        count?: number;
        formatQuery(object?: any): string;
        formatState(object?: any): string;
        toStateAndStateParams(object?: any): ITileStateAndStateParams;
        showAlert?: Function;
        isHidden?: Function;
        nsaOperations?: string[];
        isEnabled(nsaCache: INsaCache): boolean;
        data: any;
    }
    /**
     * @ngdoc interface
     * @name ITileService
     *
     * @description
     * An Angular service that stores groups of tiles and can update the counts based upon
     * the tile queries
     */
    interface ITileService {
        fetchCounts(object?: any): void;
        getAreas(): ITileArea[];
        getOrCreateArea(name?: string): ITileArea;
        getGroups(areaName?: string): ITileGroup[];
        getOrCreateGroup(name?: string, areaName?: string): ITileGroup;
        createTile(groupName: string, tileName: string, state: string, query?: string, priority?: number, areaName?: string, ...nsaOperations: any[]): ITile;
        toKendoDataSource(areaName?: string): kendo.data.HierarchicalDataSource;
    }
    /**
     * @ngdoc class
     * @name Tile
     *
     * @description
     * Concrete implementatoin of {ITile}
     */
    class Tile implements ITile {
        private $injector;
        name: string;
        state: string;
        query?: string;
        priority: number;
        nsaOperations?: string[];
        showAlert: Function;
        isHidden: Function;
        private _data;
        constructor($injector: ng.auto.IInjectorService, name: string, state: string, query?: string, priority?: number, nsaOperations?: string[]);
        isEnabled(nsaCache: INsaCache): boolean;
        /**
         * @ngdoc function
         * @name formatQuery
         * @description
         *
         * Evalute the query value with the [Lodash template]{@link https://lodash.com/docs#template}
         * method against the supplied object
         *
         * @param {any} object passed to as the variable to Lodash template
         * @returns {string} the evaluted template
         */
        formatQuery: (object?: any) => string;
        /**
         * @ngdoc function
         * @name formatState
         * @description
         *
         * Evalute the state value with the [Lodash template]{@link https://lodash.com/docs#template}
         * method against the supplied object
         *
         * @param {any} object passed to as the variable to Lodash template
         * @returns {string} the evaluted template
         */
        formatState: (object?: any) => string;
        /**
         * @ngdoc function
         * @name toStateAndStateParams
         * @description
         *
         * Evaluate the state value with the [Lodash template]{@link https://lodash.com/docs#template}
         * method against the supplied object and returns it as a state and stateParams data structure
         *
         * @param {any} object passed to as the variable to Lodash template
         * @returns {string} the evaluated template as a state and stateParams data structure
         */
        toStateAndStateParams: (object?: any) => ITileStateAndStateParams;
        data: any;
    }
    /**
     * @ngdoc service
     * @name TileService
     * @requires $http, $log, $q, $state, gettext, nsaCache, APP_BASE_URL
     * @description
     *
     * Models a tree structure of named tile groups, each of which has a
     * name, state (URL), an optional query (used to populate a count), and
     * priority.
     *
     * Groups and tiles are organized by name, and optionally a numeric priority.
     *
     * When creating a tile, the state and the query support templated strings
     * via [Lodash templates]{@link https://lodash.com/docs#template} which can include
     * variables as well as dynamic scripts using ${} and <%=%> respectively. The
     * objects necessary to satisfy the template are passed to the {fetchCounts}
     * method and resolved at that time.
     *
     * Groups and tiles should be added in the module run method like so:
     *
     * <code>
     * .run(['nsaCache', 'StudentDocumentSecurityService', 'TileService',
     *         (nsaCache: GlobalService.INsaCache,
     *          securityService: Nexus.ISecurityService,
     *          tileService: GlobalServices.ITileService) => {
     *
     *          nsaCache.getCache().then(() => {
     *              if (securityService.isAllowedToGet()) {
     *                  const tile = new tileService.createTile('Student Profile', 'Contact Manager', 'Documents',
     *                      'show-student.list-documents({studentId: ${student.id}})',
     *                      "/Documents/CampusNexus.GetStudentDocuments(studentId=${student.id})?$filter=DueDate lt ${date}<%= activeEnrollment !== undefined ? ' and (StudentEnrollmentPeriodId eq ' + activeEnrollment.Id + ' or StudentEnrollmentPeriodId eq 0)' : ''%>&$top=0&$count=true");
     *                  tile.showAlert = (tile) => {
     *                      return tile.count > 0;
     *                  }
     *              }
     *          }
     *      }
     *  ]);
     * </code>
     *
     * Or, if the entity security service implements {Nexus.ISecurityService} you can eliminate the boilerplate code
     * by using the {createRunBlock} helper method:
     *
     * <code>
     * .run(GlobalServices.TileService.createRunBlock(
     *      'StudentTranscriptRequestSecurityService',
     *      'Student Profile',
     *      'Contact Manager',
     *      'Transcript Requests',
     *      'show-student.list-transcript-requests({studentId: ${student.id}})')
     *  );
     *</code>
     */
    class TileService implements ITileService {
        private $http;
        private $log;
        private $q;
        private $state;
        private gettextCatalog;
        private nsaCache;
        private baseUrl;
        private $injector;
        private areas;
        private baseDataUri;
        static $inject: Array<string>;
        /**
         * @ngdoc constructur
         * @description
         *
         * Constructs a TileService
         * @param {angular.IHttpService} angular $http service
         * @param {angular.IQService} angular $q service
         * @param {angular.ui.IStateService} angular-ui $state service
         * @param {angular.gettext.gettextCatalog} angular gettextCatalog service
         * @param {GlobalService.INsaCache} $nsaCache service
         * @param {string} $injector angular  service
         * @param {Array<ITileGroup>} groups
         */
        constructor($http: angular.IHttpService, $log: angular.ILogService, $q: angular.IQService, $state: angular.ui.IStateService, gettextCatalog: angular.gettext.gettextCatalog, nsaCache: GlobalServices.INsaCache, baseUrl: string, $injector: ng.auto.IInjectorService, areas?: Array<ITileArea>);
        /**
         * @ngdoc function
         * @name createRunBlock
         * @description
         *
         * Create a module run block which adds the named tile in the named group if the current
         * user has access to get the assocaited entity. The supplised security service must implement
         * {Nexus.ISecurityService} as {ensureInitialized} and {isAllowedToGet} are both referenced in
         * the constructed run block.
         *
         * @param {string} securityServiceName - security service which will be injected and used to enforce permissions
         * @param {string} groupName - group in which the tile should be placed
         * @param {string} tileName - name of the tile
         * @param {string} state - Angular UI router state name (supports Lodash template syntax)
         * @param {string} query - optional query used in {fetchCounts} to determine the tile counts
         * @param {number} priority - optional priority used to override the alphabetical sorting of tiles
         * @return {Array<any>} run block
         */
        static createRunBlock(securityServiceName: string, groupName: string, tileName: string, state: string, query?: string, priority?: number): any[];
        /**
         * @ngdoc function
         * @name fetchCounts
         * @description
         *
         * Update tile with quries with their associated counts
         *
         * @param {Array<ITileGroup>} array of groups of which to update with tile counts
         * @param {any} object used to resolve templates provided in state or query
         */
        fetchCounts(tileGroups: Array<ITileGroup>, object?: any): void;
        /**
         * @ngdoc function
         * @name getAreas
         * @description
         *
         * Get areas.
         *
         * @returns {Array<ITileArea>} cloned array of tile areas
         */
        getAreas(): ITileArea[];
        /**
         * @ngdoc function
         * @name getOrCreateArea
         * @description
         *
         * Get or create a tile area by name.
         *
         * @param {string} name
         * @returns {ITileArea} named tile group
         */
        getOrCreateArea(name?: string): ITileArea;
        /**
         * @ngdoc function
         * @name getGroups
         * @description
         *
         * Get groups sorted by priority and name. This returns a clone of the
         * groups since the counts are specific to a given parent entity (for
         * example, student). These groups should be passed back in to the
         * {fetchCounts} method which will update the tile counts without
         * affecting the state of the globally stored tiles.
         *
         * @returns {Array<ITileGroup>} cloned array of tile groups
         */
        getGroups(areaName?: string): ITileGroup[];
        /**
         * @ngdoc function
         * @name getOrCreateGroup
         * @description
         *
         * Get or create a tile group by name. If not supplied the Default tile group will be returned
         *
         * @param {string} name
         * @returns {ITileGroup} named tile group
         */
        getOrCreateGroup(name?: string, areaName?: string): ITileGroup;
        /**
         * @ngdoc function
         * @name getArea
         * @description
         *
         * Get a tile area by name
         *
         * @param {string} name
         * @returns {ITileArea} named tile area
         */
        getArea(name: string): ITileArea;
        /**
         * @ngdoc function
         * @name getGroup
         * @description
         *
         * Get a tile group by name
         *
         * @param {string} name
         * @returns {ITileGroup} named tile group
         */
        getGroup(name: string, areaName?: string): ITileGroup;
        /**
         * @ngdoc function
         * @name createTile
         * @description
         *
         * Create and add a tile named {tileName} to the group {groupName}. It
         * the group doesn't yet exist, it will be created
         *
         * @param {string} groupName - group in which the tile should be placed (gettextCatalog will automatically be called on this value)
         * @param {string} tileName - name of the tile (gettextCatalog will automatically be called on this value)
         * @param {string} state - Angular UI router state name (supports Lodash template syntax)
         * @param {string} query - optional query used in {fetchCounts} to determine the tile counts
         * @param {number} priority - optional priority used to override the alphabetical sorting of tiles
         * @param {string} areaName - area name
         * @returns {ITile} constructed tile
         */
        createTile(groupName: string, tileName: string, state: string, query?: string, priority?: number, areaName?: string, ...nsaOperations: any[]): ITile;
        toKendoDataSource(areaName?: string): kendo.data.HierarchicalDataSource;
    }
}
