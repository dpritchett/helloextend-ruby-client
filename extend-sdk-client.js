/*!
 * Copyright (c) 2019-present, Extend, Inc.
 * version: 1.15.10
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Extend"] = factory();
	else
		root["Extend"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		// Create a new module (and put it into th/anduuube cache)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.html = html;
exports.list = list;
exports.listPool = listPool;
exports.mount = mount;
exports.place = place;
exports.router = router;
exports.setAttr = setAttr;
exports.setChildren = setChildren;
exports.setData = setData;
exports.setStyle = setStyle;
exports.setXlink = setXlink;
exports.svg = svg;
exports.text = text;
exports.unmount = unmount;
exports.s = exports.h = exports.el = exports.Router = exports.Place = exports.ListPool = exports.List = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function parseQuery(query) {
  var isId = false;
  var isClass = false;
  var tag = '';
  var id = '';
  var className = '';

  for (var i = 0; i < query.length; i++) {
    var _char = query[i];

    if (_char === '.') {
      isClass = true;
      isId = false;

      if (className.length > 0) {
        className += ' ';
      }
    } else if (_char === '#') {
      isId = true;
      isClass = false;
    } else if (isId) {
      id += _char;
    } else if (isClass) {
      className += _char;
    } else {
      tag += _char;
    }
  }

  return {
    tag: tag || 'div',
    id: id,
    className: className
  };
}

function createElement(query, ns) {
  var ref = parseQuery(query);
  var tag = ref.tag;
  var id = ref.id;
  var className = ref.className;
  var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);

  if (id) {
    element.id = id;
  }

  if (className) {
    if (ns) {
      element.setAttribute('class', className);
    } else {
      element.className = className;
    }
  }

  return element;
}

function unmount(parent, child) {
  var parentEl = getEl(parent);
  var childEl = getEl(child);

  if (child === childEl && childEl.__redom_view) {
    // try to look up the view if not provided
    child = childEl.__redom_view;
  }

  if (childEl.parentNode) {
    doUnmount(child, childEl, parentEl);
    parentEl.removeChild(childEl);
  }

  return child;
}

function doUnmount(child, childEl, parentEl) {
  var hooks = childEl.__redom_lifecycle;

  if (hooksAreEmpty(hooks)) {
    childEl.__redom_lifecycle = {};
    return;
  }

  var traverse = parentEl;

  if (childEl.__redom_mounted) {
    trigger(childEl, 'onunmount');
  }

  while (traverse) {
    var parentHooks = traverse.__redom_lifecycle || {};

    for (var hook in hooks) {
      if (parentHooks[hook]) {
        parentHooks[hook] -= hooks[hook];
      }
    }

    if (hooksAreEmpty(parentHooks)) {
      traverse.__redom_lifecycle = null;
    }

    traverse = traverse.parentNode;
  }
}

function hooksAreEmpty(hooks) {
  if (hooks == null) {
    return true;
  }

  for (var key in hooks) {
    if (hooks[key]) {
      return false;
    }
  }

  return true;
}
/* global Node, ShadowRoot */


var hookNames = ['onmount', 'onremount', 'onunmount'];
var shadowRootAvailable = typeof window !== 'undefined' && 'ShadowRoot' in window;

function mount(parent, child, before, replace) {
  var parentEl = getEl(parent);
  var childEl = getEl(child);

  if (child === childEl && childEl.__redom_view) {
    // try to look up the view if not provided
    child = childEl.__redom_view;
  }

  if (child !== childEl) {
    childEl.__redom_view = child;
  }

  var wasMounted = childEl.__redom_mounted;
  var oldParent = childEl.parentNode;

  if (wasMounted && oldParent !== parentEl) {
    doUnmount(child, childEl, oldParent);
  }

  if (before != null) {
    if (replace) {
      parentEl.replaceChild(childEl, getEl(before));
    } else {
      parentEl.insertBefore(childEl, getEl(before));
    }
  } else {
    parentEl.appendChild(childEl);
  }

  doMount(child, childEl, parentEl, oldParent);
  return child;
}

function trigger(el, eventName) {
  if (eventName === 'onmount' || eventName === 'onremount') {
    el.__redom_mounted = true;
  } else if (eventName === 'onunmount') {
    el.__redom_mounted = false;
  }

  var hooks = el.__redom_lifecycle;

  if (!hooks) {
    return;
  }

  var view = el.__redom_view;
  var hookCount = 0;
  view && view[eventName] && view[eventName]();

  for (var hook in hooks) {
    if (hook) {
      hookCount++;
    }
  }

  if (hookCount) {
    var traverse = el.firstChild;

    while (traverse) {
      var next = traverse.nextSibling;
      trigger(traverse, eventName);
      traverse = next;
    }
  }
}

function doMount(child, childEl, parentEl, oldParent) {
  var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
  var remount = parentEl === oldParent;
  var hooksFound = false;

  for (var i = 0, list = hookNames; i < list.length; i += 1) {
    var hookName = list[i];

    if (!remount) {
      // if already mounted, skip this phase
      if (child !== childEl) {
        // only Views can have lifecycle events
        if (hookName in child) {
          hooks[hookName] = (hooks[hookName] || 0) + 1;
        }
      }
    }

    if (hooks[hookName]) {
      hooksFound = true;
    }
  }

  if (!hooksFound) {
    childEl.__redom_lifecycle = {};
    return;
  }

  var traverse = parentEl;
  var triggered = false;

  if (remount || traverse && traverse.__redom_mounted) {
    trigger(childEl, remount ? 'onremount' : 'onmount');
    triggered = true;
  }

  while (traverse) {
    var parent = traverse.parentNode;
    var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});

    for (var hook in hooks) {
      parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
    }

    if (triggered) {
      break;
    } else {
      if (traverse.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse instanceof ShadowRoot || parent && parent.__redom_mounted) {
        trigger(traverse, remount ? 'onremount' : 'onmount');
        triggered = true;
      }

      traverse = parent;
    }
  }
}

function setStyle(view, arg1, arg2) {
  var el = getEl(view);

  if (_typeof(arg1) === 'object') {
    for (var key in arg1) {
      setStyleValue(el, key, arg1[key]);
    }
  } else {
    setStyleValue(el, arg1, arg2);
  }
}

function setStyleValue(el, key, value) {
  if (value == null) {
    el.style[key] = '';
  } else {
    el.style[key] = value;
  }
}
/* global SVGElement */


var xlinkns = 'http://www.w3.org/1999/xlink';

function setAttr(view, arg1, arg2) {
  setAttrInternal(view, arg1, arg2);
}

function setAttrInternal(view, arg1, arg2, initial) {
  var el = getEl(view);
  var isObj = _typeof(arg1) === 'object';

  if (isObj) {
    for (var key in arg1) {
      setAttrInternal(el, key, arg1[key], initial);
    }
  } else {
    var isSVG = el instanceof SVGElement;
    var isFunc = typeof arg2 === 'function';

    if (arg1 === 'style' && _typeof(arg2) === 'object') {
      setStyle(el, arg2);
    } else if (isSVG && isFunc) {
      el[arg1] = arg2;
    } else if (arg1 === 'dataset') {
      setData(el, arg2);
    } else if (!isSVG && (arg1 in el || isFunc) && arg1 !== 'list') {
      el[arg1] = arg2;
    } else {
      if (isSVG && arg1 === 'xlink') {
        setXlink(el, arg2);
        return;
      }

      if (initial && arg1 === 'class') {
        arg2 = el.className + ' ' + arg2;
      }

      if (arg2 == null) {
        el.removeAttribute(arg1);
      } else {
        el.setAttribute(arg1, arg2);
      }
    }
  }
}

function setXlink(el, arg1, arg2) {
  if (_typeof(arg1) === 'object') {
    for (var key in arg1) {
      setXlink(el, key, arg1[key]);
    }
  } else {
    if (arg2 != null) {
      el.setAttributeNS(xlinkns, arg1, arg2);
    } else {
      el.removeAttributeNS(xlinkns, arg1, arg2);
    }
  }
}

function setData(el, arg1, arg2) {
  if (_typeof(arg1) === 'object') {
    for (var key in arg1) {
      setData(el, key, arg1[key]);
    }
  } else {
    if (arg2 != null) {
      el.dataset[arg1] = arg2;
    } else {
      delete el.dataset[arg1];
    }
  }
}

function text(str) {
  return document.createTextNode(str != null ? str : '');
}

function parseArgumentsInternal(element, args, initial) {
  for (var i = 0, list = args; i < list.length; i += 1) {
    var arg = list[i];

    if (arg !== 0 && !arg) {
      continue;
    }

    var type = _typeof(arg);

    if (type === 'function') {
      arg(element);
    } else if (type === 'string' || type === 'number') {
      element.appendChild(text(arg));
    } else if (isNode(getEl(arg))) {
      mount(element, arg);
    } else if (arg.length) {
      parseArgumentsInternal(element, arg, initial);
    } else if (type === 'object') {
      setAttrInternal(element, arg, null, initial);
    }
  }
}

function ensureEl(parent) {
  return typeof parent === 'string' ? html(parent) : getEl(parent);
}

function getEl(parent) {
  return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
}

function isNode(arg) {
  return arg && arg.nodeType;
}

var htmlCache = {};

function html(query) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }

  var element;

  var type = _typeof(query);

  if (type === 'string') {
    element = memoizeHTML(query).cloneNode(false);
  } else if (isNode(query)) {
    element = query.cloneNode(false);
  } else if (type === 'function') {
    var Query = query;
    element = new (Function.prototype.bind.apply(Query, [null].concat(args)))();
  } else {
    throw new Error('At least one argument required');
  }

  parseArgumentsInternal(getEl(element), args, true);
  return element;
}

var el = html;
exports.el = el;
var h = html;
exports.h = h;

html.extend = function extendHtml(query) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }

  var clone = memoizeHTML(query);
  return html.bind.apply(html, [this, clone].concat(args));
};

function memoizeHTML(query) {
  return htmlCache[query] || (htmlCache[query] = createElement(query));
}

function setChildren(parent) {
  var children = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    children[len] = arguments[len + 1];
  }

  var parentEl = getEl(parent);
  var current = traverse(parent, children, parentEl.firstChild);

  while (current) {
    var next = current.nextSibling;
    unmount(parent, current);
    current = next;
  }
}

function traverse(parent, children, _current) {
  var current = _current;
  var childEls = new Array(children.length);

  for (var i = 0; i < children.length; i++) {
    childEls[i] = children[i] && getEl(children[i]);
  }

  for (var i$1 = 0; i$1 < children.length; i$1++) {
    var child = children[i$1];

    if (!child) {
      continue;
    }

    var childEl = childEls[i$1];

    if (childEl === current) {
      current = current.nextSibling;
      continue;
    }

    if (isNode(childEl)) {
      var next = current && current.nextSibling;
      var exists = child.__redom_index != null;
      var replace = exists && next === childEls[i$1 + 1];
      mount(parent, child, current, replace);

      if (replace) {
        current = next;
      }

      continue;
    }

    if (child.length != null) {
      current = traverse(parent, child, current);
    }
  }

  return current;
}

function listPool(View, key, initData) {
  return new ListPool(View, key, initData);
}

var ListPool = function ListPool(View, key, initData) {
  this.View = View;
  this.initData = initData;
  this.oldLookup = {};
  this.lookup = {};
  this.oldViews = [];
  this.views = [];

  if (key != null) {
    this.key = typeof key === 'function' ? key : propKey(key);
  }
};

exports.ListPool = ListPool;

ListPool.prototype.update = function update(data, context) {
  var ref = this;
  var View = ref.View;
  var key = ref.key;
  var initData = ref.initData;
  var keySet = key != null;
  var oldLookup = this.lookup;
  var newLookup = {};
  var newViews = new Array(data.length);
  var oldViews = this.views;

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var view = void 0;

    if (keySet) {
      var id = key(item);
      view = oldLookup[id] || new View(initData, item, i, data);
      newLookup[id] = view;
      view.__redom_id = id;
    } else {
      view = oldViews[i] || new View(initData, item, i, data);
    }

    view.update && view.update(item, i, data, context);
    var el = getEl(view.el);
    el.__redom_view = view;
    newViews[i] = view;
  }

  this.oldViews = oldViews;
  this.views = newViews;
  this.oldLookup = oldLookup;
  this.lookup = newLookup;
};

function propKey(key) {
  return function (item) {
    return item[key];
  };
}

function list(parent, View, key, initData) {
  return new List(parent, View, key, initData);
}

var List = function List(parent, View, key, initData) {
  this.__redom_list = true;
  this.View = View;
  this.initData = initData;
  this.views = [];
  this.pool = new ListPool(View, key, initData);
  this.el = ensureEl(parent);
  this.keySet = key != null;
};

exports.List = List;

List.prototype.update = function update(data, context) {
  if (data === void 0) data = [];
  var ref = this;
  var keySet = ref.keySet;
  var oldViews = this.views;
  this.pool.update(data, context);
  var ref$1 = this.pool;
  var views = ref$1.views;
  var lookup = ref$1.lookup;

  if (keySet) {
    for (var i = 0; i < oldViews.length; i++) {
      var oldView = oldViews[i];
      var id = oldView.__redom_id;

      if (lookup[id] == null) {
        oldView.__redom_index = null;
        unmount(this, oldView);
      }
    }
  }

  for (var i$1 = 0; i$1 < views.length; i$1++) {
    var view = views[i$1];
    view.__redom_index = i$1;
  }

  setChildren(this, views);

  if (keySet) {
    this.lookup = lookup;
  }

  this.views = views;
};

List.extend = function extendList(parent, View, key, initData) {
  return List.bind(List, parent, View, key, initData);
};

list.extend = List.extend;
/* global Node */

function place(View, initData) {
  return new Place(View, initData);
}

var Place = function Place(View, initData) {
  this.el = text('');
  this.visible = false;
  this.view = null;
  this._placeholder = this.el;

  if (View instanceof Node) {
    this._el = View;
  } else if (View.el instanceof Node) {
    this._el = View;
    this.view = View;
  } else {
    this._View = View;
  }

  this._initData = initData;
};

exports.Place = Place;

Place.prototype.update = function update(visible, data) {
  var placeholder = this._placeholder;
  var parentNode = this.el.parentNode;

  if (visible) {
    if (!this.visible) {
      if (this._el) {
        mount(parentNode, this._el, placeholder);
        unmount(parentNode, placeholder);
        this.el = getEl(this._el);
        this.visible = visible;
      } else {
        var View = this._View;
        var view = new View(this._initData);
        this.el = getEl(view);
        this.view = view;
        mount(parentNode, view, placeholder);
        unmount(parentNode, placeholder);
      }
    }

    this.view && this.view.update && this.view.update(data);
  } else {
    if (this.visible) {
      if (this._el) {
        mount(parentNode, placeholder, this._el);
        unmount(parentNode, this._el);
        this.el = placeholder;
        this.visible = visible;
        return;
      }

      mount(parentNode, placeholder, this.view);
      unmount(parentNode, this.view);
      this.el = placeholder;
      this.view = null;
    }
  }

  this.visible = visible;
};
/* global Node */


function router(parent, Views, initData) {
  return new Router(parent, Views, initData);
}

var Router = function Router(parent, Views, initData) {
  this.el = ensureEl(parent);
  this.Views = Views;
  this.initData = initData;
};

exports.Router = Router;

Router.prototype.update = function update(route, data) {
  if (route !== this.route) {
    var Views = this.Views;
    var View = Views[route];
    this.route = route;

    if (View && (View instanceof Node || View.el instanceof Node)) {
      this.view = View;
    } else {
      this.view = View && new View(this.initData, data);
    }

    setChildren(this.el, [this.view]);
  }

  this.view && this.view.update && this.view.update(data, route);
};

var ns = 'http://www.w3.org/2000/svg';
var svgCache = {};

function svg(query) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }

  var element;

  var type = _typeof(query);

  if (type === 'string') {
    element = memoizeSVG(query).cloneNode(false);
  } else if (isNode(query)) {
    element = query.cloneNode(false);
  } else if (type === 'function') {
    var Query = query;
    element = new (Function.prototype.bind.apply(Query, [null].concat(args)))();
  } else {
    throw new Error('At least one argument required');
  }

  parseArgumentsInternal(getEl(element), args, true);
  return element;
}

var s = svg;
exports.s = s;

svg.extend = function extendSvg(query) {
  var clone = memoizeSVG(query);
  return svg.bind(this, clone);
};

svg.ns = ns;

