/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/configuration/Config.js":
/*!****************************************!*\
  !*** ./client/configuration/Config.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Config; });
/* harmony import */ var _utils_generate_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/generate-id */ "./client/utils/generate-id.js");


class Config {

    constructor(ipcRenderer) {
        this.ipcRenderer = ipcRenderer;
    }

    once (event, callback) {
        this.ipcRenderer.once(event, callback);
    }

    set(...args){
        this.send("config:set", ...args);
    }

    get( ...args) {
        return this.send("config:get", ...args);
    }

    send(event, ...args){
        return new Promise((resolve, reject) => {

            const id = Object(_utils_generate_id__WEBPACK_IMPORTED_MODULE_0__["default"])();

            this.once(event + ':response:' + id, function (evt, args) {
                if (args[0] !== null) {
                    reject(args[0]);
                }

                // promises can only resolve with one argument
                return resolve(args[1]);
            });

            this.ipcRenderer.send(event, id, args);
        });
    }

}

/***/ }),

/***/ "./client/configuration/index.js":
/*!***************************************!*\
  !*** ./client/configuration/index.js ***!
  \***************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./client/configuration/Config.js");


const {
    ipcRenderer
} = window.getAppPreload();

const config = new _Config__WEBPACK_IMPORTED_MODULE_0__["default"](ipcRenderer);


/***/ }),

/***/ "./client/i18n-extension/index.js":
/*!****************************************!*\
  !*** ./client/i18n-extension/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate */ "./client/i18n-extension/translate.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: [ 'translate' ],
  translate: [ 'type', _translate__WEBPACK_IMPORTED_MODULE_0__["default"] ]
});


/***/ }),

