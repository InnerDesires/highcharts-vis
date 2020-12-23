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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/HighchartsVisEditorModel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/HighchartsVisEditorModel.js":
/*!*****************************************!*\
  !*** ./src/HighchartsVisEditorModel.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (!mstrmojo.plugins.HighchartsVis) {\n  mstrmojo.plugins.HighchartsVis = {};\n}\n\nmstrmojo.requiresCls('mstrmojo.vi.models.editors.CustomVisEditorModel');\nvar $WT = mstrmojo.vi.models.editors.CustomVisEditorModel.WIDGET_TYPE;\nmstrmojo.plugins.HighchartsVis.HighchartsVisEditorModel = mstrmojo.declare(mstrmojo.vi.models.editors.CustomVisEditorModel, null, {\n  scriptClass: 'mstrmojo.plugins.HighchartsVis.HighchartsVisEditorModel',\n  cssClass: 'highchartsvis-editor-model',\n  getCustomProperty: function getCustomProperty() {\n    return [{\n      name: 'Demo Custom Vis',\n      value: [{\n        style: $WT.EDITORGROUP,\n        items: [{\n          style: $WT.LABEL,\n          labelText: 'Text'\n        }, {\n          style: $WT.CHARACTERGROUP,\n          propertyName: 'textFont',\n          showFontStyle: false,\n          showFontSizeAndColor: false,\n          isFontSizeStepper: false\n        }, {\n          style: $WT.TWOCOLUMN,\n          items: [{\n            style: $WT.LABEL,\n            width: '67%',\n            labelText: 'Minimum Font Size:'\n          }, {\n            style: $WT.STEPPER,\n            width: '33%',\n            propertyName: 'minFont',\n            min: 5,\n            max: 50\n          }]\n        }, {\n          style: $WT.TWOCOLUMN,\n          items: [{\n            style: $WT.LABEL,\n            width: '67%',\n            labelText: 'Maximum Font Size:'\n          }, {\n            style: $WT.STEPPER,\n            width: '33%',\n            propertyName: 'maxFont',\n            min: 50,\n            max: 200\n          }]\n        }, {\n          style: $WT.TWOCOLUMN,\n          items: [{\n            style: $WT.LABEL,\n            width: '67%',\n            labelText: 'Number of Words:'\n          }, {\n            style: $WT.STEPPER,\n            width: '33%',\n            propertyName: 'numOfWords',\n            min: 1,\n            max: 250\n          }]\n        }, {\n          style: $WT.TWOCOLUMN,\n          items: [{\n            style: $WT.LABEL,\n            width: '40%',\n            labelText: 'Spiral:'\n          }, {\n            style: $WT.CHECKLIST,\n            width: '60%',\n            propertyName: 'spiral',\n            orientation: 'v',\n            multiSelect: false,\n            items: [{\n              labelText: 'Ellipse',\n              propertyName: 'ellipse'\n            }, {\n              labelText: 'Rectangular',\n              propertyName: 'rectangular'\n            }]\n          }]\n        }]\n      }]\n    }];\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSGlnaGNoYXJ0c1Zpc0VkaXRvck1vZGVsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0hpZ2hjaGFydHNWaXNFZGl0b3JNb2RlbC5qcz9mODhiIl0sInNvdXJjZXNDb250ZW50IjpbImlmICghbXN0cm1vam8ucGx1Z2lucy5IaWdoY2hhcnRzVmlzKSB7IG1zdHJtb2pvLnBsdWdpbnMuSGlnaGNoYXJ0c1ZpcyA9IHt9OyB9XG5tc3RybW9qby5yZXF1aXJlc0NscygnbXN0cm1vam8udmkubW9kZWxzLmVkaXRvcnMuQ3VzdG9tVmlzRWRpdG9yTW9kZWwnKTtcblxuY29uc3QgeyBXSURHRVRfVFlQRTogJFdUIH0gPSBtc3RybW9qby52aS5tb2RlbHMuZWRpdG9ycy5DdXN0b21WaXNFZGl0b3JNb2RlbDtcblxubXN0cm1vam8ucGx1Z2lucy5IaWdoY2hhcnRzVmlzLkhpZ2hjaGFydHNWaXNFZGl0b3JNb2RlbCA9IG1zdHJtb2pvLmRlY2xhcmUoXG4gIG1zdHJtb2pvLnZpLm1vZGVscy5lZGl0b3JzLkN1c3RvbVZpc0VkaXRvck1vZGVsLFxuICBudWxsLFxuICB7XG4gICAgc2NyaXB0Q2xhc3M6ICdtc3RybW9qby5wbHVnaW5zLkhpZ2hjaGFydHNWaXMuSGlnaGNoYXJ0c1Zpc0VkaXRvck1vZGVsJyxcbiAgICBjc3NDbGFzczogJ2hpZ2hjaGFydHN2aXMtZWRpdG9yLW1vZGVsJyxcbiAgICBnZXRDdXN0b21Qcm9wZXJ0eSgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRGVtbyBDdXN0b20gVmlzJyxcbiAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZTogJFdULkVESVRPUkdST1VQLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgc3R5bGU6ICRXVC5MQUJFTCwgbGFiZWxUZXh0OiAnVGV4dCcgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdHlsZTogJFdULkNIQVJBQ1RFUkdST1VQLFxuICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiAndGV4dEZvbnQnLFxuICAgICAgICAgICAgICAgICAgc2hvd0ZvbnRTdHlsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBzaG93Rm9udFNpemVBbmRDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBpc0ZvbnRTaXplU3RlcHBlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdHlsZTogJFdULlRXT0NPTFVNTixcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6ICRXVC5MQUJFTCwgd2lkdGg6ICc2NyUnLCBsYWJlbFRleHQ6ICdNaW5pbXVtIEZvbnQgU2l6ZTonIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6ICRXVC5TVEVQUEVSLCB3aWR0aDogJzMzJScsIHByb3BlcnR5TmFtZTogJ21pbkZvbnQnLCBtaW46IDUsIG1heDogNTAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdHlsZTogJFdULlRXT0NPTFVNTixcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6ICRXVC5MQUJFTCwgd2lkdGg6ICc2NyUnLCBsYWJlbFRleHQ6ICdNYXhpbXVtIEZvbnQgU2l6ZTonIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6ICRXVC5TVEVQUEVSLCB3aWR0aDogJzMzJScsIHByb3BlcnR5TmFtZTogJ21heEZvbnQnLCBtaW46IDUwLCBtYXg6IDIwMCB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiAkV1QuVFdPQ09MVU1OLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogJFdULkxBQkVMLCB3aWR0aDogJzY3JScsIGxhYmVsVGV4dDogJ051bWJlciBvZiBXb3JkczonIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6ICRXVC5TVEVQUEVSLCB3aWR0aDogJzMzJScsIHByb3BlcnR5TmFtZTogJ251bU9mV29yZHMnLCBtaW46IDEsIG1heDogMjUwIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3R5bGU6ICRXVC5UV09DT0xVTU4sXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiAkV1QuTEFCRUwsIHdpZHRoOiAnNDAlJywgbGFiZWxUZXh0OiAnU3BpcmFsOicgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAkV1QuQ0hFQ0tMSVNULFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNjAlJyxcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6ICdzcGlyYWwnLFxuICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiAndicsXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsVGV4dDogJ0VsbGlwc2UnLCBwcm9wZXJ0eU5hbWU6ICdlbGxpcHNlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbFRleHQ6ICdSZWN0YW5ndWxhcicsIHByb3BlcnR5TmFtZTogJ3JlY3Rhbmd1bGFyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH0sXG4gIH0sXG4pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQUpBO0FBaENBO0FBSEE7QUF5REE7QUE5REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/HighchartsVisEditorModel.js\n");

/***/ })

/******/ });