function memoizeSVG(query) {
  return svgCache[query] || (svgCache[query] = createElement(query, ns));
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.common = common;
exports.reset = exports.CSS = void 0;
var CSS = {
  // Common css classes
  LINK: 'link',
  LINK_OUT_CONTENT: 'link-out-content',
  BUTTON: 'button',
  BUTTON_LINK: 'button-link',
  BUTTON_SUBMIT: 'button-submit',
  BUTTON_GROUP: 'button-group',
  DISABLED: 'disabled',
  ACTIVE: 'active',
  CAPTION_TEXT: 'caption-text',
  // Offers select buttons
  BUTTON_OFFER: 'btn-offer',
  TERM_LENGTH: 'term-length',
  DIVIDER: 'divider',
  PLAN_PRICE: 'plan-price',
  CURRENCY_SYM: 'price-currency-sym',
  AMOUNT: 'price-amt',
  // buttons component
  CAPTION: 'caption',
  LINK_TEXT: 'info-link-text',
  LINK_ICON: 'info-link-icon',
  // offer button
  BANNER_SVG: 'banner-svg',
  OFFER_BUTTON_CONTAINER: 'btn-bnr-container',
  BUTTON_CONTENT: 'btn-content',
  SVG_ACTIVE: 'svg-active',
  SVG_DEACTIVE: 'svg-deactive',
  // modals
  MODAL: 'modal',
  MODAL_CLOSE: 'close',
  SHROUD: 'shroud',
  SUB_HEADING: 'subheading',
  MOBILE_TEXT: 'mobile-text',
  DESKTOP_TEXT: 'desktop-text',
  SIMPLE_OFFER: 'simple-offer',
  BUTTON_CLOSE: 'button-close',
  HIDDEN: 'hidden',
  SUB_HEADING_TEXT: 'sub-heading-text',
  // modal logos
  LOGO_CONTAINER: 'logo-container',
  LOGO: 'logo',
  EXTEND_LOGO: 'extend-logo',
  PLUS: 'plus',
  MERCHANT_LOGO: 'merchant-logo',
  // icons
  INFO_ICON: 'info-icon',
  LINK_OUT: 'link-out',
  FRIENDLY_SUPPORT: 'friendly-support',
  NO_FEES: 'no-fees'
};
exports.CSS = CSS;
var reset = "\n@import url(//fonts.googleapis.com/css?family=Nunito+Sans:300,400,700&display=swap);\n\nbody, html {\n  margin: 0; \n  padding: 0; \n  background: none transparent;\n  font-size: 62.5%;\n  color: #000;\n  font-family: 'Nunito Sans', Helvetica, sans-serif;\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\nbody > * {\n  font-size: 1.4rem;\n}\n* {\n box-sizing: border-box \n}\nsvg { \n  box-sizing: unset \n}\n.ex-clearfix::after, .ex-clearfix::before {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n";
exports.reset = reset;

function common(theme) {
  var primaryColor = theme.primaryColor;
  var focusStyle = "\n    border-color: ".concat(primaryColor, ";\n    box-shadow: 0 0 0 1px inset ").concat(primaryColor, ";\n    background-color: ").concat(primaryColor, ";\n    color: #fff;\n  ");
  return "\n  .".concat(CSS.LINK, " {\n    background-color: transparent;\n    color: ").concat(primaryColor, ";\n    display: inline-block;\n    font-family: inherit;\n    text-decoration: underline;\n  }\n  .").concat(CSS.BUTTON, " {\n    background: transparent;\n    border: 1px solid #b2bcc3;\n    border-radius: 4px;\n    color: black;\n    cursor: pointer;\n    font-family: 'Nunito Sans', Helvetica, sans-serif;\n    transition: border 200ms, box-shadow 200ms;\n  }\n  .").concat(CSS.BUTTON, ".").concat(CSS.ACTIVE, ", \n  .").concat(CSS.BUTTON, ":focus {\n     outline: none;\n    ").concat(focusStyle, ";\n  }  \n  @media (hover) {\n    .").concat(CSS.BUTTON, ":hover {\n      ").concat(focusStyle, "\n    }\n  }");
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElement = isElement;
exports.getElementSafe = getElementSafe;
exports.getElement = getElement;
exports.insertElement = insertElement;
exports.insertBefore = insertBefore;
exports.insertAfter = insertAfter;
exports.showElement = showElement;
exports.hideElement = hideElement;
exports.destroyElement = destroyElement;
exports.addStyle = addStyle;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isElement(element) {
  if (element instanceof Element || element instanceof HTMLDocument) {
    return true;
  }

  return !!(element !== null && _typeof(element) === 'object' && element instanceof Node && element.nodeType === Node.ELEMENT_NODE);
}

function getElementSafe(id) {
  var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;

  if (isElement(id)) {
    return id;
  }

  return doc.querySelector(id);
}

function getElement(id) {
  var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var element = getElementSafe(id, doc);

  if (!element) {
    throw new Error("Can not find element: ".concat(id));
  }

  return element;
}

function insertElement(reference, element, position) {
  if (position === 'before') {
    return insertBefore(reference, element);
  }

  if (position === 'after') {
    return insertAfter(reference, element);
  }

  reference.appendChild(element);
}

function insertBefore(reference, element) {
  if (reference.parentNode) {
    reference.parentNode.insertBefore(element, reference);
  }
}

function insertAfter(reference, element) {
  if (reference.parentNode) {
    reference.parentNode.insertBefore(element, reference.nextSibling);
  }
} // ==================================================================================
// For now this always sets an element to a block element


function showElement(element) {
  element.style.setProperty('display', 'block');
}

function hideElement(element) {
  element.style.setProperty('display', 'none', 'important');
}

function destroyElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

function addStyle(cssStyles, mountPoint, id) {
  var style = document.createElement('style');
  style.textContent = cssStyles;

  if (id) {
    style.setAttribute('id', id);
  }

  mountPoint.appendChild(style);
  return style;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalConfig = exports.ENVIRONMENTS = void 0;
var ENVIRONMENTS = ['development', 'demo', 'production', 'stage'];
exports.ENVIRONMENTS = ENVIRONMENTS;
var DEFAULT_ENVIRONMENT = 'production';
// eslint-disable-next-line no-underscore-dangle
var _config = {
  environment: DEFAULT_ENVIRONMENT
};
var globalConfig = {
  get: function get(key) {
    return _config[key];
  },
  set: function set(key, value) {
    _config[key] = value;
  },
  reset: function reset() {
    _config = {
      environment: DEFAULT_ENVIRONMENT
    };
  },
  toJSON: function toJSON() {
    return JSON.parse(JSON.stringify(_config));
  }
};
exports.globalConfig = globalConfig;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeFromBranding = themeFromBranding;
exports.DEFAULT_THEME = void 0;
var DEFAULT_PRIMARY_COLOR = '#27aee4';
var DEFAULT_THEME = {
  primaryColor: DEFAULT_PRIMARY_COLOR
};
exports.DEFAULT_THEME = DEFAULT_THEME;

function themeFromBranding(branding) {
  if (branding && branding.primaryColor) {
    return {
      primaryColor: branding.primaryColor
    };
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentBase = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable class-methods-use-this,@typescript-eslint/no-empty-function */
var ComponentBase =
/*#__PURE__*/
function () {
  function ComponentBase(props) {
    _classCallCheck(this, ComponentBase);

    _defineProperty(this, "el", void 0);

    _defineProperty(this, "props", void 0);

    this.props = props;
  } // proxy redom lifecycle event to react like


  _createClass(ComponentBase, [{
    key: "onmount",
    value: function onmount() {
      this.componentDidMount();
    } // proxy redom lifecycle event to react like

  }, {
    key: "unmount",
    value: function unmount() {
      this.componentWillUnmount();
    } // no-op. override on child

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {} // no-op. override on child

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }]);

  return ComponentBase;
}();

exports.ComponentBase = ComponentBase;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _finally = _interopRequireDefault(__webpack_require__(39));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {} // Polyfill for Function.prototype.bind


function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}
/**
 * @constructor
 * @param {Function} fn
 */


function Promise(fn) {
  if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */

  this._state = 0;
  /** @type {!boolean} */

  this._handled = false;
  /** @type {Promise|undefined} */

  this._value = undefined;
  /** @type {!Array<!Function>} */

  this._deferreds = [];
  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }

  if (self._state === 0) {
    self._deferreds.push(deferred);

    return;
  }

  self._handled = true;

  Promise._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }

    var ret;

    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }

    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

    if (newValue && (_typeof(newValue) === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;

      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }

    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function () {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }

  self._deferreds = null;
}
/**
 * @constructor
 */


function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}
/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */


function doResolve(fn, self) {
  var done = false;

  try {
    fn(function (value) {
      if (done) return;
      done = true;
      resolve(self, value);
    }, function (reason) {
      if (done) return;
      done = true;
      reject(self, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function (onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);
  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally["default"];

Promise.all = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (_typeof(val) === 'object' || typeof val === 'function')) {
          var then = val.then;

          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }

        args[i] = val;

        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function (resolve) {
    resolve(value);
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
}; // Use polyfill for setImmediate for performance gains


Promise._immediateFn = // @ts-ignore
typeof setImmediate === 'function' && function (fn) {
  // @ts-ignore
  setImmediate(fn);
} || function (fn) {
  setTimeoutFunc(fn, 0);
};

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

var _default = Promise;
exports["default"] = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36).setImmediate))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchOffer = fetchOffer;
exports.fetchLead = fetchLead;
exports.resetOfferConfigPromise = resetOfferConfigPromise;
exports.fetchOfferConfiguration = fetchOfferConfiguration;
exports.getExtendApiHost = getExtendApiHost;

var _promisePolyfill = _interopRequireDefault(__webpack_require__(6));

var _request = __webpack_require__(41);

var _offerCache = __webpack_require__(21);

var _configurationCache = __webpack_require__(42);

var _globalConfig = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function fetchOffer(extendStoreId, productReferenceId) {
  var url = "https://".concat(getExtendApiHost(), "/offers?storeId=").concat(extendStoreId, "&productId=").concat(productReferenceId);

  if (_globalConfig.globalConfig.get('environment') === 'development') {
    url += '&skipVerify=true';
  }

  return (0, _request.getJSON)(url).then(function (_ref) {
    var data = _ref.data;
    return (0, _offerCache.setOffer)(extendStoreId, productReferenceId, data);
  });
}

function fetchLead(leadToken) {
  var url = "https://".concat(getExtendApiHost(), "/leads/").concat(leadToken);
  return (0, _request.getJSON)(url).then(function (_ref2) {
    var data = _ref2.data;
    return data;
  });
}

var currentOfferConfigPromise = null; // currently only here for testing... might want to wrap this in a process.env call

function resetOfferConfigPromise() {
  currentOfferConfigPromise = null;
}

function fetchOfferConfiguration(extendStoreId) {
  var cachedConfig = (0, _configurationCache.getConfig)();

  if (cachedConfig) {
    return _promisePolyfill["default"].resolve(cachedConfig);
  }

  if (currentOfferConfigPromise) {
    return currentOfferConfigPromise;
  }

  var url = "https://".concat(getExtendApiHost(), "/offers/configuration?storeId=").concat(extendStoreId);

  if (_globalConfig.globalConfig.get('environment') === 'development') {
    url += '&debug=true';
  }

  currentOfferConfigPromise = (0, _request.getJSON)(url).then(function (_ref3) {
    var data = _ref3.data,
        status = _ref3.status;

    if (status !== 200) {
      _configurationCache.configurationCache.clear();

      throw new Error('Could not fetch offer configuration');
    }

    return mapOfferConfiguration(data);
  }).then(_configurationCache.setConfig)["finally"](resetOfferConfigPromise);
  return currentOfferConfigPromise;
}

function mapOfferConfiguration(config) {
  return {
    approved: config.approved,
    enabled: config.enabled,
    branding: config.branding
  };
}

function getExtendApiHost() {
  var env = _globalConfig.globalConfig.get('environment');

  if (env === 'development') return 'api-dev.helloextend.com';
  if (env === 'stage') return 'api-stage.helloextend.com';
  if (env === 'demo') return 'api-demo.helloextend.com';
  return 'api.helloextend.com';
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsupportedBrowser = unsupportedBrowser;

var _globalConfig = __webpack_require__(3);

/**
 * this file and methods inside it are mainly here to for mocking purposes in tests.
 * Put and direct window access calls in here.
 */
function unsupportedBrowser() {
  if (_globalConfig.globalConfig.get('environment') === 'development') {
    return false;
  }

  return /(Edge|Trident\/|MSIE)/.test(window.navigator.userAgent);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortUid = shortUid;
var HEX_VALS = 'abcdefg123456790';

function shortUid() {
  var uid = '';

  while (uid.length < 8) {
    uid += HEX_VALS[Math.floor(Math.random() * HEX_VALS.length)];
  }

  return uid;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderToFrame = renderToFrame;

var _redom = __webpack_require__(0);

var _iframeAutoresize = __webpack_require__(23);

var _util = __webpack_require__(9);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderToFrame(mountElement, component) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var style = _objectSpread({
    width: '100%',
    border: 'none',
    display: 'block',
    overflow: 'hidden'
  }, options.styles);

  var frame = (0, _redom.el)("iframe#".concat(options.id || (0, _util.shortUid)()), {
    style: style
  });
  frame.addEventListener('load', function () {
    var doc = frame.contentDocument;
    doc.open();
    doc.write('<!DOCTYPE html>');
    doc.close();
    (0, _redom.mount)(doc.body, component);

    if (options.autosize !== false) {
      (0, _iframeAutoresize.autoResizeFrame)(frame);
    }
  });
  mountElement.appendChild(frame);
  return frame;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = icon;
exports.ICON_TYPE = void 0;

var _redom = __webpack_require__(0);

var _styles = __webpack_require__(1);

var ICON_TYPE = ['linkOut', 'info'];
exports.ICON_TYPE = ICON_TYPE;

function icon(type, fill) {
  switch (type) {
    case 'info':
      return (0, _redom.svg)("svg.".concat(_styles.CSS.INFO_ICON), {
        width: 13,
        height: 13,
        viewBox: '0 0 13 13',
        xmlns: 'http://www.w3.org/2000/svg',
        fill: fill
      }, (0, _redom.svg)('g', {
        fill: 'inherit',
        'fill-rule': 'even-odd'
      }, (0, _redom.svg)('path', {
        d: 'M6.5.91a5.59 5.59 0 110 11.182A5.59 5.59 0 016.5.91zm0-.91a6.5 6.5 0 100 13 6.5 6.5 0 000-13z'
      }), (0, _redom.svg)('path', {
        d: 'M6.525 3.248c.258.016.514.047.767.092.776.18 1.254.748 1.338 1.52a1.396 1.396 0 01-.561 1.323c-.2.158-.41.302-.61.457a.953.953 0 00-.43.88.551.551 0 01-.395.561.657.657 0 01-.755-.186.55.55 0 01-.095-.28 1.871 1.871 0 01.767-1.626c.225-.175.437-.366.633-.57a.666.666 0 00.156-.391c.02-.389-.252-.629-.675-.64-.512-.014-.937.127-1.222.566a.617.617 0 01-.618.296c-.435-.053-.632-.381-.468-.772.172-.382.48-.694.87-.88a3.277 3.277 0 011.298-.35z'
      }), (0, _redom.svg)('circle', {
        cx: '6.5',
        cy: '9.4',
        r: 1
      })));

    case 'linkOut':
      return (0, _redom.svg)("svg.".concat(_styles.CSS.LINK_OUT), {
        width: '13px',
        height: '13px',
        viewBox: '0 0 13 13',
        xmlns: 'http://www.w3.org/2000/svg'
      }, (0, _redom.svg)('g', {
        stroke: 'none',
        'stroke-width': '1',
        fill: fill,
        'fill-rule': 'even-odd'
      }, (0, _redom.svg)('g', {
        fill: fill,
        transform: 'translate(-820.000000, -1853.000000)',
        "class": "".concat(_styles.CSS.LINK_OUT_CONTENT)
      }, (0, _redom.svg)('g', {
        transform: 'translate(820.000000, 1853.000000)'
      }, (0, _redom.svg)('path', {
        d: 'M12.4352927,0.054504878 C12.4167138,0.0551247561 12.3981349,0.0569812195 12.3801759,0.0594591463 L8.48176122,0.0594591463 C8.34923415,0.0576010976 8.2210478,0.109001829 8.12690878,0.201894756 C8.0321578,0.295405976 7.97890061,0.422355732 7.97890061,0.554892317 C7.97890061,0.687428902 8.03215939,0.814369146 8.12690878,0.907889878 C8.22103988,1.0007828 8.34922463,1.05218354 8.48176122,1.05032549 L11.2493344,1.05032549 L5.15931,7.14034988 L5.15869171,7.14034988 C5.06270256,7.23262293 5.00820561,7.35957427 5.00694578,7.49272915 C5.00572768,7.62587451 5.05774829,7.75406085 5.15187939,7.84758159 C5.24601049,7.94171268 5.37419524,7.99435159 5.50673183,7.99313477 C5.6398772,7.99187524 5.76682695,7.93675841 5.8591111,7.84138915 L11.9491355,1.75136476 L11.9491355,4.51893793 L11.9497538,4.51831805 C11.9478957,4.65084512 11.9992965,4.77903146 12.0921894,4.87317049 C12.1850823,4.96792146 12.3126504,5.02056037 12.445187,5.02056037 C12.5777235,5.02056037 12.7046638,4.96792146 12.7975662,4.87317049 C12.8910774,4.77903939 12.9424782,4.65085463 12.9406201,4.51831805 L12.9406201,0.618002561 C12.9604372,0.47309061 12.9158488,0.327563537 12.8186215,0.219187927 C12.7213941,0.110813902 12.5808166,0.0501245122 12.43528,0.054452561 L12.4352927,0.054504878 Z'
      }), (0, _redom.svg)('path', {
        d: 'M5.50914634,2.04113522 C4.27243415,2.04113522 3.3379878,2.03930049 2.5935,2.12352305 C1.8490122,2.20774561 1.2527561,2.38485476 0.826609756,2.81154012 C0.400463415,3.23822549 0.225280488,3.83335598 0.141683988,4.57779622 C0.0580813049,5.32217305 0.0593184509,6.25606451 0.0593184509,7.49154012 C0.0593184509,8.72701573 0.0580809878,9.6615889 0.143542037,10.4059182 C0.229002927,11.150295 0.40798122,11.7454255 0.835284878,12.1721743 C1.26258854,12.5982413 1.85771902,12.7753584 2.60154098,12.8589544 C3.34529951,12.943177 4.27727268,12.9413223 5.50910195,12.9413223 C6.74093122,12.9413223 7.67280927,12.9419382 8.41666293,12.8570964 C9.16051659,12.7722543 9.75678854,12.5945284 10.1835532,12.1684455 C10.6108568,11.7417601 10.7879739,11.1466296 10.873441,10.4021894 C10.9589504,9.65781256 10.9589504,8.72455524 10.9589504,7.49161622 L10.9589504,7.49099634 C10.9607598,7.35846927 10.909359,7.23090122 10.8164661,7.1361439 C10.7229549,7.0420128 10.5960051,6.98875402 10.4634685,6.98875402 C10.330932,6.98875402 10.2039917,7.0420128 10.110471,7.1361439 C10.017578,7.23089488 9.96617732,7.35845976 9.96803537,7.49099634 C9.96803537,8.72336463 9.96370098,9.6423378 9.88938695,10.2894841 C9.81507293,10.9366305 9.67883451,11.2716659 9.48313695,11.4673634 C9.28743939,11.663061 8.95240402,11.7993073 8.30525768,11.8729951 C7.65811134,11.9466829 6.7397089,11.9504054 5.50851378,11.9504054 C4.27731866,11.9504054 3.35891622,11.9473091 2.71176988,11.8742333 C2.06462354,11.8011574 1.72958817,11.6655357 1.53389061,11.4704565 C1.33819305,11.2753772 1.20132841,10.9403418 1.12764061,10.2925772 C1.05332659,9.64481256 1.0489922,8.72579183 1.0489922,7.4915528 C1.0489922,6.25669549 1.05146854,5.33704061 1.12454439,4.68926012 C1.19700037,4.04149549 1.33324195,3.70707841 1.52708463,3.51261744 C1.72092732,3.31815646 2.05594683,3.18254427 2.70372732,3.10884061 C3.35149195,3.03576476 4.27174927,3.03266854 5.50792244,3.03266854 L5.50916061,3.03205024 C5.64168768,3.03390829 5.76987402,2.98250756 5.86401305,2.88961463 C5.95876402,2.79610341 6.01140293,2.66915366 6.01140293,2.53661707 C6.01140293,2.40408049 5.95876402,2.27714024 5.86401305,2.18361951 C5.76988195,2.09072659 5.6416972,2.03932585 5.50916061,2.04113522 L5.50914634,2.04113522 Z'
      })))));

    case 'friendlySupport':
      return (0, _redom.svg)("svg.".concat(_styles.CSS.FRIENDLY_SUPPORT), {
        width: '26px',
        height: '24px',
        xmlns: 'http://www.w3.org/2000/svg'
      }, (0, _redom.svg)('g', {
        strokeWidth: '1.358',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }, (0, _redom.svg)('path', {
        stroke: '#224BC5',
        d: 'M13 22.858s-7.567-7.61-9.958-10.277c-1.153-1.286-1.976-2.907-1.976-4.77A6.745 6.745 0 0113 3.504a6.745 6.745 0 0111.934 4.308c0 1.862-.823 3.483-1.976 4.769C20.568 15.249 13 22.858 13 22.858z'
      }), (0, _redom.svg)('path', {
        d: 'M3.717 8.387a4.676 4.676 0 014.67-4.67',
        stroke: '#27AEE4'
      })));

    case 'noFees':
      return (0, _redom.svg)("svg.".concat(_styles.CSS.NO_FEES), {
        width: '24px',
        height: '24px',
        xmlns: 'http://www.w3.org/2000/svg'
      }, (0, _redom.svg)('g', {
        fillRule: 'nonzero',
        fill: 'none'
      }, (0, _redom.svg)('path', {
        fill: '#27AEE4',
        d: 'M2.782 17.915v-1.433c-1.674-.157-2.59-1.206-2.747-3.146H1.6c.06.542.182.953.37 1.233.186.281.457.46.812.54v-3.53l-.252-.089c-.797-.285-1.388-.664-1.772-1.137C.374 9.88.182 9.29.182 8.581c0-.749.237-1.379.71-1.89.472-.513 1.102-.813 1.89-.902V4.505h.945v1.284c.719.08 1.29.345 1.713.798.423.453.714 1.103.871 1.95l-1.462.236c-.098-.483-.236-.852-.413-1.108a1.221 1.221 0 00-.71-.502v3.205l.31.103c.838.305 1.446.7 1.825 1.182s.568 1.102.568 1.86c0 .828-.243 1.51-.73 2.046-.488.537-1.145.844-1.972.923v1.433h-.945zm.945-2.777c.374-.069.662-.236.864-.502.202-.266.302-.615.302-1.049 0-.423-.088-.763-.265-1.019-.178-.256-.478-.472-.901-.65v3.22zm-.945-8.005c-.71.138-1.064.61-1.064 1.418 0 .374.079.67.236.886.158.217.434.409.828.576v-2.88z'
      }), (0, _redom.svg)('path', {
        d: 'M17.329 23.602c-2.219 0-3.861-.944-4.928-2.832-1.067-1.888-1.6-4.805-1.6-8.752C10.801 4.21 13.02.307 17.457.307c2.218 0 3.861.944 4.928 2.831 1.066 1.888 1.6 4.806 1.6 8.752 0 7.808-2.219 11.712-6.656 11.712zm.032-1.664c1.643 0 2.832-.795 3.568-2.384.736-1.59 1.104-4.133 1.104-7.632 0-2.389-.16-4.309-.48-5.76-.32-1.45-.816-2.512-1.488-3.184-.672-.671-1.552-1.007-2.64-1.007-1.643 0-2.832.794-3.568 2.383-.736 1.59-1.104 4.134-1.104 7.632 0 2.39.16 4.31.48 5.76.32 1.45.816 2.512 1.488 3.184.672.672 1.552 1.008 2.64 1.008z',
        fill: '#224BC5'
      })));

    default:
      return (0, _redom.text)('');
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrencySymbol = getCurrencySymbol;
exports.formatCurrency = formatCurrency;
exports.monthsToYearsInWords = monthsToYearsInWords;
exports.formatDate = formatDate;
exports.CURRENCY = void 0;
var CURRENCY = {
  USD: {
    symbol: '$',
    isoCode: 'USD',
    subunitToUnit: 100,
    decimalMark: '.',
    thousandsSeparator: ','
  }
};
exports.CURRENCY = CURRENCY;

function getCurrencySymbol(currencyCode) {
  return CURRENCY[currencyCode].symbol;
}

function formatCurrency(amountInBaseUnit, currencyCode) {
  // hard coded now for USD
  var currency = CURRENCY[currencyCode];
  var subunitToUnit = currency.subunitToUnit;
  var amount = (amountInBaseUnit / subunitToUnit).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (/\.00$/.test(amount)) {
    amount = amount.substring(0, amount.length - 3);
  }

  return "".concat(amount);
}

function monthsToYearsInWords(term) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal';
  var years = Math.floor(term / 12);
  return "".concat(years, " Year").concat(years <= 1 || type === 'modal' ? '' : 's');
}

function formatDate(unixTime) {
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(unixTime);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LEARN_MORE_MODAL_COPY = exports.OFFERS_MODAL_COPY = exports.bannersText = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OFFERS_MODAL_COMMON = {
  bullet1: 'Fast replacements + repairs',
  bullet2: 'Easy online claims',
  linkText: 'Plan details & FAQ',
  buyText: 'Add protection',
  declineText: 'No, thanks'
};
var bannersText = {
  bestValue: 'Best Value!',
  bestSeller: 'Best Seller!'
};
exports.bannersText = bannersText;

/*
 * This copy text is here temporarily until we update the GET offers response and OfferPlan records
 * to have the updated copy for the new, plan-specific modals (e.g. adh, base).
 * More info: https://helloextend.atlassian.net/browse/INT-880
 */
var OFFERS_MODAL_COPY = {
  base: {
    header: {
      desktop: 'Protect your purchase from defects, breakdowns & more with Extend.',
      mobile: 'Protect your purchase with Extend.'
    },
    marketing: _objectSpread({}, OFFERS_MODAL_COMMON, {
      bullet3: '24/7 live support'
    })
  },
  adh: {
    header: {
      desktop: 'Protect your purchase from drops, breaks, spills, and defects with Extend.',
      mobile: 'Get protection from accidents with Extend.'
    },
    marketing: _objectSpread({}, OFFERS_MODAL_COMMON, {
      bullet3: 'Accident protection'
    })
  },
  lead: {
    header: {
      desktop: 'Select a plan to extend your product protection',
      mobile: 'Select a plan to extend your product protection'
    },
    marketing: _objectSpread({}, OFFERS_MODAL_COMMON, {
      buyText: 'Add to cart',
      bullet3: '24/7 live support'
    })
  },
  bannerCopy: {
    bestSeller: 'Best Seller!',
    bestValue: 'Best Value!'
  }
};
exports.OFFERS_MODAL_COPY = OFFERS_MODAL_COPY;
var LEARN_MORE_MODAL_MARKETING_BASE = {
  bullet1: 'Fast and free product replacement or repair',
  bullet2: 'Normal wear-and-tear and mechanical failures ',
  bullet3: 'Power surges and electrical failures'
};
var LEARN_MORE_MODAL_COPY = {
  adh: {
    header: {
      desktop: 'Accidents happen where life happens. Enjoy protection right away, plus full coverage after your manufacturer’s warranty expires.',
      mobile: 'Keep your product protected from accidents right away, plus full coverage after manufacturer warranties expire.'
    },
    marketing: {
      mobile: {
        bullet1: 'Accidental damage such as breaks and spills',
        bullet2: 'Fast and free replacements and repairs',
        bullet3: 'Extended malfunction protection'
      },
      desktop: {
        bullet1: 'Accidental damage such as breaks, drops, and spills',
        bullet2: 'Fast and free replacements and repairs',
        bullet3: 'Extended malfunction and wear-and-tear protection'
      }
    }
  },
  base: {
    header: {
      desktop: 'Keep your product protected when manufacturer warranties fall short or expire with a plan from Extend.',
      mobile: 'Keep your product protected when manufacturer warranties fall short or expire with a plan from Extend.'
    },
    marketing: {
      mobile: LEARN_MORE_MODAL_MARKETING_BASE,
      desktop: LEARN_MORE_MODAL_MARKETING_BASE
    }
  }
};
exports.LEARN_MORE_MODAL_COPY = LEARN_MORE_MODAL_COPY;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferComponentBase = void 0;

var _dom = __webpack_require__(2);

var _styles = __webpack_require__(1);

var _componentBase = __webpack_require__(5);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OfferComponentBase =
/*#__PURE__*/
function (_ComponentBase) {
  _inherits(OfferComponentBase, _ComponentBase);

  _createClass(OfferComponentBase, [{
    key: "updatePlans",
    // no-op. implement in child
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    value: function updatePlans(_) {} // eslint-disable-next-line class-methods-use-this

  }, {
    key: "getSelectedPlan",
    value: function getSelectedPlan() {
      return null;
    }
  }]);

  function OfferComponentBase(props) {
    var _this;

    _classCallCheck(this, OfferComponentBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OfferComponentBase).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "theme", void 0);

    _defineProperty(_assertThisInitialized(_this), "plans", void 0);

    _defineProperty(_assertThisInitialized(_this), "referenceId", void 0);

    _this.theme = props.theme;
    _this.plans = props.plans;
    _this.referenceId = props.referenceId;
    return _this;
  }

  _createClass(OfferComponentBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(OfferComponentBase.prototype), "componentDidMount", this).call(this);

      (0, _dom.addStyle)(_styles.reset, this.el);
      (0, _dom.addStyle)((0, _styles.common)(this.theme), this.el);
    }
  }]);

  return OfferComponentBase;
}(_componentBase.ComponentBase);

exports.OfferComponentBase = OfferComponentBase;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferContainerBase = void 0;

var _promisePolyfill = _interopRequireDefault(__webpack_require__(6));

var _redom = __webpack_require__(0);

var _dom = __webpack_require__(2);

var cache = _interopRequireWildcard(__webpack_require__(21));

var _iframeAutoresize = __webpack_require__(23);

var _api = __webpack_require__(7);

var _util = __webpack_require__(9);

var _renderToIframe = __webpack_require__(10);

var _theme = __webpack_require__(4);

var _componentBase = __webpack_require__(5);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OfferContainerBase =
/*#__PURE__*/
function (_ComponentBase) {
  _inherits(OfferContainerBase, _ComponentBase);

  function OfferContainerBase(props) {
    var _this;

    _classCallCheck(this, OfferContainerBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OfferContainerBase).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "storeId", void 0);

    _defineProperty(_assertThisInitialized(_this), "referenceId", void 0);

    _defineProperty(_assertThisInitialized(_this), "productName", void 0);

    _defineProperty(_assertThisInitialized(_this), "frame", null);

    _defineProperty(_assertThisInitialized(_this), "component", null);

    _defineProperty(_assertThisInitialized(_this), "theme", void 0);

    var storeId = props.storeId,
        referenceId = props.referenceId,
        theme = props.theme;
    _this.storeId = storeId;
    _this.referenceId = referenceId || null;
    _this.theme = theme || _theme.DEFAULT_THEME;
    _this.el = (0, _redom.el)("div#extend-offer-".concat((0, _util.shortUid)(), ".extend-offer.ex-clearfix"), {
      style: {
        clear: 'both',
        position: 'relative',
        display: 'none',
        width: '100%'
      }
    });
    return _this;
  } // eslint-disable-next-line class-methods-use-this


  _createClass(OfferContainerBase, [{
    key: "getPlanSelection",
    value: function getPlanSelection() {
      return null;
    }
  }, {
    key: "render",
    value: function render(selector) {
      var _this2 = this;

      var container = (0, _dom.getElement)(selector);
      container.appendChild(this.el);
      return this.setActiveProduct(this.referenceId).then(function () {
        return _this2;
      });
    }
  }, {
    key: "setActiveProduct",
    value: function setActiveProduct(referenceId) {
      if (this.referenceId !== referenceId) {
        this.referenceId = referenceId;
        this.productName = undefined;
      }

      if (this.referenceId) {
        return this.loadOffer(this.storeId, this.referenceId);
      }

      this.hide();
      return _promisePolyfill["default"].resolve();
    }
  }, {
    key: "getActiveProduct",
    value: function getActiveProduct() {
      if (!this.referenceId) {
        return null;
      }

      return {
        id: this.referenceId,
        name: this.productName
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cleanupComponentFrame();
      (0, _dom.destroyElement)(this.el);
    }
  }, {
    key: "loadOffer",
    value: function loadOffer(storeId, referenceId) {
      var _this3 = this;

      var offer = cache.getOffer(storeId, referenceId);

      if (offer && offer.plans && offer.plans.length) {
        this.renderOffer(offer);
        return _promisePolyfill["default"].resolve();
      }

      this.hide();
      return (0, _api.fetchOffer)(storeId, referenceId).then(function (res) {
        if (res.plans && res.plans.length) {
          _this3.renderOffer(res);
        } else {
          _this3.hide();
        }
      })["catch"](function (err) {
        _this3.hide();

        throw err;
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.cleanupComponentFrame();
      (0, _dom.hideElement)(this.el);
    }
  }, {
    key: "renderOffer",
    value: function renderOffer(offer) {
      this.productName = offer.product.name;

      if (!this.component) {
        this.component = this.buildComponent(offer);
        this.frame = (0, _renderToIframe.renderToFrame)(this.el, this.component);
      } else {
        this.component.updatePlans(offer.plans);
      }

      (0, _dom.showElement)(this.el);
    }
  }, {
    key: "cleanupComponentFrame",
    value: function cleanupComponentFrame() {
      if (this.component) {
        if (this.frame && this.frame.contentDocument) {
          (0, _redom.unmount)(this.frame.contentDocument.body, this.component);
          (0, _iframeAutoresize.unbindFrameAutoResize)(this.frame);
          (0, _dom.destroyElement)(this.frame);
        }

        this.component = null;
        this.frame = null;
      }

      (0, _dom.hideElement)(this.el);
    }
  }]);

  return OfferContainerBase;
}(_componentBase.ComponentBase);

exports.OfferContainerBase = OfferContainerBase;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjMDkwNjM3IiBkPSJNLjQzMyAxNS41OTVjLjI3MS4yNy42MjMuNDA1Ljk0OC40MDUuMzI1IDAgLjcwNC0uMTM1Ljk0OC0uNDA1bDUuNjg1LTUuNjc2IDUuNjg1IDUuNjc2Yy4yNy4yNy42MjMuNDA1Ljk0Ny40MDUuMzI1IDAgLjcwNS0uMTM1Ljk0OC0uNDA1YTEuMzM3IDEuMzM3IDAgMCAwIDAtMS45Mkw5LjkwOSA4bDUuNjg1LTUuNjc1YTEuMzM3IDEuMzM3IDAgMCAwIDAtMS45MiAxLjM0MiAxLjM0MiAwIDAgMC0xLjkyMyAwTDcuOTg2IDYuMDgxIDIuMzMuNDZhMS4zNDIgMS4zNDIgMCAwIDAtMS45MjMgMCAxLjMzNyAxLjMzNyAwIDAgMCAwIDEuOTE4bDUuNjg1IDUuNjc2LTUuNjU3IDUuNjQ4YTEuMzA1IDEuMzA1IDAgMCAwIDAgMS44OTF6IiAvPgo8L3N2Zz4K");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalLogos = modalLogos;

var _redom = __webpack_require__(0);

var _plusNew = _interopRequireDefault(__webpack_require__(49));

var _extendShield = _interopRequireDefault(__webpack_require__(50));

var _extendLogo = _interopRequireDefault(__webpack_require__(20));

var _styles = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function modalLogos(merchantLogo) {
  var logoParts = [];

  if (merchantLogo) {
    logoParts.push((0, _redom.el)("img.".concat(_styles.CSS.LOGO), {
      src: _extendShield["default"]
    }), (0, _redom.el)("img.".concat(_styles.CSS.PLUS), {
      src: _plusNew["default"]
    }), (0, _redom.el)("img.".concat(_styles.CSS.MERCHANT_LOGO), {
      src: merchantLogo
    }));
    return _redom.el.apply(void 0, ["div.".concat(_styles.CSS.LOGO_CONTAINER)].concat(logoParts));
  }

  return (0, _redom.el)("img.".concat(_styles.CSS.EXTEND_LOGO), {
    src: _extendLogo["default"]
  });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferButtonGroup = void 0;

var _redom = __webpack_require__(0);

var _button = __webpack_require__(33);

var _styles = __webpack_require__(1);

var _componentBase = __webpack_require__(5);

var _format = __webpack_require__(12);

var _banners = __webpack_require__(34);

var _copyText = __webpack_require__(13);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Remove this and all other banner text related logic from this file after the offers API and
 * OfferPlan records are upated to have the banner texted saved on the plan
 */
var bannerTypesMap = {
  1: _copyText.bannersText.bestSeller,
  2: _copyText.bannersText.bestValue
};

var OfferButtonGroup =
/*#__PURE__*/
function (_ComponentBase) {
  _inherits(OfferButtonGroup, _ComponentBase);

  function OfferButtonGroup(props) {
    var _this;

    _classCallCheck(this, OfferButtonGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OfferButtonGroup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "plans", {});

    _defineProperty(_assertThisInitialized(_this), "offerButtons", {});

    _defineProperty(_assertThisInitialized(_this), "_selectedPlanId", null);

    _this.el = (0, _redom.el)("div.".concat(_styles.CSS.BUTTON_GROUP), props.plans.map(function (plan, idx) {
      return _this.renderButton(plan, bannerTypesMap[idx]);
    }));
    return _this;
  }

  _createClass(OfferButtonGroup, [{
    key: "renderButton",
    value: function renderButton(plan, bannerCopy) {
      var _this2 = this;

      this.plans[plan.id] = plan;
      var _this$props = this.props,
          theme = _this$props.theme,
          offerType = _this$props.offerType;
      var buttonYearsText = (0, _format.monthsToYearsInWords)(plan.contract.termLength, offerType);
      var buttonDividerText = offerType === 'modal' ? 'Protection plan' : '-';
      var banners = bannerCopy && offerType === 'modal' ? (0, _banners.getBanners)(theme.primaryColor, bannerCopy) : [];
      var component = new _button.ButtonComponent({
        plan: plan,
        onClick: function onClick() {
          return _this2.onButtonClick(plan.id);
        },
        theme: theme,
        buttonYearsText: buttonYearsText,
        buttonDividerText: buttonDividerText,
        banners: banners
      });
      this.offerButtons[plan.id] = component;
      return component;
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(planId) {
      this.setActiveButton(planId);
      var onSelectionChange = this.props.onSelectionChange;

      if (typeof onSelectionChange === 'function' && this._selectedPlanId) {
        var _plan = this.plans[this._selectedPlanId];
        onSelectionChange(_plan);
      }
    }
  }, {
    key: "setActiveButton",
    value: function setActiveButton(activePlanId) {
      this._selectedPlanId = activePlanId === this._selectedPlanId ? null : activePlanId;
      Object.values(this.offerButtons).forEach(function (button) {
        return button.deactivate();
      });

      if (this._selectedPlanId) {
        this.offerButtons[activePlanId].activate();
      }
    }
  }, {
    key: "getSelectedPlan",
    value: function getSelectedPlan() {
      if (this._selectedPlanId == null) {
        return null;
      }

      return this.plans[this._selectedPlanId];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.defaultPlanId) {
        this.onButtonClick(this.props.defaultPlanId);
      }
    }
  }, {
    key: "setPlans",
    value: function setPlans(plans) {
      var _this3 = this;

      this.plans = {};
      this.offerButtons = {};
      this._selectedPlanId = null;
      (0, _redom.setChildren)(this.el, plans.map(function (plan, idx) {
        return _this3.renderButton(plan, bannerTypesMap[idx]);
      }));
    }
  }]);

  return OfferButtonGroup;
}(_componentBase.ComponentBase);

exports.OfferButtonGroup = OfferButtonGroup;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iMTEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ4IDExIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZD0iTTcuMDQxIDB2MS42MzNIMi4xMDV2Mi44NGg0LjcyNnYxLjYzMkgyLjEwNXYzLjA3Mkg3LjE1djEuNjMySDBWMGg3LjA0MXptMTIuNzAyIDEuNjY0aC4xNTZ2MS45MThoMi40OTV2MS40NEgxOS45djMuMzM0YzAgLjMyNS4wOTkuNTg4LjI5Ni43OS4xOTguMi40NjguMzAxLjgxMS4zMDEuNDQ3IDAgLjk2Mi0uMTYgMS41NDQtLjQ4djEuNTI1Yy0uNjkxLjMwNC0xLjM0LjQ1Ni0xLjk1LjQ1Ni0uODIgMC0xLjQ2MS0uMjIxLTEuOTIxLS42NjUtLjQ2LS40NDQtLjY5LTEuMDQ1LS42OS0xLjgwM1Y1LjAyMkgxNi44NXYtLjMxbDIuODkzLTMuMDQ4em03LjE1OCAxLjc4YzEuMDcxIDAgMS45MTguMzQgMi41NDIgMS4wMi42MjQuNjgxLjkzNiAxLjYyMy45MzYgMi44MjV2LjI4NmgtNS4xNTRjLjA3OC42NDUuMzIgMS4xNDEuNzI5IDEuNDkuNDA4LjM0OC45NjguNTIyIDEuNjguNTIyLjQ1OCAwIC44OTgtLjA3OSAxLjMyMi0uMjM2YTUuNzkzIDUuNzkzIDAgMDAxLjMxNC0uNzE2djEuNDE2Yy0uODUzLjU5OC0xLjg4Ny44OTctMy4xMDQuODk3LTEuMTQ4IDAtMi4wODctLjM0My0yLjgxNS0xLjAyOS0uNzI3LS42ODYtMS4wOTEtMS41OTktMS4wOTEtMi43MzkgMC0xLjA5OC4zMzYtMS45OTYgMS4wMS0yLjY5Mi42NzMtLjY5NyAxLjU1LTEuMDQ1IDIuNjMxLTEuMDQ1em0xLjY3NyAyLjk3OGMtLjA1Mi0uNTI2LS4yMTMtLjkzNy0uNDg0LTEuMjM0LS4yNy0uMjk3LS42NDItLjQ0NS0xLjExNS0uNDQ1LS40ODMgMC0uODcyLjE0Mi0xLjE2Ni40MjYtLjI5My4yODMtLjQ4LjcwMS0uNTU3IDEuMjUzaDMuMzIyem03LjUyNC0yLjk3OWMuNzggMCAxLjQwMi4yNTQgMS44NjguNzYyLjQ2NS41MDguNjk4IDEuMTc4LjY5OCAyLjAwOHY0LjU5NmgtMS45MVY2LjQwN2MwLS40Ny0uMTE0LS44NDEtLjM0LTEuMTE1LS4yMjYtLjI3My0uNTM0LS40MS0uOTI0LS40MWExLjQ4IDEuNDggMCAwMC0uODM0LjI2Yy0uMjYuMTcyLS41NDYuNDYtLjg1OC44NjJ2NC44MDVoLTEuOTE4VjMuNTgyaDEuOTE4djEuMDE0Yy4zNTMtLjQxMy43MTYtLjcwOCAxLjA4OC0uODg2YTIuNzcxIDIuNzcxIDAgMDExLjIxMi0uMjY3em05LjM0Mi4zMDJWMGgxLjkxdjEwLjgxaC0zLjM2OWMtMS4xNjQgMC0yLjA5Ni0uMzM0LTIuNzk1LS45OTktLjctLjY2NS0xLjA0OS0xLjU3My0xLjA0OS0yLjcyNCAwLS42OC4xNjMtMS4zLjQ4OC0xLjg1N2EzLjQ5IDMuNDkgMCAwMTEuMzQtMS4zMTEgMy43MjcgMy43MjcgMCAwMTEuODQ1LS40NzZjLjUxIDAgMS4wNTMuMSAxLjYzLjMwMnpNMTAuMzMgMy41OTNsNi4wMTUgNy4xOTYtMi4zNjMuMDEzUzEyLjMyIDguNzg0IDEyLjIzIDguNjYzYy0uNDEyLjU2MS0xLjY2NCAyLjE0LTEuNjY0IDIuMTRINy44NDNsMy4wMjgtMy43NDQtMi44ODktMy40NTMgMi4zNDgtLjAxM3ptMzMuODgyIDEuMjc0Yy40MjYgMCAuODM3LjEgMS4yMzIuMzAydjQuMTg1aC0xLjAwNmMtMS41NTUgMC0yLjMzMi0uNzc2LTIuMzMyLTIuMzI4IDAtLjY0NS4xOTEtMS4xNjYuNTczLTEuNTYzLjM4Mi0uMzk4Ljg5My0uNTk2IDEuNTMzLS41OTZ6IiBmaWxsPSIjMDkwNjM3Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjdBRUU0IiBkPSJNMTIuNjEgNS4xNzNsMS4yMTgtMS41NyAyLjI4Mi4wMDMtMi4zNiAyLjg4MnoiLz4KICA8L2c+Cjwvc3ZnPgo=");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOffer = setOffer;
exports.getOffer = getOffer;
exports.offerCache = void 0;

var _cache = __webpack_require__(22);

var offerCache = new _cache.Cache({
  storeKey: 'extend-offer',
  maxItems: 50
}); // helper functions

exports.offerCache = offerCache;

function setOffer(storeId, referenceId, offer) {
  offerCache.set(cacheKey(storeId, referenceId), offer);
  return offer;
}

function getOffer(storeId, referenceId) {
  return offerCache.get(cacheKey(storeId, referenceId));
}

function cacheKey(storeId, referenceId) {
  return "".concat(storeId, "|").concat(referenceId);
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cache = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_TTL = 120 * 1000;

var Cache =
/*#__PURE__*/
function () {
  function Cache(opts) {
    _classCallCheck(this, Cache);

    _defineProperty(this, "storeKey", void 0);

    _defineProperty(this, "ttl", void 0);

    _defineProperty(this, "maxItems", void 0);

    _defineProperty(this, "memcache", void 0);

    this.storeKey = opts.storeKey;
    this.ttl = opts.ttl || DEFAULT_TTL;
    this.maxItems = opts.maxItems || 50;
  }

  _createClass(Cache, [{
    key: "get",
    value: function get(key) {
      this.load();

      if (this.memcache[key] == null) {
        return null;
      }

      if (Date.now() > this.memcache[key].createdAt + this.ttl) {
        this.unset(key);
        return null;
      }

      return this.memcache[key].data;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.load();
      this.memcache[key] = this.memcache[key] || {
        data: value,
        createdAt: Date.now()
      };

      if (this.size() > this.maxItems) {
        this.unset(Object.keys(this.memcache)[0]);
      }

      this.save();
    }
  }, {
    key: "unset",
    value: function unset(key) {
      delete this.memcache[key];
      this.save();
    }
  }, {
    key: "size",
    value: function size() {
      return Object.keys(this.memcache).length;
    }
  }, {
    key: "save",
    value: function save() {
      var serialized = JSON.stringify(this.memcache || {});
      sessionStorage.setItem(this.storeKey, serialized);
    }
  }, {
    key: "load",
    value: function load() {
      var data = sessionStorage.getItem(this.storeKey);

      if (data == null) {
        this.memcache = {};
        return;
      }

      try {
        this.memcache = JSON.parse(data);
      } catch (e) {
        this.clear();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.memcache = {};
      sessionStorage.removeItem(this.storeKey);
    }
  }]);

  return Cache;
}();

exports.Cache = Cache;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoResizeFrame = autoResizeFrame;
exports.unbindFrameAutoResize = unbindFrameAutoResize;
exports.frameMap = exports.THROTTLE_TIME = exports.PAD = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(40));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// this is necessary because of a chrome issue where it cuts off the bottom
var PAD = 11;
exports.PAD = PAD;
var THROTTLE_TIME = 100; // FIXME: only being exposed for testing. not ideal.

exports.THROTTLE_TIME = THROTTLE_TIME;
var frameMap = new Map();
exports.frameMap = frameMap;

function autoResizeFrame(frame) {
  if (frameMap.has(frame)) {
    return;
  }

  var resizeHandler = (0, _lodash["default"])(function () {
    var doc = frame.contentDocument;

    if (doc) {
      // have to use offset height to support safari usage
      frame.style.setProperty('height', "".concat(doc.body.offsetHeight + PAD, "px"));
    }
  }, THROTTLE_TIME);
  window.addEventListener('resize', resizeHandler); // bind to click event too to resize in cases of dynamic page content

  document.addEventListener('click', resizeHandler);

  var unbind = function unbind() {
    window.removeEventListener('resize', resizeHandler);
    document.removeEventListener('click', resizeHandler);
    resizeHandler.cancel();
  };

  frameMap.set(frame, unbind); // resize. timeout is necessary for some reason

  window.setTimeout(resizeHandler, 10);
}

function unbindFrameAutoResize(frame) {
  var unbind = frameMap.get(frame);

  if (unbind) {
    unbind();
  }

  frameMap["delete"](frame);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.offersModal = void 0;

var _promisePolyfill = _interopRequireDefault(__webpack_require__(6));

var _window = __webpack_require__(8);

var _offersModal = __webpack_require__(25);

var _api = __webpack_require__(7);

var _globalConfig = __webpack_require__(3);

var _theme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var offersModal = {
  _instance: null,
  _isOpen: false,
  open: function open(options) {
    if (offersModal.isOpen()) {
      return _promisePolyfill["default"].resolve();
    }

    offersModal._isOpen = true;
    var _options$storeId = options.storeId,
        storeId = _options$storeId === void 0 ? _globalConfig.globalConfig.get('storeId') : _options$storeId,
        referenceId = options.referenceId,
        onClose = options.onClose;

    var handleClose = function handleClose(plan, product) {
      if (typeof onClose === 'function') {
        onClose(plan, product);
      }

      offersModal._isOpen = false;
      offersModal.close();
    };

    if (!storeId) {
      console.warn('Missing required option "storeId"');
      handleClose();
      return _promisePolyfill["default"].resolve();
    }

    if (!referenceId) {
      console.warn('Missing required option "referenceId"');
      handleClose();
      return _promisePolyfill["default"].resolve();
    }

    if ((0, _window.unsupportedBrowser)()) {
      console.warn('Unsupported browser');
      handleClose();
      return _promisePolyfill["default"].resolve();
    }

    return _promisePolyfill["default"].all([(0, _api.fetchOfferConfiguration)(storeId), (0, _api.fetchOffer)(storeId, options.referenceId)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          config = _ref2[0],
          offer = _ref2[1];

      if (!(config.approved && config.enabled) || !offer.plans.length) {
        handleClose();
        return;
      }

      var theme = options.theme || (0, _theme.themeFromBranding)(config.branding);
      offersModal._instance = new _offersModal.OffersModalContainer({
        offer: offer,
        theme: theme,
        onAddToCart: function onAddToCart(planSelection) {
          handleClose(planSelection, {
            id: options.referenceId,
            name: offer.product.name
          });
        },
        onClose: function onClose() {
          handleClose();
        },
        onDecline: function onDecline() {
          handleClose();
        }
      });

      offersModal._instance.render();
    })["catch"](function (e) {
      console.warn(e);
      handleClose();
    });
  },
  close: function close() {
    if (offersModal._instance && offersModal._instance.destroy) {
      offersModal._instance.destroy();
    }

    offersModal._instance = null;
  },
  isOpen: function isOpen() {
    return this._isOpen;
  }
};
exports.offersModal = offersModal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OffersModalContainer = exports.MODAL_ID = void 0;

var _redom = __webpack_require__(0);

var _dom = __webpack_require__(2);

var _offersModal = __webpack_require__(55);

var _renderToIframe = __webpack_require__(10);

var _theme = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MODAL_ID = 'extend-offers-modal-iframe';
exports.MODAL_ID = MODAL_ID;

var OffersModalContainer =
/*#__PURE__*/
function () {
  function OffersModalContainer(props) {
    _classCallCheck(this, OffersModalContainer);

    _defineProperty(this, "iframe", void 0);

    _defineProperty(this, "component", void 0);

    var offer = props.offer,
        _onAddToCart = props.onAddToCart,
        _onClose = props.onClose,
        _onDecline = props.onDecline,
        lead = props.lead;
    this.component = new _offersModal.OffersModalComponent({
      plans: offer.plans,
      marketing: offer.marketing.modal,
      theme: props.theme || _theme.DEFAULT_THEME,
      lead: lead,
      onClose: function onClose() {
        if (_onClose) _onClose();
      },
      onDecline: function onDecline() {
        if (_onDecline) _onDecline();
      },
      onAddToCart: function onAddToCart(plan) {
        if (_onAddToCart && plan) {
          _onAddToCart({
            planId: plan.id,
            price: plan.price,
            term: plan.contract.termLength
          });
        } else if (_onClose) {
          _onClose();
        }
      }
    });
  }

  _createClass(OffersModalContainer, [{
    key: "render",
    value: function render() {
      this.iframe = (0, _renderToIframe.renderToFrame)(document.body, this.component, {
        id: MODAL_ID,
        autosize: false,
        styles: {
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '10000',
          width: '100vw',
          height: '100vh'
        }
      });
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.iframe && this.iframe.contentDocument) {
        (0, _redom.unmount)(this.iframe.contentDocument.body, this.component);
      }

      (0, _dom.destroyElement)(this.iframe);
    }
  }]);

  return OffersModalContainer;
}();

exports.OffersModalContainer = OffersModalContainer;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dom = __webpack_require__(2);

var store = new Map();
var instances = {
  get: function get(el) {
    var element = (0, _dom.getElementSafe)(el);

    if (!element) {
      return null;
    }

    return store.get(element) || null;
  },
  set: function set(el, component) {
    var existing = store.get(el);

    if (existing) {
      existing.destroy();
    }

    store.set(el, component);
    return component;
  },
  // mainly for testing purposes
  clear: function clear() {
    store.forEach(function (value) {
      if (value.destroy) {
        value.destroy();
      }
    });
    store.clear();
  }
};
var _default = instances;
exports["default"] = _default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Extend: true,
  ButtonsInstance: true
};
Object.defineProperty(exports, "Extend", {
  enumerable: true,
  get: function get() {
    return _extend.Extend;
  }
});
Object.defineProperty(exports, "ButtonsInstance", {
  enumerable: true,
  get: function get() {
    return _offerContainerBase.OfferContainerExternal;
  }
});

var _extend = __webpack_require__(28);

var _offerContainerBase = __webpack_require__(15);

var _types = __webpack_require__(66);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Extend = void 0;

var _buttons = __webpack_require__(29);

var _offersModal = __webpack_require__(24);

var _aftermarketModal = __webpack_require__(61);

var _api = __webpack_require__(7);

var _globalConfig = __webpack_require__(3);

var _instances = _interopRequireDefault(__webpack_require__(26));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Extend = {
  getVersion: function getVersion() {
    return "1.15.10";
  },

  /**
   * Undocumented function for internal use only atm
   */
  getConfiguration: function getConfiguration(storeId) {
    return (0, _api.fetchOfferConfiguration)(getStoreId(storeId));
  },

  /**
   * Undocumented function for internal use only atm
   */
  getOffer: function getOffer(referenceId) {
    if (!referenceId) {
      throw new Error('Missing required argument "referenceId"');
    }

    return (0, _api.fetchOffer)(getStoreId(), referenceId);
  },
  config: function (_config) {
    function config(_x) {
      return _config.apply(this, arguments);
    }

    config.toString = function () {
      return _config.toString();
    };

    return config;
  }(function (config) {
    if (typeof config === 'undefined') {
      return _globalConfig.globalConfig.toJSON();
    }

    if (config === null) {
      _globalConfig.globalConfig.reset();

      return;
    } // environment checks should be first before any external network requests are made


    if (config.environment && _globalConfig.ENVIRONMENTS.includes(config.environment)) {
      _globalConfig.globalConfig.set('environment', config.environment);
    }

    var storeId = config.storeId,
        referenceIds = config.referenceIds;

    if (storeId) {
      _globalConfig.globalConfig.set('storeId', storeId);

      (0, _api.fetchOfferConfiguration)(storeId);
    }

    if (storeId) {// fetch logo
    }

    if (storeId && Array.isArray(referenceIds)) {
      referenceIds.forEach(function (referenceId) {
        return (0, _api.fetchOffer)(storeId, referenceId);
      });
    }
  }),
  setActiveProduct: function setActiveProduct(selector, referenceId) {
    var instance = _instances["default"].get(selector);

    if (!instance) {
      return;
    }

    instance.setActiveProduct(referenceId);
  },
  modal: _offersModal.offersModal,
  buttons: _buttons.buttons,
  aftermarketModal: _aftermarketModal.aftermarketModal
};
exports.Extend = Extend;

function getStoreId(defaultValue) {
  var storeId = _globalConfig.globalConfig.get('storeId') || defaultValue;

  if (!storeId) {
    throw new Error('storeId not found! did you remember to call Extend.config()?');
  }

  return storeId;
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privileged = privileged;
exports.buttons = void 0;

var _window = __webpack_require__(8);

var _dom = __webpack_require__(2);

var _buttons = __webpack_require__(30);

var _simpleOffer = __webpack_require__(51);

var _globalConfig = __webpack_require__(3);

var _theme = __webpack_require__(4);

var _api = __webpack_require__(7);

var _instances = _interopRequireDefault(__webpack_require__(26));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-underscore-dangle */
var buttons = {
  renderSimpleOffer: function renderSimpleOffer(element, options) {
    renderComponent(element, options, function (_ref) {
      var storeId = _ref.storeId,
          referenceId = _ref.referenceId,
          theme = _ref.theme;
      return new _simpleOffer.SimpleOfferContainer({
        storeId: storeId,
        referenceId: referenceId,
        theme: theme,
        onAddToCart: options.onAddToCart
      });
    });
  },
  render: function render(element, options, callback) {
    renderComponent(element, options, function (_ref2) {
      var storeId = _ref2.storeId,
          referenceId = _ref2.referenceId,
          theme = _ref2.theme;
      return new _buttons.ButtonsContainer({
        storeId: storeId,
        referenceId: referenceId,
        theme: theme
      });
    }, callback);
  },
  instance: function instance(selector) {
    var instance = _instances["default"].get(selector);

    return instance && privileged(instance);
  },
  destroyAll: function destroyAll() {
    _instances["default"].clear();
  }
};
exports.buttons = buttons;

function privileged(instance) {
  return {
    getActiveProduct: function getActiveProduct() {
      return instance.getActiveProduct();
    },
    setActiveProduct: function setActiveProduct(referenceId) {
      return instance.setActiveProduct(referenceId);
    },
    getPlanSelection: function getPlanSelection() {
      return instance.getPlanSelection();
    },
    destroy: function destroy() {
      return instance.destroy();
    }
  };
}

function renderComponent(element, options, render, callback) {
  var _options$storeId = options.storeId,
      storeId = _options$storeId === void 0 ? _globalConfig.globalConfig.get('storeId') : _options$storeId,
      referenceId = options.referenceId;

  var wrappedCallback = function wrappedCallback(error, instance, config) {
    if (error) {
      console.error(error); // eslint-disable-line no-console
    }

    if (typeof callback === 'function') {
      callback(error, instance, config);
    }
  };

  if (!storeId) {
    wrappedCallback(new Error('The storeId was not supplied'));
    return;
  }

  if ((0, _window.unsupportedBrowser)()) {
    wrappedCallback(new Error('This browser is not supported'));
    return;
  }

  if (!element) {
    wrappedCallback(new Error('Missing required option "container"'));
    return;
  }

  var container = (0, _dom.getElementSafe)(element);

  if (!container) {
    wrappedCallback(new Error('Container element not found'));
    return;
  }

  if (_instances["default"].get(container)) {
    wrappedCallback(new Error('Instance already exists at container'));
    return;
  }

  (0, _api.fetchOfferConfiguration)(storeId).then(function (config) {
    if (!(config.enabled && config.approved)) {
      wrappedCallback(new Error('Store is not approved or not enabled!'));
      return;
    }

    var theme = options.theme || (0, _theme.themeFromBranding)(config.branding);
    var component = render({
      storeId: storeId,
      referenceId: referenceId,
      theme: theme
    }); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore

    component.render(container).then(function (instance) {
      _instances["default"].set(container, instance);

      wrappedCallback(null, privileged(instance));
    });
  })["catch"](wrappedCallback);
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsContainer = void 0;

var _redom = __webpack_require__(0);

var _buttons = __webpack_require__(31);

var _util = __webpack_require__(9);

var _offerContainerBase = __webpack_require__(15);

var _learnMoreModal = __webpack_require__(43);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonsContainer =
/*#__PURE__*/
function (_OfferContainerBase) {
  _inherits(ButtonsContainer, _OfferContainerBase);

  function ButtonsContainer(_ref) {
    var _this;

    var storeId = _ref.storeId,
        referenceId = _ref.referenceId,
        theme = _ref.theme;

    _classCallCheck(this, ButtonsContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonsContainer).call(this, {
      storeId: storeId,
      referenceId: referenceId,
      theme: theme
    }));

    _defineProperty(_assertThisInitialized(_this), "onClickLearnMore", function () {
      var _this$component, _this$component$getSe;

      var planUrl = (_this$component = _this.component) === null || _this$component === void 0 ? void 0 : (_this$component$getSe = _this$component.getSelectedPlan()) === null || _this$component$getSe === void 0 ? void 0 : _this$component$getSe.url;

      _learnMoreModal.learnMoreModal.open({
        referenceId: _this.referenceId,
        planUrl: planUrl
      });
    });

    _this.el = (0, _redom.el)("div#extend-product-offer-".concat((0, _util.shortUid)(), ".extend-product-offer.ex-clearfix"), {
      style: {
        clear: 'both',
        position: 'relative',
        display: 'none',
        width: '100%'
      }
    });
    return _this;
  }

  _createClass(ButtonsContainer, [{
    key: "getPlanSelection",
    value: function getPlanSelection() {
      if (this.referenceId == null || this.component == null) {
        return null;
      }

      var selectedPlan = this.component.getSelectedPlan();

      if (selectedPlan == null) {
        return null;
      }

      return {
        planId: selectedPlan.id,
        price: selectedPlan.price,
        term: selectedPlan.contract.termLength
      };
    }
  }, {
    key: "buildComponent",
    value: function buildComponent(offer) {
      return new _buttons.ButtonsComponent({
        plans: offer.plans,
        marketing: offer.marketing.buttons,
        theme: this.theme,
        onClickLearnMore: this.onClickLearnMore
      });
    }
  }]);

  return ButtonsContainer;
}(_offerContainerBase.OfferContainerBase);

exports.ButtonsContainer = ButtonsContainer;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ButtonsComponent", {
  enumerable: true,
  get: function get() {
    return _buttons.ButtonsComponent;
  }
});

var _buttons = __webpack_require__(32);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsComponent = void 0;

var _redom = __webpack_require__(0);

var _dom = __webpack_require__(2);

var _styles = __webpack_require__(1);

var _icons = __webpack_require__(11);

var _offerButtonGroup = __webpack_require__(19);

var _styles2 = __webpack_require__(35);

var _offerComponentBase = __webpack_require__(14);

var _extendLogo = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonsComponent =
/*#__PURE__*/
function (_OfferComponentBase) {
  _inherits(ButtonsComponent, _OfferComponentBase);

  function ButtonsComponent(props) {
    var _this;

    _classCallCheck(this, ButtonsComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonsComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "plans", void 0);

    _defineProperty(_assertThisInitialized(_this), "planDetailsLink", void 0);

    _defineProperty(_assertThisInitialized(_this), "buttonGroup", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleClickLearnMore", function () {
      _this.props.onClickLearnMore();
    });

    _this.plans = props.plans;
    var _props$marketing = props.marketing,
        marketing = _props$marketing === void 0 ? {} : _props$marketing;
    var headline = marketing.headline || 'Add an extended warranty from';
    var linkText = marketing.linkText || 'Learn more';
    _this.buttonGroup = new _offerButtonGroup.OfferButtonGroup({
      plans: props.plans,
      theme: props.theme,
      offerType: 'buttons'
    });
    _this.el = (0, _redom.el)('div', (0, _redom.el)("div.".concat(_styles.CSS.CAPTION), (0, _redom.el)("div.".concat(_styles.CSS.CAPTION_TEXT), (0, _redom.text)(headline)), (0, _redom.el)("img.".concat(_styles.CSS.LOGO), {
      src: _extendLogo["default"]
    }), _this.planDetailsLink = (0, _redom.el)("a.".concat(_styles2.BUTTONS_CSS.INFO_BUTTON), {
      target: '_blank',
      rel: 'noopener noreferrer'
    }, (0, _redom.el)("span.".concat(_styles2.BUTTONS_CSS.INFO_LINK), (0, _redom.text)(linkText)), (0, _icons.icon)('info', _this.theme.primaryColor))), _this.buttonGroup);
    return _this;
  }

  _createClass(ButtonsComponent, [{
    key: "updatePlans",
    value: function updatePlans(plans) {
      this.plans = plans;
      this.buttonGroup.setPlans(plans);
    }
  }, {
    key: "getSelectedPlan",
    value: function getSelectedPlan() {
      return this.buttonGroup.getSelectedPlan();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(ButtonsComponent.prototype), "componentDidMount", this).call(this);

      (0, _dom.addStyle)((0, _styles2.buttonsComponentStyles)(this.theme), this.el);
      this.planDetailsLink.addEventListener('click', this.handleClickLearnMore, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.planDetailsLink.removeEventListener('click', this.handleClickLearnMore, false);
    }
  }]);

  return ButtonsComponent;
}(_offerComponentBase.OfferComponentBase);

exports.ButtonsComponent = ButtonsComponent;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addButtonComponentStyles = addButtonComponentStyles;
exports.STYLE_TAG_ID = exports.ButtonComponent = void 0;

var _redom = __webpack_require__(0);

var _format = __webpack_require__(12);

var _dom = __webpack_require__(2);

var _styles = __webpack_require__(1);

var _componentBase = __webpack_require__(5);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonComponent =
/*#__PURE__*/
function (_ComponentBase) {
  _inherits(ButtonComponent, _ComponentBase);

  function ButtonComponent(props) {
    var _this;

    _classCallCheck(this, ButtonComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      _this.el.blur();

      _this.props.onClick(_this.props.plan.id);
    });

    var plan = props.plan,
        banners = props.banners,
        buttonDividerText = props.buttonDividerText,
        buttonYearsText = props.buttonYearsText;
    _this.el = (0, _redom.el)("button.".concat(_styles.CSS.BUTTON, ".").concat(_styles.CSS.BUTTON_OFFER), {
      type: 'button'
    }, banners && banners.length ? banners : '', (0, _redom.el)("div.".concat(_styles.CSS.BUTTON_CONTENT), (0, _redom.el)("span.".concat(_styles.CSS.TERM_LENGTH), buttonYearsText), (0, _redom.el)("span.".concat(_styles.CSS.DIVIDER), buttonDividerText), (0, _redom.el)("span.".concat(_styles.CSS.PLAN_PRICE), (0, _redom.el)("span.".concat(_styles.CSS.CURRENCY_SYM), (0, _format.getCurrencySymbol)('USD')), (0, _redom.el)("span.".concat(_styles.CSS.AMOUNT), (0, _format.formatCurrency)(plan.price, 'USD')))));
    return _this;
  }

  _createClass(ButtonComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      addButtonComponentStyles(this.el.ownerDocument, this.props.theme);
      this.el.addEventListener('click', this.onClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.el.removeEventListener('click', this.onClick, false);
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.el.classList.remove(_styles.CSS.ACTIVE);
    }
  }, {
    key: "activate",
    value: function activate() {
      this.el.classList.add(_styles.CSS.ACTIVE);
    }
  }]);

  return ButtonComponent;
}(_componentBase.ComponentBase); // FIXME: this is kind of a hack to allow component styles to be added but only once per document