/***/ "./client/i18n-extension/languages/de.js":
/*!***********************************************!*\
  !*** ./client/i18n-extension/languages/de.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({

    // Labels
    'General' : 'Generelle Informationen',
    'Create StartEvent' : 'Startereignis erstellen',
    'Activate the global connect tool' : 'Globales Verbindungswerkzeug aktivieren',
    'Append {type}': '{type} anfügen',
    'Add Lane above': 'Lane oberhalb hinzufügen',
    'Divide into two Lanes': 'In zwei Lanes aufteilen',
    'Divide into three Lanes': 'In drei Lanes aufteilen',
    'Add Lane below': 'Lane unterhalb hinzufügen',
    'Append compensation activity': 'Kompensation hinzufügen',
    'Change type': 'Typ ändern',
    'Connect using Association': 'Mit Assoziation verbinden',
    'Connect using Sequence/MessageFlow or Association': 'Mit Sequenzfluss/Nachrichtenfluss oder Assoziation verbinden',
    'Connect using DataInputAssociation': 'Mit DataInputAssociation verbinden',
    'Remove': 'Löschen',
    'Activate the hand tool': 'Hand-Tool aktivieren',
    'Activate the lasso tool': 'Lasso-Tool aktivieren',
    'Activate the create/remove space tool': 'Platz-hinzufügen/entfernen-Tool aktivieren',
    'Create expanded SubProcess': 'Erweiterten SubProcess erzeugen',
    'Create IntermediateThrowEvent/BoundaryEvent' : 'IntermediateThrowEvent/BoundaryEvent erzeugen',
    'Create Pool/Participant': 'Pool/Teilnehmer erzeugen',
    'Parallel Multi Instance': 'Parallele Multi-Instanz',
    'Sequential Multi Instance': 'Sequenzielle Multi-Instanz',
    'Loop': 'Schleife',
    'Ad-hoc': 'Ad-hoc',
    'Create {type}': '{type} erzeugen',
    'Task': 'Aufgabe',
    'Send Task': 'Senden Aufgabe',
    'Receive Task': 'Empfangen Aufgabe',
    'User Task': 'Benutzer Aufgabe',
    'Manual Task': 'Manuelle Aufgabe',
    'Business Rule Task': 'Geschäftsregel Aufgabe',
    'Service Task': 'Service Aufgabe',
    'Script Task': 'Script Aufgabe',
    'Call Activity': 'Aufruf-Aktivität',
    'Sub Process (collapsed)': 'Zugeklappter Prozess',
    'Start Event': 'Startereignis',
    'Intermediate Throw Event': 'Zwischenereignis',
    'End Event': 'Endereignis',
    'Message Start Event': 'Nachrichten-Startereignis',
    'Timer Start Event': 'Zeit-Startereignis',
    'Conditional Start Event': 'Bedingtes Startereignis',
    'Signal Start Event': 'Signal-Startereignis',
    'Error Start Event': 'Fehler-Startereignis',
    'Escalation Start Event': 'Eskalations-Startereignis',
    'Compensation Start Event': 'Kompensations-Startereignis',
    'Message Start Event (non-interrupting)': 'Nachrichten-Startereignis (nicht unterbrechend)',
    'Timer Start Event (non-interrupting)': 'Zeit-Startereignis (nicht unterbrechend)',
    'Conditional Start Event (non-interrupting)': 'Bedingtes Startereignis (nicht unterbrechend)',
    'Signal Start Event (non-interrupting)': 'Signal-Startereignis (nicht unterbrechend)',
    'Escalation Start Event (non-interrupting)': 'Eskalations-Startereignis (nicht unterbrechend)',
    'Message Intermediate Catch Event': 'Eintretendes Nachrichten-Zwischenereignis',
    'Message Intermediate Throw Event': 'Ausgelöstes Nachrichten-Zwischenereignis',
    'Timer Intermediate Catch Event': 'Eintretendes Zeit-Zwischenereignis',
    'Escalation Intermediate Throw Event': 'Ausgelöstes Eskalations-Zwischenereignis',
    'Conditional Intermediate Catch Event': 'Eintretendes bedingtes Zwischenereignis',
    'Link Intermediate Catch Event': 'Eintretendes Link-Zwischenereignis',
    'Link Intermediate Throw Event': 'Ausgelöstes Link-Zwischenereignis',
    'Compensation Intermediate Throw Event': 'Ausgelöstes Kompensations-Zwischenereignis',
    'Signal Intermediate Catch Event': 'Eintretendes Signal-Zwischenereignis',
    'Signal Intermediate Throw Event': 'Ausgelöstes Signal-Zwischenereignis',
    'Message End Event': 'Nachrichten-Endereignis',
    'Escalation End Event': 'Eskalations-Endereignis',
    'Error End Event': 'Fehler-Endereignis',
    'Cancel End Event': 'Abbruchs-Endereignis',
    'Compensation End Event': 'Kompensations-Endereignis',
    'Signal End Event': 'Signal-Endereignis',
    'Terminate End Event': 'Terminierungs-Endereignis',
    'Message Boundary Event': 'Angeheftetes Nachrichten-Zwischenereignis',
    'Message Boundary Event (non-interrupting)': 'Angeheftetes Nachrichten-Zwischenereignis (nicht unterbrechend)',
    'Timer Boundary Event': 'Angeheftetes Zeit-Zwischenereignis',
    'Timer Boundary Event (non-interrupting)': 'Angeheftetes Zeit-Zwischenereignis (nicht unterbrechend)',
    'Escalation Boundary Event': 'Angeheftetes Eskalations-Zwischenereignis',
    'Escalation Boundary Event (non-interrupting)': 'Angeheftetes Eskalations-Zwischenereignis (nicht unterbrechend)',
    'Conditional Boundary Event': 'Angeheftetes bedingtes Zwischenereignis',
    'Conditional Boundary Event (non-interrupting)': 'Angeheftetes bedingtes Zwischenereignis (nicht unterbrechend)',
    'Error Boundary Event': 'Angeheftetes Fehler-Zwischenereignis',
    'Cancel Boundary Event': 'Angeheftetes Abbruch-Zwischenereignis',
    'Signal Boundary Event': 'Angeheftetes Signal-Zwischenereignis',
    'Signal Boundary Event (non-interrupting)': 'Angeheftetes Signal-Zwischenereignis (nicht unterbrechend)',
    'Compensation Boundary Event': 'Angeheftetes Kompensations-Zwischenereignis',
    'Exclusive Gateway': 'Exklusives Gateway',
    'Parallel Gateway': 'Paralleles Gateway',
    'Inclusive Gateway': 'Inklusives Gateway',
    'Complex Gateway': 'Komplexes Gateway',
    'Event based Gateway': 'Ereignis-basiertes Gateway',
    'Transaction': 'Transaktion',
    'Sub Process': 'Teilprozess',
    'Event Sub Process': 'Ereignis-Teilprozess',
    'Collapsed Pool': 'Zugeklappter Pool',
    'Expanded Pool': 'Ausgeklappter Pool',

    // Errors
    'no parent for {element} in {parent}': 'kein Eltern-Element für {element} in {parent}',
    'no shape type specified': 'kein Typ der Form angegeben',
    'flow elements must be children of pools/participants': 'Fluss-Elemente müssen Kinder von Pools/Teilnehmern sein',
    'out of bounds release': 'außerhalb der Grenzen Release',
    'more than {count} child lanes': 'mehr als {count} Lane-Kinder',
    'element required': 'Element benötigt',
    'diagram not part of bpmn:Definitions': 'Prozessmodell ist nicht Teil von bpmn:Definitions',
    'no diagram to display': 'kein Prozessmodell',
    'no process or collaboration to display': 'kein Prozess/Kollaboration',
    'element {element} referenced by {referenced}#{property} not yet drawn': 'von {referenced}#{property} referenziertes Element {element} noch nicht gezeichnet',
    'already rendered {element}': '{element} bereits gerendert',
    'failed to import {element}': '{element} konnte nicht importiert werden'
});

/***/ }),

