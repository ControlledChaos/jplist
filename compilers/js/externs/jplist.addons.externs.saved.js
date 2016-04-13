
/** 
* jplist
* @param {Object} userOptions - jplist user options
*/
jQuery.fn.jplist = function(userOptions){};

/**
* view namespace
* @type {Object}
* @namespace
*/
jQuery.fn.jplist.view = {};

/**
* controller namespace
* @type {Object}
* @namespace
*/
jQuery.fn.jplist.controller = {};

/**
* controls namespace
* @type {Object}
* @namespace
*/
jQuery.fn.jplist.controls = {};

/**
* actions namespace
* @type {Object}
* @namespace
*/
jQuery.fn.jplist.actions = {};

/**
* services namespace
* @type {Object}
* @namespace
*/
jQuery.fn.jplist.services = {};

/**
* models namespace
* @type {Object}
* @namespace
*/
jQuery.fn.jplist.models = {};

/**
* Addons Namespace
* @type {Object}
* @namespace
*/
jQuery.fn.jplist.addons = {};
	
/**
* Events
* @param {jQueryObject} $jplistBox - jplist jquery element
* @param {Object} options - jplist user options
* @return {Object} - events
* @constructor 
*/
jQuery.fn.jplist.controller.Events = function($jplistBox, options){};
	
/**
* panel control 
* @param {jQueryObject} $jplistBox - jplist jquery element
* @param {Object} options - jplist options
* @param {jQueryObject} $control
* @constructor 
*/
jQuery.fn.jplist.view.PanelControl = function($jplistBox, options, $control){};

/**
* @type {jQueryObject}
*/
jQuery.fn.jplist.view.PanelControl.prototype.$control;

/**
* @type {jQueryObject}
*/
jQuery.fn.jplist.view.PanelControl.prototype.$jplistBox;

/**
* @type {Object}
*/
jQuery.fn.jplist.view.PanelControl.prototype.options;

/**
* @type {jQuery.fn.jplist.controller.Events}
*/
jQuery.fn.jplist.view.PanelControl.prototype.events;

/**
* @type {string}
*/
jQuery.fn.jplist.view.PanelControl.prototype.name;

/**
* @type {string}
*/
jQuery.fn.jplist.view.PanelControl.prototype.action;

/**
* @type {string}
*/
jQuery.fn.jplist.view.PanelControl.prototype.type;

/**
* @type {boolean}
*/
jQuery.fn.jplist.view.PanelControl.prototype.cookies;

/**
* @type {string}
*/
jQuery.fn.jplist.view.PanelControl.prototype.category;

/**
* @type {Object}
*/
jQuery.fn.jplist.view.PanelControl.options;

/**
* @type {string}
*/
jQuery.fn.jplist.view.PanelControl.options.prototype.status_event;

/**
* @type {string}
*/
jQuery.fn.jplist.view.PanelControl.options.prototype.force_ask_event;

/**
* Status
* @param {?string} name
* @param {?string} action
* @param {?string} type
* @param {Object} data
* @param {boolean} cookies
* @param {string} category - control category
* @constructor 
*/
jQuery.fn.jplist.models.Status = function(name, action, type, data, cookies, category){};

/**
* @type {Object}
*/
jQuery.fn.jplist.models.Status.prototype.data;

/**
* path inside dataitem: defined by data-path and data-type attributes within controls
* @param {?string|Object|null} jqPath - jquery path
* @param {?string} dataType - data type of the content in this path - text, number, datetime
* @constructor 
*/
jQuery.fn.jplist.models.Path = function(jqPath, dataType){};

/** 
* Path Service
* @type {Object} 
* @class Services for the path object (path inside dataitem, defined by data-path and data-type attributes within controls)
* @memberOf jQuery.fn.jplist.services
*/
jQuery.fn.jplist.services.Path = {};	
	
/**
* Is given path is in the given paths list (compare by jquery path only, data type is ignored)
* @param {jQuery.fn.jplist.models.Path} path
* @param {Array.<jQuery.fn.jplist.models.Path>} pathsList
* @return {boolean}
* @memberOf jQuery.fn.jplist.services.Path
*/
jQuery.fn.jplist.services.Path.isPathInList = function(path, pathsList){};


//PLUGINS AND CONTROLS REGISTRATION ----------------------------
jQuery.fn.jplist.controlTypes = {};
jQuery.fn.jplist.itemControlTypes = {};

//NAMESPACES ---------------------------------------------------

/**
* Application Layer Namespace
*/
jQuery.fn.jplist.app = {};
jQuery.fn.jplist.app.services = {};
jQuery.fn.jplist.app.services.DTOMapperService = {};
jQuery.fn.jplist.app.dto = {};

/**
* Status
* @constructor 
* @param {?string} name
* @param {?string} action
* @param {?string} type
* @param {Object} data
* @param {boolean} inStorage - is stored in storage (cookies, localstorage, etc.)
* @param {boolean} inAnimation - is included in animations
* @param {boolean} isAnimateToTop - is "animate to top" enabled
* @param {boolean} inDeepLinking - is deep linking enabled for the given control
*/
jQuery.fn.jplist.app.dto.StatusDTO = function(name, action, type, data, inStorage, inAnimation, isAnimateToTop, inDeepLinking){};
jQuery.fn.jplist.app.dto.StatusDTO.prototype.data = {};

/**
* Domain Layer Namespace
* @type {Object}
* @namespace
*/
jQuery.fn.jplist.domain = {};