exports.ButtonComponent = ButtonComponent;
var STYLE_TAG_ID = 'button-styles';
exports.STYLE_TAG_ID = STYLE_TAG_ID;

function addButtonComponentStyles(document, theme) {
  if (!document) return;
  if (document.getElementById(STYLE_TAG_ID)) return;
  (0, _dom.addStyle)(buttonComponentStyles(theme), document.head, STYLE_TAG_ID);
}

function buttonComponentStyles(theme) {
  var primaryColor = theme.primaryColor;
  return "\n.".concat(_styles.CSS.BUTTON_OFFER, " {\n  display: inline-block;\n  font-size: inherit;\n  user-select: none;\n}\n.").concat(_styles.CSS.BUTTON_OFFER, ".").concat(_styles.CSS.ACTIVE, " {\n  border-color: ").concat(primaryColor, ";\n  background: ").concat(primaryColor, ";\n}\n.").concat(_styles.CSS.BUTTON_OFFER, ".").concat(_styles.CSS.ACTIVE, ",\n.").concat(_styles.CSS.BUTTON_OFFER, ".").concat(_styles.CSS.ACTIVE, ":hover,\n.").concat(_styles.CSS.BUTTON_OFFER, ".").concat(_styles.CSS.ACTIVE, ":focus {\n  color: white;\n}\n");
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBanners = getBanners;
exports.getBanner = getBanner;

var _redom = __webpack_require__(0);

var _styles = __webpack_require__(1);

function getBanners(primaryColor, textContent) {
  var bannerActive = getBanner({
    textFill: primaryColor,
    textContent: textContent,
    extraClass: "".concat(_styles.CSS.SVG_ACTIVE)
  });
  var bannerDeactive = getBanner({
    backgroundFill: primaryColor,
    textFill: '#fff',
    textContent: textContent,
    extraClass: "".concat(_styles.CSS.SVG_DEACTIVE)
  });
  return [bannerActive, bannerDeactive];
}

function getBanner(props) {
  var _props$backgroundFill = props.backgroundFill,
      backgroundFill = _props$backgroundFill === void 0 ? '#fff' : _props$backgroundFill,
      textFill = props.textFill,
      textContent = props.textContent,
      extraClass = props.extraClass;
  return (0, _redom.svg)("svg.".concat(_styles.CSS.BANNER_SVG, ".").concat(extraClass), {
    xmlns: 'http://www.w3.org/2000/svg'
  }, (0, _redom.svg)('defs', (0, _redom.svg)('filter', {
    x: '-9.9%',
    y: '-6.7%',
    width: '116.5%',
    height: '116.8%',
    filterUnits: 'objectBoundingBox',
    id: 'a'
  }, (0, _redom.svg)('feOffset', {
    dx: '-1',
    dy: '1',
    "in": 'SourceAlpha',
    result: 'shadowOffsetOuter1'
  }), (0, _redom.svg)('feGaussianBlur', {
    stdDeviation: '1.5',
    "in": 'shadowOffsetOuter1',
    result: 'shadowBlurOuter1'
  }), (0, _redom.svg)('feColorMatrix', {
    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.324000219 0',
    "in": 'shadowBlurOuter1'
  })), (0, _redom.svg)('path', {
    id: 'b',
    d: 'M0 4.468h25.582l35.006 33.788v25.678z'
  })), (0, _redom.svg)('g', {
    fill: 'none',
    fillRule: 'evenodd'
  }, (0, _redom.svg)('g', {
    transform: 'translate(4 -2)'
  }, (0, _redom.svg)('use', {
    fill: backgroundFill,
    filter: 'url(#a)',
    xlink: {
      href: '#b'
    }
  }), (0, _redom.svg)('use', {
    fill: backgroundFill,
    xlink: {
      href: '#b'
    }
  })), (0, _redom.svg)('text', {
    transform: 'rotate(45 40.459 32.434)',
    'font-family': "'Nunito Sans', Helvetica, sans-serif",
    'letter-spacing': '-.255',
    fill: textFill
  }, (0, _redom.svg)('tspan', {
    x: '12.006',
    y: '31.606'
  }, textContent))));
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonsComponentStyles = buttonsComponentStyles;
exports.BUTTONS_CSS = void 0;

var _styles = __webpack_require__(1);

var BUTTONS_CSS = {
  INFO_LINK: 'info-link',
  INFO_ICON: 'info-icon',
  INFO_BUTTON: 'info-button'
};
exports.BUTTONS_CSS = BUTTONS_CSS;

function buttonsComponentStyles(theme) {
  return "\n/* component styles */\n.".concat(_styles.CSS.CAPTION, " {\n  display: inline-block;\n  overflow: wrap;\n  font-size: 1.4rem;\n  margin-bottom: 1.1rem;\n  align-items: baseline;\n}\n.").concat(_styles.CSS.CAPTION_TEXT, " {\n  display: inline-block;\n  white-space: nowrap;\n}\n.").concat(_styles.CSS.LOGO, " {\n  height: 1.1rem;\n  margin: 0 0.5rem;\n}\n.").concat(BUTTONS_CSS.INFO_BUTTON, " {\n  margin: 0;\n  border: 0;\n  font-family: 'Nunito Sans', Helvetica, sans-serif;\n  font-size: 1.4rem;\n  color: ").concat(theme.primaryColor, ";\n  cursor: pointer;\n  padding: 0;\n  background-color: transparent;\n}\n.").concat(BUTTONS_CSS.INFO_LINK, " {\n  display: inline-block;\n  text-decoration: underline;\n}\n.").concat(BUTTONS_CSS.INFO_ICON, " {\n  display: none;\n}\n.").concat(BUTTONS_CSS.INFO_ICON, " g {\n  fill: ").concat(theme.primaryColor, ";\n}\n.").concat(_styles.CSS.BUTTON_OFFER, " {\n  padding: 0.8rem;\n  text-align: center;\n}\n.").concat(_styles.CSS.BUTTON_GROUP, " {\n  display: flex;\n}\n.").concat(_styles.CSS.BUTTON_GROUP, " > .").concat(_styles.CSS.BUTTON_OFFER, " {\n  flex: 1;\n}\n.").concat(_styles.CSS.BUTTON_OFFER, " + .").concat(_styles.CSS.BUTTON_OFFER, " {\n  margin-left: 1rem;\n}\n.").concat(_styles.CSS.DIVIDER, " {\n  display: inline-block;\n  margin: 0 4px;\n}\n\n\n@media (max-width: 450px) {\n  .").concat(BUTTONS_CSS.INFO_ICON, " {\n    display: none;\n  }\n  .").concat(BUTTONS_CSS.INFO_LINK, " {\n    display: inline-block;\n  }\n}\n@media (max-width: 450px) {\n  .").concat(BUTTONS_CSS.INFO_ICON, " {\n    display: inline-block;\n  }\n  .").concat(BUTTONS_CSS.INFO_LINK, " {\n    display: none;\n  }\n  .").concat(_styles.CSS.TERM_LENGTH, ",\n  .").concat(_styles.CSS.PLAN_PRICE, " {\n    display: block;\n  }\n  .").concat(_styles.CSS.TERM_LENGTH, ",\n  .").concat(_styles.CSS.CURRENCY_SYM, " {\n    font-size: 0.8em;\n  }\n  .").concat(_styles.CSS.DIVIDER, " {\n    display: none;\n  }\n  .").concat(_styles.CSS.TERM_LENGTH, " {\n    margin-bottom: .1rem;\n  }\n  .").concat(_styles.CSS.CURRENCY_SYM, " {\n    margin-right: 0.1rem;\n    position: relative;\n    top: -0.1rem;\n  }\n  .").concat(_styles.CSS.AMOUNT, " {\n    font-weight: 700;\n    font-size: 1.4rem;\n    line-height: 1.9rem;\n  }\n  .").concat(_styles.CSS.BUTTON_OFFER, " {\n    padding: 0.8rem;\n  }\n}\n@media (min-width: 200px) {\n  .").concat(_styles.CSS.CAPTION, " {\n    font-size: 1.2rem;\n  }\n  .").concat(_styles.CSS.LOGO, " {\n    height: 1.0rem;\n    margin: 0 0.5rem;\n  }\n}\n@media (max-width: 200px) {\n  .").concat(_styles.CSS.CAPTION, " {\n    font-size: 1.1rem;\n    line-height: 1.4rem;\n  }\n  .").concat(_styles.CSS.LOGO, " {\n    height: 0.8rem;\n    margin: 0 0.3rem;\n  }\n  .").concat(BUTTONS_CSS.INFO_ICON, " {\n    height: 0.8rem;\n  }\n  .").concat(_styles.CSS.BUTTON_OFFER, " {\n    font-size: 1rem;\n  }\n  .").concat(_styles.CSS.CURRENCY_SYM, " {\n    margin-right: 0.1rem;\n    position: relative;\n    top: -0.05rem;\n  }\n  .").concat(_styles.CSS.AMOUNT, " {\n    font-weight: 700;\n    font-size: 1rem;\n    line-height: 1;\n  }\n}\n");
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(37); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || void 0 && (void 0).setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || void 0 && (void 0).clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? void 0 : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16), __webpack_require__(38)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    // @ts-ignore
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    // @ts-ignore
    return constructor.resolve(callback()).then(function () {
      // @ts-ignore
      return constructor.reject(reason);
    });
  });
}