/***/ "./client/i18n-extension/languages/en.js":
/*!***********************************************!*\
  !*** ./client/i18n-extension/languages/en.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({

    // Labels
    'General' : 'Teststring',
    'Create StartEvent' : 'Startereignis fsdfdsa',
    'Activate the global connect tool' : 'Globales Verbindungswerkzeug aktivieren',
    'Append {type}': '{type} anfügen',
    'Add Lane above': 'Lane oberhalb hinzufügen',
    'Divide into two Lanes': 'In zwei Lanes aufteilen',
    'Divide into three Lanes': 'In drei Lanes aufteilen',
    'Add Lane below': 'Lane unterhalb hinzufügen',
    'Append compensation activity': 'Kompensation hinzufügen',
    'Change type': 'Typ ändern',
    'Connect using Association': 'Mit Assoziation verbinden',
    'Connect using Sequence/MessageFlow or Association': 'Mit Sequenzfluss/Nachrichtenfluss oder Assoziation verbinden',
    'Connect using DataInputAssociation': 'Mit DataInputAssociation verbinden',
    'Remove': 'Löschen',
    'Activate the hand tool': 'Hand-Tool fdsfdsa',
    'Activate the lasso tool': 'Lasso-Tool aktivieren',
    'Activate the create/remove space tool': 'Platz-hinzufügen/entfernen-Tool aktivieren',
    'Create expanded SubProcess': 'Erweiterten SubProcess erzeugen',
    'Create IntermediateThrowEvent/BoundaryEvent' : 'IntermediateThrowEvent/BoundaryEvent erzeugen',
    'Create Pool/Participant': 'Pool/Teilnehmer erzeugen',
    'Parallel Multi Instance': 'Parallele Multi-Instanz',
    'Sequential Multi Instance': 'Sequenzielle Multi-Instanz',
    'Loop': 'Schleife',
    'Ad-hoc': 'Ad-hoc',
    'Create {type}': '{type} erzeugen',
    'Task': 'Aufgabe',
    'Send Task': 'Senden Aufgabe',
    'Receive Task': 'Empfangen Aufgabe',
    'User Task': 'Benutzer Aufgabe',
    'Manual Task': 'Manuelle Aufgabe',
    'Business Rule Task': 'Geschäftsregel Aufgabe',
    'Service Task': 'Service Aufgabe',
    'Script Task': 'Script Aufgabe',
    'Call Activity': 'Aufruf-Aktivität',
    'Sub Process (collapsed)': 'Zugeklappter Prozess',
    'Start Event': 'Startereignis',
    'Intermediate Throw Event': 'Zwischenereignis',
    'End Event': 'Endereignis',
    'Message Start Event': 'Nachrichten-Startereignis',
    'Timer Start Event': 'Zeit-Startereignis',
    'Conditional Start Event': 'Bedingtes Startereignis',
    'Signal Start Event': 'Signal-Startereignis',
    'Error Start Event': 'Fehler-Startereignis',
    'Escalation Start Event': 'Eskalations-Startereignis',
    'Compensation Start Event': 'Kompensations-Startereignis',
    'Message Start Event (non-interrupting)': 'Nachrichten-Startereignis (nicht unterbrechend)',
    'Timer Start Event (non-interrupting)': 'Zeit-Startereignis (nicht unterbrechend)',
    'Conditional Start Event (non-interrupting)': 'Bedingtes Startereignis (nicht unterbrechend)',
    'Signal Start Event (non-interrupting)': 'Signal-Startereignis (nicht unterbrechend)',
    'Escalation Start Event (non-interrupting)': 'Eskalations-Startereignis (nicht unterbrechend)',
    'Message Intermediate Catch Event': 'Eintretendes Nachrichten-Zwischenereignis',
    'Message Intermediate Throw Event': 'Ausgelöstes Nachrichten-Zwischenereignis',
    'Timer Intermediate Catch Event': 'Eintretendes Zeit-Zwischenereignis',
    'Escalation Intermediate Throw Event': 'Ausgelöstes Eskalations-Zwischenereignis',
    'Conditional Intermediate Catch Event': 'Eintretendes bedingtes Zwischenereignis',
    'Link Intermediate Catch Event': 'Eintretendes Link-Zwischenereignis',
    'Link Intermediate Throw Event': 'Ausgelöstes Link-Zwischenereignis',
    'Compensation Intermediate Throw Event': 'Ausgelöstes Kompensations-Zwischenereignis',
    'Signal Intermediate Catch Event': 'Eintretendes Signal-Zwischenereignis',
    'Signal Intermediate Throw Event': 'Ausgelöstes Signal-Zwischenereignis',
    'Message End Event': 'Nachrichten-Endereignis',
    'Escalation End Event': 'Eskalations-Endereignis',
    'Error End Event': 'Fehler-Endereignis',
    'Cancel End Event': 'Abbruchs-Endereignis',
    'Compensation End Event': 'Kompensations-Endereignis',
    'Signal End Event': 'Signal-Endereignis',
    'Terminate End Event': 'Terminierungs-Endereignis',
    'Message Boundary Event': 'Angeheftetes Nachrichten-Zwischenereignis',
    'Message Boundary Event (non-interrupting)': 'Angeheftetes Nachrichten-Zwischenereignis (nicht unterbrechend)',
    'Timer Boundary Event': 'Angeheftetes Zeit-Zwischenereignis',
    'Timer Boundary Event (non-interrupting)': 'Angeheftetes Zeit-Zwischenereignis (nicht unterbrechend)',
    'Escalation Boundary Event': 'Angeheftetes Eskalations-Zwischenereignis',
    'Escalation Boundary Event (non-interrupting)': 'Angeheftetes Eskalations-Zwischenereignis (nicht unterbrechend)',
    'Conditional Boundary Event': 'Angeheftetes bedingtes Zwischenereignis',
    'Conditional Boundary Event (non-interrupting)': 'Angeheftetes bedingtes Zwischenereignis (nicht unterbrechend)',
    'Error Boundary Event': 'Angeheftetes Fehler-Zwischenereignis',
    'Cancel Boundary Event': 'Angeheftetes Abbruch-Zwischenereignis',
    'Signal Boundary Event': 'Angeheftetes Signal-Zwischenereignis',
    'Signal Boundary Event (non-interrupting)': 'Angeheftetes Signal-Zwischenereignis (nicht unterbrechend)',
    'Compensation Boundary Event': 'Angeheftetes Kompensations-Zwischenereignis',
    'Exclusive Gateway': 'Exklusives Gateway',
    'Parallel Gateway': 'Paralleles Gateway',
    'Inclusive Gateway': 'Inklusives Gateway',
    'Complex Gateway': 'Komplexes Gateway',
    'Event based Gateway': 'Ereignis-basiertes Gateway',
    'Transaction': 'Transaktion',
    'Sub Process': 'Teilprozess',
    'Event Sub Process': 'Ereignis-Teilprozess',
    'Collapsed Pool': 'Zugeklappter Pool',
    'Expanded Pool': 'Ausgeklappter Pool',

    // Errors
    'no parent for {element} in {parent}': 'kein Eltern-Element für {element} in {parent}',
    'no shape type specified': 'kein Typ der Form angegeben',
    'flow elements must be children of pools/participants': 'Fluss-Elemente müssen Kinder von Pools/Teilnehmern sein',
    'out of bounds release': 'außerhalb der Grenzen Release',
    'more than {count} child lanes': 'mehr als {count} Lane-Kinder',
    'element required': 'Element benötigt',
    'diagram not part of bpmn:Definitions': 'Prozessmodell ist nicht Teil von bpmn:Definitions',
    'no diagram to display': 'kein Prozessmodell',
    'no process or collaboration to display': 'kein Prozess/Kollaboration',
    'element {element} referenced by {referenced}#{property} not yet drawn': 'von {referenced}#{property} referenziertes Element {element} noch nicht gezeichnet',
    'already rendered {element}': '{element} bereits gerendert',
    'failed to import {element}': '{element} konnte nicht importiert werden'
});

/***/ }),