jQuery.fn.jplist.domain.dom = {};
jQuery.fn.jplist.domain.dom.models = {};
jQuery.fn.jplist.domain.dom.collections = {};
jQuery.fn.jplist.domain.dom.services = {};
jQuery.fn.jplist.domain.dom.services.FiltersService = {};
jQuery.fn.jplist.domain.dom.services.SortService = {};
jQuery.fn.jplist.domain.dom.services.pagination = {};

jQuery.fn.jplist.domain.server = {};
jQuery.fn.jplist.domain.server.models = {};

/**
* Infrastructure Layer Namespace
* @type {Object}
* @namespace
*/
jQuery.fn.jplist.dal = {};
jQuery.fn.jplist.dal.services = {};
jQuery.fn.jplist.dal.services.URIService = {};
jQuery.fn.jplist.dal.services.URIService.get = function(){};

/**
* Presentation Layer Namespace
* @type {Object}
* @namespace
*/
jQuery.fn.jplist.ui = {};	
jQuery.fn.jplist.ui.list = {};
jQuery.fn.jplist.ui.list.models = {};
jQuery.fn.jplist.ui.list.controllers = {};
jQuery.fn.jplist.ui.list.collections = {};
jQuery.fn.jplist.ui.list.views = {};	
jQuery.fn.jplist.ui.controls = {};
jQuery.fn.jplist.ui.itemControls = {};
jQuery.fn.jplist.ui.statuses = {};
jQuery.fn.jplist.ui.panel = {};
jQuery.fn.jplist.ui.panel.controllers = {};
jQuery.fn.jplist.ui.panel.collections = {};

//panel controls
jQuery.fn.jplist.ui.panel.prototype.DropdownControl = function(){};

/**
* Path of dataitem member (for example, defined by data-path and data-type attributes within controls)
* @param {?string} jqPath - jquery path
* @param {?string} dataType - data type of the content in this path - text, number, datetime
* @constructor
*/
jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel = function(jqPath, dataType){};

/**
* DataItem Member got the given path
* @param {jQueryObject} $element
* @param {jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel} path - path object	
* @constructor 
*/
jQuery.fn.jplist.domain.dom.models.DataItemMemberModel = function($element, path){};

/**
* data item - item in list that should be sorted, filtered etc.
* @constructor
* @param {jQueryObject} $item - item to add to data array	
* @param {Array.<jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel>} paths - paths objects array
* @param {number} index
* @class Dataitem - item within jplist container	
*/
jQuery.fn.jplist.domain.dom.models.DataItemModel = function($item, paths, index){};

/** 
* DataItems Collection
* @constructor 
* @param {Object} options - jplist user options	
* @param {Object} observer
* @param {jQueryObject} $items - initial items to add to the collection
* @param {Array.<jQuery.fn.jplist.domain.dom.models.DataItemMemberPathModel>} paths - paths objects array
*/
jQuery.fn.jplist.domain.dom.collections.DataItemsCollection = function(options, observer, $items, paths){};
jQuery.fn.jplist.domain.dom.collections.DataItemsCollection.prototype.dataview = {};
jQuery.fn.jplist.domain.dom.collections.DataItemsCollection.prototype.dataitems = {};

//FiltersService
jQuery.fn.jplist.domain.dom.services.FiltersService.pathFilter = function(){};
jQuery.fn.jplist.domain.dom.services.FiltersService.textFilter = function(){};
jQuery.fn.jplist.domain.dom.services.FiltersService.rangeFilter = {};

var context = {};

//options
context.options = {};
context.options.delimiter0 = null
context.options.delimiter1 = {};
context.options.delimiter2 = {};
context.options.delimiter3 = {};

//control properties
context.isAnimateToTop = {};
context.inDeepLinking = {};
context.inStorage = {};
context.inAnimation = {};
Object.controlOptions = {};
Object.pagesNumber = {};
Object.prevPage = {};
Object.$root = {};

//pubsub
Object.observer = {};	
Object.observer.events = {};
Object.observer.events.init = {};
Object.observer.events.unknownStatusesChanged = {};
Object.observer.events.knownStatusesChanged = {};
Object.observer.events.statusChanged = {};
Object.observer.events.listSorted = {};
Object.observer.events.listFiltered = {};
Object.observer.events.listPaginated = {};
Object.observer.events.dataItemAdded = {};
Object.observer.events.dataItemRemoved = {};
Object.observer.events.collectionReadyEvent = {};
Object.observer.events.statusesAppliedToList = {};
Object.observer.events.animationStartEvent = {};
Object.observer.events.animationStepEvent = {};
Object.observer.events.animationCompleteEvent = {};

context.observer = {};	
context.observer.events = {};
context.observer.events.init = {};
context.observer.events.unknownStatusesChanged = {};
context.observer.events.knownStatusesChanged = {};
context.observer.events.statusChanged = {};
context.observer.events.listSorted = {};
context.observer.events.listFiltered = {};
context.observer.events.listPaginated = {};
context.observer.events.dataItemAdded = {};
context.observer.events.dataItemRemoved = {};
context.observer.events.collectionReadyEvent = {};
context.observer.events.statusesAppliedToList = {};
context.observer.events.animationStartEvent = {};
context.observer.events.animationStepEvent = {};
context.observer.events.animationCompleteEvent = {};

//history
context.history = {};
context.history.popStatus = function(){};
context.history.popList = function(){};
context.history.getLastStatus = function(){};
context.history.getLastList = function(){};
context.history.addStatus = function(){};

//settings
jQuery.fn.jplist.settings = {};