var _default = finallyConstructor;
exports["default"] = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function now() {
  return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */


function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */


function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = throttle;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJSON = getJSON;

var _promisePolyfill = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getJSON(url) {
  return new _promisePolyfill["default"](function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.addEventListener('load', function () {
      resolve({
        status: req.status,
        data: req.response
      });
    });
    req.addEventListener('error', reject);
    req.open('GET', url, true);
    req.setRequestHeader('Accept', 'application/json');
    req.responseType = 'json';
    req.send();
  });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = setConfig;
exports.getConfig = getConfig;
exports.configurationCache = void 0;

var _cache = __webpack_require__(22);

/** caching for offers data with localStorage + ttl */
var configurationCache = new _cache.Cache({
  storeKey: 'extend-offer-configuration',
  maxItems: 5
}); // helper functions

exports.configurationCache = configurationCache;

function setConfig(offerConfiguration) {
  configurationCache.set('configuration', offerConfiguration);
  return offerConfiguration;
}

function getConfig() {
  return configurationCache.get('configuration');
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.learnMoreModal = exports.planDetails = void 0;

var _promisePolyfill = _interopRequireDefault(__webpack_require__(6));

var _learnMoreModal = __webpack_require__(44);

var _globalConfig = __webpack_require__(3);

var _api = __webpack_require__(7);

var _window = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-underscore-dangle */
var planDetails = ['Fast and free product replacement or repair', 'Normal wear-and-tear and mechanical failures', 'Power surges and electrical failures'];
exports.planDetails = planDetails;
var learnMoreModal = {
  _instance: null,
  _isOpen: false,
  open: function open(options) {
    if (learnMoreModal.isOpen()) {
      return _promisePolyfill["default"].resolve();
    }

    learnMoreModal._isOpen = true;
    var _options$storeId = options.storeId,
        storeId = _options$storeId === void 0 ? _globalConfig.globalConfig.get('storeId') : _options$storeId,
        referenceId = options.referenceId;

    var handleClose = function handleClose() {
      learnMoreModal._isOpen = false;
      learnMoreModal.close();
    };

    if (!storeId) {
      // eslint-disable-next-line no-console
      console.warn('Missing required option "storeId"');
      handleClose();
      return _promisePolyfill["default"].resolve();
    }

    if (!referenceId) {
      // eslint-disable-next-line no-console
      console.warn('Missing required option "referenceId"');
      handleClose();
      return _promisePolyfill["default"].resolve();
    }

    if ((0, _window.unsupportedBrowser)()) {
      // eslint-disable-next-line no-console
      console.warn('Unsupported browser');
      handleClose();
      return _promisePolyfill["default"].resolve();
    }

    learnMoreModal._isOpen = true;
    return (0, _api.fetchOffer)(storeId, referenceId).then(function (offer) {
      var merchantLogo = offer.marketing.modal.merchantLogo;
      var planUrl = options.planUrl ? options.planUrl : offer.plans[0].url;
      var coverageType = offer.plans[0].contract.coverageIncludes;
      learnMoreModal._instance = new _learnMoreModal.LearnMoreModalContainer({
        planDetails: planDetails,
        onClose: handleClose,
        planUrl: planUrl,
        merchantLogo: merchantLogo,
        coverageType: coverageType
      });

      learnMoreModal._instance.render();
    });
  },
  close: function close() {
    if (learnMoreModal._instance && learnMoreModal._instance.destroy) {
      learnMoreModal._instance.destroy();
    }

    learnMoreModal._instance = null;
  },
  isOpen: function isOpen() {
    return this._isOpen;
  }
};
exports.learnMoreModal = learnMoreModal;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LearnMoreModalContainer = exports.LEARN_MORE_MODAL_ID = void 0;

var _redom = __webpack_require__(0);

var _dom = __webpack_require__(2);

var _learnMoreModal = __webpack_require__(45);

var _renderToIframe = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LEARN_MORE_MODAL_ID = 'extend-learn-more-modal-iframe';
exports.LEARN_MORE_MODAL_ID = LEARN_MORE_MODAL_ID;

var LearnMoreModalContainer =
/*#__PURE__*/
function () {
  function LearnMoreModalContainer(props) {
    _classCallCheck(this, LearnMoreModalContainer);

    _defineProperty(this, "iframe", void 0);

    _defineProperty(this, "component", void 0);

    var planDetails = props.planDetails,
        onClose = props.onClose,
        planUrl = props.planUrl,
        merchantLogo = props.merchantLogo,
        coverageType = props.coverageType;
    this.component = new _learnMoreModal.LearnMoreModalComponent({
      planDetails: planDetails,
      onClose: onClose,
      planUrl: planUrl,
      merchantLogo: merchantLogo,
      coverageType: coverageType
    });
  }

  _createClass(LearnMoreModalContainer, [{
    key: "render",
    value: function render() {
      this.iframe = (0, _renderToIframe.renderToFrame)(document.body, this.component, {
        id: LEARN_MORE_MODAL_ID,
        autosize: false,
        styles: {
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '10000',
          width: '100vw',
          height: '100vh'
        }
      });
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.iframe && this.iframe.contentDocument) {
        (0, _redom.unmount)(this.iframe.contentDocument.body, this.component);
      }

      (0, _dom.destroyElement)(this.iframe);
    }
  }]);

  return LearnMoreModalContainer;
}();

exports.LearnMoreModalContainer = LearnMoreModalContainer;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LearnMoreModalComponent", {
  enumerable: true,
  get: function get() {
    return _learnMoreModal.LearnMoreModalComponent;
  }
});