/***/ "./client/i18n-extension/translate.js":
/*!********************************************!*\
  !*** ./client/i18n-extension/translate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Translator; });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configuration */ "./client/configuration/index.js");
/* harmony import */ var _languages_de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languages/de.js */ "./client/i18n-extension/languages/de.js");
/* harmony import */ var _languages_en_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages/en.js */ "./client/i18n-extension/languages/en.js");




function Translator(eventBus) {

  const languages = {}
  languages["de"] = _languages_de_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  languages["en"] = _languages_en_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  let currentLanguage = _languages_de_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  const value = _configuration__WEBPACK_IMPORTED_MODULE_0__["config"].get("editor_language");
  value.then((language) => {
    currentLanguage = languages[language];
    eventBus.fire('i18n.changed');
  })

  eventBus.on('editorActions.init', function (event) {
    const editorActions = event.editorActions;
    editorActions.register('language.changed', function (language) {
      currentLanguage = languages[language];
      _configuration__WEBPACK_IMPORTED_MODULE_0__["config"].set("editor_language", language);
      eventBus.fire('i18n.changed');
    });
  });

  return (template, type) => {

    //TODO Handling für bessere übersetzung

    return currentLanguage[template] || template;
  }
}

Translator.$inject = ['eventBus'];

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var _i18n_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n-extension */ "./client/i18n-extension/index.js");




