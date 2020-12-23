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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/HighchartsVisDropZones.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/HighchartsVisDropZones.js":
/*!***************************************!*\
  !*** ./src/HighchartsVisDropZones.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (!mstrmojo.plugins.HighchartsVis) {\n  mstrmojo.plugins.HighchartsVis = {};\n}\n\nmstrmojo.requiresCls('mstrmojo.vi.models.CustomVisDropZones');\n/**\n * @enum {number} ENUM_ALLOW_DROP_TYPE - { ATTRIBUTE, METRIC, ATTRIBUTE_AND_METRIC, ATTRIBUTE_OR_METRIC }\n */\n\nvar ENUM_ALLOW_DROP_TYPE = mstrmojo.vi.models.CustomVisDropZones.ENUM_ALLOW_DROP_TYPE; // dropzone name list\n\nvar ATTRIBUTE = 'Attribute';\nvar METRIC = 'Metric';\nvar TOOLTIP = 'Tooltip';\nmstrmojo.plugins.HighchartsVis.HighchartsVisDropZones = mstrmojo.declare(mstrmojo.vi.models.CustomVisDropZones, null, {\n  scriptClass: 'mstrmojo.plugins.HighchartsVis.HighchartsVisDropZones',\n  cssClass: 'highchartsvis-dropzones',\n  getCustomDropZones: function getCustomDropZones() {\n    return [{\n      name: ATTRIBUTE,\n      title: 'Drag attributes here',\n      maxCapacity: 1,\n      allowObjectType: ENUM_ALLOW_DROP_TYPE.ATTRIBUTE\n    }, {\n      name: METRIC,\n      title: 'Drag metrics here',\n      maxCapacity: 1,\n      allowObjectType: ENUM_ALLOW_DROP_TYPE.METRIC\n    }, {\n      name: TOOLTIP,\n      isAdditionalInfo: true,\n      title: 'Drag objects here',\n      allowObjectType: ENUM_ALLOW_DROP_TYPE.ATTRIBUTE_AND_METRIC\n    }];\n  },\n  getActionsForObjectsDropped: function getActionsForObjectsDropped(zone, droppedObjects, idx, replaceObject, extras) {\n    var actions = [];\n\n    if (this.getDropZoneName(zone) === METRIC) {\n      this.getAddDropZoneObjectsActions(actions, TOOLTIP, droppedObjects, idx, extras);\n    }\n\n    return actions;\n  },\n  getActionsForObjectsRemoved: function getActionsForObjectsRemoved(zone, objects) {\n    var actions = [];\n\n    if (this.getDropZoneName(zone) === METRIC) {\n      this.getRemoveDropZoneObjectsActions(actions, TOOLTIP, objects);\n    }\n\n    return actions;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSGlnaGNoYXJ0c1Zpc0Ryb3Bab25lcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9IaWdoY2hhcnRzVmlzRHJvcFpvbmVzLmpzPzFlYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKCFtc3RybW9qby5wbHVnaW5zLkhpZ2hjaGFydHNWaXMpIHsgbXN0cm1vam8ucGx1Z2lucy5IaWdoY2hhcnRzVmlzID0ge307IH1cbm1zdHJtb2pvLnJlcXVpcmVzQ2xzKCdtc3RybW9qby52aS5tb2RlbHMuQ3VzdG9tVmlzRHJvcFpvbmVzJyk7XG5cbi8qKlxuICogQGVudW0ge251bWJlcn0gRU5VTV9BTExPV19EUk9QX1RZUEUgLSB7IEFUVFJJQlVURSwgTUVUUklDLCBBVFRSSUJVVEVfQU5EX01FVFJJQywgQVRUUklCVVRFX09SX01FVFJJQyB9XG4gKi9cbmNvbnN0IHsgRU5VTV9BTExPV19EUk9QX1RZUEUgfSA9IG1zdHJtb2pvLnZpLm1vZGVscy5DdXN0b21WaXNEcm9wWm9uZXM7XG5cbi8vIGRyb3B6b25lIG5hbWUgbGlzdFxuY29uc3QgQVRUUklCVVRFID0gJ0F0dHJpYnV0ZSc7XG5jb25zdCBNRVRSSUMgPSAnTWV0cmljJztcbmNvbnN0IFRPT0xUSVAgPSAnVG9vbHRpcCc7XG5cbm1zdHJtb2pvLnBsdWdpbnMuSGlnaGNoYXJ0c1Zpcy5IaWdoY2hhcnRzVmlzRHJvcFpvbmVzID0gbXN0cm1vam8uZGVjbGFyZShcbiAgbXN0cm1vam8udmkubW9kZWxzLkN1c3RvbVZpc0Ryb3Bab25lcyxcbiAgbnVsbCxcbiAge1xuICAgIHNjcmlwdENsYXNzOiAnbXN0cm1vam8ucGx1Z2lucy5IaWdoY2hhcnRzVmlzLkhpZ2hjaGFydHNWaXNEcm9wWm9uZXMnLFxuICAgIGNzc0NsYXNzOiAnaGlnaGNoYXJ0c3Zpcy1kcm9wem9uZXMnLFxuICAgIGdldEN1c3RvbURyb3Bab25lcygpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBBVFRSSUJVVEUsXG4gICAgICAgICAgdGl0bGU6ICdEcmFnIGF0dHJpYnV0ZXMgaGVyZScsXG4gICAgICAgICAgbWF4Q2FwYWNpdHk6IDEsXG4gICAgICAgICAgYWxsb3dPYmplY3RUeXBlOiBFTlVNX0FMTE9XX0RST1BfVFlQRS5BVFRSSUJVVEUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBNRVRSSUMsXG4gICAgICAgICAgdGl0bGU6ICdEcmFnIG1ldHJpY3MgaGVyZScsXG4gICAgICAgICAgbWF4Q2FwYWNpdHk6IDEsXG4gICAgICAgICAgYWxsb3dPYmplY3RUeXBlOiBFTlVNX0FMTE9XX0RST1BfVFlQRS5NRVRSSUMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBUT09MVElQLFxuICAgICAgICAgIGlzQWRkaXRpb25hbEluZm86IHRydWUsXG4gICAgICAgICAgdGl0bGU6ICdEcmFnIG9iamVjdHMgaGVyZScsXG4gICAgICAgICAgYWxsb3dPYmplY3RUeXBlOiBFTlVNX0FMTE9XX0RST1BfVFlQRS5BVFRSSUJVVEVfQU5EX01FVFJJQyxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfSxcbiAgICBnZXRBY3Rpb25zRm9yT2JqZWN0c0Ryb3BwZWQoem9uZSwgZHJvcHBlZE9iamVjdHMsIGlkeCwgcmVwbGFjZU9iamVjdCwgZXh0cmFzKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gW107XG4gICAgICBpZiAodGhpcy5nZXREcm9wWm9uZU5hbWUoem9uZSkgPT09IE1FVFJJQykge1xuICAgICAgICB0aGlzLmdldEFkZERyb3Bab25lT2JqZWN0c0FjdGlvbnMoYWN0aW9ucywgVE9PTFRJUCwgZHJvcHBlZE9iamVjdHMsIGlkeCwgZXh0cmFzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgIH0sXG4gICAgZ2V0QWN0aW9uc0Zvck9iamVjdHNSZW1vdmVkKHpvbmUsIG9iamVjdHMpIHtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXTtcbiAgICAgIGlmICh0aGlzLmdldERyb3Bab25lTmFtZSh6b25lKSA9PT0gTUVUUklDKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVtb3ZlRHJvcFpvbmVPYmplY3RzQWN0aW9ucyhhY3Rpb25zLCBUT09MVElQLCBvYmplY3RzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgIH0sXG4gIH0sXG4pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/HighchartsVisDropZones.js\n");

/***/ })

/******/ });