var _learnMoreModal = __webpack_require__(46);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LearnMoreModalComponent = void 0;

var _redom = __webpack_require__(0);

var _dom = __webpack_require__(2);

var _styles = __webpack_require__(1);

var _close = _interopRequireDefault(__webpack_require__(17));

var _componentBase = __webpack_require__(5);

var _styles2 = __webpack_require__(47);

var _icons = __webpack_require__(11);

var _theme = __webpack_require__(4);

var _logoParts = __webpack_require__(18);

var _copyText = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TEXT = {
  LIST_HEADER: 'This plan covers:',
  FOOTER_HEADER: 'Why choose Extend?'
};

var LearnMoreModalComponent =
/*#__PURE__*/
function (_ComponentBase) {
  _inherits(LearnMoreModalComponent, _ComponentBase);

  function LearnMoreModalComponent(props) {
    var _this;

    _classCallCheck(this, LearnMoreModalComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LearnMoreModalComponent).call(this, props));
    /* Note: planDetails is temporarily unused. It will be re-implemented when the plan records are
     * updated to contain the copy associated with the plan's coverage type.
     */

    _defineProperty(_assertThisInitialized(_this), "exitBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "closeBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleClickClose", function () {
      _this.props.onClose();
    });

    var planUrl = props.planUrl,
        merchantLogo = props.merchantLogo,
        coverageType = props.coverageType;
    var girlPackageImg = (0, _redom.el)("div.".concat(_styles2.LEARN_MORE_CSS.IMAGE_CONTAINER));
    var modalCopy = _copyText.LEARN_MORE_MODAL_COPY[coverageType];
    var mobileText = (0, _redom.el)("span.".concat(_styles.CSS.MOBILE_TEXT), (0, _redom.text)(modalCopy.header.mobile));
    var desktopText = (0, _redom.el)("span.".concat(_styles.CSS.DESKTOP_TEXT), (0, _redom.text)(modalCopy.header.desktop));
    var responsiveHeader = (0, _redom.el)("h2.".concat(_styles.CSS.SUB_HEADING), mobileText, desktopText);
    _this.closeBtn = (0, _redom.el)("button.".concat(_styles.CSS.BUTTON, ".").concat(_styles.CSS.BUTTON_CLOSE), {
      type: 'button',
      name: 'offers-modal-close'
    }, (0, _redom.text)('Close'));
    _this.exitBtn = (0, _redom.el)("button.".concat(_styles.CSS.MODAL_CLOSE), {
      type: 'button',
      name: 'exit'
    }, (0, _redom.el)('img', {
      src: _close["default"]
    }));
    /* Note: marketingBullets is temporary and will be replaced by planDetails after the plan
     * records are updated to contain the marketing bullets (planDetails) associated with the plan's
     * coverage type.
     */

    var desktopMarketingBullets = Object.values(modalCopy.marketing.desktop);
    var mobileMarketingBullets = Object.values(modalCopy.marketing.mobile);
    var desktopCoverageBullets = desktopMarketingBullets.map(function (detail) {
      return (0, _redom.el)("li.".concat(_styles2.LEARN_MORE_CSS.LIST_ITEM), (0, _redom.text)(detail));
    });
    var mobileCoverageBullets = mobileMarketingBullets.map(function (detail) {
      return (0, _redom.el)("li.".concat(_styles2.LEARN_MORE_CSS.LIST_ITEM), (0, _redom.text)(detail));
    });
    var contentLeft = (0, _redom.el)("div.".concat(_styles2.LEARN_MORE_CSS.CONTENT_CONTAINER), (0, _logoParts.modalLogos)(merchantLogo), responsiveHeader, (0, _redom.el)("div.".concat(_styles2.LEARN_MORE_CSS.COVERAGE_HEADER), (0, _redom.text)(TEXT.LIST_HEADER)), _redom.el.apply(void 0, ["ul.".concat(_styles2.LEARN_MORE_CSS.LIST, ".").concat(_styles.CSS.DESKTOP_TEXT)].concat(_toConsumableArray(desktopCoverageBullets))), _redom.el.apply(void 0, ["ul.".concat(_styles2.LEARN_MORE_CSS.LIST, ".").concat(_styles.CSS.MOBILE_TEXT)].concat(_toConsumableArray(mobileCoverageBullets))), (0, _redom.el)("a.".concat(_styles.CSS.LINK, ".").concat(_styles2.LEARN_MORE_CSS.TERMS_LINK), {
      target: '_blank',
      rel: 'noopener noreferrer',
      href: planUrl
    }, (0, _redom.text)('See plan details'), (0, _icons.icon)('linkOut', '#224bc5')), (0, _redom.el)("div.".concat(_styles2.LEARN_MORE_CSS.CHOOSE_HEADER), (0, _redom.text)(TEXT.FOOTER_HEADER)), (0, _redom.el)("div.".concat(_styles2.LEARN_MORE_CSS.FOOTER_CONTAINER), (0, _redom.el)("div.".concat(_styles2.LEARN_MORE_CSS.ICON_TEXT_CONTAINER), (0, _redom.el)("div.".concat(_styles2.LEARN_MORE_CSS.FOOTER_ICON), (0, _icons.icon)('friendlySupport')), (0, _redom.text)('Friendly support 24/7')), (0, _redom.el)("div.".concat(_styles2.LEARN_MORE_CSS.ICON_TEXT_CONTAINER), (0, _redom.el)("div.".concat(_styles2.LEARN_MORE_CSS.FOOTER_ICON), (0, _icons.icon)('noFees')), (0, _redom.text)('No fees. No deductibles.'))), _this.closeBtn);
    var shroud = (0, _redom.el)("div.".concat(_styles.CSS.SHROUD));
    _this.el = (0, _redom.el)(shroud, (0, _redom.el)("div.".concat(_styles.CSS.MODAL), _this.exitBtn, contentLeft, girlPackageImg));
    return _this;
  }

  _createClass(LearnMoreModalComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(LearnMoreModalComponent.prototype), "componentDidMount", this).call(this);

      (0, _dom.addStyle)(_styles.reset, this.el);
      (0, _dom.addStyle)((0, _styles.common)(_theme.DEFAULT_THEME), this.el);
      (0, _dom.addStyle)((0, _styles2.modalStyles)(), this.el);
      this.exitBtn.addEventListener('click', this.handleClickClose, false);
      this.closeBtn.addEventListener('click', this.handleClickClose, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.exitBtn.removeEventListener('click', this.handleClickClose, false);
      this.closeBtn.removeEventListener('click', this.handleClickClose, false);
    }
  }]);

  return LearnMoreModalComponent;
}(_componentBase.ComponentBase);