Object(camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__["registerBpmnJSPlugin"])(_i18n_extension__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./client/utils/generate-id.js":
/*!*************************************!*\
  !*** ./client/utils/generate-id.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateId; });
/* harmony import */ var ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ids */ "./node_modules/ids/dist/index.esm.js");


const ids = new ids__WEBPACK_IMPORTED_MODULE_0__["default"]([ 32, 36, 1 ]);

function generateId() {
    return ids.next();
}

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/index.js ***!
  \**************************************************************/
/*! exports provided: registerClientPlugin, registerBpmnJSPlugin, registerBpmnJSModdleExtension, getModelerDirectory, getPluginsDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClientPlugin", function() { return registerClientPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSPlugin", function() { return registerBpmnJSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSModdleExtension", function() { return registerBpmnJSModdleExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelerDirectory", function() { return getModelerDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPluginsDirectory", function() { return getPluginsDirectory; });
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerBpmnJSPlugin(BpmnJSModule);
 */
function registerBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.modeler.additionalModules');
}

/**
 * Validate and register a bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerBpmnJSModdleExtension(moddleDescriptor);
 */
function registerBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.modeler.moddleExtension');
}

/**
 * Return the modeler directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getModelerDirectory() {
  return window.getModelerDirectory();
}

/**
 * Return the modeler plugin directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getPluginsDirectory() {
  return window.getPluginsDirectory();
}

/***/ }),