exports.LearnMoreModalComponent = LearnMoreModalComponent;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalStyles = modalStyles;
exports.LEARN_MORE_CSS = void 0;

var _styles = __webpack_require__(1);

var _girlPackage = _interopRequireDefault(__webpack_require__(48));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LEARN_MORE_CSS = {
  IMAGE_CONTAINER: 'image-container',
  CONTENT_CONTAINER: 'content-container',
  LOGO_CONTAINER: 'logo-container',
  LOGO: 'logo',
  HEADER_TEXT: 'header-text',
  COVERAGE_HEADER: 'coverage-header',
  CHOOSE_HEADER: 'choose-header',
  LIST: 'list',
  LIST_ITEM: 'list-item',
  TERMS_LINK: 'terms-link',
  FOOTER_CONTAINER: 'footer-container',
  ICON_TEXT_CONTAINER: 'icon-text-container',
  FOOTER_ICON: 'learn-more-footer-icon'
};
exports.LEARN_MORE_CSS = LEARN_MORE_CSS;

function modalStyles() {
  return "\n.".concat(_styles.CSS.SHROUD, " {\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.").concat(_styles.CSS.MODAL, " {\n  background: white;\n  border-radius: .4rem;\n  box-shadow: .0rem .0rem 1.6rem .0rem rgba(0, 0, 0, 0.5);\n  position: relative;\n  width: 79.4rem;\n  height: 52.5rem;\n  z-index: 2;\n  display: flex;\n  overflow: scroll;\n}\n.").concat(_styles.CSS.LOGO_CONTAINER, " {\n  display: flex;\n  align-items: center;\n  height: 5.0rem;\n}\n.").concat(_styles.CSS.PLUS, " {\n  height: 1.3rem;\n  margin: 0 1.3rem;\n}\n.").concat(_styles.CSS.LOGO, " {\n  height: 5.0rem;\n}\n.").concat(_styles.CSS.EXTEND_LOGO, " {\n  min-height: 3.0rem;\n  margin-bottom: 0.8rem;\n}\n.").concat(_styles.CSS.MERCHANT_LOGO, " {\n  max-height: 5.0rem;\n  max-width: 17.0rem;\n}\n.").concat(LEARN_MORE_CSS.CONTENT_CONTAINER, " {\n  width: 62.46%;\n  padding: 4.8rem 5.6rem 4.8rem 4.0rem;\n  text-align: left;\n}\n.").concat(LEARN_MORE_CSS.HEADER_TEXT, " {\n  text-align: left;\n  font-size: 2.0rem;\n  font-weight: normal;\n  letter-spacing: .0rem;\n  line-height: 2.8rem;\n  margin: 1.6rem 0;\n}\n.").concat(_styles.CSS.SUB_HEADING, " {\n  font-size: 2.0rem;\n  line-height: 2.4rem;\n  font-weight: normal;\n}\n.").concat(_styles.CSS.MOBILE_TEXT, " {\n  display: none;\n}\n.").concat(LEARN_MORE_CSS.COVERAGE_HEADER, " {\n  text-align: left;\n  font-size: 1.6rem;\n  font-weight: bold;\n  height: 2.rem;\n}\n.").concat(LEARN_MORE_CSS.LIST, " {\n  padding-left: 1.7rem;\n  margin: 0 0 1.6rem;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.").concat(LEARN_MORE_CSS.LIST_ITEM, " {\n  font-size: 1.4rem;\n  font-weight: normal;\n  height: 2.0rem;\n  text-align: left;\n  margin: 0.8rem 0;\n}\n.").concat(LEARN_MORE_CSS.TERMS_LINK, " {\n  color: #224bc5;\n  font-size: 1.4rem;\n  font-weight: normal;\n  height: 2.0rem;\n  text-decoration: none;\n}\n.").concat(LEARN_MORE_CSS.TERMS_LINK, ":hover {\n  text-decoration: underline;\n}\n.").concat(_styles.CSS.LINK_OUT, " {\n  margin-left: 0.4rem;\n}\n.").concat(LEARN_MORE_CSS.CHOOSE_HEADER, " {\n  text-align: left;\n  font-size: 1.6rem;\n  font-weight: bold;\n  margin-top: 2.4rem;\n  border-top: .1rem solid rgb(237, 237, 237);\n  padding-top: 2.4rem;\n}\n.").concat(LEARN_MORE_CSS.FOOTER_CONTAINER, " {\n  display: flex;\n  align-items: center;\n}\n.").concat(LEARN_MORE_CSS.ICON_TEXT_CONTAINER, " {\n  display: flex;\n  width: 50%;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 1.6rem;\n  margin-top: 1.6rem;\n}\n.").concat(LEARN_MORE_CSS.FOOTER_ICON, " {\n  margin-right: 1.2rem;\n}\n.").concat(LEARN_MORE_CSS.IMAGE_CONTAINER, " {\n  background: url(").concat(_girlPackage["default"], ") no-repeat center;\n  background-size: cover;\n  width: 38.54%\n}\n.").concat(_styles.CSS.MODAL_CLOSE, " {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  position: absolute;\n  padding: 0.4rem;\n  right: 2.4rem;\n  top: 2.4rem;\n  cursor: pointer;\n}\n.").concat(_styles.CSS.MODAL_CLOSE, ":hover {\n  opacity: 0.5;\n}\n.").concat(_styles.CSS.BUTTON_CLOSE, " {\n  display: none;\n  background-color: #27aee4;\n  border: none;\n  box-shadow: none;\n  height: 4.0rem;\n  width: 100%;\n  color: white;\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin: 4.6rem 0 4.0rem;\n  padding: 0;\n}\n\n@media (max-width: 768px) {\n  .").concat(_styles.CSS.MODAL, " {\n    max-width: 67.1rem;\n  }\n  .").concat(LEARN_MORE_CSS.CONTENT_CONTAINER, " {\n    width: 59.42%;\n    padding: 4.0rem 2.5rem 4.0rem 4.0rem;\n  }\n  .").concat(LEARN_MORE_CSS.IMAGE_CONTAINER, " {\n    width: 41.58%;\n  }\n  .").concat(LEARN_MORE_CSS.HEADER_TEXT, " {\n    font-size: 1.8rem;\n    line-height: 2.4rem;\n  }\n .").concat(LEARN_MORE_CSS.FOOTER_CONTAINER, " {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .").concat(LEARN_MORE_CSS.ICON_TEXT_CONTAINER, " {\n    width: 100%;\n  }\n  .").concat(LEARN_MORE_CSS.CHOOSE_HEADER, " {\n    margin-top: 2.4rem;\n    padding-top: 2.4rem;\n  }\n  .").concat(LEARN_MORE_CSS.LIST, " {\n    margin: 0 0 0.8rem;\n    width: 100%;\n  }\n  .").concat(_styles.CSS.MOBILE_TEXT, " {\n    display: block;\n  }\n  .").concat(_styles.CSS.DESKTOP_TEXT, " {\n    display: none;\n  }\n  .").concat(_styles.CSS.SUB_HEADING, " {\n    font-size: 1.8rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .").concat(_styles.CSS.MODAL, " {\n    width: 100%;\n    height: 100%;\n    padding: 6.4rem 2.4rem 4.0rem;\n    border-radius: 0;\n  }\n  .").concat(LEARN_MORE_CSS.CONTENT_CONTAINER, " {\n    width: 100%;\n    padding: 0;\n  }\n  .").concat(LEARN_MORE_CSS.IMAGE_CONTAINER, " {\n    display: none;\n  }\n  .").concat(LEARN_MORE_CSS.LIST, " {\n    padding-left: 1.7rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 100%;\n  }\n  .").concat(_styles.CSS.BUTTON_CLOSE, " {\n    display: block;\n  }\n}\n");
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAyAAD/4QOMaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZmQwYjFjMGQtMTUwNC00NmVjLTgwYzktN2MxNDJhMDY5MjcwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMEI4NDA0NjE4ODExRUFCM0E1QjJFRkUxNTQyQUNGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlGMEI4NDAzNjE4ODExRUFCM0E1QjJFRkUxNTQyQUNGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MmVjMTNlZTAtM2M5YS00YTNjLWI0Y2QtZDg5MDEzOTM0NzdkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YWMwYzUyMzUtMzExOS1jNTQzLThmMDAtODIwNDU0NzcwMGFjIi8+IDwvcmRm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");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgc3Ryb2tlPSIjMDkwNjM3IiBzdHJva2Utd2lkdGg9IjEuOTU5IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICA8cGF0aCBkPSJNNy4yMDQgMS4zMjd2MTEuMTAxTTEuNjU0IDYuODc3aDExLjEiLz4KICA8L2c+Cjwvc3ZnPgo=");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGQ9Ik0xLjMzOSAzLjAzM0M2Ljc1OSAxLjYxOCAxMC43OTMuNjk0IDEzLjQ2My4yNmMxLjc5Ni0uMjkyIDMuMjUyLS4wNCA0Ljk1LjY5NS4yODcuMTI0LjU3LjI1Ni45NTcuNDQybC40NjIuMjI0Yy4xODMuMDg5LjMyMy4xNTYuNDYuMjIgMi4wMzcuOTYxIDMuNjM1IDEuMzg5IDYuMDIyIDEuMzk0IDIuNDA3LjAwNSA0LjE4My0uNDI2IDYuNjE5LTEuNDA2LjIxOC0uMDg4IDEuMi0uNDkyIDEuNDY1LS41OTguNTgtLjIzMiAxLjA0Ny0uNDA0IDEuNTEtLjU1IDEuNTMtLjQ4IDIuOTAzLS42MjIgNC4zOTUtLjM2IDIuNDc5LjQzMyA2LjE0MyAxLjM0IDExLjAxNiAyLjcybDEuMTQ5LjMyNy4wMDcgMS4xOTRjLjA2MyAxMC4xMzktMS44ODQgMTkuMTYtNS44NDkgMjcuMDQ1LTMuOTU4IDcuODctMTAuMjIxIDE1LjE5My0xOC43NzIgMjEuOTcxbC0uOTY0Ljc2NC0uOTgxLS43NGMtOS4wNTQtNi44MjYtMTUuNjQ4LTE0LjE0Ni0xOS43NjQtMjEuOTdDMi4wMiAyMy43OS4wMjQgMTQuNzU1LjE1IDQuNTUzTC4xNjUgMy4zNGwxLjE3NC0uMzA3eiIgZmlsbD0iIzA5MDYzNyIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgICA8cGF0aCBkPSJNOC45NiAzMC4xNTJjMy43MzMgNy4wOTcgOS42ODggMTMuODIgMTcuODgxIDIwLjE2IDcuNzEyLTYuMjg0IDEzLjM1NC0xMi45OTcgMTYuOTQ0LTIwLjEzNCAzLjU3Ni03LjExIDUuNDE0LTE1LjIzOCA1LjUwOC0yNC40MDItNC4yLTEuMTctNy4zODQtMS45NDYtOS41MzgtMi4zMjMtLjk0Ny0uMTY1LTEuODE4LS4wNzYtMi44OTMuMjYyLS4zNzMuMTE4LS43NzEuMjY0LTEuMjgyLjQ2OS0uMjQ4LjA5OS0xLjIyNS41LTEuNDYuNTk1LTIuNzgzIDEuMTItNC45MzUgMS42NDItNy44MTMgMS42MzYtMi45MDMtLjAwNi00Ljk0My0uNTUyLTcuMzcxLTEuNjk3LS4xNDktLjA3LS4yOTgtLjE0MS0uNDg5LS4yMzRsLS40NTgtLjIyMmMtLjM1MS0uMTY5LS42LS4yODUtLjgzOS0uMzg4LTEuMTc5LS41MS0yLjA0LS42Ni0zLjE3Ny0uNDc1LTIuMzU2LjM4NC01LjkxIDEuMTg2LTEwLjY0NyAyLjQwNS4wNDUgOS4xOSAxLjkyNiAxNy4zIDUuNjM0IDI0LjM0OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPHBhdGggZD0iTTM3LjgzIDMxLjgwNGgtNy4xN3MtNC4zMDgtNS4xMDQtNC41NC01LjQxYy0xLjA2OCAxLjQxOC00LjMxMiA1LjQxLTQuMzEyIDUuNDFoLTcuMDYybDcuODUtOS40NjgtNy40OS04LjczM2g3LjEzbDE1LjU5MyAxOC4yMDF6IiBmaWxsPSIjMDkwNjM3Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjdBRUU0IiBkPSJNMjcuMiAxNy4yNmwyLjg1NC0zLjY2NWg2LjkzN2wtNi4zMSA3LjczOXoiLz4KICA8L2c+Cjwvc3ZnPgo=");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleOfferContainer = void 0;

var _redom = __webpack_require__(0);

var _simpleOffer = __webpack_require__(52);

var _util = __webpack_require__(9);

var _offerContainerBase = __webpack_require__(15);

var _offersModal = __webpack_require__(24);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SimpleOfferContainer =
/*#__PURE__*/
function (_OfferContainerBase) {
  _inherits(SimpleOfferContainer, _OfferContainerBase);

  function SimpleOfferContainer(props) {
    var _this;

    _classCallCheck(this, SimpleOfferContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleOfferContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "uid", (0, _util.shortUid)());

    _defineProperty(_assertThisInitialized(_this), "handleOfferClick", function (referenceId) {
      var _ref = _this.props,
          onAddToCart = _ref.onAddToCart; // TODO: remove as

      _offersModal.offersModal.open({
        referenceId: referenceId,
        onClose: function onClose(plan, product) {
          if (!(plan && product && onAddToCart)) return;
          onAddToCart({
            plan: plan,
            product: product
          });
        }
      });
    });

    _this.el = (0, _redom.el)("div#extend-simple-offer-".concat(_this.uid, ".extend-simple-offer.ex-clearfix"), {
      style: {
        clear: 'both',
        position: 'relative',
        display: 'none',
        width: '100%'
      }
    });
    return _this;
  }

  _createClass(SimpleOfferContainer, [{
    key: "buildComponent",
    value: function buildComponent(offer) {
      return new _simpleOffer.SimpleOffersComponent({
        theme: this.theme,
        plans: offer.plans,
        referenceId: this.referenceId,
        onClick: this.handleOfferClick
      });
    }
  }]);

  return SimpleOfferContainer;
}(_offerContainerBase.OfferContainerBase);

exports.SimpleOfferContainer = SimpleOfferContainer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SimpleOffersComponent", {
  enumerable: true,
  get: function get() {
    return _simpleOffer.SimpleOffersComponent;
  }
});

var _simpleOffer = __webpack_require__(53);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleOffersComponent = void 0;

var _redom = __webpack_require__(0);

var _dom = __webpack_require__(2);

var _styles = __webpack_require__(1);

var _styles2 = __webpack_require__(54);

var _offerComponentBase = __webpack_require__(14);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SimpleOffersComponent =
/*#__PURE__*/
function (_OfferComponentBase) {
  _inherits(SimpleOffersComponent, _OfferComponentBase);

  function SimpleOffersComponent(props) {
    var _this;

    _classCallCheck(this, SimpleOffersComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleOffersComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", void 0);

    _defineProperty(_assertThisInitialized(_this), "plans", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          onClick = _assertThisInitialize.onClick,
          referenceId = _assertThisInitialize.referenceId;

      if (!referenceId) return;
      onClick(referenceId);
    });

    _this.onClick = props.onClick;
    var lowestPricePlan = (props.plans[0].price / 100).toFixed(2);
    var buttonText = "Add product protection for $".concat(lowestPricePlan);

    if (props.plans[0].contract.coverageIncludes === 'adh') {
      buttonText = "Add accident protection for $".concat(lowestPricePlan);
    }

    _this.el = (0, _redom.h)("button.".concat(_styles.CSS.BUTTON, ".").concat(_styles.CSS.SIMPLE_OFFER), {
      type: 'button',
      textContent: buttonText
    });
    return _this;
  }

  _createClass(SimpleOffersComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(SimpleOffersComponent.prototype), "componentDidMount", this).call(this);

      (0, _dom.addStyle)((0, _styles2.simpleOfferStyles)(this.theme), this.el);
      this.el.addEventListener('click', this.handleClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.el.removeEventListener('click', this.handleClick, false);
    }
  }]);

  return SimpleOffersComponent;
}(_offerComponentBase.OfferComponentBase);

exports.SimpleOffersComponent = SimpleOffersComponent;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleOfferStyles = simpleOfferStyles;

var _styles = __webpack_require__(1);

function simpleOfferStyles(theme) {
  var primaryColor = theme.primaryColor;
  return "\n/* component styles */\n  .".concat(_styles.CSS.SIMPLE_OFFER, " {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border: 1px solid ").concat(primaryColor, ";\n    color: ").concat(primaryColor, ";\n    font-size: 11px;\n    // border-radius: 2px;\n    font-weight: bold;\n  }\n  \n  .").concat(_styles.CSS.SIMPLE_OFFER, ":hover {\n    background-color: ").concat(primaryColor, ";\n    color: #fff;\n    border: 1px solid transparent;\n  }\n\n  .").concat(_styles.CSS.SIMPLE_OFFER, ":active {\n    background-color: ").concat(primaryColor, ";\n    color: #fff;\n  }");
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OffersModalComponent = void 0;

var _redom = __webpack_require__(0);

var _dom = __webpack_require__(2);

var _icons = __webpack_require__(11);

var _styles = __webpack_require__(1);

var _offerButtonGroup = __webpack_require__(19);

var _styles2 = __webpack_require__(56);

var _offerComponentBase = __webpack_require__(14);

var _close = _interopRequireDefault(__webpack_require__(17));

var _benefitsFast = _interopRequireDefault(__webpack_require__(57));

var _benefitsOnline = _interopRequireDefault(__webpack_require__(58));

var _benefitsSupport = _interopRequireDefault(__webpack_require__(59));

var _benefitsAccident = _interopRequireDefault(__webpack_require__(60));

var _logoParts = __webpack_require__(18);

var _format = __webpack_require__(12);

var _copyText = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OffersModalComponent =
/*#__PURE__*/
function (_OfferComponentBase) {
  _inherits(OffersModalComponent, _OfferComponentBase);

  function OffersModalComponent(props) {
    var _this;

    _classCallCheck(this, OffersModalComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OffersModalComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "planDetailsLink", void 0);

    _defineProperty(_assertThisInitialized(_this), "submitBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "closeBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "declineBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "buttonGroup", void 0);

    _defineProperty(_assertThisInitialized(_this), "productSection", void 0);

    _defineProperty(_assertThisInitialized(_this), "offersSection", void 0);

    _defineProperty(_assertThisInitialized(_this), "productImage", void 0);

    _defineProperty(_assertThisInitialized(_this), "onSelectionChange", function (plan) {
      _this.setInfoLinkUrl(plan && plan.url);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickClose", function () {
      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickSubmit", function () {
      _this.props.onAddToCart(_this.buttonGroup.getSelectedPlan());
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickDecline", function () {
      _this.props.onDecline();
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageError", function () {
      _this.productImage.style.display = 'none';
    });

    var _props$marketing = props.marketing,
        marketing = _props$marketing === void 0 ? {} : _props$marketing,
        lead = props.lead;
    var defaultPlanId = props.plans[Math.ceil((props.plans.length - 1) / 2)].id;
    var coverageType = _this.props.plans[0].contract.coverageIncludes;
    var modalCopy = lead ? _copyText.OFFERS_MODAL_COPY.lead : _copyText.OFFERS_MODAL_COPY[coverageType];
    var mobileText = (0, _redom.el)("span.".concat(_styles.CSS.SUB_HEADING_TEXT, ".").concat(_styles.CSS.MOBILE_TEXT), (0, _redom.text)(modalCopy.header.mobile));
    var desktopText = (0, _redom.el)("span.".concat(_styles.CSS.SUB_HEADING_TEXT, ".").concat(_styles.CSS.DESKTOP_TEXT), (0, _redom.text)(modalCopy.header.desktop));
    var responsiveHeader = (0, _redom.el)("h2.".concat(_styles.CSS.SUB_HEADING), mobileText, desktopText);
    _this.buttonGroup = new _offerButtonGroup.OfferButtonGroup({
      plans: props.plans,
      onSelectionChange: _this.onSelectionChange,
      defaultPlanId: defaultPlanId,
      theme: props.theme,
      offerType: 'modal'
    });
    _this.planDetailsLink = (0, _redom.el)("a.".concat(lead ? _styles2.MODAL_CSS.PRODUCT_LINK : _styles.CSS.LINK), {
      target: '_blank',
      rel: 'noopener noreferrer'
    }, (0, _redom.text)(
    /* marketing.linkText || */
    modalCopy.marketing.linkText), (0, _icons.icon)('linkOut', '#6d7278'));
    _this.closeBtn = (0, _redom.el)("button.".concat(_styles.CSS.MODAL_CLOSE), {
      type: 'button',
      name: 'close'
    }, (0, _redom.el)('img', {
      src: _close["default"]
    }));

    if (lead) {
      _this.productImage = (0, _redom.el)("img.".concat(_styles2.MODAL_CSS.PRODUCT_IMAGE), {
        src: lead.product.imageUrl
      });
      _this.productSection = (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.OFFERS_PRODUCT_CONTAINER), _this.closeBtn, (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.PRODUCT_INFO_CONTAINER), lead.product.imageUrl ? _this.productImage : '', (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.PRODUCT_TEXT_SECTION), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.PRODUCT_HEADER), (0, _redom.text)('Protecting your:')), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.PRODUCT_INFO), (0, _redom.text)(lead.product.title)), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.PRODUCT_HEADER), (0, _redom.text)('Date of purchase:')), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.PRODUCT_INFO), (0, _redom.text)((0, _format.formatDate)(lead.product.transactionDate))), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.PRODUCT_HEADER), (0, _redom.text)('Product Value:')), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.PRODUCT_INFO), (0, _redom.text)(lead.product.listPrice.formattedAmount)), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.PRODUCT_HEADER), (0, _redom.text)('Quantity purchased:')), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.PRODUCT_INFO), (0, _redom.text)(String(lead.quantity))))));
    }

    _this.offersSection = (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.OFFERS_CONTAINER), (0, _logoParts.modalLogos)(marketing.merchantLogo), responsiveHeader, lead ? _this.planDetailsLink : '', _this.buttonGroup, (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.MARKETING_CONTAINER), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.MARKETING_ITEM), (0, _redom.el)("img.".concat(_styles2.MODAL_CSS.MARKETING_ICON), {
      src: _benefitsFast["default"]
    }), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.MARKETING_TEXT), (0, _redom.text)(
    /* marketing.bullet1 || */
    modalCopy.marketing.bullet1))), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.MARKETING_ITEM), (0, _redom.el)("img.".concat(_styles2.MODAL_CSS.MARKETING_ICON), {
      src: _benefitsOnline["default"]
    }), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.MARKETING_TEXT), (0, _redom.text)(
    /* marketing.bullet2 || */
    modalCopy.marketing.bullet2))), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.MARKETING_ITEM), (0, _redom.el)("img.".concat(_styles2.MODAL_CSS.MARKETING_ICON), {
      src: coverageType === 'base' ? _benefitsSupport["default"] : _benefitsAccident["default"]
    }), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.MARKETING_TEXT), (0, _redom.text)(
    /* marketing.bullet3 || */
    modalCopy.marketing.bullet3)))), _this.submitBtn = (0, _redom.el)("button.".concat(_styles.CSS.BUTTON, ".").concat(_styles.CSS.BUTTON_SUBMIT), {
      type: 'submit'
    }, (0, _redom.text)(
    /* marketing.buyText || */
    modalCopy.marketing.buyText)), _this.declineBtn = (0, _redom.el)("button.".concat(_styles.CSS.BUTTON_LINK, ".").concat(lead ? " ".concat(_styles2.MODAL_CSS.DECLINE_LINK) : ''), {
      type: 'button',
      name: 'decline'
    }, (0, _redom.text)(
    /* marketing.declineText || */
    modalCopy.marketing.declineText)), lead ? '' : _this.planDetailsLink);
    _this.el = (0, _redom.el)("div.".concat(_styles.CSS.SHROUD), (0, _redom.el)("div.".concat(_styles.CSS.MODAL).concat(lead ? ".".concat(_styles2.MODAL_CSS.MODAL_W_PRODUCT) : ''), lead ? '' : _this.closeBtn, _this.offersSection, lead ? _this.productSection : '')); // set default link url

    _this.setInfoLinkUrl();

    return _this;
  }

  _createClass(OffersModalComponent, [{
    key: "getSelectedPlan",
    value: function getSelectedPlan() {
      return this.buttonGroup.getSelectedPlan();
    }
  }, {
    key: "setInfoLinkUrl",
    value: function setInfoLinkUrl(url) {
      this.planDetailsLink.setAttribute('href', url || this.plans[0].url);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(OffersModalComponent.prototype), "componentDidMount", this).call(this);

      var theme = this.props.theme; // styles

      (0, _dom.addStyle)((0, _styles2.modalStyles)(theme), this.el); //

      this.closeBtn.addEventListener('click', this.handleClickClose, false);
      this.submitBtn.addEventListener('click', this.handleClickSubmit, false);
      this.declineBtn.addEventListener('click', this.handleClickDecline, false);

      if (this.productImage) {
        this.productImage.addEventListener('error', this.handleImageError, false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.closeBtn.removeEventListener('click', this.handleClickClose, false);
      this.submitBtn.removeEventListener('click', this.handleClickSubmit, false);
      this.declineBtn.removeEventListener('click', this.handleClickDecline, false);

      if (this.productImage) {
        this.productImage.removeEventListener('error', this.handleImageError, false);
      }
    }
  }]);

  return OffersModalComponent;
}(_offerComponentBase.OfferComponentBase);

exports.OffersModalComponent = OffersModalComponent;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalStyles = modalStyles;
exports.MODAL_CSS = void 0;

var _styles = __webpack_require__(1);

var MODAL_CSS = {
  MARKETING_CONTAINER: 'marketing-container',
  MARKETING_ITEM: 'marketing-item',
  MARKETING_ICON: 'marketing-icon',
  MARKETING_TEXT: 'marketing-text',
  OFFERS_PRODUCT_CONTAINER: 'offers-product-container',
  PRODUCT_INFO_CONTAINER: 'product-info-container',
  PRODUCT_HEADER: 'product-header',
  PRODUCT_INFO: 'product-info',
  PRODUCT_IMAGE: 'product-image',
  PRODUCT_IMAGE_CONTAINER: 'product-image-container',
  PRODUCT_TEXT_SECTION: 'product-text-section',
  MODAL_W_PRODUCT: 'modal-product',
  DECLINE_LINK: 'decline-link',
  PRODUCT_LINK: 'product-link',
  OFFERS_CONTAINER: 'offers-container'
};
exports.MODAL_CSS = MODAL_CSS;