/***/ "./node_modules/ids/dist/index.esm.js":
/*!********************************************!*\
  !*** ./node_modules/ids/dist/index.esm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hat_1 = createCommonjsModule(function (module) {
var hat = module.exports = function (bits, base) {
    if (!base) base = 16;
    if (bits === undefined) bits = 128;
    if (bits <= 0) return '0';
    
    var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
    for (var i = 2; digits === Infinity; i *= 2) {
        digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
    }
    
    var rem = digits - Math.floor(digits);
    
    var res = '';
    
    for (var i = 0; i < Math.floor(digits); i++) {
        var x = Math.floor(Math.random() * base).toString(base);
        res = x + res;
    }
    
    if (rem) {
        var b = Math.pow(base, rem);
        var x = Math.floor(Math.random() * b).toString(base);
        res = x + res;
    }
    
    var parsed = parseInt(res, base);
    if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
        return hat(bits, base)
    }
    else return res;
};

hat.rack = function (bits, base, expandBy) {
    var fn = function (data) {
        var iters = 0;
        do {
            if (iters ++ > 10) {
                if (expandBy) bits += expandBy;
                else throw new Error('too many ID collisions, use more bits')
            }
            
            var id = hat(bits, base);
        } while (Object.hasOwnProperty.call(hats, id));
        
        hats[id] = data;
        return id;
    };
    var hats = fn.hats = {};
    
    fn.get = function (id) {
        return fn.hats[id];
    };
    
    fn.set = function (id, value) {
        fn.hats[id] = value;
        return fn;
    };
    
    fn.bits = bits || 128;
    fn.base = base || 16;
    return fn;
};
});

/**
 * Create a new id generator / cache instance.
 *
 * You may optionally provide a seed that is used internally.
 *
 * @param {Seed} seed
 */

function Ids(seed) {
  if (!(this instanceof Ids)) {
    return new Ids(seed);
  }

  seed = seed || [128, 36, 1];
  this._seed = seed.length ? hat_1.rack(seed[0], seed[1], seed[2]) : seed;
}
/**
 * Generate a next id.
 *
 * @param {Object} [element] element to bind the id to
 *
 * @return {String} id
 */

Ids.prototype.next = function (element) {
  return this._seed(element || true);
};
/**
 * Generate a next id with a given prefix.
 *
 * @param {Object} [element] element to bind the id to
 *
 * @return {String} id
 */


Ids.prototype.nextPrefixed = function (prefix, element) {
  var id;

  do {
    id = prefix + this.next(true);
  } while (this.assigned(id)); // claim {prefix}{random}


  this.claim(id, element); // return

  return id;
};
/**
 * Manually claim an existing id.
 *
 * @param {String} id
 * @param {String} [element] element the id is claimed by
 */


Ids.prototype.claim = function (id, element) {
  this._seed.set(id, element || true);
};
/**
 * Returns true if the given id has already been assigned.
 *
 * @param  {String} id
 * @return {Boolean}
 */


Ids.prototype.assigned = function (id) {
  return this._seed.get(id) || false;
};
/**
 * Unclaim an id.
 *
 * @param  {String} id the id to unclaim
 */


Ids.prototype.unclaim = function (id) {
  delete this._seed.hats[id];
};
/**
 * Clear all claimed ids.
 */


Ids.prototype.clear = function () {
  var hats = this._seed.hats,
      id;

  for (id in hats) {
    this.unclaim(id);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Ids);
//# sourceMappingURL=index.esm.js.map


/***/ })

/******/ });
//# sourceMappingURL=client.js.map