function modalStyles(theme) {
  var primaryColor = theme.primaryColor;
  return "\n.".concat(_styles.CSS.SHROUD, " {\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.").concat(_styles.CSS.MODAL, " {\n  display: flex;\n  flex-direction: row;\n  border-radius: 4px;\n  box-shadow: 0 0.3rem 0.9rem 0 rgba(79, 79, 79, 0.50);\n  position: relative;\n  width: 63.0rem;\n  z-index: 2;\n}\n\n.").concat(_styles.CSS.HIDDEN, " {\n  display: none;\n}\n.").concat(MODAL_CSS.MODAL_W_PRODUCT, " {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  width: 83.0rem\n}\n.").concat(MODAL_CSS.OFFERS_CONTAINER, " {\n  padding: 6.4rem 5.6rem 7.2rem;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: white;\n}\n.").concat(_styles.CSS.LOGO_CONTAINER, " {\n  display: flex;\n  align-items: center;\n  height: 6.0rem;\n}\n.").concat(_styles.CSS.PLUS, " {\n  height: 1.7rem;\n  margin: 0 1.3rem;\n}\n.").concat(_styles.CSS.LOGO, " {\n  height: 6.0rem;\n}\n.").concat(_styles.CSS.EXTEND_LOGO, " {\n  margin-right: auto;\n  height: 2.8rem;\n  align-self: flex-start;\n}\n.").concat(_styles.CSS.MERCHANT_LOGO, " {\n  max-height: 6.0rem;\n  max-width: 17.5rem;\n}\n.").concat(_styles.CSS.SUB_HEADING, " {\n  text-align: left;\n  font-size: 2.8rem;\n  font-weight: bold;\n  margin: 3.2rem 0 2.6rem 0;\n  line-height: 3.5rem;\n}\n.").concat(_styles.CSS.SUB_HEADING_TEXT, " {\n  color: #090637;\n}\n.").concat(_styles.CSS.MOBILE_TEXT, " {\n  display: none;\n}\n.").concat(MODAL_CSS.MARKETING_CONTAINER, " {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 1.8rem;\n  margin: 3.0rem 0 3.2rem;\n}\n.").concat(MODAL_CSS.MARKETING_ITEM, " {\n  display: flex;\n  align-items: center;\n}\n.").concat(MODAL_CSS.MARKETING_ICON, " {\n  padding-right: 10px;\n}\n.").concat(MODAL_CSS.MARKETING_TEXT, " {\n  color: #152935;\n}\n.").concat(_styles.CSS.BUTTON_OFFER, " {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  padding: 1.6rem 1.6rem;\n  flex: 0 1 32%;\n  height: 11.2rem;\n  width: 16.2rem;\n  margin: 1.0rem 0.8rem 0;\n  overflow: hidden;\n  color: #090637;\n}\n.").concat(_styles.CSS.BUTTON_CONTENT, " {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: flex-start;\n  height: 100%;\n  flex-grow: 1;\n}\n.").concat(_styles.CSS.BANNER_SVG, " {\n  position: absolute;\n  top: -0.3rem;\n  right: -0.3rem;\n  width: 6.7rem;\n  height: 6.5rem;\n  font-size: 1.0rem;\n  font-weight: bold;\n}\n.").concat(_styles.CSS.BUTTON_OFFER, ".").concat(_styles.CSS.ACTIVE, " .").concat(_styles.CSS.SVG_DEACTIVE, ",\n.").concat(_styles.CSS.BUTTON_OFFER, ":hover .").concat(_styles.CSS.SVG_DEACTIVE, " {\n  display: none;\n}\n.").concat(_styles.CSS.BUTTON_OFFER, ".").concat(_styles.CSS.ACTIVE, " .").concat(_styles.CSS.SVG_ACTIVE, ",\n.").concat(_styles.CSS.BUTTON_OFFER, ":hover .").concat(_styles.CSS.SVG_ACTIVE, " {\n  display: block;\n}\n").concat(_styles.CSS.SVG_ACTIVE, " {\n  display: none;\n}\n").concat(_styles.CSS.SVG_DEACTIVE, " {\n  display: block;\n}\n.").concat(_styles.CSS.BUTTON_OFFER, ".").concat(_styles.CSS.ACTIVE, ",\n.").concat(_styles.CSS.BUTTON_OFFER, ":hover {\n  height: 14.4rem;\n  margin-top: 0;\n  padding-bottom: 2.0rem;\n}\n.").concat(_styles.CSS.BUTTON_GROUP, " {\n  display: flex;\n  justify-content: center;\n  min-height: 14.4rem;\n}\n.").concat(_styles.CSS.LINK, " {\n  color: #6d7278;\n  position: absolute;\n  right: 1.6rem;\n  bottom: 1.6rem;\n}\n.").concat(_styles.CSS.LINK, ":hover {\n  color: #000000;\n}\n.").concat(_styles.CSS.LINK, ":hover .").concat(_styles.CSS.LINK_OUT_CONTENT, " {\n  fill:  #000000;\n}\n.").concat(MODAL_CSS.PRODUCT_LINK, " {\n  color: #6d7278;\n  padding-bottom: 16px;\n}\n\n.").concat(_styles.CSS.LINK_OUT, " {\n  margin-left: 0.4rem;\n}\n.").concat(MODAL_CSS.DECLINE_LINK, " {\n  display: none;\n}\n.").concat(_styles.CSS.BUTTON_SUBMIT, " {\n  background: ").concat(primaryColor, ";\n  border-color: ").concat(primaryColor, ";\n  color: white;\n  display: block;\n  font-size: 2rem;\n  line-height: 4rem;\n  margin-bottom: .5rem;\n  margin: 0 auto;\n  transition: 250ms opacity;\n  width: 100%;\n  height: 5.8rem;\n  line-height: 100%;\n  font-weight: bold;\n}\n.").concat(_styles.CSS.BUTTON_SUBMIT, ":hover {\n  opacity: 0.7;\n}\n.").concat(_styles.CSS.BUTTON_LINK, " {\n  border: none;\n  cursor: pointer;\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n  margin-top: 0.8rem;\n  background-color: transparent;\n  color: #6d7278;\n  outline: none;\n  height: 7.0rem;\n}\n.").concat(_styles.CSS.BUTTON_LINK, ":hover {\n  text-decoration: underline;\n  color: #000000;\n}\n.").concat(_styles.CSS.DIVIDER, ",\n.").concat(_styles.CSS.TERM_LENGTH, " {\n  font-size: 1.6rem;\n  white-space: nowrap;\n}\n.").concat(_styles.CSS.TERM_LENGTH, " {\n  font-weight: bold;\n}\n.").concat(_styles.CSS.PLAN_PRICE, " {\n  font-size: 2.0rem;\n  line-height: 2.0rem;\n  font-weight: bold;\n  position: absolute;\n  bottom: 0rem;\n  left: 0;\n}\n.").concat(_styles.CSS.MODAL_CLOSE, " {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  position: absolute;\n  padding: 0.4rem;\n  right: 2rem;\n  top: 2rem;\n  cursor: pointer;\n}\n.").concat(_styles.CSS.MODAL_CLOSE, ":hover {\n  opacity: 0.5;\n}\n\n.").concat(MODAL_CSS.OFFERS_PRODUCT_CONTAINER, " {\n  background: #F4F4F4;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  position: relative;\n  flex: 0 0 216px;\n  z-index: 2;\n}\n\n.").concat(MODAL_CSS.PRODUCT_INFO_CONTAINER, " {\n  padding-left: 24px;\n  padding-top: 13.2rem;\n  text-align: left; \n}\n\n.").concat(MODAL_CSS.PRODUCT_HEADER, " {\n  font-size: 11px;\n  font-weight: bold;\n  height: 16px;\n}\n\n.").concat(MODAL_CSS.PRODUCT_INFO, " {\n  margin-right: 16px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  font-weight: normal;\n  max-height: 36px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2; \n  -webkit-box-orient: vertical;\n}\n\n.").concat(MODAL_CSS.PRODUCT_IMAGE, " {\n  margin-bottom: 24px;\n  mix-blend-mode: multiply;\n  max-height: 100px;\n  max-width: 100px; \n}\n\n@media (max-width: 425px) {\n  .").concat(_styles.CSS.SHROUD, " {\n    overflow: auto;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .").concat(_styles.CSS.BANNER_SVG, " {\n    top: -0.5rem;\n    right: -0.5rem;\n  }\n  .").concat(_styles.CSS.MODAL, " {\n    font-size: 1.4rem;\n    width: calc(100% - 3.2rem);\n    margin: 1.8rem 1.6rem 1.6rem;\n    flex-direction: column;\n  }\n  .").concat(MODAL_CSS.MODAL_W_PRODUCT, " {\n    width: 100%;\n    height: 100%;\n    min-height: 55rem;\n    margin: 0;\n    border-radius: 0px;\n    margin-bottom: 0;\n  }\n  .").concat(MODAL_CSS.OFFERS_CONTAINER, " {\n    flex-grow: 0;\n    padding: 4.8rem 2.4rem 5.5rem;\n  }\n  .").concat(MODAL_CSS.OFFERS_PRODUCT_CONTAINER, " {\n    flex-grow: 1;\n    padding-top: 10px;\n  }\n  .").concat(_styles.CSS.MODAL_CLOSE, " {\n    right: 1rem;\n    top: 1rem;\n  }\n  .").concat(_styles.CSS.SUB_HEADING, " {\n    font-size: 2.2rem;\n    margin: 2.4rem 0;\n    line-height: 3rem;\n    color: #090637;\n  }\n  .").concat(_styles.CSS.SUB_HEADING_TEXT, " {\n    font-size: 2.6rem;\n  }\n  .").concat(_styles.CSS.MOBILE_TEXT, " {\n    display: block;\n  }\n  .").concat(_styles.CSS.DESKTOP_TEXT, " {\n    display: none;\n  }\n  .").concat(MODAL_CSS.MARKETING_CONTAINER, " {\n    height: 5.2rem;\n    justify-content: center;\n    margin-top: 0.8rem;\n    margin-bottom: 1.6rem;\n  }\n  .").concat(MODAL_CSS.MARKETING_ITEM, " {\n    height: 1.7rem;\n    margin-top: 0.8rem;\n  }\n  .").concat(MODAL_CSS.MARKETING_ICON, " {\n    max-height: 100%;\n    padding-right: 0.5rem;\n  }\n  .").concat(MODAL_CSS.MARKETING_TEXT, " {\n    font-size: 1.25rem;\n    padding-right: 1.6rem;\n  }\n  .").concat(_styles.CSS.BUTTON_GROUP, " {\n    min-height: 10.1rem;\n    width: calc(100% + 1.6rem);\n    align-self: center;\n  }\n  .").concat(_styles.CSS.DIVIDER, " {\n    display: none;\n  }\n  .").concat(_styles.CSS.TERM_LENGTH, " {\n    font-size: 1.3rem;\n  }\n  .").concat(_styles.CSS.BUTTON_OFFER, ",\n  .").concat(_styles.CSS.BUTTON_OFFER, ":hover {\n    height: 8.5rem;\n    width: 9.8rem;\n    margin: 0.8rem 0.4rem 0;\n    padding: 1.6rem;\n  }\n  .").concat(_styles.CSS.BUTTON_OFFER, ".").concat(_styles.CSS.ACTIVE, " {\n    height: 10.1rem;\n    margin-top: 0;\n    padding: 2.4rem 1.6rem 2.0rem;\n  }\n  .").concat(_styles.CSS.PLAN_PRICE, " {\n    font-size: 2.0rem;\n  }\n  .").concat(_styles.CSS.LINK, " {\n    font-size: 1.2rem;\n    max-height: 1.6rem;\n  }\n  .").concat(_styles.CSS.BUTTON_SUBMIT, " {\n    width: calc(100% - 1.6rem);\n    height: 5.6rem;\n    font-size: 1.8rem;\n  }\n  .").concat(_styles.CSS.BUTTON_LINK, " {\n    font-size: 1.6rem;\n    line-height: 2.2rem;\n    margin: 0;\n    padding: 0;\n  }\n  .").concat(MODAL_CSS.OFFERS_PRODUCT_CONTAINER, " {\n    width: 100%;\n    position: static;\n    border-radius: 0px;\n  }\n  .").concat(MODAL_CSS.PRODUCT_INFO_CONTAINER, " {\n    padding-left: 8px;\n    padding-top: 8px;\n    padding-bottom: 16px;\n    display: flex;\n    flex-direction: row;\n  } \n  .").concat(MODAL_CSS.PRODUCT_TEXT_SECTION, " {\n    width: 60%;\n    padding-left: 16px;\n  }\n  .").concat(MODAL_CSS.PRODUCT_IMAGE, " {\n    padding-left: 16px;\n  }\n}\n");
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik0uNTg4IDIuNEEuNTk0LjU5NCAwIDAxMCAxLjhjMC0uMzMxLjI2My0uNi41ODgtLjZoNS4yOTVjLjMyNSAwIC41ODkuMjY5LjU4OS42IDAgLjMzLS4yNjQuNi0uNTg5LjZILjU4OHptMi4zNTMgOC40YS41OTUuNTk1IDAgMDEtLjU4OC0uNmMwLS4zMy4yNjMtLjYuNTg4LS42aDIuOTQyYy4zMjUgMCAuNTg5LjI3LjU4OS42IDAgLjMzMS0uMjY0LjYtLjU4OS42SDIuOTQxek0xLjc2NSA2LjZhLjU5NC41OTQgMCAwMS0uNTg4LS42YzAtLjMzMi4yNjMtLjYuNTg4LS42aDQuMTE5Yy4zMjQgMCAuNTg4LjI2OC41ODguNiAwIC4zMzItLjI2NC42LS41ODguNmgtNC4xMnptNi40Ny0uNmMwLTMuMzE0IDIuNjM0LTYgNS44ODMtNkMxNy4zNjYgMCAyMCAyLjY4NiAyMCA2cy0yLjYzMyA2LTUuODgyIDZjLTMuMjQ5IDAtNS44ODItMi42ODYtNS44ODItNnptMS4xNzcgMGMwIDIuNjUxIDIuMTA3IDQuOCA0LjcwNiA0LjggMi42IDAgNC43MDUtMi4xNDkgNC43MDUtNC44cy0yLjEwNi00LjgtNC43MDUtNC44Yy0yLjYgMC00LjcwNiAyLjE0OS00LjcwNiA0Ljh6bTUuMjk1LTIuMXYyLjE1MmwxLjI5NyAxLjMyNGMuMjMuMjM0LjIzLjYxNCAwIC44NDhhLjU4LjU4IDAgMDEtLjgzMSAwbC0xLjQ3MS0xLjVhLjYwNy42MDcgMCAwMS0uMTcyLS40MjRWMy45YzAtLjMzMS4yNjMtLjYuNTg4LS42LjMyNSAwIC41ODkuMjY5LjU4OS42eiIKICAgIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K");

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGgKICAgICAgZD0iTTguNjg5IDE2LjgzNmMyLjY0LTIuMTU4IDQuNTgyLTQuNDUgNS44My02Ljg3NyAxLjIzNC0yLjQwMiAxLjg5My01LjEzOSAxLjk3NC04LjIxOS0xLjM1Mi0uMzYyLTIuMzktLjYwNi0zLjEwNS0uNzI4LS4yNjItLjA0NS0uNTA1LS4wMjMtLjgzOC4wOGE2LjIzNCA2LjIzNCAwIDAwLS40NC4xNTdsLS4yNjQuMTA2czAgMCAwIDBsLS4yNzQuMTFjLTEuMTQuNDQ4LTEuOTkuNjI4LTMuMDc0LjYyNi0xLjEwMS0uMDAzLTEuOTI2LS4xOTUtMi45MzQtLjY2bC0uMTg2LS4wODctLjA5LS4wNDJzMCAwIDAgMGwtLjA3OC0uMDM4YTcuODYxIDcuODYxIDAgMDAtLjI5Mi0uMTMyQzQuNTUzLjk3OCA0LjMyOS45NDQgNC4wMTYuOTk0Yy0uNzkuMTI1LTEuOTY1LjM4MS0zLjUxLjc2NS4wNjYgMy4wODIuNzQgNS44MDYgMi4wMTggOC4xODMgMS4yOTkgMi40MTQgMy4zNTIgNC43MTQgNi4xNjUgNi44OTR6IgogICAgICBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTYuNjExIDguMTg1TDguMTgyIDkuNzZsMy4xNTEtMy4xNDgiLz4KICA8L2c+Cjwvc3ZnPgo=");

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii44NyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICA8cGF0aAogICAgICBkPSJNNy4wMzYgOS4wMDdjLjcxIDEuMzk1IDEuNTYyIDIuMjQyIDIuOTU3IDIuOTU3bDEuMTg3LS44OTdhLjQ4OS40ODkgMCAwMS41MDMtLjExOWMuNTUyLjE4MyAxLjE0OC4yODEgMS43NTkuMjgxLjI3MSAwIC40OTMuMjIzLjQ5My40OTN2MS43MmEuNDk0LjQ5NCAwIDAxLS40OTMuNDkzIDguMzc2IDguMzc2IDAgMDEtOC4zNzctOC4zNzdjMC0uMjcxLjIyMi0uNDkyLjQ5My0uNDkyaDEuNzI1Yy4yNyAwIC40OTMuMjIuNDkzLjQ5MiAwIC42MTYuMDk4IDEuMjA3LjI4IDEuNzU5YS40OTYuNDk2IDAgMDEtLjEyMy41MDNsLS44OTcgMS4xODd6Ii8+CiAgICA8cGF0aAogICAgICBkPSJNMTMuOTM1IDEyLjUyNmMxLjQwOS0uMDkzIDIuNDUyLjUyNCAxLjg0OCAxLjc3OC0uOTQ3IDEuOTYzLTMuNjA0IDMuMzI2LTYuMjgzIDMuMzI2YTguMTMgOC4xMyAwIDExOC4xMy04LjEzIi8+CiAgPC9nPgo8L3N2Zz4K");

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik0xMiA2LjUzN1YxLjM2NEMxMiAuNjA2IDExLjM1NiAwIDEwLjU1IDBoLTkuMUMuNjQ0IDAgMCAuNjA2IDAgMS4zNjR2NS4zNjJjMCAxLjU1NC42ODUgMy4wNSAxLjg5MyA0LjExMmE2LjAyMyA2LjAyMyAwIDAwMy42MDQgMS40OTd2NC43MThIMi4yOTVjLS4yODIgMC0uNTAzLjIwOC0uNTAzLjQ3MyAwIC4yNjYuMjIxLjQ3NC41MDMuNDc0aDcuNDFjLjI4MiAwIC41MDMtLjIwOC41MDMtLjQ3NCAwLS4yNjUtLjIyMS0uNDczLS41MDMtLjQ3M0g2LjUwM3YtNC43MThDOS41ODMgMTIuMDg4IDEyIDkuNTY4IDEyIDYuNTM3em0tMTAuOTkzLjE5VjEuMzYzYzAtLjIyNy4yMDEtLjQxNy40NDMtLjQxN2gzLjc0NUw0LjMyOSA0LjM0Yy0uMDQuMTMzIDAgLjI4NC4xLjM5OC4xMDEuMTE0LjI0Mi4xNy4zODMuMTdoMS4zOUw1LjU5NiA3LjM5Yy0uMDYuMjQ3LjEwMS41MTIuMzYzLjU2OS4wNCAwIC4wOC4wMTkuMTIuMDE5YS41MDkuNTA5IDAgMDAuNDg0LS4zNmwuNzY1LTMuMDVhLjQyNC40MjQgMCAwMC0uMS0uMzk5LjUwOS41MDkgMCAwMC0uMzgzLS4xN2gtMS4zOWwuNzY1LTMuMDVoNC4zM2MuMjQgMCAuNDQyLjE4OS40NDIuNDE2djUuMTczYzAgMi41NzctMi4wNTMgNC42OTktNC42NyA0Ljg3LTEuNDEuMDc1LTIuNzQtLjM2LTMuNzQ2LTEuMjctMS4wMDctLjg5LTEuNTctMi4xMDMtMS41Ny0zLjQxeiIKICAgIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aftermarketModal = void 0;

var _promisePolyfill = _interopRequireDefault(__webpack_require__(6));

var _window = __webpack_require__(8);

var _offersModal = __webpack_require__(25);

var _api = __webpack_require__(7);

var _globalConfig = __webpack_require__(3);

var _theme = __webpack_require__(4);

var _errorModal = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var aftermarketModal = {
  _instance: null,
  _isOpen: false,
  open: function open(options) {
    if (aftermarketModal.isOpen()) {
      return _promisePolyfill["default"].resolve();
    }

    aftermarketModal._isOpen = true;
    var _options$storeId = options.storeId,
        storeId = _options$storeId === void 0 ? _globalConfig.globalConfig.get('storeId') : _options$storeId,
        onClose = options.onClose,
        leadToken = options.leadToken;

    var handleClose = function handleClose(plan, product, quantity) {
      if (typeof onClose === 'function') {
        onClose(plan, product, quantity);
      }

      aftermarketModal.close();
      aftermarketModal._isOpen = false;
    };

    if (!storeId) {
      console.warn('Missing required option "storeId"');
      handleClose();
      return _promisePolyfill["default"].resolve();
    }

    if (!leadToken) {
      console.warn('Missing required option "leadToken"');
      handleClose();
      return _promisePolyfill["default"].resolve();
    }

    if ((0, _window.unsupportedBrowser)()) {
      console.warn('Unsupported browser');
      handleClose();
      return _promisePolyfill["default"].resolve();
    }

    return _promisePolyfill["default"].resolve((0, _api.fetchLead)(leadToken)).then(function (lead) {
      var referenceId = lead.product.referenceId;

      _promisePolyfill["default"].all([(0, _api.fetchOfferConfiguration)(storeId), (0, _api.fetchOffer)(storeId, referenceId)]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            config = _ref2[0],
            offer = _ref2[1];

        if (!(config.approved && config.enabled) || !offer.plans.length) {
          handleClose();
          return;
        }

        var theme = options.theme || (0, _theme.themeFromBranding)(config.branding);

        if (lead && lead.status !== 'live') {
          var merchantLogo = offer.marketing.modal.merchantLogo;
          aftermarketModal._instance = new _errorModal.ErrorModalContainer({
            errorType: lead.status,
            theme: theme,
            onClose: function onClose() {
              handleClose();
            },
            merchantLogo: merchantLogo
          });

          aftermarketModal._instance.render();

          return;
        }

        aftermarketModal._instance = new _offersModal.OffersModalContainer({
          offer: offer,
          theme: theme,
          lead: lead,
          onAddToCart: function onAddToCart(planSelection) {
            handleClose(planSelection, {
              id: referenceId,
              name: offer.product.name
            }, lead.quantity);
          },
          onClose: function onClose() {
            handleClose();
          },
          onDecline: function onDecline() {
            handleClose();
          }
        });

        aftermarketModal._instance.render();
      })["catch"](function (e) {
        console.warn(e);
        handleClose();
      });
    })["catch"](function (e) {
      console.warn(e);
      handleClose();
    });
  },
  close: function close() {
    if (aftermarketModal._instance && aftermarketModal._instance.destroy) {
      aftermarketModal._instance.destroy();
    }

    aftermarketModal._instance = null;
  },
  isOpen: function isOpen() {
    return this._isOpen;
  }
};
exports.aftermarketModal = aftermarketModal;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorModalContainer = exports.MODAL_ID = void 0;

var _redom = __webpack_require__(0);

var _dom = __webpack_require__(2);

var _errorModal = __webpack_require__(63);

var _renderToIframe = __webpack_require__(10);

var _theme = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MODAL_ID = 'extend-error-modal-iframe';
exports.MODAL_ID = MODAL_ID;

var ErrorModalContainer =
/*#__PURE__*/
function () {
  function ErrorModalContainer(props) {
    _classCallCheck(this, ErrorModalContainer);

    _defineProperty(this, "iframe", void 0);

    _defineProperty(this, "component", void 0);

    var _onClose = props.onClose,
        errorType = props.errorType,
        merchantLogo = props.merchantLogo;
    this.component = new _errorModal.ModalComponent({
      errorType: errorType,
      theme: props.theme || _theme.DEFAULT_THEME,
      onClose: function onClose() {
        if (_onClose) _onClose();
      },
      merchantLogo: merchantLogo
    });
  }

  _createClass(ErrorModalContainer, [{
    key: "render",
    value: function render() {
      this.iframe = (0, _renderToIframe.renderToFrame)(document.body, this.component, {
        id: MODAL_ID,
        autosize: false,
        styles: {
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '10000',
          width: '100vw',
          height: '100vh'
        }
      });
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.iframe && this.iframe.contentDocument) {
        (0, _redom.unmount)(this.iframe.contentDocument.body, this.component);
      }

      (0, _dom.destroyElement)(this.iframe);
    }
  }]);

  return ErrorModalContainer;
}();

exports.ErrorModalContainer = ErrorModalContainer;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ModalComponent", {
  enumerable: true,
  get: function get() {
    return _modal.ModalComponent;
  }
});

var _modal = __webpack_require__(64);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalComponent = void 0;

var _redom = __webpack_require__(0);

var _dom = __webpack_require__(2);

var _styles = __webpack_require__(1);

var _styles2 = __webpack_require__(65);

var _close = _interopRequireDefault(__webpack_require__(17));

var _componentBase = __webpack_require__(5);

var _logoParts = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ModalComponent =
/*#__PURE__*/
function (_ComponentBase) {
  _inherits(ModalComponent, _ComponentBase);

  function ModalComponent(props) {
    var _this;

    _classCallCheck(this, ModalComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "closeBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "continueBtn", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleClickClose", function () {
      _this.props.onClose();
    });

    var errorType = props.errorType,
        merchantLogo = props.merchantLogo;
    _this.el = (0, _redom.el)("div.".concat(_styles.CSS.SHROUD), (0, _redom.el)("div.".concat(_styles.CSS.MODAL), (0, _logoParts.modalLogos)(merchantLogo), _this.closeBtn = (0, _redom.el)("button.".concat(_styles.CSS.MODAL_CLOSE), {
      type: 'button',
      name: 'close'
    }, (0, _redom.el)('img', {
      src: _close["default"]
    })), (0, _redom.el)("h2.".concat(_styles2.MODAL_CSS.HEADER), (0, _redom.text)(MODAL_HEADER[errorType])), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.TEXT), (0, _redom.text)(MODAL_BULLET_1[errorType])), (0, _redom.el)("div.".concat(_styles2.MODAL_CSS.TEXT), (0, _redom.text)(MODAL_BULLET_2[errorType])), _this.continueBtn = (0, _redom.el)("button.".concat(_styles2.MODAL_CSS.BUTTON), {
      type: 'button',
      name: 'close'
    }, (0, _redom.text)('Continue to store'))));
    return _this;
  }

  _createClass(ModalComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(ModalComponent.prototype), "componentDidMount", this).call(this);

      var theme = this.props.theme;
      (0, _dom.addStyle)((0, _styles2.modalStyles)(theme), this.el);
      (0, _dom.addStyle)(_styles.reset, this.el);
      this.closeBtn.addEventListener('click', this.handleClickClose, false);
      this.continueBtn.addEventListener('click', this.handleClickClose, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.closeBtn.removeEventListener('click', this.handleClickClose, false);
      this.continueBtn.removeEventListener('click', this.handleClickClose, false);
    }
  }]);

  return ModalComponent;
}(_componentBase.ComponentBase);

exports.ModalComponent = ModalComponent;
var MODAL_HEADER = {
  expired: 'We can no longer offer a plan on this product :-(',
  consumed: 'This product is already protected. Nice!'
};
var MODAL_BULLET_1 = {
  expired: "Uh oh , we cannot offer a protection plan for this product because the manufacturer's warranty is expired or about to expire",
  consumed: 'Looks like you already purchased an Extend protection plan for this product!'
};
var MODAL_BULLET_2 = {
  expired: 'However, you can add an Extend protection plan on any eligible product you purchase today at checkout from this store!',
  consumed: 'In the meantime, why not check out more eligible products from this store?'
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalStyles = modalStyles;
exports.MODAL_CSS = void 0;

var _styles = __webpack_require__(1);

var MODAL_CSS = {
  HEADER: 'header',
  TEXT: 'modal-text',
  BUTTON: 'ctn-button'
};
exports.MODAL_CSS = MODAL_CSS;

function modalStyles(theme) {
  var primaryColor = theme.primaryColor;
  return "\n.".concat(_styles.CSS.SHROUD, " {\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.").concat(_styles.CSS.LOGO_CONTAINER, " {\n  display: flex;\n  align-items: center;\n  height: 6.0rem;\n}\n.").concat(_styles.CSS.LOGO, " {\n  height: 6.0rem;\n}\n.").concat(_styles.CSS.EXTEND_LOGO, " {\n  margin-right: auto;\n  height: 2.8rem;\n  align-self: flex-start;\n}\n.").concat(_styles.CSS.MODAL, " {\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0 0.3rem 0.9rem 0 rgba(79, 79, 79, 0.50);\n  padding: 5.6rem 4.4rem;\n  position: relative;\n  width: 584px;\n  height: 516px;\n  z-index: 2;\n}\n.").concat(_styles.CSS.MERCHANT_LOGO, " {\n  max-height: 6.0rem;\n  max-width: 17.5rem;\n}\n.").concat(_styles.CSS.PLUS, " {\n  height: 1.7rem;\n  margin: 0 1.3rem;\n}\n.").concat(MODAL_CSS.HEADER, " {\n  font-size: 36px;\n  font-weight: 900;\n  margin: 3.2rem 0 1.6rem 0;\n  line-height: 46px;\n  height: 92px;\n}\n.").concat(MODAL_CSS.TEXT, " {\n  font-size: 16px;\n  font-weight: normal;\n  margin-top: 16px;\n  line-height: 25px;\n}\n.").concat(MODAL_CSS.BUTTON, " {\n  background: ").concat(primaryColor, ";\n  border-color: ").concat(primaryColor, ";\n  color: white;\n  display: block;\n  font-size: 20px;\n  margin-top: 56px;\n  transition: 250ms opacity;\n  width: 100%;\n  height: 48px;\n  border-radius: 4px;\n}\n.").concat(_styles.CSS.MODAL_CLOSE, " {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  position: absolute;\n  padding: 0.4rem;\n  right: 2rem;\n  top: 2rem;\n  cursor: pointer;\n}\n.").concat(_styles.CSS.MODAL_CLOSE, ":hover {\n  opacity: 0.5;\n}\n\n@media (max-width: 768px) {\n  .").concat(_styles.CSS.MODAL, " {\n    font-size: 1.4rem;\n    min-height: 100%;\n    width: 100%;\n    padding: 5.6rem 3.2rem 5.2rem;\n  }\n  .").concat(_styles.CSS.MODAL_CLOSE, " {\n    right: 1rem;\n    top: 1rem;\n  }\n  .").concat(MODAL_CSS.HEADER, " {\n    font-size: 36px;\n    font-weight: 900;\n    margin: 3.2rem 0 1.6rem 0;\n    line-height: 46px;\n    height: 140px;\n  }\n}\n");
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })
/******/ ])["Extend"];
});