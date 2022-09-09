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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
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
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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
};

// v8 likes predictible objects
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/ngapp/dist/ngapp/main.js":
/*!********************************************!*\
  !*** ./resources/ngapp/dist/ngapp/main.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(self.webpackChunkngapp = self.webpackChunkngapp || []).push([[179], {
  184: function _(V, ne, w) {
    V.exports = w(88);
  },
  510: function _(V, ne, w) {
    "use strict";

    var D = w(236),
        L = w(431),
        x = w(136),
        v = w(65),
        M = w(42),
        P = w(787),
        C = w(134);

    V.exports = function (I) {
      return new Promise(function (ve, k) {
        var Bt = I.data,
            Re = I.headers;
        D.isFormData(Bt) && delete Re["Content-Type"];
        var Z = new XMLHttpRequest();
        I.auth && (Re.Authorization = "Basic " + btoa((I.auth.username || "") + ":" + (I.auth.password || "")));
        var Jt = v(I.baseURL, I.url);

        if (Z.open(I.method.toUpperCase(), x(Jt, I.params, I.paramsSerializer), !0), Z.timeout = I.timeout, Z.onreadystatechange = function () {
          if (Z && 4 === Z.readyState && (0 !== Z.status || Z.responseURL && 0 === Z.responseURL.indexOf("file:"))) {
            var Be = "getAllResponseHeaders" in Z ? M(Z.getAllResponseHeaders()) : null;
            L(ve, k, {
              data: I.responseType && "text" !== I.responseType ? Z.response : Z.responseText,
              status: Z.status,
              statusText: Z.statusText,
              headers: Be,
              config: I,
              request: Z
            }), Z = null;
          }
        }, Z.onabort = function () {
          !Z || (k(C("Request aborted", I, "ECONNABORTED", Z)), Z = null);
        }, Z.onerror = function () {
          k(C("Network Error", I, null, Z)), Z = null;
        }, Z.ontimeout = function () {
          var Be = "timeout of " + I.timeout + "ms exceeded";
          I.timeoutErrorMessage && (Be = I.timeoutErrorMessage), k(C(Be, I, "ECONNABORTED", Z)), Z = null;
        }, D.isStandardBrowserEnv()) {
          var jr = w(995),
              It = (I.withCredentials || P(Jt)) && I.xsrfCookieName ? jr.read(I.xsrfCookieName) : void 0;
          It && (Re[I.xsrfHeaderName] = It);
        }

        if ("setRequestHeader" in Z && D.forEach(Re, function (Be, Xt) {
          _typeof(Bt) > "u" && "content-type" === Xt.toLowerCase() ? delete Re[Xt] : Z.setRequestHeader(Xt, Be);
        }), D.isUndefined(I.withCredentials) || (Z.withCredentials = !!I.withCredentials), I.responseType) try {
          Z.responseType = I.responseType;
        } catch (mt) {
          if ("json" !== I.responseType) throw mt;
        }
        "function" == typeof I.onDownloadProgress && Z.addEventListener("progress", I.onDownloadProgress), "function" == typeof I.onUploadProgress && Z.upload && Z.upload.addEventListener("progress", I.onUploadProgress), I.cancelToken && I.cancelToken.promise.then(function (Be) {
          !Z || (Z.abort(), k(Be), Z = null);
        }), void 0 === Bt && (Bt = null), Z.send(Bt);
      });
    };
  },
  88: function _(V, ne, w) {
    "use strict";

    var D = w(236),
        L = w(686),
        x = w(224),
        v = w(245);

    function P(E) {
      var I = new x(E),
          H = L(x.prototype.request, I);
      return D.extend(H, x.prototype, I), D.extend(H, I), H;
    }

    var C = P(w(266));
    C.Axios = x, C.create = function (I) {
      return P(v(C.defaults, I));
    }, C.Cancel = w(752), C.CancelToken = w(64), C.isCancel = w(221), C.all = function (I) {
      return Promise.all(I);
    }, C.spread = w(557), V.exports = C, V.exports["default"] = C;
  },
  752: function _(V) {
    "use strict";

    function ne(w) {
      this.message = w;
    }

    ne.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }, ne.prototype.__CANCEL__ = !0, V.exports = ne;
  },
  64: function _(V, ne, w) {
    "use strict";

    var D = w(752);

    function L(x) {
      if ("function" != typeof x) throw new TypeError("executor must be a function.");
      var v;
      this.promise = new Promise(function (C) {
        v = C;
      });
      var M = this;
      x(function (C) {
        M.reason || (M.reason = new D(C), v(M.reason));
      });
    }

    L.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }, L.source = function () {
      var v;
      return {
        token: new L(function (C) {
          v = C;
        }),
        cancel: v
      };
    }, V.exports = L;
  },
  221: function _(V) {
    "use strict";

    V.exports = function (w) {
      return !(!w || !w.__CANCEL__);
    };
  },
  224: function _(V, ne, w) {
    "use strict";

    var D = w(236),
        L = w(136),
        x = w(186),
        v = w(203),
        M = w(245);

    function P(C) {
      this.defaults = C, this.interceptors = {
        request: new x(),
        response: new x()
      };
    }

    P.prototype.request = function (E) {
      "string" == typeof E ? (E = arguments[1] || {}).url = arguments[0] : E = E || {}, (E = M(this.defaults, E)).method = E.method ? E.method.toLowerCase() : this.defaults.method ? this.defaults.method.toLowerCase() : "get";
      var I = [v, void 0],
          H = Promise.resolve(E);

      for (this.interceptors.request.forEach(function (k) {
        I.unshift(k.fulfilled, k.rejected);
      }), this.interceptors.response.forEach(function (k) {
        I.push(k.fulfilled, k.rejected);
      }); I.length;) {
        H = H.then(I.shift(), I.shift());
      }

      return H;
    }, P.prototype.getUri = function (E) {
      return E = M(this.defaults, E), L(E.url, E.params, E.paramsSerializer).replace(/^\?/, "");
    }, D.forEach(["delete", "get", "head", "options"], function (E) {
      P.prototype[E] = function (I, H) {
        return this.request(D.merge(H || {}, {
          method: E,
          url: I
        }));
      };
    }), D.forEach(["post", "put", "patch"], function (E) {
      P.prototype[E] = function (I, H, ve) {
        return this.request(D.merge(ve || {}, {
          method: E,
          url: I,
          data: H
        }));
      };
    }), V.exports = P;
  },
  186: function _(V, ne, w) {
    "use strict";

    var D = w(236);

    function L() {
      this.handlers = [];
    }

    L.prototype.use = function (v, M) {
      return this.handlers.push({
        fulfilled: v,
        rejected: M
      }), this.handlers.length - 1;
    }, L.prototype.eject = function (v) {
      this.handlers[v] && (this.handlers[v] = null);
    }, L.prototype.forEach = function (v) {
      D.forEach(this.handlers, function (P) {
        null !== P && v(P);
      });
    }, V.exports = L;
  },
  65: function _(V, ne, w) {
    "use strict";

    var D = w(766),
        L = w(520);

    V.exports = function (v, M) {
      return v && !D(M) ? L(v, M) : M;
    };
  },
  134: function _(V, ne, w) {
    "use strict";

    var D = w(601);

    V.exports = function (x, v, M, P, C) {
      var E = new Error(x);
      return D(E, v, M, P, C);
    };
  },
  203: function _(V, ne, w) {
    "use strict";

    var D = w(236),
        L = w(883),
        x = w(221),
        v = w(266);

    function M(P) {
      P.cancelToken && P.cancelToken.throwIfRequested();
    }

    V.exports = function (C) {
      return M(C), C.headers = C.headers || {}, C.data = L(C.data, C.headers, C.transformRequest), C.headers = D.merge(C.headers.common || {}, C.headers[C.method] || {}, C.headers), D.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (H) {
        delete C.headers[H];
      }), (C.adapter || v.adapter)(C).then(function (H) {
        return M(C), H.data = L(H.data, H.headers, C.transformResponse), H;
      }, function (H) {
        return x(H) || (M(C), H && H.response && (H.response.data = L(H.response.data, H.response.headers, C.transformResponse))), Promise.reject(H);
      });
    };
  },
  601: function _(V) {
    "use strict";

    V.exports = function (w, D, L, x, v) {
      return w.config = D, L && (w.code = L), w.request = x, w.response = v, w.isAxiosError = !0, w.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      }, w;
    };
  },
  245: function _(V, ne, w) {
    "use strict";

    var D = w(236);

    V.exports = function (x, v) {
      v = v || {};
      var M = {},
          P = ["url", "method", "params", "data"],
          C = ["headers", "auth", "proxy"],
          E = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
      D.forEach(P, function (k) {
        _typeof(v[k]) < "u" && (M[k] = v[k]);
      }), D.forEach(C, function (k) {
        D.isObject(v[k]) ? M[k] = D.deepMerge(x[k], v[k]) : _typeof(v[k]) < "u" ? M[k] = v[k] : D.isObject(x[k]) ? M[k] = D.deepMerge(x[k]) : _typeof(x[k]) < "u" && (M[k] = x[k]);
      }), D.forEach(E, function (k) {
        _typeof(v[k]) < "u" ? M[k] = v[k] : _typeof(x[k]) < "u" && (M[k] = x[k]);
      });
      var I = P.concat(C).concat(E),
          H = Object.keys(v).filter(function (k) {
        return -1 === I.indexOf(k);
      });
      return D.forEach(H, function (k) {
        _typeof(v[k]) < "u" ? M[k] = v[k] : _typeof(x[k]) < "u" && (M[k] = x[k]);
      }), M;
    };
  },
  431: function _(V, ne, w) {
    "use strict";

    var D = w(134);

    V.exports = function (x, v, M) {
      var P = M.config.validateStatus;
      !P || P(M.status) ? x(M) : v(D("Request failed with status code " + M.status, M.config, null, M.request, M));
    };
  },
  883: function _(V, ne, w) {
    "use strict";

    var D = w(236);

    V.exports = function (x, v, M) {
      return D.forEach(M, function (C) {
        x = C(x, v);
      }), x;
    };
  },
  266: function _(V, ne, w) {
    "use strict";

    var D = w(236),
        L = w(5),
        x = {
      "Content-Type": "application/x-www-form-urlencoded"
    };

    function v(C, E) {
      !D.isUndefined(C) && D.isUndefined(C["Content-Type"]) && (C["Content-Type"] = E);
    }

    var P = {
      adapter: function M() {
        var C;
        return ((typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) < "u" || (typeof process === "undefined" ? "undefined" : _typeof(process)) < "u" && "[object process]" === Object.prototype.toString.call(process)) && (C = w(510)), C;
      }(),
      transformRequest: [function (E, I) {
        return L(I, "Accept"), L(I, "Content-Type"), D.isFormData(E) || D.isArrayBuffer(E) || D.isBuffer(E) || D.isStream(E) || D.isFile(E) || D.isBlob(E) ? E : D.isArrayBufferView(E) ? E.buffer : D.isURLSearchParams(E) ? (v(I, "application/x-www-form-urlencoded;charset=utf-8"), E.toString()) : D.isObject(E) ? (v(I, "application/json;charset=utf-8"), JSON.stringify(E)) : E;
      }],
      transformResponse: [function (E) {
        if ("string" == typeof E) try {
          E = JSON.parse(E);
        } catch (_unused) {}
        return E;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      validateStatus: function validateStatus(E) {
        return E >= 200 && E < 300;
      },
      headers: {
        common: {
          Accept: "application/json, text/plain, */*"
        }
      }
    };
    D.forEach(["delete", "get", "head"], function (E) {
      P.headers[E] = {};
    }), D.forEach(["post", "put", "patch"], function (E) {
      P.headers[E] = D.merge(x);
    }), V.exports = P;
  },
  686: function _(V) {
    "use strict";

    V.exports = function (w, D) {
      return function () {
        for (var x = new Array(arguments.length), v = 0; v < x.length; v++) {
          x[v] = arguments[v];
        }

        return w.apply(D, x);
      };
    };
  },
  136: function _(V, ne, w) {
    "use strict";

    var D = w(236);

    function L(x) {
      return encodeURIComponent(x).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }

    V.exports = function (v, M, P) {
      if (!M) return v;
      var C;
      if (P) C = P(M);else if (D.isURLSearchParams(M)) C = M.toString();else {
        var E = [];
        D.forEach(M, function (ve, k) {
          null === ve || _typeof(ve) > "u" || (D.isArray(ve) ? k += "[]" : ve = [ve], D.forEach(ve, function (Re) {
            D.isDate(Re) ? Re = Re.toISOString() : D.isObject(Re) && (Re = JSON.stringify(Re)), E.push(L(k) + "=" + L(Re));
          }));
        }), C = E.join("&");
      }

      if (C) {
        var I = v.indexOf("#");
        -1 !== I && (v = v.slice(0, I)), v += (-1 === v.indexOf("?") ? "?" : "&") + C;
      }

      return v;
    };
  },
  520: function _(V) {
    "use strict";

    V.exports = function (w, D) {
      return D ? w.replace(/\/+$/, "") + "/" + D.replace(/^\/+/, "") : w;
    };
  },
  995: function _(V, ne, w) {
    "use strict";

    var D = w(236);
    V.exports = D.isStandardBrowserEnv() ? {
      write: function write(v, M, P, C, E, I) {
        var H = [];
        H.push(v + "=" + encodeURIComponent(M)), D.isNumber(P) && H.push("expires=" + new Date(P).toGMTString()), D.isString(C) && H.push("path=" + C), D.isString(E) && H.push("domain=" + E), !0 === I && H.push("secure"), document.cookie = H.join("; ");
      },
      read: function read(v) {
        var M = document.cookie.match(new RegExp("(^|;\\s*)(" + v + ")=([^;]*)"));
        return M ? decodeURIComponent(M[3]) : null;
      },
      remove: function remove(v) {
        this.write(v, "", Date.now() - 864e5);
      }
    } : {
      write: function write() {},
      read: function read() {
        return null;
      },
      remove: function remove() {}
    };
  },
  766: function _(V) {
    "use strict";

    V.exports = function (w) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(w);
    };
  },
  787: function _(V, ne, w) {
    "use strict";

    var D = w(236);
    V.exports = D.isStandardBrowserEnv() ? function () {
      var M,
          x = /(msie|trident)/i.test(navigator.userAgent),
          v = document.createElement("a");

      function P(C) {
        var E = C;
        return x && (v.setAttribute("href", E), E = v.href), v.setAttribute("href", E), {
          href: v.href,
          protocol: v.protocol ? v.protocol.replace(/:$/, "") : "",
          host: v.host,
          search: v.search ? v.search.replace(/^\?/, "") : "",
          hash: v.hash ? v.hash.replace(/^#/, "") : "",
          hostname: v.hostname,
          port: v.port,
          pathname: "/" === v.pathname.charAt(0) ? v.pathname : "/" + v.pathname
        };
      }

      return M = P(window.location.href), function (E) {
        var I = D.isString(E) ? P(E) : E;
        return I.protocol === M.protocol && I.host === M.host;
      };
    }() : function () {
      return !0;
    };
  },
  5: function _(V, ne, w) {
    "use strict";

    var D = w(236);

    V.exports = function (x, v) {
      D.forEach(x, function (P, C) {
        C !== v && C.toUpperCase() === v.toUpperCase() && (x[v] = P, delete x[C]);
      });
    };
  },
  42: function _(V, ne, w) {
    "use strict";

    var D = w(236),
        L = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];

    V.exports = function (v) {
      var P,
          C,
          E,
          M = {};
      return v && D.forEach(v.split("\n"), function (H) {
        if (E = H.indexOf(":"), P = D.trim(H.substr(0, E)).toLowerCase(), C = D.trim(H.substr(E + 1)), P) {
          if (M[P] && L.indexOf(P) >= 0) return;
          M[P] = "set-cookie" === P ? (M[P] ? M[P] : []).concat([C]) : M[P] ? M[P] + ", " + C : C;
        }
      }), M;
    };
  },
  557: function _(V) {
    "use strict";

    V.exports = function (w) {
      return function (L) {
        return w.apply(null, L);
      };
    };
  },
  236: function _(V, ne, w) {
    "use strict";

    var D = w(686),
        L = Object.prototype.toString;

    function x(A) {
      return "[object Array]" === L.call(A);
    }

    function v(A) {
      return _typeof(A) > "u";
    }

    function ve(A) {
      return null !== A && "object" == _typeof(A);
    }

    function Z(A) {
      return "[object Function]" === L.call(A);
    }

    function It(A, Ve) {
      if (!(null === A || _typeof(A) > "u")) if ("object" != _typeof(A) && (A = [A]), x(A)) for (var Le = 0, jt = A.length; Le < jt; Le++) {
        Ve.call(null, A[Le], Le, A);
      } else for (var Te in A) {
        Object.prototype.hasOwnProperty.call(A, Te) && Ve.call(null, A[Te], Te, A);
      }
    }

    V.exports = {
      isArray: x,
      isArrayBuffer: function P(A) {
        return "[object ArrayBuffer]" === L.call(A);
      },
      isBuffer: function M(A) {
        return null !== A && !v(A) && null !== A.constructor && !v(A.constructor) && "function" == typeof A.constructor.isBuffer && A.constructor.isBuffer(A);
      },
      isFormData: function C(A) {
        return (typeof FormData === "undefined" ? "undefined" : _typeof(FormData)) < "u" && A instanceof FormData;
      },
      isArrayBufferView: function E(A) {
        return (typeof ArrayBuffer === "undefined" ? "undefined" : _typeof(ArrayBuffer)) < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(A) : A && A.buffer && A.buffer instanceof ArrayBuffer;
      },
      isString: function I(A) {
        return "string" == typeof A;
      },
      isNumber: function H(A) {
        return "number" == typeof A;
      },
      isObject: ve,
      isUndefined: v,
      isDate: function k(A) {
        return "[object Date]" === L.call(A);
      },
      isFile: function Bt(A) {
        return "[object File]" === L.call(A);
      },
      isBlob: function Re(A) {
        return "[object Blob]" === L.call(A);
      },
      isFunction: Z,
      isStream: function Fn(A) {
        return ve(A) && Z(A.pipe);
      },
      isURLSearchParams: function Mt(A) {
        return (typeof URLSearchParams === "undefined" ? "undefined" : _typeof(URLSearchParams)) < "u" && A instanceof URLSearchParams;
      },
      isStandardBrowserEnv: function jr() {
        return (!((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) < "u") || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u";
      },
      forEach: It,
      merge: function mt() {
        var A = {};

        function Ve(Te, ke) {
          A[ke] = "object" == _typeof(A[ke]) && "object" == _typeof(Te) ? mt(A[ke], Te) : Te;
        }

        for (var Le = 0, jt = arguments.length; Le < jt; Le++) {
          It(arguments[Le], Ve);
        }

        return A;
      },
      deepMerge: function Be() {
        var A = {};

        function Ve(Te, ke) {
          A[ke] = "object" == _typeof(A[ke]) && "object" == _typeof(Te) ? Be(A[ke], Te) : "object" == _typeof(Te) ? Be({}, Te) : Te;
        }

        for (var Le = 0, jt = arguments.length; Le < jt; Le++) {
          It(arguments[Le], Ve);
        }

        return A;
      },
      extend: function Xt(A, Ve, Le) {
        return It(Ve, function (Te, ke) {
          A[ke] = Le && "function" == typeof Te ? D(Te, Le) : Te;
        }), A;
      },
      trim: function Jt(A) {
        return A.replace(/^\s*/, "").replace(/\s*$/, "");
      }
    };
  },
  137: function _(V, ne, w) {
    "use strict";

    function D(e) {
      return "function" == typeof e;
    }

    function L(e) {
      var n = e(function (r) {
        Error.call(r), r.stack = new Error().stack;
      });
      return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
    }

    var x = L(function (e) {
      return function (n) {
        e(this), this.message = n ? "".concat(n.length, " errors occurred during unsubscription:\n").concat(n.map(function (r, o) {
          return "".concat(o + 1, ") ").concat(r.toString());
        }).join("\n  ")) : "", this.name = "UnsubscriptionError", this.errors = n;
      };
    });

    function v(e, t) {
      if (e) {
        var n = e.indexOf(t);
        0 <= n && e.splice(n, 1);
      }
    }

    var M = /*#__PURE__*/function () {
      function M(t) {
        _classCallCheck(this, M);

        this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
      }

      _createClass(M, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          var t;

          if (!this.closed) {
            this.closed = !0;
            var n = this._parentage;
            if (n) if (this._parentage = null, Array.isArray(n)) {
              var _iterator = _createForOfIteratorHelper(n),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var i = _step.value;
                  i.remove(this);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else n.remove(this);
            var r = this.initialTeardown;
            if (D(r)) try {
              r();
            } catch (i) {
              t = i instanceof x ? i.errors : [i];
            }
            var o = this._finalizers;

            if (o) {
              this._finalizers = null;

              var _iterator2 = _createForOfIteratorHelper(o),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _i2 = _step2.value;

                  try {
                    E(_i2);
                  } catch (s) {
                    var _t2;

                    t = (_t2 = t) !== null && _t2 !== void 0 ? _t2 : [], s instanceof x ? t = [].concat(_toConsumableArray(t), _toConsumableArray(s.errors)) : t.push(s);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (t) throw new x(t);
          }
        }
      }, {
        key: "add",
        value: function add(t) {
          var n;
          if (t && t !== this) if (this.closed) E(t);else {
            if (t instanceof M) {
              if (t.closed || t._hasParent(this)) return;

              t._addParent(this);
            }

            (this._finalizers = null !== (n = this._finalizers) && void 0 !== n ? n : []).push(t);
          }
        }
      }, {
        key: "_hasParent",
        value: function _hasParent(t) {
          var n = this._parentage;
          return n === t || Array.isArray(n) && n.includes(t);
        }
      }, {
        key: "_addParent",
        value: function _addParent(t) {
          var n = this._parentage;
          this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
        }
      }, {
        key: "_removeParent",
        value: function _removeParent(t) {
          var n = this._parentage;
          n === t ? this._parentage = null : Array.isArray(n) && v(n, t);
        }
      }, {
        key: "remove",
        value: function remove(t) {
          var n = this._finalizers;
          n && v(n, t), t instanceof M && t._removeParent(this);
        }
      }]);

      return M;
    }();

    M.EMPTY = function () {
      var e = new M();
      return e.closed = !0, e;
    }();

    var P = M.EMPTY;

    function C(e) {
      return e instanceof M || e && "closed" in e && D(e.remove) && D(e.add) && D(e.unsubscribe);
    }

    function E(e) {
      D(e) ? e() : e.unsubscribe();
    }

    var I = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: !1,
      useDeprecatedNextContext: !1
    },
        H = {
      setTimeout: function (_setTimeout) {
        function setTimeout(_x, _x2) {
          return _setTimeout.apply(this, arguments);
        }

        setTimeout.toString = function () {
          return _setTimeout.toString();
        };

        return setTimeout;
      }(function (e, t) {
        var r = H.delegate;

        for (var _len = arguments.length, n = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          n[_key - 2] = arguments[_key];
        }

        return r !== null && r !== void 0 && r.setTimeout ? r.setTimeout.apply(r, [e, t].concat(n)) : setTimeout.apply(void 0, [e, t].concat(n));
      }),
      clearTimeout: function (_clearTimeout) {
        function clearTimeout(_x3) {
          return _clearTimeout.apply(this, arguments);
        }

        clearTimeout.toString = function () {
          return _clearTimeout.toString();
        };

        return clearTimeout;
      }(function (e) {
        var t = H.delegate;
        return ((t === null || t === void 0 ? void 0 : t.clearTimeout) || clearTimeout)(e);
      }),
      delegate: void 0
    };

    function ve(e) {
      H.setTimeout(function () {
        var t = I.onUnhandledError;
        if (!t) throw e;
        t(e);
      });
    }

    function k() {}

    var Bt = Fn("C", void 0, void 0);

    function Fn(e, t, n) {
      return {
        kind: e,
        value: t,
        error: n
      };
    }

    var Mt = null;

    function Jt(e) {
      if (I.useDeprecatedSynchronousErrorHandling) {
        var t = !Mt;

        if (t && (Mt = {
          errorThrown: !1,
          error: null
        }), e(), t) {
          var _Mt = Mt,
              n = _Mt.errorThrown,
              r = _Mt.error;
          if (Mt = null, n) throw r;
        }
      } else e();
    }

    var It = /*#__PURE__*/function (_M) {
      _inherits(It, _M);

      var _super = _createSuper(It);

      function It(t) {
        var _this;

        _classCallCheck(this, It);

        _this = _super.call(this), _this.isStopped = !1, t ? (_this.destination = t, C(t) && t.add(_assertThisInitialized(_this))) : _this.destination = Te;
        return _this;
      }

      _createClass(It, [{
        key: "next",
        value: function next(t) {
          this.isStopped ? jt(function Z(e) {
            return Fn("N", e, void 0);
          }(t), this) : this._next(t);
        }
      }, {
        key: "error",
        value: function error(t) {
          this.isStopped ? jt(function Re(e) {
            return Fn("E", void 0, e);
          }(t), this) : (this.isStopped = !0, this._error(t));
        }
      }, {
        key: "complete",
        value: function complete() {
          this.isStopped ? jt(Bt, this) : (this.isStopped = !0, this._complete());
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          this.closed || (this.isStopped = !0, _get(_getPrototypeOf(It.prototype), "unsubscribe", this).call(this), this.destination = null);
        }
      }, {
        key: "_next",
        value: function _next(t) {
          this.destination.next(t);
        }
      }, {
        key: "_error",
        value: function _error(t) {
          try {
            this.destination.error(t);
          } finally {
            this.unsubscribe();
          }
        }
      }, {
        key: "_complete",
        value: function _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }], [{
        key: "create",
        value: function create(t, n, r) {
          return new A(t, n, r);
        }
      }]);

      return It;
    }(M);

    var mt = Function.prototype.bind;

    function Be(e, t) {
      return mt.call(e, t);
    }

    var Xt = /*#__PURE__*/function () {
      function Xt(t) {
        _classCallCheck(this, Xt);

        this.partialObserver = t;
      }

      _createClass(Xt, [{
        key: "next",
        value: function next(t) {
          var n = this.partialObserver;
          if (n.next) try {
            n.next(t);
          } catch (r) {
            Ve(r);
          }
        }
      }, {
        key: "error",
        value: function error(t) {
          var n = this.partialObserver;
          if (n.error) try {
            n.error(t);
          } catch (r) {
            Ve(r);
          } else Ve(t);
        }
      }, {
        key: "complete",
        value: function complete() {
          var t = this.partialObserver;
          if (t.complete) try {
            t.complete();
          } catch (n) {
            Ve(n);
          }
        }
      }]);

      return Xt;
    }();

    var A = /*#__PURE__*/function (_It) {
      _inherits(A, _It);

      var _super2 = _createSuper(A);

      function A(t, n, r) {
        var _this2;

        _classCallCheck(this, A);

        var o;
        if (_this2 = _super2.call(this), D(t) || !t) o = {
          next: t !== null && t !== void 0 ? t : void 0,
          error: n !== null && n !== void 0 ? n : void 0,
          complete: r !== null && r !== void 0 ? r : void 0
        };else {
          var i;
          _assertThisInitialized(_this2) && I.useDeprecatedNextContext ? (i = Object.create(t), i.unsubscribe = function () {
            return _this2.unsubscribe();
          }, o = {
            next: t.next && Be(t.next, i),
            error: t.error && Be(t.error, i),
            complete: t.complete && Be(t.complete, i)
          }) : o = t;
        }
        _this2.destination = new Xt(o);
        return _possibleConstructorReturn(_this2);
      }

      return _createClass(A);
    }(It);

    function Ve(e) {
      I.useDeprecatedSynchronousErrorHandling ? function jr(e) {
        I.useDeprecatedSynchronousErrorHandling && Mt && (Mt.errorThrown = !0, Mt.error = e);
      }(e) : ve(e);
    }

    function jt(e, t) {
      var n = I.onStoppedNotification;
      n && H.setTimeout(function () {
        return n(e, t);
      });
    }

    var Te = {
      closed: !0,
      next: k,
      error: function Le(e) {
        throw e;
      },
      complete: k
    },
        ke = "function" == typeof Symbol && Symbol.observable || "@@observable";

    function pc(e) {
      return e;
    }

    var Qe = function () {
      var e = /*#__PURE__*/function () {
        function e(n) {
          _classCallCheck(this, e);

          n && (this._subscribe = n);
        }

        _createClass(e, [{
          key: "lift",
          value: function lift(n) {
            var r = new e();
            return r.source = this, r.operator = n, r;
          }
        }, {
          key: "subscribe",
          value: function subscribe(n, r, o) {
            var _this3 = this;

            var i = function mD(e) {
              return e && e instanceof It || function gD(e) {
                return e && D(e.next) && D(e.error) && D(e.complete);
              }(e) && C(e);
            }(n) ? n : new A(n, r, o);
            return Jt(function () {
              var s = _this3.operator,
                  a = _this3.source;
              i.add(s ? s.call(i, a) : a ? _this3._subscribe(i) : _this3._trySubscribe(i));
            }), i;
          }
        }, {
          key: "_trySubscribe",
          value: function _trySubscribe(n) {
            try {
              return this._subscribe(n);
            } catch (r) {
              n.error(r);
            }
          }
        }, {
          key: "forEach",
          value: function forEach(n, r) {
            var _this4 = this;

            return new (r = mc(r))(function (o, i) {
              var s = new A({
                next: function next(a) {
                  try {
                    n(a);
                  } catch (u) {
                    i(u), s.unsubscribe();
                  }
                },
                error: i,
                complete: o
              });

              _this4.subscribe(s);
            });
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(n) {
            var r;
            return null === (r = this.source) || void 0 === r ? void 0 : r.subscribe(n);
          }
        }, {
          key: ke,
          value: function value() {
            return this;
          }
        }, {
          key: "pipe",
          value: function pipe() {
            for (var _len2 = arguments.length, n = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              n[_key2] = arguments[_key2];
            }

            return function gc(e) {
              return 0 === e.length ? pc : 1 === e.length ? e[0] : function (n) {
                return e.reduce(function (r, o) {
                  return o(r);
                }, n);
              };
            }(n)(this);
          }
        }, {
          key: "toPromise",
          value: function toPromise(n) {
            var _this5 = this;

            return new (n = mc(n))(function (r, o) {
              var i;

              _this5.subscribe(function (s) {
                return i = s;
              }, function (s) {
                return o(s);
              }, function () {
                return r(i);
              });
            });
          }
        }]);

        return e;
      }();

      return e.create = function (t) {
        return new e(t);
      }, e;
    }();

    function mc(e) {
      var t;
      return null !== (t = e !== null && e !== void 0 ? e : I.Promise) && void 0 !== t ? t : Promise;
    }

    var yD = L(function (e) {
      return function () {
        e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
      };
    });

    var bs = function () {
      var e = /*#__PURE__*/function (_Qe) {
        _inherits(e, _Qe);

        var _super3 = _createSuper(e);

        function e() {
          var _this6;

          _classCallCheck(this, e);

          _this6 = _super3.call(this), _this6.closed = !1, _this6.currentObservers = null, _this6.observers = [], _this6.isStopped = !1, _this6.hasError = !1, _this6.thrownError = null;
          return _this6;
        }

        _createClass(e, [{
          key: "lift",
          value: function lift(n) {
            var r = new yc(this, this);
            return r.operator = n, r;
          }
        }, {
          key: "_throwIfClosed",
          value: function _throwIfClosed() {
            if (this.closed) throw new yD();
          }
        }, {
          key: "next",
          value: function next(n) {
            var _this7 = this;

            Jt(function () {
              if (_this7._throwIfClosed(), !_this7.isStopped) {
                _this7.currentObservers || (_this7.currentObservers = Array.from(_this7.observers));

                var _iterator3 = _createForOfIteratorHelper(_this7.currentObservers),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var r = _step3.value;
                    r.next(n);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            });
          }
        }, {
          key: "error",
          value: function error(n) {
            var _this8 = this;

            Jt(function () {
              if (_this8._throwIfClosed(), !_this8.isStopped) {
                _this8.hasError = _this8.isStopped = !0, _this8.thrownError = n;
                var r = _this8.observers;

                for (; r.length;) {
                  r.shift().error(n);
                }
              }
            });
          }
        }, {
          key: "complete",
          value: function complete() {
            var _this9 = this;

            Jt(function () {
              if (_this9._throwIfClosed(), !_this9.isStopped) {
                _this9.isStopped = !0;
                var n = _this9.observers;

                for (; n.length;) {
                  n.shift().complete();
                }
              }
            });
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
          }
        }, {
          key: "observed",
          get: function get() {
            var n;
            return (null === (n = this.observers) || void 0 === n ? void 0 : n.length) > 0;
          }
        }, {
          key: "_trySubscribe",
          value: function _trySubscribe(n) {
            return this._throwIfClosed(), _get(_getPrototypeOf(e.prototype), "_trySubscribe", this).call(this, n);
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(n) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
          }
        }, {
          key: "_innerSubscribe",
          value: function _innerSubscribe(n) {
            var _this10 = this;

            var r = this.hasError,
                o = this.isStopped,
                i = this.observers;
            return r || o ? P : (this.currentObservers = null, i.push(n), new M(function () {
              _this10.currentObservers = null, v(i, n);
            }));
          }
        }, {
          key: "_checkFinalizedStatuses",
          value: function _checkFinalizedStatuses(n) {
            var r = this.hasError,
                o = this.thrownError,
                i = this.isStopped;
            r ? n.error(o) : i && n.complete();
          }
        }, {
          key: "asObservable",
          value: function asObservable() {
            var n = new Qe();
            return n.source = this, n;
          }
        }]);

        return e;
      }(Qe);

      return e.create = function (t, n) {
        return new yc(t, n);
      }, e;
    }();

    var yc = /*#__PURE__*/function (_bs) {
      _inherits(yc, _bs);

      var _super4 = _createSuper(yc);

      function yc(t, n) {
        var _this11;

        _classCallCheck(this, yc);

        _this11 = _super4.call(this), _this11.destination = t, _this11.source = n;
        return _this11;
      }

      _createClass(yc, [{
        key: "next",
        value: function next(t) {
          var n, r;
          null === (r = null === (n = this.destination) || void 0 === n ? void 0 : n.next) || void 0 === r || r.call(n, t);
        }
      }, {
        key: "error",
        value: function error(t) {
          var n, r;
          null === (r = null === (n = this.destination) || void 0 === n ? void 0 : n.error) || void 0 === r || r.call(n, t);
        }
      }, {
        key: "complete",
        value: function complete() {
          var t, n;
          null === (n = null === (t = this.destination) || void 0 === t ? void 0 : t.complete) || void 0 === n || n.call(t);
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(t) {
          var n, r;
          return null !== (r = null === (n = this.source) || void 0 === n ? void 0 : n.subscribe(t)) && void 0 !== r ? r : P;
        }
      }]);

      return yc;
    }(bs);

    function Hr(e) {
      return function (t) {
        if (function DD(e) {
          return D(e === null || e === void 0 ? void 0 : e.lift);
        }(t)) return t.lift(function (n) {
          try {
            return e(n, this);
          } catch (r) {
            this.error(r);
          }
        });
        throw new TypeError("Unable to lift unknown Observable type");
      };
    }

    function $r(e, t, n, r, o) {
      return new vD(e, t, n, r, o);
    }

    var vD = /*#__PURE__*/function (_It2) {
      _inherits(vD, _It2);

      var _super5 = _createSuper(vD);

      function vD(t, n, r, o, i, s) {
        var _thisSuper, _thisSuper2, _thisSuper3, _this12;

        _classCallCheck(this, vD);

        _this12 = _super5.call(this, t), _this12.onFinalize = i, _this12.shouldUnsubscribe = s, _this12._next = n ? function (a) {
          try {
            n(a);
          } catch (u) {
            t.error(u);
          }
        } : _get((_thisSuper = _assertThisInitialized(_this12), _getPrototypeOf(vD.prototype)), "_next", _thisSuper), _this12._error = o ? function (a) {
          try {
            o(a);
          } catch (u) {
            t.error(u);
          } finally {
            this.unsubscribe();
          }
        } : _get((_thisSuper2 = _assertThisInitialized(_this12), _getPrototypeOf(vD.prototype)), "_error", _thisSuper2), _this12._complete = r ? function () {
          try {
            r();
          } catch (a) {
            t.error(a);
          } finally {
            this.unsubscribe();
          }
        } : _get((_thisSuper3 = _assertThisInitialized(_this12), _getPrototypeOf(vD.prototype)), "_complete", _thisSuper3);
        return _this12;
      }

      _createClass(vD, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          var t;

          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var n = this.closed;
            _get(_getPrototypeOf(vD.prototype), "unsubscribe", this).call(this), !n && (null === (t = this.onFinalize) || void 0 === t || t.call(this));
          }
        }
      }]);

      return vD;
    }(It);

    function Ms(e, t) {
      return Hr(function (n, r) {
        var o = 0;
        n.subscribe($r(r, function (i) {
          r.next(e.call(t, i, o++));
        }));
      });
    }

    function On(e) {
      return this instanceof On ? (this.v = e, this) : new On(e);
    }

    function wD(e, t, n) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var o,
          r = n.apply(e, t || []),
          i = [];
      return o = {}, s("next"), s("throw"), s("return"), o[Symbol.asyncIterator] = function () {
        return this;
      }, o;

      function s(f) {
        r[f] && (o[f] = function (h) {
          return new Promise(function (p, g) {
            i.push([f, h, p, g]) > 1 || a(f, h);
          });
        });
      }

      function a(f, h) {
        try {
          !function u(f) {
            f.value instanceof On ? Promise.resolve(f.value.v).then(l, c) : d(i[0][2], f);
          }(r[f](h));
        } catch (p) {
          d(i[0][3], p);
        }
      }

      function l(f) {
        a("next", f);
      }

      function c(f) {
        a("throw", f);
      }

      function d(f, h) {
        f(h), i.shift(), i.length && a(i[0][0], i[0][1]);
      }
    }

    function ED(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n,
          t = e[Symbol.asyncIterator];
      return t ? t.call(e) : (e = function _c(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function next() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            };
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }(e), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function () {
        return this;
      }, n);

      function r(i) {
        n[i] = e[i] && function (s) {
          return new Promise(function (a, u) {
            !function o(i, s, a, u) {
              Promise.resolve(u).then(function (l) {
                i({
                  value: l,
                  done: a
                });
              }, s);
            }(a, u, (s = e[i](s)).done, s.value);
          });
        };
      }
    }

    var Cc = function Cc(e) {
      return e && "number" == typeof e.length && "function" != typeof e;
    };

    function wc(e) {
      return D(e === null || e === void 0 ? void 0 : e.then);
    }

    function Ec(e) {
      return D(e[ke]);
    }

    function bc(e) {
      return Symbol.asyncIterator && D(e === null || e === void 0 ? void 0 : e[Symbol.asyncIterator]);
    }

    function Mc(e) {
      return new TypeError("You provided ".concat(null !== e && "object" == _typeof(e) ? "an invalid object" : "'".concat(e, "'"), " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."));
    }

    var Ic = function MD() {
      return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    }();

    function Sc(e) {
      return D(e === null || e === void 0 ? void 0 : e[Ic]);
    }

    function Ac(e) {
      return wD(this, arguments, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var n, _yield$On, r, o;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                n = e.getReader();
                _context.prev = 1;

              case 2:
                _context.next = 4;
                return On(n.read());

              case 4:
                _yield$On = _context.sent;
                r = _yield$On.value;
                o = _yield$On.done;

                if (!o) {
                  _context.next = 11;
                  break;
                }

                _context.next = 10;
                return On(void 0);

              case 10:
                return _context.abrupt("return", _context.sent);

              case 11:
                _context.next = 13;
                return On(r);

              case 13:
                _context.next = 15;
                return _context.sent;

              case 15:
                _context.next = 2;
                break;

              case 17:
                _context.prev = 17;
                n.releaseLock();
                return _context.finish(17);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1,, 17, 20]]);
      }));
    }

    function Tc(e) {
      return D(e === null || e === void 0 ? void 0 : e.getReader);
    }

    function yn(e) {
      if (e instanceof Qe) return e;

      if (null != e) {
        if (Ec(e)) return function ID(e) {
          return new Qe(function (t) {
            var n = e[ke]();
            if (D(n.subscribe)) return n.subscribe(t);
            throw new TypeError("Provided object does not correctly implement Symbol.observable");
          });
        }(e);
        if (Cc(e)) return function SD(e) {
          return new Qe(function (t) {
            for (var n = 0; n < e.length && !t.closed; n++) {
              t.next(e[n]);
            }

            t.complete();
          });
        }(e);
        if (wc(e)) return function AD(e) {
          return new Qe(function (t) {
            e.then(function (n) {
              t.closed || (t.next(n), t.complete());
            }, function (n) {
              return t.error(n);
            }).then(null, ve);
          });
        }(e);
        if (bc(e)) return Nc(e);
        if (Sc(e)) return function TD(e) {
          return new Qe(function (t) {
            var _iterator4 = _createForOfIteratorHelper(e),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var n = _step4.value;
                if (t.next(n), t.closed) return;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            t.complete();
          });
        }(e);
        if (Tc(e)) return function ND(e) {
          return Nc(Ac(e));
        }(e);
      }

      throw Mc(e);
    }

    function Nc(e) {
      return new Qe(function (t) {
        (function xD(e, t) {
          var n, r, o, i;
          return function _D(e, t, n, r) {
            return new (n || (n = Promise))(function (i, s) {
              function a(c) {
                try {
                  l(r.next(c));
                } catch (d) {
                  s(d);
                }
              }

              function u(c) {
                try {
                  l(r["throw"](c));
                } catch (d) {
                  s(d);
                }
              }

              function l(c) {
                c.done ? i(c.value) : function o(i) {
                  return i instanceof n ? i : new n(function (s) {
                    s(i);
                  });
                }(c.value).then(a, u);
              }

              l((r = r.apply(e, t || [])).next());
            });
          }(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    n = ED(e);

                  case 2:
                    _context2.next = 4;
                    return n.next();

                  case 4:
                    if ((r = _context2.sent).done) {
                      _context2.next = 9;
                      break;
                    }

                    if (!(t.next(r.value), t.closed)) {
                      _context2.next = 7;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 7:
                    _context2.next = 2;
                    break;

                  case 9:
                    _context2.next = 14;
                    break;

                  case 11:
                    _context2.prev = 11;
                    _context2.t0 = _context2["catch"](0);
                    o = {
                      error: _context2.t0
                    };

                  case 14:
                    _context2.prev = 14;
                    _context2.prev = 15;
                    _context2.t1 = r && !r.done && (i = n["return"]);

                    if (!_context2.t1) {
                      _context2.next = 20;
                      break;
                    }

                    _context2.next = 20;
                    return i.call(n);

                  case 20:
                    _context2.prev = 20;

                    if (!o) {
                      _context2.next = 23;
                      break;
                    }

                    throw o.error;

                  case 23:
                    return _context2.finish(20);

                  case 24:
                    return _context2.finish(14);

                  case 25:
                    t.complete();

                  case 26:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[0, 11, 14, 25], [15,, 20, 24]]);
          }));
        })(e, t)["catch"](function (n) {
          return t.error(n);
        });
      });
    }

    function Dn(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      var i = t.schedule(function () {
        n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
      }, r);
      if (e.add(i), !o) return i;
    }

    function xc(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1 / 0;
      return D(t) ? xc(function (r, o) {
        return Ms(function (i, s) {
          return t(r, i, o, s);
        })(yn(e(r, o)));
      }, n) : ("number" == typeof t && (n = t), Hr(function (r, o) {
        return function FD(e, t, n, r, o, i, s, a) {
          var u = [];
          var l = 0,
              c = 0,
              d = !1;

          var f = function f() {
            d && !u.length && !l && t.complete();
          },
              h = function h(g) {
            return l < r ? p(g) : u.push(g);
          },
              p = function p(g) {
            i && t.next(g), l++;

            var _ = !1;

            yn(n(g, c++)).subscribe($r(t, function (b) {
              o !== null && o !== void 0 && o(b), i ? h(b) : t.next(b);
            }, function () {
              _ = !0;
            }, void 0, function () {
              if (_) try {
                var _loop = function _loop() {
                  var b = u.shift();
                  s ? Dn(t, s, function () {
                    return p(b);
                  }) : p(b);
                };

                for (l--; u.length && l < r;) {
                  _loop();
                }

                f();
              } catch (b) {
                t.error(b);
              }
            }));
          };

          return e.subscribe($r(t, h, function () {
            d = !0, f();
          })), function () {
            a === null || a === void 0 ? void 0 : a();
          };
        }(r, o, e, n);
      }));
    }

    var Fc = new Qe(function (e) {
      return e.complete();
    });

    function Ss(e) {
      return e[e.length - 1];
    }

    function Oc(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return Hr(function (n, r) {
        n.subscribe($r(r, function (o) {
          return Dn(r, e, function () {
            return r.next(o);
          }, t);
        }, function () {
          return Dn(r, e, function () {
            return r.complete();
          }, t);
        }, function (o) {
          return Dn(r, e, function () {
            return r.error(o);
          }, t);
        }));
      });
    }

    function Pc(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return Hr(function (n, r) {
        r.add(e.schedule(function () {
          return n.subscribe(r);
        }, t));
      });
    }

    function Rc(e, t) {
      if (!e) throw new Error("Iterable cannot be null");
      return new Qe(function (n) {
        Dn(n, t, function () {
          var r = e[Symbol.asyncIterator]();
          Dn(n, t, function () {
            r.next().then(function (o) {
              o.done ? n.complete() : n.next(o.value);
            });
          }, 0, !0);
        });
      });
    }

    function Vc(e, t) {
      return t ? function GD(e, t) {
        if (null != e) {
          if (Ec(e)) return function BD(e, t) {
            return yn(e).pipe(Pc(t), Oc(t));
          }(e, t);
          if (Cc(e)) return function HD(e, t) {
            return new Qe(function (n) {
              var r = 0;
              return t.schedule(function () {
                r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
              });
            });
          }(e, t);
          if (wc(e)) return function jD(e, t) {
            return yn(e).pipe(Pc(t), Oc(t));
          }(e, t);
          if (bc(e)) return Rc(e, t);
          if (Sc(e)) return function $D(e, t) {
            return new Qe(function (n) {
              var r;
              return Dn(n, t, function () {
                r = e[Ic](), Dn(n, t, function () {
                  var o, i;

                  try {
                    var _r$next = r.next();

                    o = _r$next.value;
                    i = _r$next.done;
                  } catch (s) {
                    return void n.error(s);
                  }

                  i ? n.complete() : n.next(o);
                }, 0, !0);
              }), function () {
                var _r;

                return D((_r = r) === null || _r === void 0 ? void 0 : _r["return"]) && r["return"]();
              };
            });
          }(e, t);
          if (Tc(e)) return function UD(e, t) {
            return Rc(Ac(e), t);
          }(e, t);
        }

        throw Mc(e);
      }(e, t) : yn(e);
    }

    function zD() {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      var t = function LD(e) {
        return function RD(e) {
          return e && D(e.schedule);
        }(Ss(e)) ? e.pop() : void 0;
      }(e),
          n = function kD(e, t) {
        return "number" == typeof Ss(e) ? e.pop() : t;
      }(e, 1 / 0),
          r = e;

      return r.length ? 1 === r.length ? yn(r[0]) : function OD() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1 / 0;
        return xc(pc, e);
      }(n)(Vc(r, t)) : Fc;
    }

    function As(e, t) {
      if (!0 === t) return void e();
      if (!1 === t) return;
      var r = new A({
        next: function next() {
          r.unsubscribe(), e();
        }
      });

      for (var _len4 = arguments.length, n = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        n[_key4 - 2] = arguments[_key4];
      }

      return t.apply(void 0, n).subscribe(r);
    }

    function le(e) {
      for (var t in e) {
        if (e[t] === le) return t;
      }

      throw Error("Could not find renamed property on target object.");
    }

    function Ts(e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
    }

    function ce(e) {
      if ("string" == typeof e) return e;
      if (Array.isArray(e)) return "[" + e.map(ce).join(", ") + "]";
      if (null == e) return "" + e;
      if (e.overriddenName) return "".concat(e.overriddenName);
      if (e.name) return "".concat(e.name);
      var t = e.toString();
      if (null == t) return "" + t;
      var n = t.indexOf("\n");
      return -1 === n ? t : t.substring(0, n);
    }

    function Ns(e, t) {
      return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t;
    }

    var qD = le({
      __forward_ref__: le
    });

    function fe(e) {
      return e.__forward_ref__ = fe, e.toString = function () {
        return ce(this());
      }, e;
    }

    function $(e) {
      return xs(e) ? e() : e;
    }

    function xs(e) {
      return "function" == typeof e && e.hasOwnProperty(qD) && e.__forward_ref__ === fe;
    }

    var O = /*#__PURE__*/function (_Error) {
      _inherits(O, _Error);

      var _super6 = _createSuper(O);

      function O(t, n) {
        var _this13;

        _classCallCheck(this, O);

        _this13 = _super6.call(this, function jo(e, t) {
          return "NG0".concat(Math.abs(e)).concat(t ? ": " + t.trim() : "");
        }(t, n)), _this13.code = t;
        return _this13;
      }

      return _createClass(O);
    }( /*#__PURE__*/_wrapNativeSuper(Error));

    function z(e) {
      return "string" == typeof e ? e : null == e ? "" : String(e);
    }

    function Ho(e, t) {
      throw new O(-201, !1);
    }

    function lt(e, t) {
      null == e && function ie(e, t, n, r) {
        throw new Error("ASSERTION ERROR: ".concat(e) + (null == r ? "" : " [Expected=> ".concat(n, " ").concat(r, " ").concat(t, " <=Actual]")));
      }(t, e, null, "!=");
    }

    function ge(e) {
      return {
        token: e.token,
        providedIn: e.providedIn || null,
        factory: e.factory,
        value: void 0
      };
    }

    function Ht(e) {
      return {
        providers: e.providers || [],
        imports: e.imports || []
      };
    }

    function $o(e) {
      return Lc(e, Uo) || Lc(e, Bc);
    }

    function Lc(e, t) {
      return e.hasOwnProperty(t) ? e[t] : null;
    }

    function kc(e) {
      return e && (e.hasOwnProperty(Fs) || e.hasOwnProperty(tv)) ? e[Fs] : null;
    }

    var Uo = le({
      ɵprov: le
    }),
        Fs = le({
      ɵinj: le
    }),
        Bc = le({
      ngInjectableDef: le
    }),
        tv = le({
      ngInjectorDef: le
    });

    var U = function () {
      return (U = U || {})[U.Default = 0] = "Default", U[U.Host = 1] = "Host", U[U.Self = 2] = "Self", U[U.SkipSelf = 4] = "SkipSelf", U[U.Optional = 8] = "Optional", U;
    }();

    var Os;

    function yt(e) {
      var t = Os;
      return Os = e, t;
    }

    function jc(e, t, n) {
      var r = $o(e);
      return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & U.Optional ? null : void 0 !== t ? t : void Ho(ce(e));
    }

    function vn(e) {
      return {
        toString: e
      }.toString();
    }

    var St = function () {
      return (St = St || {})[St.OnPush = 0] = "OnPush", St[St.Default = 1] = "Default", St;
    }(),
        $t = function () {
      return (e = $t || ($t = {}))[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", $t;
      var e;
    }();

    var de = function () {
      return (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" && globalThis || (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" && global || (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window || (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && (typeof WorkerGlobalScope === "undefined" ? "undefined" : _typeof(WorkerGlobalScope)) < "u" && self instanceof WorkerGlobalScope && self;
    }(),
        Kn = {},
        oe = [],
        Go = le({
      ɵcmp: le
    }),
        Ps = le({
      ɵdir: le
    }),
        Rs = le({
      ɵpipe: le
    }),
        Hc = le({
      ɵmod: le
    }),
        tn = le({
      ɵfac: le
    }),
        Ur = le({
      __NG_ELEMENT_ID__: le
    });

    var rv = 0;

    function Vs(e) {
      return vn(function () {
        var n = !0 === e.standalone,
            r = {},
            o = {
          type: e.type,
          providersResolver: null,
          decls: e.decls,
          vars: e.vars,
          factory: null,
          template: e.template || null,
          consts: e.consts || null,
          ngContentSelectors: e.ngContentSelectors,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: r,
          inputs: null,
          outputs: null,
          exportAs: e.exportAs || null,
          onPush: e.changeDetection === St.OnPush,
          directiveDefs: null,
          pipeDefs: null,
          standalone: n,
          dependencies: n && e.dependencies || null,
          getStandaloneInjector: null,
          selectors: e.selectors || oe,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          data: e.data || {},
          encapsulation: e.encapsulation || $t.Emulated,
          id: "c" + rv++,
          styles: e.styles || oe,
          _: null,
          setInput: null,
          schemas: e.schemas || null,
          tView: null
        },
            i = e.dependencies,
            s = e.features;
        return o.inputs = Gc(e.inputs, r), o.outputs = Gc(e.outputs), s && s.forEach(function (a) {
          return a(o);
        }), o.directiveDefs = i ? function () {
          return ("function" == typeof i ? i() : i).map($c).filter(Uc);
        } : null, o.pipeDefs = i ? function () {
          return ("function" == typeof i ? i() : i).map(Ye).filter(Uc);
        } : null, o;
      });
    }

    function $c(e) {
      return ae(e) || Ke(e);
    }

    function Uc(e) {
      return null !== e;
    }

    function nn(e) {
      return vn(function () {
        return {
          type: e.type,
          bootstrap: e.bootstrap || oe,
          declarations: e.declarations || oe,
          imports: e.imports || oe,
          exports: e.exports || oe,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null
        };
      });
    }

    function Gc(e, t) {
      if (null == e) return Kn;
      var n = {};

      for (var r in e) {
        if (e.hasOwnProperty(r)) {
          var o = e[r],
              i = o;
          Array.isArray(o) && (i = o[1], o = o[0]), n[o] = r, t && (t[o] = i);
        }
      }

      return n;
    }

    var W = Vs;

    function ae(e) {
      return e[Go] || null;
    }

    function Ke(e) {
      return e[Ps] || null;
    }

    function Ye(e) {
      return e[Rs] || null;
    }

    var J = 11;

    function it(e) {
      return Array.isArray(e) && "object" == _typeof(e[1]);
    }

    function Tt(e) {
      return Array.isArray(e) && !0 === e[1];
    }

    function Bs(e) {
      return 0 != (8 & e.flags);
    }

    function Zo(e) {
      return 2 == (2 & e.flags);
    }

    function Qo(e) {
      return 1 == (1 & e.flags);
    }

    function Nt(e) {
      return null !== e.template;
    }

    function lv(e) {
      return 0 != (256 & e[2]);
    }

    function kn(e, t) {
      return e.hasOwnProperty(tn) ? e[tn] : null;
    }

    var fv = /*#__PURE__*/function () {
      function fv(t, n, r) {
        _classCallCheck(this, fv);

        this.previousValue = t, this.currentValue = n, this.firstChange = r;
      }

      _createClass(fv, [{
        key: "isFirstChange",
        value: function isFirstChange() {
          return this.firstChange;
        }
      }]);

      return fv;
    }();

    function rn() {
      return qc;
    }

    function qc(e) {
      return e.type.prototype.ngOnChanges && (e.setInput = pv), hv;
    }

    function hv() {
      var e = Qc(this),
          t = e === null || e === void 0 ? void 0 : e.current;

      if (t) {
        var n = e.previous;
        if (n === Kn) e.previous = t;else for (var r in t) {
          n[r] = t[r];
        }
        e.current = null, this.ngOnChanges(t);
      }
    }

    function pv(e, t, n, r) {
      var o = Qc(e) || function gv(e, t) {
        return e[Zc] = t;
      }(e, {
        previous: Kn,
        current: null
      }),
          i = o.current || (o.current = {}),
          s = o.previous,
          a = this.declaredInputs[n],
          u = s[a];

      i[a] = new fv(u && u.currentValue, t, s === Kn), e[r] = t;
    }

    rn.ngInherit = !0;
    var Zc = "__ngSimpleChanges__";

    function Qc(e) {
      return e[Zc] || null;
    }

    function Me(e) {
      for (; Array.isArray(e);) {
        e = e[0];
      }

      return e;
    }

    function Ko(e, t) {
      return Me(t[e]);
    }

    function _t(e, t) {
      return Me(t[e.index]);
    }

    function Gs(e, t) {
      return e.data[t];
    }

    function ft(e, t) {
      var n = t[e];
      return it(n) ? n : n[0];
    }

    function Yo(e) {
      return 64 == (64 & e[2]);
    }

    function _n(e, t) {
      return null == t ? null : e[t];
    }

    function Yc(e) {
      e[18] = 0;
    }

    function zs(e, t) {
      e[5] += t;
      var n = e,
          r = e[3];

      for (; null !== r && (1 === t && 1 === n[5] || -1 === t && 0 === n[5]);) {
        r[5] += t, n = r, r = r[3];
      }
    }

    var G = {
      lFrame: sd(null),
      bindingsEnabled: !0
    };

    function Xc() {
      return G.bindingsEnabled;
    }

    function y() {
      return G.lFrame.lView;
    }

    function te() {
      return G.lFrame.tView;
    }

    function Ne() {
      var e = ed();

      for (; null !== e && 64 === e.type;) {
        e = e.parent;
      }

      return e;
    }

    function ed() {
      return G.lFrame.currentTNode;
    }

    function Ut(e, t) {
      var n = G.lFrame;
      n.currentTNode = e, n.isParent = t;
    }

    function Ws() {
      return G.lFrame.isParent;
    }

    function nr() {
      return G.lFrame.bindingIndex++;
    }

    function xv(e, t) {
      var n = G.lFrame;
      n.bindingIndex = n.bindingRootIndex = e, Zs(t);
    }

    function Zs(e) {
      G.lFrame.currentDirectiveIndex = e;
    }

    function Ks(e) {
      G.lFrame.currentQueryIndex = e;
    }

    function Ov(e) {
      var t = e[1];
      return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
    }

    function od(e, t, n) {
      if (n & U.SkipSelf) {
        var o = t,
            i = e;

        for (; !(o = o.parent, null !== o || n & U.Host || (o = Ov(i), null === o || (i = i[15], 10 & o.type)));) {
          ;
        }

        if (null === o) return !1;
        t = o, e = i;
      }

      var r = G.lFrame = id();
      return r.currentTNode = t, r.lView = e, !0;
    }

    function Ys(e) {
      var t = id(),
          n = e[1];
      G.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1;
    }

    function id() {
      var e = G.lFrame,
          t = null === e ? null : e.child;
      return null === t ? sd(e) : t;
    }

    function sd(e) {
      var t = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: e,
        child: null,
        inI18n: !1
      };
      return null !== e && (e.child = t), t;
    }

    function ad() {
      var e = G.lFrame;
      return G.lFrame = e.parent, e.currentTNode = null, e.lView = null, e;
    }

    var ud = ad;

    function Js() {
      var e = ad();
      e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0;
    }

    function Xe() {
      return G.lFrame.selectedIndex;
    }

    function Cn(e) {
      G.lFrame.selectedIndex = e;
    }

    function Xo(e, t) {
      for (var n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
        var i = e.data[n].type.prototype,
            s = i.ngAfterContentInit,
            a = i.ngAfterContentChecked,
            u = i.ngAfterViewInit,
            l = i.ngAfterViewChecked,
            c = i.ngOnDestroy;
        s && (e.contentHooks || (e.contentHooks = [])).push(-n, s), a && ((e.contentHooks || (e.contentHooks = [])).push(n, a), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, a)), u && (e.viewHooks || (e.viewHooks = [])).push(-n, u), l && ((e.viewHooks || (e.viewHooks = [])).push(n, l), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, l)), null != c && (e.destroyHooks || (e.destroyHooks = [])).push(n, c);
      }
    }

    function ei(e, t, n) {
      ld(e, t, 3, n);
    }

    function ti(e, t, n, r) {
      (3 & e[2]) === n && ld(e, t, n, r);
    }

    function Xs(e, t) {
      var n = e[2];
      (3 & n) === t && (n &= 2047, n += 1, e[2] = n);
    }

    function ld(e, t, n, r) {
      var i = r !== null && r !== void 0 ? r : -1,
          s = t.length - 1;
      var a = 0;

      for (var u = void 0 !== r ? 65535 & e[18] : 0; u < s; u++) {
        if ("number" == typeof t[u + 1]) {
          if (a = t[u], null != r && a >= r) break;
        } else t[u] < 0 && (e[18] += 65536), (a < i || -1 == i) && ($v(e, n, t, u), e[18] = (4294901760 & e[18]) + u + 2), u++;
      }
    }

    function $v(e, t, n, r) {
      var o = n[r] < 0,
          i = n[r + 1],
          a = e[o ? -n[r] : n[r]];

      if (o) {
        if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
          e[2] += 2048;

          try {
            i.call(a);
          } finally {}
        }
      } else try {
        i.call(a);
      } finally {}
    }

    var Qr = /*#__PURE__*/_createClass(function Qr(t, n, r) {
      _classCallCheck(this, Qr);

      this.factory = t, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r;
    });

    function ni(e, t, n) {
      var r = 0;

      for (; r < n.length;) {
        var o = n[r];

        if ("number" == typeof o) {
          if (0 !== o) break;
          r++;
          var i = n[r++],
              s = n[r++],
              a = n[r++];
          e.setAttribute(t, s, a, i);
        } else {
          var _i3 = o,
              _s = n[++r];
          dd(_i3) ? e.setProperty(t, _i3, _s) : e.setAttribute(t, _i3, _s), r++;
        }
      }

      return r;
    }

    function cd(e) {
      return 3 === e || 4 === e || 6 === e;
    }

    function dd(e) {
      return 64 === e.charCodeAt(0);
    }

    function ri(e, t) {
      if (null !== t && 0 !== t.length) if (null === e || 0 === e.length) e = t.slice();else {
        var n = -1;

        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          "number" == typeof o ? n = o : 0 === n || fd(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
        }
      }
      return e;
    }

    function fd(e, t, n, r, o) {
      var i = 0,
          s = e.length;
      if (-1 === t) s = -1;else for (; i < e.length;) {
        var a = e[i++];

        if ("number" == typeof a) {
          if (a === t) {
            s = -1;
            break;
          }

          if (a > t) {
            s = i - 1;
            break;
          }
        }
      }

      for (; i < e.length;) {
        var _a2 = e[i];
        if ("number" == typeof _a2) break;

        if (_a2 === n) {
          if (null === r) return void (null !== o && (e[i + 1] = o));
          if (r === e[i + 1]) return void (e[i + 2] = o);
        }

        i++, null !== r && i++, null !== o && i++;
      }

      -1 !== s && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), null !== r && e.splice(i++, 0, r), null !== o && e.splice(i++, 0, o);
    }

    function rr(e) {
      return 32767 & e;
    }

    function or(e, t) {
      var n = function qv(e) {
        return e >> 16;
      }(e),
          r = t;

      for (; n > 0;) {
        r = r[15], n--;
      }

      return r;
    }

    var ta = !0;

    function oi(e) {
      var t = ta;
      return ta = e, t;
    }

    var Zv = 0;
    var Gt = {};

    function Yr(e, t) {
      var n = ra(e, t);
      if (-1 !== n) return n;
      var r = t[1];
      r.firstCreatePass && (e.injectorIndex = t.length, na(r.data, e), na(t, null), na(r.blueprint, null));
      var o = ii(e, t),
          i = e.injectorIndex;

      if (function hd(e) {
        return -1 !== e;
      }(o)) {
        var s = rr(o),
            a = or(o, t),
            u = a[1].data;

        for (var l = 0; l < 8; l++) {
          t[i + l] = a[s + l] | u[s + l];
        }
      }

      return t[i + 8] = o, i;
    }

    function na(e, t) {
      e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
    }

    function ra(e, t) {
      return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : e.injectorIndex;
    }

    function ii(e, t) {
      if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
      var n = 0,
          r = null,
          o = t;

      for (; null !== o;) {
        if (r = wd(o), null === r) return -1;
        if (n++, o = o[15], -1 !== r.injectorIndex) return r.injectorIndex | n << 16;
      }

      return -1;
    }

    function si(e, t, n) {
      !function Qv(e, t, n) {
        var r;
        "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(Ur) && (r = n[Ur]), null == r && (r = n[Ur] = Zv++);
        var o = 255 & r;
        t.data[e + (o >> 5)] |= 1 << o;
      }(e, t, n);
    }

    function md(e, t, n) {
      if (n & U.Optional) return e;
      Ho();
    }

    function yd(e, t, n, r) {
      if (n & U.Optional && void 0 === r && (r = null), 0 == (n & (U.Self | U.Host))) {
        var o = e[9],
            i = yt(void 0);

        try {
          return o ? o.get(t, r, n & U.Optional) : jc(t, r, n & U.Optional);
        } finally {
          yt(i);
        }
      }

      return md(r, 0, n);
    }

    function Dd(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : U.Default;
      var o = arguments.length > 4 ? arguments[4] : undefined;

      if (null !== e) {
        if (1024 & t[2]) {
          var s = function e_(e, t, n, r, o) {
            var i = e,
                s = t;

            for (; null !== i && null !== s && 1024 & s[2] && !(256 & s[2]);) {
              var a = vd(i, s, n, r | U.Self, Gt);
              if (a !== Gt) return a;
              var u = i.parent;

              if (!u) {
                var l = s[21];

                if (l) {
                  var c = l.get(n, Gt, r);
                  if (c !== Gt) return c;
                }

                u = wd(s), s = s[15];
              }

              i = u;
            }

            return o;
          }(e, t, n, r, Gt);

          if (s !== Gt) return s;
        }

        var i = vd(e, t, n, r, Gt);
        if (i !== Gt) return i;
      }

      return yd(t, n, r, o);
    }

    function vd(e, t, n, r, o) {
      var i = function Jv(e) {
        if ("string" == typeof e) return e.charCodeAt(0) || 0;
        var t = e.hasOwnProperty(Ur) ? e[Ur] : void 0;
        return "number" == typeof t ? t >= 0 ? 255 & t : Xv : t;
      }(n);

      if ("function" == typeof i) {
        if (!od(t, e, r)) return r & U.Host ? md(o, 0, r) : yd(t, n, r, o);

        try {
          var s = i(r);
          if (null != s || r & U.Optional) return s;
          Ho();
        } finally {
          ud();
        }
      } else if ("number" == typeof i) {
        var _s2 = null,
            a = ra(e, t),
            u = -1,
            l = r & U.Host ? t[16][6] : null;

        for ((-1 === a || r & U.SkipSelf) && (u = -1 === a ? ii(e, t) : t[a + 8], -1 !== u && Cd(r, !1) ? (_s2 = t[1], a = rr(u), t = or(u, t)) : a = -1); -1 !== a;) {
          var c = t[1];

          if (_d(i, a, c.data)) {
            var d = Yv(a, t, n, _s2, r, l);
            if (d !== Gt) return d;
          }

          u = t[a + 8], -1 !== u && Cd(r, t[1].data[a + 8] === l) && _d(i, a, t) ? (_s2 = c, a = rr(u), t = or(u, t)) : a = -1;
        }
      }

      return o;
    }

    function Yv(e, t, n, r, o, i) {
      var s = t[1],
          a = s.data[e + 8],
          c = function ai(e, t, n, r, o) {
        var i = e.providerIndexes,
            s = t.data,
            a = 1048575 & i,
            u = e.directiveStart,
            c = i >> 20,
            f = o ? a + c : e.directiveEnd;

        for (var h = r ? a : a + c; h < f; h++) {
          var p = s[h];
          if (h < u && n === p || h >= u && p.type === n) return h;
        }

        if (o) {
          var _h2 = s[u];
          if (_h2 && Nt(_h2) && _h2.type === n) return u;
        }

        return null;
      }(a, s, n, null == r ? Zo(a) && ta : r != s && 0 != (3 & a.type), o & U.Host && i === a);

      return null !== c ? Jr(t, s, c, a) : Gt;
    }

    function Jr(e, t, n, r) {
      var o = e[n];
      var i = t.data;

      if (function Uv(e) {
        return e instanceof Qr;
      }(o)) {
        var s = o;
        s.resolving && function ZD(e, t) {
          var n = t ? ". Dependency path: ".concat(t.join(" > "), " > ").concat(e) : "";
          throw new O(-200, "Circular dependency in DI detected for ".concat(e).concat(n));
        }(function re(e) {
          return "function" == typeof e ? e.name || e.toString() : "object" == _typeof(e) && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : z(e);
        }(i[n]));
        var a = oi(s.canSeeViewProviders);
        s.resolving = !0;
        var u = s.injectImpl ? yt(s.injectImpl) : null;
        od(e, r, U.Default);

        try {
          o = e[n] = s.factory(void 0, i, e, r), t.firstCreatePass && n >= r.directiveStart && function Hv(e, t, n) {
            var _t$type$prototype = t.type.prototype,
                r = _t$type$prototype.ngOnChanges,
                o = _t$type$prototype.ngOnInit,
                i = _t$type$prototype.ngDoCheck;

            if (r) {
              var _s3 = qc(t);

              (n.preOrderHooks || (n.preOrderHooks = [])).push(e, _s3), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, _s3);
            }

            o && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o), i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, i));
          }(n, i[n], t);
        } finally {
          null !== u && yt(u), oi(a), s.resolving = !1, ud();
        }
      }

      return o;
    }

    function _d(e, t, n) {
      return !!(n[t + (e >> 5)] & 1 << e);
    }

    function Cd(e, t) {
      return !(e & U.Self || e & U.Host && t);
    }

    var ir = /*#__PURE__*/function () {
      function ir(t, n) {
        _classCallCheck(this, ir);

        this._tNode = t, this._lView = n;
      }

      _createClass(ir, [{
        key: "get",
        value: function get(t, n, r) {
          return Dd(this._tNode, this._lView, t, r, n);
        }
      }]);

      return ir;
    }();

    function Xv() {
      return new ir(Ne(), y());
    }

    function $e(e) {
      return vn(function () {
        var t = e.prototype.constructor,
            n = t[tn] || oa(t),
            r = Object.prototype;
        var o = Object.getPrototypeOf(e.prototype).constructor;

        for (; o && o !== r;) {
          var i = o[tn] || oa(o);
          if (i && i !== n) return i;
          o = Object.getPrototypeOf(o);
        }

        return function (i) {
          return new i();
        };
      });
    }

    function oa(e) {
      return xs(e) ? function () {
        var t = oa($(e));
        return t && t();
      } : kn(e);
    }

    function wd(e) {
      var t = e[1],
          n = t.type;
      return 2 === n ? t.declTNode : 1 === n ? e[6] : null;
    }

    var K = /*#__PURE__*/function () {
      function K(t, n) {
        _classCallCheck(this, K);

        this._desc = t, this.ngMetadataName = "InjectionToken", this.ɵprov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.ɵprov = ge({
          token: this,
          providedIn: n.providedIn || "root",
          factory: n.factory
        }));
      }

      _createClass(K, [{
        key: "multi",
        get: function get() {
          return this;
        }
      }, {
        key: "toString",
        value: function toString() {
          return "InjectionToken ".concat(this._desc);
        }
      }]);

      return K;
    }();

    function an(e, t) {
      e.forEach(function (n) {
        return Array.isArray(n) ? an(n, t) : t(n);
      });
    }

    function ui(e, t) {
      return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
    }

    function pt(e, t, n) {
      var r = cr(e, t);
      return r >= 0 ? e[1 | r] = n : (r = ~r, function o_(e, t, n, r) {
        var o = e.length;
        if (o == t) e.push(n, r);else if (1 === o) e.push(r, e[0]), e[0] = n;else {
          for (o--, e.push(e[o - 1], e[o]); o > t;) {
            e[o] = e[o - 2], o--;
          }

          e[t] = n, e[t + 1] = r;
        }
      }(e, r, t, n)), r;
    }

    function ua(e, t) {
      var n = cr(e, t);
      if (n >= 0) return e[1 | n];
    }

    function cr(e, t) {
      return function Sd(e, t, n) {
        var r = 0,
            o = e.length >> n;

        for (; o !== r;) {
          var i = r + (o - r >> 1),
              s = e[i << n];
          if (t === s) return i << n;
          s > t ? o = i : r = i + 1;
        }

        return ~(o << n);
      }(e, t, 1);
    }

    var no = {},
        ci = "ngTempTokenPath",
        f_ = /\n/gm,
        Ad = "__source";
    var ro, ha;

    function dr(e) {
      var t = ro;
      return ro = e, t;
    }

    function p_(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : U.Default;
      if (void 0 === ro) throw new O(-203, !1);
      return null === ro ? jc(e, void 0, t) : ro.get(e, t & U.Optional ? null : void 0, t);
    }

    function se(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : U.Default;
      return (function nv() {
        return Os;
      }() || p_)($(e), t);
    }

    function da(e) {
      var t = [];

      for (var n = 0; n < e.length; n++) {
        var r = $(e[n]);

        if (Array.isArray(r)) {
          if (0 === r.length) throw new O(900, !1);
          var o = void 0,
              i = U.Default;

          for (var s = 0; s < r.length; s++) {
            var a = r[s],
                u = m_(a);
            "number" == typeof u ? -1 === u ? o = a.token : i |= u : o = a;
          }

          t.push(se(o, i));
        } else t.push(se(r));
      }

      return t;
    }

    function m_(e) {
      return e.__NG_DI_FLAG__;
    }

    var Yd = new K("ENVIRONMENT_INITIALIZER"),
        Jd = new K("INJECTOR", -1),
        Xd = new K("INJECTOR_DEF_TYPES");

    var ef = /*#__PURE__*/function () {
      function ef() {
        _classCallCheck(this, ef);
      }

      _createClass(ef, [{
        key: "get",
        value: function get(t) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : no;

          if (n === no) {
            var r = new Error("NullInjectorError: No provider for ".concat(ce(t), "!"));
            throw r.name = "NullInjectorError", r;
          }

          return n;
        }
      }]);

      return ef;
    }();

    function eC() {
      for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        e[_key5] = arguments[_key5];
      }

      return {
        ɵproviders: tf(0, e)
      };
    }

    function tf(e) {
      var n = [],
          r = new Set();
      var o;

      for (var _len6 = arguments.length, t = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        t[_key6 - 1] = arguments[_key6];
      }

      return an(t, function (i) {
        var s = i;
        _a(s, n, [], r) && (o || (o = []), o.push(s));
      }), void 0 !== o && nf(o, n), n;
    }

    function nf(e, t) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n].providers;
        an(o, function (i) {
          t.push(i);
        });
      }
    }

    function _a(e, t, n, r) {
      if (!(e = $(e))) return !1;
      var o = null,
          i = kc(e);
      var s = !i && ae(e);

      if (i || s) {
        if (s && !s.standalone) return !1;
        o = e;
      } else {
        var u = e.ngModule;
        if (i = kc(u), !i) return !1;
        o = u;
      }

      var a = r.has(o);

      if (s) {
        if (a) return !1;

        if (r.add(o), s.dependencies) {
          var _u2 = "function" == typeof s.dependencies ? s.dependencies() : s.dependencies;

          var _iterator5 = _createForOfIteratorHelper(_u2),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var l = _step5.value;

              _a(l, t, n, r);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      } else {
        if (!i) return !1;
        {
          if (null != i.imports && !a) {
            var _l;

            r.add(o);

            try {
              an(i.imports, function (c) {
                _a(c, t, n, r) && (_l || (_l = []), _l.push(c));
              });
            } finally {}

            void 0 !== _l && nf(_l, t);
          }

          if (!a) {
            var _l2 = kn(o) || function () {
              return new o();
            };

            t.push({
              provide: o,
              useFactory: _l2,
              deps: oe
            }, {
              provide: Xd,
              useValue: o,
              multi: !0
            }, {
              provide: Yd,
              useValue: function useValue() {
                return se(o);
              },
              multi: !0
            });
          }

          var _u3 = i.providers;
          null == _u3 || a || an(_u3, function (c) {
            t.push(c);
          });
        }
      }

      return o !== e && void 0 !== e.providers;
    }

    var tC = le({
      provide: String,
      useValue: le
    });

    function Ca(e) {
      return null !== e && "object" == _typeof(e) && tC in e;
    }

    function Bn(e) {
      return "function" == typeof e;
    }

    var wa = new K("Set Injector scope."),
        vi = {},
        rC = {};
    var Ea;

    function _i() {
      return void 0 === Ea && (Ea = new ef()), Ea;
    }

    var pr = /*#__PURE__*/_createClass(function pr() {
      _classCallCheck(this, pr);
    });

    var sf = /*#__PURE__*/function (_pr) {
      _inherits(sf, _pr);

      var _super7 = _createSuper(sf);

      function sf(t, n, r, o) {
        var _this14;

        _classCallCheck(this, sf);

        _this14 = _super7.call(this), _this14.parent = n, _this14.source = r, _this14.scopes = o, _this14.records = new Map(), _this14._ngOnDestroyHooks = new Set(), _this14._onDestroyHooks = [], _this14._destroyed = !1, Ma(t, function (s) {
          return _this14.processProvider(s);
        }), _this14.records.set(Jd, gr(void 0, _assertThisInitialized(_this14))), o.has("environment") && _this14.records.set(pr, gr(void 0, _assertThisInitialized(_this14)));

        var i = _this14.records.get(wa);

        null != i && "string" == typeof i.value && _this14.scopes.add(i.value), _this14.injectorDefTypes = new Set(_this14.get(Xd.multi, oe, U.Self));
        return _this14;
      }

      _createClass(sf, [{
        key: "destroyed",
        get: function get() {
          return this._destroyed;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.assertNotDestroyed(), this._destroyed = !0;

          try {
            var _iterator6 = _createForOfIteratorHelper(this._ngOnDestroyHooks),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var t = _step6.value;
                t.ngOnDestroy();
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            var _iterator7 = _createForOfIteratorHelper(this._onDestroyHooks),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _t3 = _step7.value;

                _t3();
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          } finally {
            this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), this._onDestroyHooks.length = 0;
          }
        }
      }, {
        key: "onDestroy",
        value: function onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
      }, {
        key: "runInContext",
        value: function runInContext(t) {
          this.assertNotDestroyed();
          var n = dr(this),
              r = yt(void 0);

          try {
            return t();
          } finally {
            dr(n), yt(r);
          }
        }
      }, {
        key: "get",
        value: function get(t) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : no;
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : U.Default;
          this.assertNotDestroyed();
          var o = dr(this),
              i = yt(void 0);

          try {
            if (!(r & U.SkipSelf)) {
              var a = this.records.get(t);

              if (void 0 === a) {
                var u = function uC(e) {
                  return "function" == typeof e || "object" == _typeof(e) && e instanceof K;
                }(t) && $o(t);

                a = u && this.injectableDefInScope(u) ? gr(ba(t), vi) : null, this.records.set(t, a);
              }

              if (null != a) return this.hydrate(t, a);
            }

            return (r & U.Self ? _i() : this.parent).get(t, n = r & U.Optional && n === no ? null : n);
          } catch (s) {
            if ("NullInjectorError" === s.name) {
              if ((s[ci] = s[ci] || []).unshift(ce(t)), o) throw s;
              return function y_(e, t, n, r) {
                var o = e[ci];
                throw t[Ad] && o.unshift(t[Ad]), e.message = function D_(e, t, n) {
                  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                  e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.slice(2) : e;
                  var o = ce(t);
                  if (Array.isArray(t)) o = t.map(ce).join(" -> ");else if ("object" == _typeof(t)) {
                    var _i4 = [];

                    for (var _s4 in t) {
                      if (t.hasOwnProperty(_s4)) {
                        var _a3 = t[_s4];

                        _i4.push(_s4 + ":" + ("string" == typeof _a3 ? JSON.stringify(_a3) : ce(_a3)));
                      }
                    }

                    o = "{".concat(_i4.join(", "), "}");
                  }
                  return "".concat(n).concat(r ? "(" + r + ")" : "", "[").concat(o, "]: ").concat(e.replace(f_, "\n  "));
                }("\n" + e.message, o, n, r), e.ngTokenPath = o, e[ci] = null, e;
              }(s, t, "R3InjectorError", this.source);
            }

            throw s;
          } finally {
            yt(i), dr(o);
          }
        }
      }, {
        key: "resolveInjectorInitializers",
        value: function resolveInjectorInitializers() {
          var t = dr(this),
              n = yt(void 0);

          try {
            var r = this.get(Yd.multi, oe, U.Self);

            var _iterator8 = _createForOfIteratorHelper(r),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var o = _step8.value;
                o();
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          } finally {
            dr(t), yt(n);
          }
        }
      }, {
        key: "toString",
        value: function toString() {
          var t = [],
              n = this.records;

          var _iterator9 = _createForOfIteratorHelper(n.keys()),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var r = _step9.value;
              t.push(ce(r));
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          return "R3Injector[".concat(t.join(", "), "]");
        }
      }, {
        key: "assertNotDestroyed",
        value: function assertNotDestroyed() {
          if (this._destroyed) throw new O(205, !1);
        }
      }, {
        key: "processProvider",
        value: function processProvider(t) {
          var n = Bn(t = $(t)) ? t : $(t && t.provide);

          var r = function iC(e) {
            return Ca(e) ? gr(void 0, e.useValue) : gr(af(e), vi);
          }(t);

          if (Bn(t) || !0 !== t.multi) this.records.get(n);else {
            var o = this.records.get(n);
            o || (o = gr(void 0, vi, !0), o.factory = function () {
              return da(o.multi);
            }, this.records.set(n, o)), n = t, o.multi.push(t);
          }
          this.records.set(n, r);
        }
      }, {
        key: "hydrate",
        value: function hydrate(t, n) {
          return n.value === vi && (n.value = rC, n.value = n.factory()), "object" == _typeof(n.value) && n.value && function aC(e) {
            return null !== e && "object" == _typeof(e) && "function" == typeof e.ngOnDestroy;
          }(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
        }
      }, {
        key: "injectableDefInScope",
        value: function injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          var n = $(t.providedIn);
          return "string" == typeof n ? "any" === n || this.scopes.has(n) : this.injectorDefTypes.has(n);
        }
      }]);

      return sf;
    }(pr);

    function ba(e) {
      var t = $o(e),
          n = null !== t ? t.factory : kn(e);
      if (null !== n) return n;
      if (e instanceof K) throw new O(204, !1);
      if (e instanceof Function) return function oC(e) {
        var t = e.length;
        if (t > 0) throw function to(e, t) {
          var n = [];

          for (var r = 0; r < e; r++) {
            n.push(t);
          }

          return n;
        }(t, "?"), new O(204, !1);

        var n = function XD(e) {
          var t = e && (e[Uo] || e[Bc]);

          if (t) {
            var _n2 = function ev(e) {
              if (e.hasOwnProperty("name")) return e.name;
              var t = ("" + e).match(/^function\s*([^\s(]+)/);
              return null === t ? "" : t[1];
            }(e);

            return console.warn("DEPRECATED: DI is instantiating a token \"".concat(_n2, "\" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the \"").concat(_n2, "\" class.")), t;
          }

          return null;
        }(e);

        return null !== n ? function () {
          return n.factory(e);
        } : function () {
          return new e();
        };
      }(e);
      throw new O(204, !1);
    }

    function af(e, t, n) {
      var r;

      if (Bn(e)) {
        var o = $(e);
        return kn(o) || ba(o);
      }

      if (Ca(e)) r = function r() {
        return $(e.useValue);
      };else if (function of(e) {
        return !(!e || !e.useFactory);
      }(e)) r = function r() {
        return e.useFactory.apply(e, _toConsumableArray(da(e.deps || [])));
      };else if (function rf(e) {
        return !(!e || !e.useExisting);
      }(e)) r = function r() {
        return se($(e.useExisting));
      };else {
        var _o2 = $(e && (e.useClass || e.provide));

        if (!function sC(e) {
          return !!e.deps;
        }(e)) return kn(_o2) || ba(_o2);

        r = function r() {
          return _construct(_o2, _toConsumableArray(da(e.deps)));
        };
      }
      return r;
    }

    function gr(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      return {
        factory: e,
        value: t,
        multi: n ? [] : void 0
      };
    }

    function lC(e) {
      return !!e.ɵproviders;
    }

    function Ma(e, t) {
      var _iterator10 = _createForOfIteratorHelper(e),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var n = _step10.value;
          Array.isArray(n) ? Ma(n, t) : lC(n) ? Ma(n.ɵproviders, t) : t(n);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }

    var uf = /*#__PURE__*/_createClass(function uf() {
      _classCallCheck(this, uf);
    });

    var fC = /*#__PURE__*/function () {
      function fC() {
        _classCallCheck(this, fC);
      }

      _createClass(fC, [{
        key: "resolveComponentFactory",
        value: function resolveComponentFactory(t) {
          throw function dC(e) {
            var t = Error("No component factory found for ".concat(ce(e), ". Did you add it to @NgModule.entryComponents?"));
            return t.ngComponent = e, t;
          }(t);
        }
      }]);

      return fC;
    }();

    var Ci = function () {
      var e = /*#__PURE__*/_createClass(function e() {
        _classCallCheck(this, e);
      });

      return e.NULL = new fC(), e;
    }();

    function hC() {
      return mr(Ne(), y());
    }

    function mr(e, t) {
      return new xt(_t(e, t));
    }

    var xt = function () {
      var e = /*#__PURE__*/_createClass(function e(n) {
        _classCallCheck(this, e);

        this.nativeElement = n;
      });

      return e.__NG_ELEMENT_ID__ = hC, e;
    }();

    var cf = /*#__PURE__*/_createClass(function cf() {
      _classCallCheck(this, cf);
    });

    var jn = function () {
      var e = /*#__PURE__*/_createClass(function e() {
        _classCallCheck(this, e);
      });

      return e.__NG_ELEMENT_ID__ = function () {
        return function gC() {
          var e = y(),
              n = ft(Ne().index, e);
          return (it(n) ? n : e)[J];
        }();
      }, e;
    }(),
        mC = function () {
      var e = /*#__PURE__*/_createClass(function e() {
        _classCallCheck(this, e);
      });

      return e.ɵprov = ge({
        token: e,
        providedIn: "root",
        factory: function factory() {
          return null;
        }
      }), e;
    }();

    var wi = /*#__PURE__*/_createClass(function wi(t) {
      _classCallCheck(this, wi);

      this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".");
    });

    var yC = new wi("14.2.0"),
        Ia = {};

    function xa(e) {
      return e.ngOriginalError;
    }

    var yr = /*#__PURE__*/function () {
      function yr() {
        _classCallCheck(this, yr);

        this._console = console;
      }

      _createClass(yr, [{
        key: "handleError",
        value: function handleError(t) {
          var n = this._findOriginalError(t);

          this._console.error("ERROR", t), n && this._console.error("ORIGINAL ERROR", n);
        }
      }, {
        key: "_findOriginalError",
        value: function _findOriginalError(t) {
          var n = t && xa(t);

          for (; n && xa(n);) {
            n = xa(n);
          }

          return n || null;
        }
      }]);

      return yr;
    }();

    var Fa = new Map();
    var TC = 0;
    var Pa = "__ngContext__";

    function Ue(e, t) {
      it(t) ? (e[Pa] = t[20], function xC(e) {
        Fa.set(e[20], e);
      }(t)) : e[Pa] = t;
    }

    function co(e) {
      var t = e[Pa];
      return "number" == typeof t ? function mf(e) {
        return Fa.get(e) || null;
      }(t) : t || null;
    }

    function Ra(e) {
      var t = co(e);
      return t ? it(t) ? t : t.lView : null;
    }

    var st = function () {
      return (st = st || {})[st.Important = 1] = "Important", st[st.DashCase = 2] = "DashCase", st;
    }();

    function La(e, t) {
      return undefined(e, t);
    }

    function fo(e) {
      var t = e[3];
      return Tt(t) ? t[3] : t;
    }

    function ka(e) {
      return Ef(e[13]);
    }

    function Ba(e) {
      return Ef(e[4]);
    }

    function Ef(e) {
      for (; null !== e && !Tt(e);) {
        e = e[4];
      }

      return e;
    }

    function vr(e, t, n, r, o) {
      if (null != r) {
        var i,
            s = !1;
        Tt(r) ? i = r : it(r) && (s = !0, r = r[0]);
        var a = Me(r);
        0 === e && null !== n ? null == o ? Tf(t, n, a) : Hn(t, n, a, o || null, !0) : 1 === e && null !== n ? Hn(t, n, a, o || null, !0) : 2 === e ? function Vf(e, t, n) {
          var r = function Ei(e, t) {
            return e.parentNode(t);
          }(e, t);

          r && function ow(e, t, n, r) {
            e.removeChild(t, n, r);
          }(e, r, t, n);
        }(t, a, s) : 3 === e && t.destroyNode(a), null != i && function aw(e, t, n, r, o) {
          var i = n[7];
          i !== Me(n) && vr(t, e, r, i, o);

          for (var _a4 = 10; _a4 < n.length; _a4++) {
            var u = n[_a4];
            ho(u[1], u, e, t, r, i);
          }
        }(t, e, i, n, o);
      }
    }

    function Ha(e, t, n) {
      return e.createElement(t, n);
    }

    function Mf(e, t) {
      var n = e[9],
          r = n.indexOf(t),
          o = t[3];
      512 & t[2] && (t[2] &= -513, zs(o, -1)), n.splice(r, 1);
    }

    function Ua(e, t) {
      if (!(128 & t[2])) {
        t[2] &= -65, t[2] |= 128, function rw(e, t) {
          var n;
          if (null != e && null != (n = e.destroyHooks)) for (var r = 0; r < n.length; r += 2) {
            var o = t[n[r]];

            if (!(o instanceof Qr)) {
              var i = n[r + 1];
              if (Array.isArray(i)) for (var s = 0; s < i.length; s += 2) {
                var a = o[i[s]],
                    u = i[s + 1];

                try {
                  u.call(a);
                } finally {}
              } else try {
                i.call(o);
              } finally {}
            }
          }
        }(e, t), function nw(e, t) {
          var n = e.cleanup,
              r = t[7];
          var o = -1;
          if (null !== n) for (var i = 0; i < n.length - 1; i += 2) {
            if ("string" == typeof n[i]) {
              var s = n[i + 1],
                  a = "function" == typeof s ? s(t) : Me(t[s]),
                  u = r[o = n[i + 2]],
                  l = n[i + 3];
              "boolean" == typeof l ? a.removeEventListener(n[i], u, l) : l >= 0 ? r[o = l]() : r[o = -l].unsubscribe(), i += 2;
            } else {
              var _s5 = r[o = n[i + 1]];
              n[i].call(_s5);
            }
          }

          if (null !== r) {
            for (var _i5 = o + 1; _i5 < r.length; _i5++) {
              (0, r[_i5])();
            }

            t[7] = null;
          }
        }(e, t), 1 === t[1].type && t[J].destroy();
        var n = t[17];

        if (null !== n && Tt(t[3])) {
          n !== t[3] && Mf(n, t);
          var r = t[19];
          null !== r && r.detachView(e);
        }

        !function FC(e) {
          Fa["delete"](e[20]);
        }(t);
      }
    }

    function Sf(e, t, n) {
      return function Af(e, t, n) {
        var r = t;

        for (; null !== r && 40 & r.type;) {
          r = (t = r).parent;
        }

        if (null === r) return n[0];

        if (2 & r.flags) {
          var o = e.data[r.directiveStart].encapsulation;
          if (o === $t.None || o === $t.Emulated) return null;
        }

        return _t(r, n);
      }(e, t.parent, n);
    }

    function Hn(e, t, n, r, o) {
      e.insertBefore(t, n, r, o);
    }

    function Tf(e, t, n) {
      e.appendChild(t, n);
    }

    function Nf(e, t, n, r, o) {
      null !== r ? Hn(e, t, n, r, o) : Tf(e, t, n);
    }

    var Of = function Ff(e, t, n) {
      return 40 & e.type ? _t(e, n) : null;
    };

    function bi(e, t, n, r) {
      var o = Sf(e, r, t),
          i = t[J],
          a = function xf(e, t, n) {
        return Of(e, t, n);
      }(r.parent || t[6], r, t);

      if (null != o) if (Array.isArray(n)) for (var u = 0; u < n.length; u++) {
        Nf(i, o, n[u], a, !1);
      } else Nf(i, o, n, a, !1);
    }

    function Rf(e, t) {
      return null !== t ? e[16][6].projection[t.projection] : null;
    }

    function Wa(e, t, n, r, o, i, s) {
      for (; null != n;) {
        var a = r[n.index],
            u = n.type;
        if (s && 0 === t && (a && Ue(Me(a), r), n.flags |= 4), 64 != (64 & n.flags)) if (8 & u) Wa(e, t, n.child, r, o, i, !1), vr(t, e, o, a, i);else if (32 & u) {
          var l = La(n, r);
          var c = void 0;

          for (; c = l();) {
            vr(t, e, o, c, i);
          }

          vr(t, e, o, a, i);
        } else 16 & u ? Lf(e, t, r, n, o, i) : vr(t, e, o, a, i);
        n = s ? n.projectionNext : n.next;
      }
    }

    function ho(e, t, n, r, o, i) {
      Wa(n, r, e.firstChild, t, o, i, !1);
    }

    function Lf(e, t, n, r, o, i) {
      var s = n[16],
          u = s[6].projection[r.projection];
      if (Array.isArray(u)) for (var l = 0; l < u.length; l++) {
        vr(t, e, o, u[l], i);
      } else Wa(e, t, u, s[3], o, i, !0);
    }

    function kf(e, t, n) {
      e.setAttribute(t, "style", n);
    }

    function qa(e, t, n) {
      "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
    }

    function Bf(e, t, n) {
      var r = e.length;

      for (;;) {
        var o = e.indexOf(t, n);
        if (-1 === o) return o;

        if (0 === o || e.charCodeAt(o - 1) <= 32) {
          var i = t.length;
          if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
        }

        n = o + 1;
      }
    }

    var jf = "ng-template";

    function lw(e, t, n) {
      var r = 0;

      for (; r < e.length;) {
        var o = e[r++];

        if (n && "class" === o) {
          if (o = e[r], -1 !== Bf(o.toLowerCase(), t, 0)) return !0;
        } else if (1 === o) {
          for (; r < e.length && "string" == typeof (o = e[r++]);) {
            if (o.toLowerCase() === t) return !0;
          }

          return !1;
        }
      }

      return !1;
    }

    function Hf(e) {
      return 4 === e.type && e.value !== jf;
    }

    function cw(e, t, n) {
      return t === (4 !== e.type || n ? e.value : jf);
    }

    function dw(e, t, n) {
      var r = 4;

      var o = e.attrs || [],
          i = function pw(e) {
        for (var _t4 = 0; _t4 < e.length; _t4++) {
          if (cd(e[_t4])) return _t4;
        }

        return e.length;
      }(o);

      var s = !1;

      for (var a = 0; a < t.length; a++) {
        var u = t[a];

        if ("number" != typeof u) {
          if (!s) if (4 & r) {
            if (r = 2 | 1 & r, "" !== u && !cw(e, u, n) || "" === u && 1 === t.length) {
              if (Ft(r)) return !1;
              s = !0;
            }
          } else {
            var l = 8 & r ? u : t[++a];

            if (8 & r && null !== e.attrs) {
              if (!lw(e.attrs, l, n)) {
                if (Ft(r)) return !1;
                s = !0;
              }

              continue;
            }

            var d = fw(8 & r ? "class" : u, o, Hf(e), n);

            if (-1 === d) {
              if (Ft(r)) return !1;
              s = !0;
              continue;
            }

            if ("" !== l) {
              var f = void 0;
              f = d > i ? "" : o[d + 1].toLowerCase();
              var h = 8 & r ? f : null;

              if (h && -1 !== Bf(h, l, 0) || 2 & r && l !== f) {
                if (Ft(r)) return !1;
                s = !0;
              }
            }
          }
        } else {
          if (!s && !Ft(r) && !Ft(u)) return !1;
          if (s && Ft(u)) continue;
          s = !1, r = u | 1 & r;
        }
      }

      return Ft(r) || s;
    }

    function Ft(e) {
      return 0 == (1 & e);
    }

    function fw(e, t, n, r) {
      if (null === t) return -1;
      var o = 0;

      if (r || !n) {
        var i = !1;

        for (; o < t.length;) {
          var s = t[o];
          if (s === e) return o;
          if (3 === s || 6 === s) i = !0;else {
            if (1 === s || 2 === s) {
              var a = t[++o];

              for (; "string" == typeof a;) {
                a = t[++o];
              }

              continue;
            }

            if (4 === s) break;

            if (0 === s) {
              o += 4;
              continue;
            }
          }
          o += i ? 1 : 2;
        }

        return -1;
      }

      return function gw(e, t) {
        var n = e.indexOf(4);
        if (n > -1) for (n++; n < e.length;) {
          var _r2 = e[n];
          if ("number" == typeof _r2) return -1;
          if (_r2 === t) return n;
          n++;
        }
        return -1;
      }(t, e);
    }

    function $f(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

      for (var r = 0; r < t.length; r++) {
        if (dw(e, t[r], n)) return !0;
      }

      return !1;
    }

    function Uf(e, t) {
      return e ? ":not(" + t.trim() + ")" : t;
    }

    function yw(e) {
      var t = e[0],
          n = 1,
          r = 2,
          o = "",
          i = !1;

      for (; n < e.length;) {
        var s = e[n];
        if ("string" == typeof s) {
          if (2 & r) {
            var a = e[++n];
            o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
          } else 8 & r ? o += "." + s : 4 & r && (o += " " + s);
        } else "" !== o && !Ft(s) && (t += Uf(i, o), o = ""), r = s, i = i || !Ft(r);
        n++;
      }

      return "" !== o && (t += Uf(i, o)), t;
    }

    var q = {};

    function Za(e) {
      Gf(te(), y(), Xe() + e, !1);
    }

    function Gf(e, t, n, r) {
      if (!r) if (3 == (3 & t[2])) {
        var i = e.preOrderCheckHooks;
        null !== i && ei(t, i, n);
      } else {
        var _i6 = e.preOrderHooks;
        null !== _i6 && ti(t, _i6, 0, n);
      }
      Cn(n);
    }

    function Zf(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var r = arguments.length > 3 ? arguments[3] : undefined;
      var o = Qf(e, t, n, r);
      return o.resolveInjectorInitializers(), o;
    }

    function Qf(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var r = arguments.length > 3 ? arguments[3] : undefined;
      var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Set();
      var i = [n || oe, eC(e)];
      return r = r || ("object" == _typeof(e) ? void 0 : ce(e)), new sf(i, t || _i(), r || null, o);
    }

    var bn = function () {
      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);
        }

        _createClass(e, null, [{
          key: "create",
          value: function create(n, r) {
            if (Array.isArray(n)) return Zf({
              name: ""
            }, r, n, "");
            {
              var _n$name;

              var o = (_n$name = n.name) !== null && _n$name !== void 0 ? _n$name : "";
              return Zf({
                name: o
              }, n.parent, n.providers, o);
            }
          }
        }]);

        return e;
      }();

      return e.THROW_IF_NOT_FOUND = no, e.NULL = new ef(), e.ɵprov = ge({
        token: e,
        providedIn: "any",
        factory: function factory() {
          return se(Jd);
        }
      }), e.__NG_ELEMENT_ID__ = -1, e;
    }();

    function S(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : U.Default;
      var n = y();
      return null === n ? se(e, t) : Dd(Ne(), n, $(e), t);
    }

    function Si(e, t) {
      return e << 17 | t << 2;
    }

    function Ot(e) {
      return e >> 17 & 32767;
    }

    function Xa(e) {
      return 2 | e;
    }

    function ln(e) {
      return (131068 & e) >> 2;
    }

    function eu(e, t) {
      return -131069 & e | t << 2;
    }

    function tu(e) {
      return 1 | e;
    }

    function fh(e, t) {
      var n = e.contentQueries;
      if (null !== n) for (var r = 0; r < n.length; r += 2) {
        var o = n[r],
            i = n[r + 1];

        if (-1 !== i) {
          var s = e.data[i];
          Ks(o), s.contentQueries(2, t[i], i);
        }
      }
    }

    function Ni(e, t, n, r, o, i, s, a, u, l, c) {
      var d = t.blueprint.slice();
      return d[0] = o, d[2] = 76 | r, (null !== c || e && 1024 & e[2]) && (d[2] |= 1024), Yc(d), d[3] = d[15] = e, d[8] = n, d[10] = s || e && e[10], d[J] = a || e && e[J], d[12] = u || e && e[12] || null, d[9] = l || e && e[9] || null, d[6] = i, d[20] = function NC() {
        return TC++;
      }(), d[21] = c, d[16] = 2 == t.type ? e[16] : d, d;
    }

    function Cr(e, t, n, r, o) {
      var i = e.data[t];
      if (null === i) i = function lu(e, t, n, r, o) {
        var i = ed(),
            s = Ws(),
            u = e.data[t] = function tE(e, t, n, r, o, i) {
          return {
            type: n,
            index: r,
            insertBeforeIndex: null,
            injectorIndex: t ? t.injectorIndex : -1,
            directiveStart: -1,
            directiveEnd: -1,
            directiveStylingLast: -1,
            propertyBindings: null,
            flags: 0,
            providerIndexes: 0,
            value: o,
            attrs: i,
            mergedAttrs: null,
            localNames: null,
            initialInputs: void 0,
            inputs: null,
            outputs: null,
            tViews: null,
            next: null,
            projectionNext: null,
            child: null,
            parent: t,
            projection: null,
            styles: null,
            stylesWithoutHost: null,
            residualStyles: void 0,
            classes: null,
            classesWithoutHost: null,
            residualClasses: void 0,
            classBindings: 0,
            styleBindings: 0
          };
        }(0, s ? i : i && i.parent, n, t, r, o);

        return null === e.firstChild && (e.firstChild = u), null !== i && (s ? null == i.child && null !== u.parent && (i.child = u) : null === i.next && (i.next = u)), u;
      }(e, t, n, r, o), function Nv() {
        return G.lFrame.inI18n;
      }() && (i.flags |= 64);else if (64 & i.type) {
        i.type = n, i.value = r, i.attrs = o;

        var s = function Zr() {
          var e = G.lFrame,
              t = e.currentTNode;
          return e.isParent ? t : t.parent;
        }();

        i.injectorIndex = null === s ? -1 : s.injectorIndex;
      }
      return Ut(i, !0), i;
    }

    function wr(e, t, n, r) {
      if (0 === n) return -1;
      var o = t.length;

      for (var i = 0; i < n; i++) {
        t.push(r), e.blueprint.push(r), e.data.push(null);
      }

      return o;
    }

    function xi(e, t, n) {
      Ys(t);

      try {
        var r = e.viewQuery;
        null !== r && Du(1, r, n);
        var o = e.template;
        null !== o && hh(e, t, o, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && fh(e, t), e.staticViewQueries && Du(2, e.viewQuery, n);
        var i = e.components;
        null !== i && function Yw(e, t) {
          for (var _n3 = 0; _n3 < t.length; _n3++) {
            yE(e, t[_n3]);
          }
        }(t, i);
      } catch (r) {
        throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), r;
      } finally {
        t[2] &= -5, Js();
      }
    }

    function po(e, t, n, r) {
      var o = t[2];

      if (128 != (128 & o)) {
        Ys(t);

        try {
          Yc(t), function td(e) {
            return G.lFrame.bindingIndex = e;
          }(e.bindingStartIndex), null !== n && hh(e, t, n, 2, r);
          var s = 3 == (3 & o);

          if (s) {
            var l = e.preOrderCheckHooks;
            null !== l && ei(t, l, null);
          } else {
            var _l3 = e.preOrderHooks;
            null !== _l3 && ti(t, _l3, 0, null), Xs(t, 0);
          }

          if (function gE(e) {
            for (var _t5 = ka(e); null !== _t5; _t5 = Ba(_t5)) {
              if (!_t5[2]) continue;
              var _n4 = _t5[9];

              for (var _r3 = 0; _r3 < _n4.length; _r3++) {
                var _o3 = _n4[_r3],
                    i = _o3[3];
                0 == (512 & _o3[2]) && zs(i, 1), _o3[2] |= 512;
              }
            }
          }(t), function pE(e) {
            for (var _t6 = ka(e); null !== _t6; _t6 = Ba(_t6)) {
              for (var _n5 = 10; _n5 < _t6.length; _n5++) {
                var _r4 = _t6[_n5],
                    _o4 = _r4[1];
                Yo(_r4) && po(_o4, _r4, _o4.template, _r4[8]);
              }
            }
          }(t), null !== e.contentQueries && fh(e, t), s) {
            var _l4 = e.contentCheckHooks;
            null !== _l4 && ei(t, _l4);
          } else {
            var _l5 = e.contentHooks;
            null !== _l5 && ti(t, _l5, 1), Xs(t, 1);
          }

          !function Qw(e, t) {
            var n = e.hostBindingOpCodes;
            if (null !== n) try {
              for (var _r5 = 0; _r5 < n.length; _r5++) {
                var _o5 = n[_r5];
                if (_o5 < 0) Cn(~_o5);else {
                  var i = _o5,
                      _s6 = n[++_r5],
                      _a5 = n[++_r5];
                  xv(_s6, i), _a5(2, t[i]);
                }
              }
            } finally {
              Cn(-1);
            }
          }(e, t);
          var a = e.components;
          null !== a && function Kw(e, t) {
            for (var _n6 = 0; _n6 < t.length; _n6++) {
              mE(e, t[_n6]);
            }
          }(t, a);
          var u = e.viewQuery;

          if (null !== u && Du(2, u, r), s) {
            var _l6 = e.viewCheckHooks;
            null !== _l6 && ei(t, _l6);
          } else {
            var _l7 = e.viewHooks;
            null !== _l7 && ti(t, _l7, 2), Xs(t, 2);
          }

          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1), t[2] &= -41, 512 & t[2] && (t[2] &= -513, zs(t[3], -1));
        } finally {
          Js();
        }
      }
    }

    function Jw(e, t, n, r) {
      var o = t[10],
          s = function Kc(e) {
        return 4 == (4 & e[2]);
      }(t);

      try {
        !s && o.begin && o.begin(), s && xi(e, t, r), po(e, t, n, r);
      } finally {
        !s && o.end && o.end();
      }
    }

    function hh(e, t, n, r, o) {
      var i = Xe(),
          s = 2 & r;

      try {
        Cn(-1), s && t.length > 22 && Gf(e, t, 22, !1), n(r, o);
      } finally {
        Cn(i);
      }
    }

    function gh(e) {
      var t = e.tView;
      return null === t || t.incompleteFirstPass ? e.tView = fu(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t;
    }

    function fu(e, t, n, r, o, i, s, a, u, l) {
      var c = 22 + r,
          d = c + o,
          f = function Xw(e, t) {
        var n = [];

        for (var _r6 = 0; _r6 < t; _r6++) {
          n.push(_r6 < e ? null : q);
        }

        return n;
      }(c, d),
          h = "function" == typeof l ? l() : l;

      return f[1] = {
        type: e,
        blueprint: f,
        template: n,
        queries: null,
        viewQuery: a,
        declTNode: t,
        data: f.slice().fill(null, c),
        bindingStartIndex: c,
        expandoStartIndex: d,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: "function" == typeof i ? i() : i,
        pipeRegistry: "function" == typeof s ? s() : s,
        firstChild: null,
        schemas: u,
        consts: h,
        incompleteFirstPass: !1
      };
    }

    function yh(e, t, n) {
      for (var r in e) {
        if (e.hasOwnProperty(r)) {
          var o = e[r];
          (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, o) : n[r] = [t, o];
        }
      }

      return n;
    }

    function Dh(e, t) {
      var r = t.directiveEnd,
          o = e.data,
          i = t.attrs,
          s = [];
      var a = null,
          u = null;

      for (var l = t.directiveStart; l < r; l++) {
        var c = o[l],
            d = c.inputs,
            f = null === i || Hf(t) ? null : hE(d, i);
        s.push(f), a = yh(d, l, a), u = yh(c.outputs, l, u);
      }

      null !== a && (a.hasOwnProperty("class") && (t.flags |= 16), a.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = s, t.inputs = a, t.outputs = u;
    }

    function vh(e, t) {
      var n = ft(t, e);
      16 & n[2] || (n[2] |= 32);
    }

    function _h(e, t, n, r, o, i) {
      var s = i.hostBindings;

      if (s) {
        var a = e.hostBindingOpCodes;
        null === a && (a = e.hostBindingOpCodes = []);
        var u = ~t.index;
        (function iE(e) {
          var t = e.length;

          for (; t > 0;) {
            var _n7 = e[--t];
            if ("number" == typeof _n7 && _n7 < 0) return _n7;
          }

          return 0;
        })(a) != u && a.push(u), a.push(r, o, s);
      }
    }

    function Ch(e, t) {
      null !== e.hostBindings && e.hostBindings(1, t);
    }

    function wh(e, t) {
      t.flags |= 2, (e.components || (e.components = [])).push(t.index);
    }

    function cE(e, t, n) {
      if (n) {
        if (t.exportAs) for (var r = 0; r < t.exportAs.length; r++) {
          n[t.exportAs[r]] = e;
        }
        Nt(t) && (n[""] = e);
      }
    }

    function Eh(e, t, n) {
      e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t;
    }

    function bh(e, t, n, r, o) {
      e.data[r] = o;
      var i = o.factory || (o.factory = kn(o.type)),
          s = new Qr(i, Nt(o), S);
      e.blueprint[r] = s, n[r] = s, _h(e, t, 0, r, wr(e, n, o.hostVars, q), o);
    }

    function dE(e, t, n) {
      var r = _t(t, e),
          o = gh(n),
          i = e[10],
          s = Fi(e, Ni(e, o, null, n.onPush ? 32 : 16, r, t, i, i.createRenderer(r, n), null, null, null));

      e[t.index] = s;
    }

    function fE(e, t, n, r, o, i) {
      var s = i[t];

      if (null !== s) {
        var a = r.setInput;

        for (var u = 0; u < s.length;) {
          var l = s[u++],
              c = s[u++],
              d = s[u++];
          null !== a ? r.setInput(n, d, l, c) : n[c] = d;
        }
      }
    }

    function hE(e, t) {
      var n = null,
          r = 0;

      for (; r < t.length;) {
        var o = t[r];
        if (0 !== o) {
          if (5 !== o) {
            if ("number" == typeof o) break;
            e.hasOwnProperty(o) && (null === n && (n = []), n.push(o, e[o], t[r + 1])), r += 2;
          } else r += 2;
        } else r += 4;
      }

      return n;
    }

    function mE(e, t) {
      var n = ft(t, e);

      if (Yo(n)) {
        var r = n[1];
        48 & n[2] ? po(r, n, r.template, n[8]) : n[5] > 0 && gu(n);
      }
    }

    function gu(e) {
      for (var r = ka(e); null !== r; r = Ba(r)) {
        for (var o = 10; o < r.length; o++) {
          var i = r[o];
          if (Yo(i)) if (512 & i[2]) {
            var s = i[1];
            po(s, i, s.template, i[8]);
          } else i[5] > 0 && gu(i);
        }
      }

      var n = e[1].components;
      if (null !== n) for (var _r7 = 0; _r7 < n.length; _r7++) {
        var _o6 = ft(n[_r7], e);

        Yo(_o6) && _o6[5] > 0 && gu(_o6);
      }
    }

    function yE(e, t) {
      var n = ft(t, e),
          r = n[1];
      (function DE(e, t) {
        for (var _n8 = t.length; _n8 < e.blueprint.length; _n8++) {
          t.push(e.blueprint[_n8]);
        }
      })(r, n), xi(r, n, n[8]);
    }

    function Fi(e, t) {
      return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t;
    }

    function mu(e) {
      for (; e;) {
        e[2] |= 32;
        var t = fo(e);
        if (lv(e) && !t) return e;
        e = t;
      }

      return null;
    }

    function Du(e, t, n) {
      Ks(0), t(e, n);
    }

    function Sh(e) {
      return e[7] || (e[7] = []);
    }

    function Ah(e) {
      return e.cleanup || (e.cleanup = []);
    }

    function Nh(e, t) {
      var n = e[9],
          r = n ? n.get(yr, null) : null;
      r && r.handleError(t);
    }

    function vu(e, t, n, r, o) {
      for (var i = 0; i < n.length;) {
        var s = n[i++],
            a = n[i++],
            u = t[s],
            l = e.data[s];
        null !== l.setInput ? l.setInput(u, o, r, a) : u[a] = o;
      }
    }

    function Oi(e, t, n) {
      var r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
      if (null !== t) for (var s = 0; s < t.length; s++) {
        var a = t[s];
        "number" == typeof a ? i = a : 1 == i ? o = Ns(o, a) : 2 == i && (r = Ns(r, a + ": " + t[++s] + ";"));
      }
      n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = o : e.classesWithoutHost = o;
    }

    function Pi(e, t, n, r) {
      var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;

      for (; null !== n;) {
        var i = t[n.index];
        if (null !== i && r.push(Me(i)), Tt(i)) for (var a = 10; a < i.length; a++) {
          var u = i[a],
              l = u[1].firstChild;
          null !== l && Pi(u[1], u, l, r);
        }
        var s = n.type;
        if (8 & s) Pi(e, t, n.child, r);else if (32 & s) {
          var _a6 = La(n, t);

          var _u4 = void 0;

          for (; _u4 = _a6();) {
            r.push(_u4);
          }
        } else if (16 & s) {
          var _a7 = Rf(t, n);

          if (Array.isArray(_a7)) r.push.apply(r, _toConsumableArray(_a7));else {
            var _u5 = fo(t[16]);

            Pi(_u5[1], _u5, _a7, r, !0);
          }
        }
        n = o ? n.projectionNext : n.next;
      }

      return r;
    }

    var _E = /*#__PURE__*/function (_go) {
      _inherits(_E, _go);

      var _super8 = _createSuper(_E);

      function _E(t) {
        var _this15;

        _classCallCheck(this, _E);

        _this15 = _super8.call(this, t), _this15._view = t;
        return _this15;
      }

      _createClass(_E, [{
        key: "detectChanges",
        value: function detectChanges() {
          !function Ih(e) {
            !function vE(e) {
              for (var t = 0; t < e.components.length; t++) {
                var n = e.components[t],
                    r = Ra(n);

                if (null !== r) {
                  var o = r[1];
                  Jw(o, r, o.template, n);
                }
              }
            }(e[8]);
          }(this._view);
        }
      }, {
        key: "checkNoChanges",
        value: function checkNoChanges() {}
      }, {
        key: "context",
        get: function get() {
          return null;
        }
      }]);

      return _E;
    }( /*#__PURE__*/function () {
      function go(t, n) {
        _classCallCheck(this, go);

        this._lView = t, this._cdRefInjectingView = n, this._appRef = null, this._attachedToViewContainer = !1;
      }

      _createClass(go, [{
        key: "rootNodes",
        get: function get() {
          var t = this._lView,
              n = t[1];
          return Pi(n, t, n.firstChild, []);
        }
      }, {
        key: "context",
        get: function get() {
          return this._lView[8];
        },
        set: function set(t) {
          this._lView[8] = t;
        }
      }, {
        key: "destroyed",
        get: function get() {
          return 128 == (128 & this._lView[2]);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (this._appRef) this._appRef.detachView(this);else if (this._attachedToViewContainer) {
            var t = this._lView[3];

            if (Tt(t)) {
              var n = t[8],
                  r = n ? n.indexOf(this) : -1;
              r > -1 && (function $a(e, t) {
                if (e.length <= 10) return;
                var n = 10 + t,
                    r = e[n];

                if (r) {
                  var o = r[17];
                  null !== o && o !== e && Mf(o, r), t > 0 && (e[n - 1][4] = r[4]);
                  var i = ui(e, 10 + t);
                  !function KC(e, t) {
                    ho(e, t, t[J], 2, null, null), t[0] = null, t[6] = null;
                  }(r[1], r);
                  var s = i[19];
                  null !== s && s.detachView(i[1]), r[3] = null, r[4] = null, r[2] &= -65;
                }

                return r;
              }(t, r), ui(n, r));
            }

            this._attachedToViewContainer = !1;
          }
          !function If(e, t) {
            if (!(128 & t[2])) {
              var _n9 = t[J];
              _n9.destroyNode && ho(e, t, _n9, 3, null, null), function XC(e) {
                var t = e[13];
                if (!t) return Ua(e[1], e);

                for (; t;) {
                  var _n10 = null;
                  if (it(t)) _n10 = t[13];else {
                    var _r8 = t[10];
                    _r8 && (_n10 = _r8);
                  }

                  if (!_n10) {
                    for (; t && !t[4] && t !== e;) {
                      it(t) && Ua(t[1], t), t = t[3];
                    }

                    null === t && (t = e), it(t) && Ua(t[1], t), _n10 = t && t[4];
                  }

                  t = _n10;
                }
              }(t);
            }
          }(this._lView[1], this._lView);
        }
      }, {
        key: "onDestroy",
        value: function onDestroy(t) {
          !function mh(e, t, n, r) {
            var o = Sh(t);
            null === n ? o.push(r) : (o.push(n), e.firstCreatePass && Ah(e).push(r, o.length - 1));
          }(this._lView[1], this._lView, null, t);
        }
      }, {
        key: "markForCheck",
        value: function markForCheck() {
          mu(this._cdRefInjectingView || this._lView);
        }
      }, {
        key: "detach",
        value: function detach() {
          this._lView[2] &= -65;
        }
      }, {
        key: "reattach",
        value: function reattach() {
          this._lView[2] |= 64;
        }
      }, {
        key: "detectChanges",
        value: function detectChanges() {
          !function yu(e, t, n) {
            var r = t[10];
            r.begin && r.begin();

            try {
              po(e, t, e.template, n);
            } catch (o) {
              throw Nh(t, o), o;
            } finally {
              r.end && r.end();
            }
          }(this._lView[1], this._lView, this.context);
        }
      }, {
        key: "checkNoChanges",
        value: function checkNoChanges() {}
      }, {
        key: "attachToViewContainerRef",
        value: function attachToViewContainerRef() {
          if (this._appRef) throw new O(902, !1);
          this._attachedToViewContainer = !0;
        }
      }, {
        key: "detachFromAppRef",
        value: function detachFromAppRef() {
          this._appRef = null, function JC(e, t) {
            ho(e, t, t[J], 2, null, null);
          }(this._lView[1], this._lView);
        }
      }, {
        key: "attachToAppRef",
        value: function attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new O(902, !1);
          this._appRef = t;
        }
      }]);

      return go;
    }());

    var _u = /*#__PURE__*/function (_Ci) {
      _inherits(_u, _Ci);

      var _super9 = _createSuper(_u);

      function _u(t) {
        var _this16;

        _classCallCheck(this, _u);

        _this16 = _super9.call(this), _this16.ngModule = t;
        return _this16;
      }

      _createClass(_u, [{
        key: "resolveComponentFactory",
        value: function resolveComponentFactory(t) {
          var n = ae(t);
          return new mo(n, this.ngModule);
        }
      }]);

      return _u;
    }(Ci);

    function xh(e) {
      var t = [];

      for (var n in e) {
        e.hasOwnProperty(n) && t.push({
          propName: e[n],
          templateName: n
        });
      }

      return t;
    }

    var wE = /*#__PURE__*/function () {
      function wE(t, n) {
        _classCallCheck(this, wE);

        this.injector = t, this.parentInjector = n;
      }

      _createClass(wE, [{
        key: "get",
        value: function get(t, n, r) {
          var o = this.injector.get(t, Ia, r);
          return o !== Ia || n === Ia ? o : this.parentInjector.get(t, n, r);
        }
      }]);

      return wE;
    }();

    var mo = /*#__PURE__*/function (_uf) {
      _inherits(mo, _uf);

      var _super10 = _createSuper(mo);

      function mo(t, n) {
        var _this17;

        _classCallCheck(this, mo);

        _this17 = _super10.call(this), _this17.componentDef = t, _this17.ngModule = n, _this17.componentType = t.type, _this17.selector = function Dw(e) {
          return e.map(yw).join(",");
        }(t.selectors), _this17.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], _this17.isBoundToModule = !!n;
        return _this17;
      }

      _createClass(mo, [{
        key: "inputs",
        get: function get() {
          return xh(this.componentDef.inputs);
        }
      }, {
        key: "outputs",
        get: function get() {
          return xh(this.componentDef.outputs);
        }
      }, {
        key: "create",
        value: function create(t, n, r, o) {
          var _o7;

          var i = (o = o || this.ngModule) instanceof pr ? o : (_o7 = o) === null || _o7 === void 0 ? void 0 : _o7.injector;
          i && null !== this.componentDef.getStandaloneInjector && (i = this.componentDef.getStandaloneInjector(i) || i);
          var s = i ? new wE(t, i) : t,
              a = s.get(cf, null);
          if (null === a) throw new O(407, !1);
          var u = s.get(mC, null),
              l = a.createRenderer(null, this.componentDef),
              c = this.componentDef.selectors[0][0] || "div",
              d = r ? function eE(e, t, n) {
            return e.selectRootElement(t, n === $t.ShadowDom);
          }(l, r, this.componentDef.encapsulation) : Ha(a.createRenderer(null, this.componentDef), c, function CE(e) {
            var t = e.toLowerCase();
            return "svg" === t ? "svg" : "math" === t ? "math" : null;
          }(c)),
              f = this.componentDef.onPush ? 288 : 272,
              h = {
            components: []
          },
              p = fu(0, null, null, 1, 0, null, null, null, null, null),
              g = Ni(null, p, h, f, null, null, a, l, u, s, null);

          var _, b;

          Ys(g);

          try {
            var F = function ME(e, t, n, r, o, i) {
              var s = n[1];
              n[22] = e;
              var u = Cr(s, 22, 2, "#host", null),
                  l = u.mergedAttrs = t.hostAttrs;
              null !== l && (Oi(u, l, !0), null !== e && (ni(o, e, l), null !== u.classes && qa(o, e, u.classes), null !== u.styles && kf(o, e, u.styles)));
              var c = r.createRenderer(e, t),
                  d = Ni(n, gh(t), null, t.onPush ? 32 : 16, n[22], u, r, c, i || null, null, null);
              return s.firstCreatePass && (si(Yr(u, n), s, t.type), wh(s, u), Eh(u, n.length, 1)), Fi(n, d), n[22] = d;
            }(d, this.componentDef, g, a, l);

            if (d) if (r) ni(l, d, ["ng-version", yC.full]);else {
              var _vw = function vw(e) {
                var t = [],
                    n = [];
                var r = 1,
                    o = 2;

                for (; r < e.length;) {
                  var _i7 = e[r];
                  if ("string" == typeof _i7) 2 === o ? "" !== _i7 && t.push(_i7, e[++r]) : 8 === o && n.push(_i7);else {
                    if (!Ft(o)) break;
                    o = _i7;
                  }
                  r++;
                }

                return {
                  attrs: t,
                  classes: n
                };
              }(this.componentDef.selectors[0]),
                  m = _vw.attrs,
                  R = _vw.classes;

              m && ni(l, d, m), R && R.length > 0 && qa(l, d, R.join(" "));
            }

            if (b = Gs(p, 22), void 0 !== n) {
              var _m = b.projection = [];

              for (var _R = 0; _R < this.ngContentSelectors.length; _R++) {
                var X = n[_R];

                _m.push(null != X ? Array.from(X) : null);
              }
            }

            _ = function IE(e, t, n, r, o) {
              var i = n[1],
                  s = function oE(e, t, n) {
                var r = Ne();
                e.firstCreatePass && (n.providersResolver && n.providersResolver(n), bh(e, r, t, wr(e, t, 1, null), n), Dh(e, r));
                var o = Jr(t, e, r.directiveStart, r);
                Ue(o, t);

                var i = _t(r, t);

                return i && Ue(i, t), o;
              }(i, n, t);

              if (r.components.push(s), e[8] = s, null !== o) {
                var _iterator11 = _createForOfIteratorHelper(o),
                    _step11;

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var _u6 = _step11.value;

                    _u6(s, t);
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
              }

              if (t.contentQueries) {
                var _u7 = Ne();

                t.contentQueries(1, s, _u7.directiveStart);
              }

              var a = Ne();
              return !i.firstCreatePass || null === t.hostBindings && null === t.hostAttrs || (Cn(a.index), _h(n[1], a, 0, a.directiveStart, a.directiveEnd, t), Ch(t, s)), s;
            }(F, this.componentDef, g, h, [AE]), xi(p, g, null);
          } finally {
            Js();
          }

          return new bE(this.componentType, _, mr(b, g), g, b);
        }
      }]);

      return mo;
    }(uf);

    var bE = /*#__PURE__*/function (_cC) {
      _inherits(bE, _cC);

      var _super11 = _createSuper(bE);

      function bE(t, n, r, o, i) {
        var _this18;

        _classCallCheck(this, bE);

        _this18 = _super11.call(this), _this18.location = r, _this18._rootLView = o, _this18._tNode = i, _this18.instance = n, _this18.hostView = _this18.changeDetectorRef = new _E(o), _this18.componentType = t;
        return _this18;
      }

      _createClass(bE, [{
        key: "setInput",
        value: function setInput(t, n) {
          var r = this._tNode.inputs;
          var o;

          if (null !== r && (o = r[t])) {
            var i = this._rootLView;
            vu(i[1], i, o, t, n), vh(i, this._tNode.index);
          }
        }
      }, {
        key: "injector",
        get: function get() {
          return new ir(this._tNode, this._rootLView);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.hostView.destroy();
        }
      }, {
        key: "onDestroy",
        value: function onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }]);

      return bE;
    }( /*#__PURE__*/_createClass(function cC() {
      _classCallCheck(this, cC);
    }));

    function AE() {
      var e = Ne();
      Xo(y()[1], e);
    }

    function ue(e) {
      var t = function Fh(e) {
        return Object.getPrototypeOf(e.prototype).constructor;
      }(e.type),
          n = !0;

      var r = [e];

      for (; t;) {
        var o = void 0;
        if (Nt(e)) o = t.ɵcmp || t.ɵdir;else {
          if (t.ɵcmp) throw new O(903, !1);
          o = t.ɵdir;
        }

        if (o) {
          if (n) {
            r.push(o);
            var s = e;
            s.inputs = Cu(e.inputs), s.declaredInputs = Cu(e.declaredInputs), s.outputs = Cu(e.outputs);
            var a = o.hostBindings;
            a && FE(e, a);
            var u = o.viewQuery,
                l = o.contentQueries;

            if (u && NE(e, u), l && xE(e, l), Ts(e.inputs, o.inputs), Ts(e.declaredInputs, o.declaredInputs), Ts(e.outputs, o.outputs), Nt(o) && o.data.animation) {
              var c = e.data;
              c.animation = (c.animation || []).concat(o.data.animation);
            }
          }

          var i = o.features;
          if (i) for (var _s7 = 0; _s7 < i.length; _s7++) {
            var _a8 = i[_s7];
            _a8 && _a8.ngInherit && _a8(e), _a8 === ue && (n = !1);
          }
        }

        t = Object.getPrototypeOf(t);
      }

      !function TE(e) {
        var t = 0,
            n = null;

        for (var _r9 = e.length - 1; _r9 >= 0; _r9--) {
          var _o8 = e[_r9];
          _o8.hostVars = t += _o8.hostVars, _o8.hostAttrs = ri(_o8.hostAttrs, n = ri(n, _o8.hostAttrs));
        }
      }(r);
    }

    function Cu(e) {
      return e === Kn ? {} : e === oe ? [] : e;
    }

    function NE(e, t) {
      var n = e.viewQuery;
      e.viewQuery = n ? function (r, o) {
        t(r, o), n(r, o);
      } : t;
    }

    function xE(e, t) {
      var n = e.contentQueries;
      e.contentQueries = n ? function (r, o, i) {
        t(r, o, i), n(r, o, i);
      } : t;
    }

    function FE(e, t) {
      var n = e.hostBindings;
      e.hostBindings = n ? function (r, o) {
        t(r, o), n(r, o);
      } : t;
    }

    function Ge(e, t, n) {
      return !Object.is(e[t], n) && (e[t] = n, !0);
    }

    function Eu(e, t, n) {
      var r = y();
      return Ge(r, nr(), t) && function gt(e, t, n, r, o, i, s, a) {
        var u = _t(t, n);

        var c,
            l = t.inputs;
        !a && null != l && (c = l[r]) ? (vu(e, n, c, r, o), Zo(t) && vh(n, t.index)) : 3 & t.type && (r = function nE(e) {
          return "class" === e ? "className" : "for" === e ? "htmlFor" : "formaction" === e ? "formAction" : "innerHtml" === e ? "innerHTML" : "readonly" === e ? "readOnly" : "tabindex" === e ? "tabIndex" : e;
        }(r), o = null != s ? s(o, t.value || "", r) : o, i.setProperty(u, r, o));
      }(te(), function Ce() {
        var e = G.lFrame;
        return Gs(e.tView, e.selectedIndex);
      }(), r, e, t, r[J], n, !1), Eu;
    }

    function bu(e, t, n, r, o) {
      var s = o ? "class" : "style";
      vu(e, n, t.inputs[s], s, r);
    }

    function vo(e, t, n, r) {
      var o = y(),
          i = te(),
          s = 22 + e,
          a = o[J],
          u = o[s] = Ha(a, t, function jv() {
        return G.lFrame.currentNamespace;
      }()),
          l = i.firstCreatePass ? function GE(e, t, n, r, o, i, s) {
        var a = t.consts,
            l = Cr(t, e, 2, o, _n(a, i));
        return function hu(e, t, n, r) {
          var o = !1;

          if (Xc()) {
            var _i8 = function uE(e, t, n) {
              var r = e.directiveRegistry;
              var o = null;
              if (r) for (var _i9 = 0; _i9 < r.length; _i9++) {
                var _s9 = r[_i9];
                $f(n, _s9.selectors, !1) && (o || (o = []), si(Yr(n, t), e, _s9.type), Nt(_s9) ? (wh(e, n), o.unshift(_s9)) : o.push(_s9));
              }
              return o;
            }(e, t, n),
                _s8 = null === r ? null : {
              "": -1
            };

            if (null !== _i8) {
              o = !0, Eh(n, e.data.length, _i8.length);

              for (var _c2 = 0; _c2 < _i8.length; _c2++) {
                var _d2 = _i8[_c2];
                _d2.providersResolver && _d2.providersResolver(_d2);
              }

              var _a9 = !1,
                  _u8 = !1,
                  _l8 = wr(e, t, _i8.length, null);

              for (var _c3 = 0; _c3 < _i8.length; _c3++) {
                var _d3 = _i8[_c3];
                n.mergedAttrs = ri(n.mergedAttrs, _d3.hostAttrs), bh(e, n, t, _l8, _d3), cE(_l8, _d3, _s8), null !== _d3.contentQueries && (n.flags |= 8), (null !== _d3.hostBindings || null !== _d3.hostAttrs || 0 !== _d3.hostVars) && (n.flags |= 128);
                var _f = _d3.type.prototype;
                !_a9 && (_f.ngOnChanges || _f.ngOnInit || _f.ngDoCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index), _a9 = !0), !_u8 && (_f.ngOnChanges || _f.ngDoCheck) && ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index), _u8 = !0), _l8++;
              }

              Dh(e, n);
            }

            _s8 && function lE(e, t, n) {
              if (t) {
                var _r10 = e.localNames = [];

                for (var _o9 = 0; _o9 < t.length; _o9 += 2) {
                  var _i10 = n[t[_o9 + 1]];
                  if (null == _i10) throw new O(-301, !1);

                  _r10.push(t[_o9], _i10);
                }
              }
            }(n, r, _s8);
          }

          return n.mergedAttrs = ri(n.mergedAttrs, n.attrs), o;
        }(t, n, l, _n(a, s)), null !== l.attrs && Oi(l, l.attrs, !1), null !== l.mergedAttrs && Oi(l, l.mergedAttrs, !0), null !== t.queries && t.queries.elementStart(t, l), l;
      }(s, i, o, 0, t, n, r) : i.data[s];
      Ut(l, !0);
      var c = l.mergedAttrs;
      null !== c && ni(a, u, c);
      var d = l.classes;
      null !== d && qa(a, u, d);
      var f = l.styles;
      return null !== f && kf(a, u, f), 64 != (64 & l.flags) && bi(i, o, u, l), 0 === function wv() {
        return G.lFrame.elementDepthCount;
      }() && Ue(u, o), function Ev() {
        G.lFrame.elementDepthCount++;
      }(), Qo(l) && (function cu(e, t, n) {
        !Xc() || (function sE(e, t, n, r) {
          var o = n.directiveStart,
              i = n.directiveEnd;
          e.firstCreatePass || Yr(n, t), Ue(r, t);
          var s = n.initialInputs;

          for (var _a10 = o; _a10 < i; _a10++) {
            var _u9 = e.data[_a10],
                _l9 = Nt(_u9);

            _l9 && dE(t, n, _u9);

            var _c4 = Jr(t, e, _a10, n);

            Ue(_c4, t), null !== s && fE(0, _a10 - o, _c4, _u9, 0, s), _l9 && (ft(n.index, t)[8] = _c4);
          }
        }(e, t, n, _t(n, t)), 128 == (128 & n.flags) && function aE(e, t, n) {
          var r = n.directiveStart,
              o = n.directiveEnd,
              i = n.index,
              s = function Fv() {
            return G.lFrame.currentDirectiveIndex;
          }();

          try {
            Cn(i);

            for (var _a11 = r; _a11 < o; _a11++) {
              var _u10 = e.data[_a11],
                  _l10 = t[_a11];
              Zs(_a11), (null !== _u10.hostBindings || 0 !== _u10.hostVars || null !== _u10.hostAttrs) && Ch(_u10, _l10);
            }
          } finally {
            Cn(-1), Zs(s);
          }
        }(e, t, n));
      }(i, o, l), function ph(e, t, n) {
        if (Bs(t)) {
          var _o10 = t.directiveEnd;

          for (var _i11 = t.directiveStart; _i11 < _o10; _i11++) {
            var _s10 = e.data[_i11];
            _s10.contentQueries && _s10.contentQueries(1, n[_i11], _i11);
          }
        }
      }(i, l, o)), null !== r && function du(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _t;
        var r = t.localNames;

        if (null !== r) {
          var _o11 = t.index + 1;

          for (var _i12 = 0; _i12 < r.length; _i12 += 2) {
            var _s11 = r[_i12 + 1],
                _a12 = -1 === _s11 ? n(t, e) : e[_s11];

            e[_o11++] = _a12;
          }
        }
      }(o, l), vo;
    }

    function _o() {
      var e = Ne();
      Ws() ? function qs() {
        G.lFrame.isParent = !1;
      }() : (e = e.parent, Ut(e, !1));
      var t = e;
      !function bv() {
        G.lFrame.elementDepthCount--;
      }();
      var n = te();
      return n.firstCreatePass && (Xo(n, e), Bs(e) && n.queries.elementEnd(e)), null != t.classesWithoutHost && function zv(e) {
        return 0 != (16 & e.flags);
      }(t) && bu(n, t, y(), t.classesWithoutHost, !0), null != t.stylesWithoutHost && function Wv(e) {
        return 0 != (32 & e.flags);
      }(t) && bu(n, t, y(), t.stylesWithoutHost, !1), _o;
    }

    function Mu(e, t, n, r) {
      return vo(e, t, n, r), _o(), Mu;
    }

    function Li(e) {
      return !!e && "function" == typeof e.then;
    }

    var Gh = function Uh(e) {
      return !!e && "function" == typeof e.subscribe;
    };

    function wt(e, t, n, r) {
      var o = y(),
          i = te(),
          s = Ne();
      return function Wh(e, t, n, r, o, i, s, a) {
        var u = Qo(r),
            c = e.firstCreatePass && Ah(e),
            d = t[8],
            f = Sh(t);
        var h = !0;

        if (3 & r.type || a) {
          var _ = _t(r, t),
              b = a ? a(_) : _,
              F = f.length,
              m = a ? function (X) {
            return a(Me(X[r.index]));
          } : r.index;

          var R = null;
          if (!a && u && (R = function qE(e, t, n, r) {
            var o = e.cleanup;
            if (null != o) for (var _i13 = 0; _i13 < o.length - 1; _i13 += 2) {
              var _s12 = o[_i13];

              if (_s12 === n && o[_i13 + 1] === r) {
                var _a13 = t[7],
                    _u11 = o[_i13 + 2];
                return _a13.length > _u11 ? _a13[_u11] : null;
              }

              "string" == typeof _s12 && (_i13 += 2);
            }
            return null;
          }(e, t, o, r.index)), null !== R) (R.__ngLastListenerFn__ || R).__ngNextListenerFn__ = i, R.__ngLastListenerFn__ = i, h = !1;else {
            i = Zh(r, t, d, i, !1);
            var X = n.listen(b, o, i);
            f.push(i, X), c && c.push(o, m, F, F + 1);
          }
        } else i = Zh(r, t, d, i, !1);

        var p = r.outputs;
        var g;

        if (h && null !== p && (g = p[o])) {
          var _2 = g.length;
          if (_2) for (var _b = 0; _b < _2; _b += 2) {
            var me = t[g[_b]][g[_b + 1]].subscribe(i),
                Qn = f.length;

            f.push(i, me), c && c.push(o, r.index, Qn, -(Qn + 1));
          }
        }
      }(i, o, o[J], s, e, t, 0, r), wt;
    }

    function qh(e, t, n, r) {
      try {
        return !1 !== n(r);
      } catch (o) {
        return Nh(e, o), !1;
      }
    }

    function Zh(e, t, n, r, o) {
      return function i(s) {
        if (s === Function) return r;
        mu(2 & e.flags ? ft(e.index, t) : t);
        var u = qh(t, 0, r, s),
            l = i.__ngNextListenerFn__;

        for (; l;) {
          u = qh(t, 0, l, s) && u, l = l.__ngNextListenerFn__;
        }

        return o && !1 === u && (s.preventDefault(), s.returnValue = !1), u;
      };
    }

    function op(e, t, n, r, o) {
      var i = e[n + 1],
          s = null === t;
      var a = r ? Ot(i) : ln(i),
          u = !1;

      for (; 0 !== a && (!1 === u || s);) {
        var c = e[a + 1];
        eb(e[a], t) && (u = !0, e[a + 1] = r ? tu(c) : Xa(c)), a = r ? Ot(c) : ln(c);
      }

      u && (e[n + 1] = r ? Xa(i) : tu(i));
    }

    function eb(e, t) {
      return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && cr(e, t) >= 0;
    }

    function ki(e, t) {
      return function Pt(e, t, n, r) {
        var o = y(),
            i = te(),
            s = function sn(e) {
          var t = G.lFrame,
              n = t.bindingIndex;
          return t.bindingIndex = t.bindingIndex + e, n;
        }(2);

        i.firstUpdatePass && function hp(e, t, n, r) {
          var o = e.data;

          if (null === o[n + 1]) {
            var _i14 = o[Xe()],
                _s13 = function fp(e, t) {
              return t >= e.expandoStartIndex;
            }(e, n);

            (function yp(e, t) {
              return 0 != (e.flags & (t ? 16 : 32));
            })(_i14, r) && null === t && !_s13 && (t = !1), t = function lb(e, t, n, r) {
              var o = function Qs(e) {
                var t = G.lFrame.currentDirectiveIndex;
                return -1 === t ? null : e[t];
              }(e);

              var i = r ? t.residualClasses : t.residualStyles;
              if (null === o) 0 === (r ? t.classBindings : t.styleBindings) && (n = Co(n = Tu(null, e, t, n, r), t.attrs, r), i = null);else {
                var _s14 = t.directiveStylingLast;
                if (-1 === _s14 || e[_s14] !== o) if (n = Tu(o, e, t, n, r), null === i) {
                  var u = function cb(e, t, n) {
                    var r = n ? t.classBindings : t.styleBindings;
                    if (0 !== ln(r)) return e[Ot(r)];
                  }(e, t, r);

                  void 0 !== u && Array.isArray(u) && (u = Tu(null, e, t, u[1], r), u = Co(u, t.attrs, r), function db(e, t, n, r) {
                    e[Ot(n ? t.classBindings : t.styleBindings)] = r;
                  }(e, t, r, u));
                } else i = function fb(e, t, n) {
                  var r;
                  var o = t.directiveEnd;

                  for (var _i15 = 1 + t.directiveStylingLast; _i15 < o; _i15++) {
                    r = Co(r, e[_i15].hostAttrs, n);
                  }

                  return Co(r, t.attrs, n);
                }(e, t, r);
              }
              return void 0 !== i && (r ? t.residualClasses = i : t.residualStyles = i), n;
            }(o, _i14, t, r), function JE(e, t, n, r, o, i) {
              var s = i ? t.classBindings : t.styleBindings,
                  a = Ot(s),
                  u = ln(s);
              e[r] = n;
              var c,
                  l = !1;

              if (Array.isArray(n)) {
                var d = n;
                c = d[1], (null === c || cr(d, c) > 0) && (l = !0);
              } else c = n;

              if (o) {
                if (0 !== u) {
                  var f = Ot(e[a + 1]);
                  e[r + 1] = Si(f, a), 0 !== f && (e[f + 1] = eu(e[f + 1], r)), e[a + 1] = function Bw(e, t) {
                    return 131071 & e | t << 17;
                  }(e[a + 1], r);
                } else e[r + 1] = Si(a, 0), 0 !== a && (e[a + 1] = eu(e[a + 1], r)), a = r;
              } else e[r + 1] = Si(u, 0), 0 === a ? a = r : e[u + 1] = eu(e[u + 1], r), u = r;
              l && (e[r + 1] = Xa(e[r + 1])), op(e, c, r, !0), op(e, c, r, !1), function XE(e, t, n, r, o) {
                var i = o ? e.residualClasses : e.residualStyles;
                null != i && "string" == typeof t && cr(i, t) >= 0 && (n[r + 1] = tu(n[r + 1]));
              }(t, c, e, r, i), s = Si(a, u), i ? t.classBindings = s : t.styleBindings = s;
            }(o, _i14, t, n, _s13, r);
          }
        }(i, e, s, r), t !== q && Ge(o, s, t) && function gp(e, t, n, r, o, i, s, a) {
          if (!(3 & t.type)) return;
          var u = e.data,
              l = u[a + 1];
          Bi(function oh(e) {
            return 1 == (1 & e);
          }(l) ? mp(u, t, n, o, ln(l), s) : void 0) || (Bi(i) || function rh(e) {
            return 2 == (2 & e);
          }(l) && (i = mp(u, null, n, o, a, s)), function uw(e, t, n, r, o) {
            if (t) o ? e.addClass(n, r) : e.removeClass(n, r);else {
              var _i16 = -1 === r.indexOf("-") ? void 0 : st.DashCase;

              null == o ? e.removeStyle(n, r, _i16) : ("string" == typeof o && o.endsWith("!important") && (o = o.slice(0, -10), _i16 |= st.Important), e.setStyle(n, r, o, _i16));
            }
          }(r, s, Ko(Xe(), n), o, i));
        }(i, i.data[Xe()], o, o[J], e, o[s + 1] = function gb(e, t) {
          return null == e || ("string" == typeof t ? e += t : "object" == _typeof(e) && (e = ce(function En(e) {
            return e instanceof /*#__PURE__*/function () {
              function Hd(t) {
                _classCallCheck(this, Hd);

                this.changingThisBreaksApplicationSecurity = t;
              }

              _createClass(Hd, [{
                key: "toString",
                value: function toString() {
                  return "SafeValue must use [property]=binding: ".concat(this.changingThisBreaksApplicationSecurity, " (see https://g.co/ng/security#xss)");
                }
              }]);

              return Hd;
            }() ? e.changingThisBreaksApplicationSecurity : e;
          }(e)))), e;
        }(t, n), r, s);
      }(e, t, null, !0), ki;
    }

    function Tu(e, t, n, r, o) {
      var i = null;
      var s = n.directiveEnd;
      var a = n.directiveStylingLast;

      for (-1 === a ? a = n.directiveStart : a++; a < s && (i = t[a], r = Co(r, i.hostAttrs, o), i !== e);) {
        a++;
      }

      return null !== e && (n.directiveStylingLast = a), r;
    }

    function Co(e, t, n) {
      var r = n ? 1 : 2;
      var o = -1;
      if (null !== t) for (var i = 0; i < t.length; i++) {
        var s = t[i];
        "number" == typeof s ? o = s : o === r && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]), pt(e, s, !!n || t[++i]));
      }
      return void 0 === e ? null : e;
    }

    function mp(e, t, n, r, o, i) {
      var s = null === t;
      var a;

      for (; o > 0;) {
        var u = e[o],
            l = Array.isArray(u),
            c = l ? u[1] : u,
            d = null === c;
        var f = n[o + 1];
        f === q && (f = d ? oe : void 0);
        var h = d ? ua(f, r) : c === r ? f : void 0;
        if (l && !Bi(h) && (h = ua(u, r)), Bi(h) && (a = h, s)) return a;
        var p = e[o + 1];
        o = s ? Ot(p) : ln(p);
      }

      if (null !== t) {
        var _u12 = i ? t.residualClasses : t.residualStyles;

        null != _u12 && (a = ua(_u12, r));
      }

      return a;
    }

    function Bi(e) {
      return void 0 !== e;
    }

    function Nu(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      var n = y(),
          r = te(),
          o = e + 22,
          i = r.firstCreatePass ? Cr(r, o, 1, t, null) : r.data[o],
          s = n[o] = function ja(e, t) {
        return e.createText(t);
      }(n[J], t);

      bi(r, n, s, i), Ut(i, !1);
    }

    function xu(e) {
      return Fu("", e, ""), xu;
    }

    function Fu(e, t, n) {
      var r = y(),
          o = function br(e, t, n, r) {
        return Ge(e, nr(), n) ? t + z(n) + r : q;
      }(r, e, t, n);

      return o !== q && function cn(e, t, n) {
        var r = Ko(t, e);
        !function bf(e, t, n) {
          e.setValue(t, n);
        }(e[J], r, n);
      }(r, Xe(), o), Fu;
    }

    var Pr = "en-US";
    var Bp = Pr;

    function Ru(e, t, n, r, o) {
      if (e = $(e), Array.isArray(e)) for (var i = 0; i < e.length; i++) {
        Ru(e[i], t, n, r, o);
      } else {
        var _i17 = te(),
            s = y();

        var a = Bn(e) ? e : $(e.provide),
            u = af(e);
        var l = Ne(),
            c = 1048575 & l.providerIndexes,
            d = l.directiveStart,
            f = l.providerIndexes >> 20;

        if (Bn(e) || !e.multi) {
          var h = new Qr(u, o, S),
              p = Lu(a, t, o ? c : c + f, d);
          -1 === p ? (si(Yr(l, s), _i17, a), Vu(_i17, e, t.length), t.push(a), l.directiveStart++, l.directiveEnd++, o && (l.providerIndexes += 1048576), n.push(h), s.push(h)) : (n[p] = h, s[p] = h);
        } else {
          var _h3 = Lu(a, t, c + f, d),
              _p = Lu(a, t, c, c + f),
              g = _h3 >= 0 && n[_h3],
              _ = _p >= 0 && n[_p];

          if (o && !_ || !o && !g) {
            si(Yr(l, s), _i17, a);

            var b = function OM(e, t, n, r, o) {
              var i = new Qr(e, n, S);
              return i.multi = [], i.index = t, i.componentProviders = 0, cg(i, o, r && !n), i;
            }(o ? FM : xM, n.length, o, r, u);

            !o && _ && (n[_p].providerFactory = b), Vu(_i17, e, t.length, 0), t.push(a), l.directiveStart++, l.directiveEnd++, o && (l.providerIndexes += 1048576), n.push(b), s.push(b);
          } else Vu(_i17, e, _h3 > -1 ? _h3 : _p, cg(n[o ? _p : _h3], u, !o && r));

          !o && r && _ && n[_p].componentProviders++;
        }
      }
    }

    function Vu(e, t, n, r) {
      var o = Bn(t),
          i = function nC(e) {
        return !!e.useClass;
      }(t);

      if (o || i) {
        var u = (i ? $(t.useClass) : t).prototype.ngOnDestroy;

        if (u) {
          var l = e.destroyHooks || (e.destroyHooks = []);

          if (!o && t.multi) {
            var c = l.indexOf(n);
            -1 === c ? l.push(n, [r, u]) : l[c + 1].push(r, u);
          } else l.push(n, u);
        }
      }
    }

    function cg(e, t, n) {
      return n && e.componentProviders++, e.multi.push(t) - 1;
    }

    function Lu(e, t, n, r) {
      for (var o = n; o < r; o++) {
        if (t[o] === e) return o;
      }

      return -1;
    }

    function xM(e, t, n, r) {
      return ku(this.multi, []);
    }

    function FM(e, t, n, r) {
      var o = this.multi;
      var i;

      if (this.providerFactory) {
        var s = this.providerFactory.componentProviders,
            a = Jr(n, n[1], this.providerFactory.index, r);
        i = a.slice(0, s), ku(o, i);

        for (var u = s; u < a.length; u++) {
          i.push(a[u]);
        }
      } else i = [], ku(o, i);

      return i;
    }

    function ku(e, t) {
      for (var n = 0; n < e.length; n++) {
        t.push((0, e[n])());
      }

      return t;
    }

    function De(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return function (n) {
        n.providersResolver = function (r, o) {
          return function NM(e, t, n) {
            var r = te();

            if (r.firstCreatePass) {
              var _o12 = Nt(e);

              Ru(n, r.data, r.blueprint, _o12, !0), Ru(t, r.data, r.blueprint, _o12, !1);
            }
          }(r, o ? o(e) : e, t);
        };
      };
    }

    var Vr = /*#__PURE__*/_createClass(function Vr() {
      _classCallCheck(this, Vr);
    });

    var dg = /*#__PURE__*/function (_Vr) {
      _inherits(dg, _Vr);

      var _super12 = _createSuper(dg);

      function dg(t, n) {
        var _this19;

        _classCallCheck(this, dg);

        _this19 = _super12.call(this), _this19._parent = n, _this19._bootstrapComponents = [], _this19.destroyCbs = [], _this19.componentFactoryResolver = new _u(_assertThisInitialized(_this19));

        var r = function ct(e, t) {
          var n = e[Hc] || null;
          if (!n && !0 === t) throw new Error("Type ".concat(ce(e), " does not have '\u0275mod' property."));
          return n;
        }(t);

        _this19._bootstrapComponents = function un(e) {
          return e instanceof Function ? e() : e;
        }(r.bootstrap), _this19._r3Injector = Qf(t, n, [{
          provide: Vr,
          useValue: _assertThisInitialized(_this19)
        }, {
          provide: Ci,
          useValue: _this19.componentFactoryResolver
        }], ce(t), new Set(["environment"])), _this19._r3Injector.resolveInjectorInitializers(), _this19.instance = _this19._r3Injector.get(t);
        return _this19;
      }

      _createClass(dg, [{
        key: "injector",
        get: function get() {
          return this._r3Injector;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var t = this._r3Injector;
          !t.destroyed && t.destroy(), this.destroyCbs.forEach(function (n) {
            return n();
          }), this.destroyCbs = null;
        }
      }, {
        key: "onDestroy",
        value: function onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }]);

      return dg;
    }(Vr);

    var Bu = /*#__PURE__*/function (_PM) {
      _inherits(Bu, _PM);

      var _super13 = _createSuper(Bu);

      function Bu(t) {
        var _this20;

        _classCallCheck(this, Bu);

        _this20 = _super13.call(this), _this20.moduleType = t;
        return _this20;
      }

      _createClass(Bu, [{
        key: "create",
        value: function create(t) {
          return new dg(this.moduleType, t);
        }
      }]);

      return Bu;
    }( /*#__PURE__*/_createClass(function PM() {
      _classCallCheck(this, PM);
    }));

    function Hu(e) {
      return function (t) {
        setTimeout(e, void 0, t);
      };
    }

    var ze = /*#__PURE__*/function (_bs2) {
      _inherits(cI, _bs2);

      var _super14 = _createSuper(cI);

      function cI() {
        var _this21;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

        _classCallCheck(this, cI);

        _this21 = _super14.call(this), _this21.__isAsync = t;
        return _this21;
      }

      _createClass(cI, [{
        key: "emit",
        value: function emit(t) {
          _get(_getPrototypeOf(cI.prototype), "next", this).call(this, t);
        }
      }, {
        key: "subscribe",
        value: function subscribe(t, n, r) {
          var o = t,
              i = n || function () {
            return null;
          },
              s = r;

          if (t && "object" == _typeof(t)) {
            var _u$next, _u$error, _u$complete;

            var u = t;
            o = (_u$next = u.next) === null || _u$next === void 0 ? void 0 : _u$next.bind(u), i = (_u$error = u.error) === null || _u$error === void 0 ? void 0 : _u$error.bind(u), s = (_u$complete = u.complete) === null || _u$complete === void 0 ? void 0 : _u$complete.bind(u);
          }

          this.__isAsync && (i = Hu(i), o && (o = Hu(o)), s && (s = Hu(s)));

          var a = _get(_getPrototypeOf(cI.prototype), "subscribe", this).call(this, {
            next: o,
            error: i,
            complete: s
          });

          return t instanceof M && t.add(a), a;
        }
      }]);

      return cI;
    }(bs);

    function Wi() {}

    var Kg = new K("Application Initializer");

    var qi = function () {
      var e = /*#__PURE__*/function () {
        function e(n) {
          var _this22 = this;

          _classCallCheck(this, e);

          this.appInits = n, this.resolve = Wi, this.reject = Wi, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function (r, o) {
            _this22.resolve = r, _this22.reject = o;
          });
        }

        _createClass(e, [{
          key: "runInitializers",
          value: function runInitializers() {
            var _this23 = this;

            if (this.initialized) return;

            var n = [],
                r = function r() {
              _this23.done = !0, _this23.resolve();
            };

            if (this.appInits) {
              var _loop2 = function _loop2(o) {
                var i = _this23.appInits[o]();

                if (Li(i)) n.push(i);else if (Gh(i)) {
                  var s = new Promise(function (a, u) {
                    i.subscribe({
                      complete: a,
                      error: u
                    });
                  });
                  n.push(s);
                }
              };

              for (var o = 0; o < this.appInits.length; o++) {
                _loop2(o);
              }
            }

            Promise.all(n).then(function () {
              r();
            })["catch"](function (o) {
              _this23.reject(o);
            }), 0 === n.length && r(), this.initialized = !0;
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)(se(Kg, 8));
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac,
        providedIn: "root"
      }), e;
    }();

    var To = new K("AppId", {
      providedIn: "root",
      factory: function Yg() {
        return "".concat(Xu()).concat(Xu()).concat(Xu());
      }
    });

    function Xu() {
      return String.fromCharCode(97 + Math.floor(25 * Math.random()));
    }

    var Jg = new K("Platform Initializer"),
        Xg = new K("Platform ID", {
      providedIn: "platform",
      factory: function factory() {
        return "unknown";
      }
    }),
        QI = new K("appBootstrapListener"),
        hn = new K("LocaleId", {
      providedIn: "root",
      factory: function factory() {
        return function g_(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : U.Default;
          return "number" != typeof t && (t = 0 | (t.optional && 8) | (t.host && 1) | (t.self && 2) | (t.skipSelf && 4)), se(e, t);
        }(hn, U.Optional | U.SkipSelf) || function KI() {
          return (typeof $localize === "undefined" ? "undefined" : _typeof($localize)) < "u" && $localize.locale || Pr;
        }();
      }
    }),
        t0 = function () {
      return Promise.resolve(0);
    }();

    function el(e) {
      (typeof Zone === "undefined" ? "undefined" : _typeof(Zone)) > "u" ? t0.then(function () {
        e && e.apply(null, null);
      }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
    }

    var We = /*#__PURE__*/function () {
      function We(_ref) {
        var _ref$enableLongStackT = _ref.enableLongStackTrace,
            t = _ref$enableLongStackT === void 0 ? !1 : _ref$enableLongStackT,
            _ref$shouldCoalesceEv = _ref.shouldCoalesceEventChangeDetection,
            n = _ref$shouldCoalesceEv === void 0 ? !1 : _ref$shouldCoalesceEv,
            _ref$shouldCoalesceRu = _ref.shouldCoalesceRunChangeDetection,
            r = _ref$shouldCoalesceRu === void 0 ? !1 : _ref$shouldCoalesceRu;

        _classCallCheck(this, We);

        if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ze(!1), this.onMicrotaskEmpty = new ze(!1), this.onStable = new ze(!1), this.onError = new ze(!1), (typeof Zone === "undefined" ? "undefined" : _typeof(Zone)) > "u") throw new O(908, !1);
        Zone.assertZonePatched();
        var o = this;

        if (o._nesting = 0, o._outer = o._inner = Zone.current, Zone.AsyncStackTaggingZoneSpec) {
          var i = Zone.AsyncStackTaggingZoneSpec;
          o._inner = o._inner.fork(new i("Angular"));
        }

        Zone.TaskTrackingZoneSpec && (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())), t && Zone.longStackTraceZoneSpec && (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)), o.shouldCoalesceEventChangeDetection = !r && n, o.shouldCoalesceRunChangeDetection = r, o.lastRequestAnimationFrameId = -1, o.nativeRequestAnimationFrame = function n0() {
          var e = de.requestAnimationFrame,
              t = de.cancelAnimationFrame;

          if ((typeof Zone === "undefined" ? "undefined" : _typeof(Zone)) < "u" && e && t) {
            var _n11 = e[Zone.__symbol__("OriginalDelegate")];

            _n11 && (e = _n11);

            var _r11 = t[Zone.__symbol__("OriginalDelegate")];

            _r11 && (t = _r11);
          }

          return {
            nativeRequestAnimationFrame: e,
            nativeCancelAnimationFrame: t
          };
        }().nativeRequestAnimationFrame, function s0(e) {
          var t = function t() {
            !function o0(e) {
              e.isCheckStableRunning || -1 !== e.lastRequestAnimationFrameId || (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(de, function () {
                e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", function () {
                  e.lastRequestAnimationFrameId = -1, nl(e), e.isCheckStableRunning = !0, tl(e), e.isCheckStableRunning = !1;
                }, void 0, function () {}, function () {})), e.fakeTopEventTask.invoke();
              }), nl(e));
            }(e);
          };

          e._inner = e._inner.fork({
            name: "angular",
            properties: {
              isAngularZone: !0
            },
            onInvokeTask: function onInvokeTask(n, r, o, i, s, a) {
              try {
                return nm(e), n.invokeTask(o, i, s, a);
              } finally {
                (e.shouldCoalesceEventChangeDetection && "eventTask" === i.type || e.shouldCoalesceRunChangeDetection) && t(), rm(e);
              }
            },
            onInvoke: function onInvoke(n, r, o, i, s, a, u) {
              try {
                return nm(e), n.invoke(o, i, s, a, u);
              } finally {
                e.shouldCoalesceRunChangeDetection && t(), rm(e);
              }
            },
            onHasTask: function onHasTask(n, r, o, i) {
              n.hasTask(o, i), r === o && ("microTask" == i.change ? (e._hasPendingMicrotasks = i.microTask, nl(e), tl(e)) : "macroTask" == i.change && (e.hasPendingMacrotasks = i.macroTask));
            },
            onHandleError: function onHandleError(n, r, o, i) {
              return n.handleError(o, i), e.runOutsideAngular(function () {
                return e.onError.emit(i);
              }), !1;
            }
          });
        }(o);
      }

      _createClass(We, [{
        key: "run",
        value: function run(t, n, r) {
          return this._inner.run(t, n, r);
        }
      }, {
        key: "runTask",
        value: function runTask(t, n, r, o) {
          var i = this._inner,
              s = i.scheduleEventTask("NgZoneEvent: " + o, t, r0, Wi, Wi);

          try {
            return i.runTask(s, n, r);
          } finally {
            i.cancelTask(s);
          }
        }
      }, {
        key: "runGuarded",
        value: function runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
      }, {
        key: "runOutsideAngular",
        value: function runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }], [{
        key: "isInAngularZone",
        value: function isInAngularZone() {
          return (typeof Zone === "undefined" ? "undefined" : _typeof(Zone)) < "u" && !0 === Zone.current.get("isAngularZone");
        }
      }, {
        key: "assertInAngularZone",
        value: function assertInAngularZone() {
          if (!We.isInAngularZone()) throw new O(909, !1);
        }
      }, {
        key: "assertNotInAngularZone",
        value: function assertNotInAngularZone() {
          if (We.isInAngularZone()) throw new O(909, !1);
        }
      }]);

      return We;
    }();

    var r0 = {};

    function tl(e) {
      if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
      } finally {
        if (e._nesting--, !e.hasPendingMicrotasks) try {
          e.runOutsideAngular(function () {
            return e.onStable.emit(null);
          });
        } finally {
          e.isStable = !0;
        }
      }
    }

    function nl(e) {
      e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId);
    }

    function nm(e) {
      e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null));
    }

    function rm(e) {
      e._nesting--, tl(e);
    }

    var a0 = /*#__PURE__*/function () {
      function a0() {
        _classCallCheck(this, a0);

        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ze(), this.onMicrotaskEmpty = new ze(), this.onStable = new ze(), this.onError = new ze();
      }

      _createClass(a0, [{
        key: "run",
        value: function run(t, n, r) {
          return t.apply(n, r);
        }
      }, {
        key: "runGuarded",
        value: function runGuarded(t, n, r) {
          return t.apply(n, r);
        }
      }, {
        key: "runOutsideAngular",
        value: function runOutsideAngular(t) {
          return t();
        }
      }, {
        key: "runTask",
        value: function runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }]);

      return a0;
    }();

    var om = new K(""),
        Zi = new K("");

    var il,
        rl = function () {
      var e = /*#__PURE__*/function () {
        function e(n, r, o) {
          var _this24 = this;

          _classCallCheck(this, e);

          this._ngZone = n, this.registry = r, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, il || (function u0(e) {
            il = e;
          }(o), o.addToWindow(r)), this._watchAngularEvents(), n.run(function () {
            _this24.taskTrackingZone = (typeof Zone === "undefined" ? "undefined" : _typeof(Zone)) > "u" ? null : Zone.current.get("TaskTrackingZone");
          });
        }

        _createClass(e, [{
          key: "_watchAngularEvents",
          value: function _watchAngularEvents() {
            var _this25 = this;

            this._ngZone.onUnstable.subscribe({
              next: function next() {
                _this25._didWork = !0, _this25._isZoneStable = !1;
              }
            }), this._ngZone.runOutsideAngular(function () {
              _this25._ngZone.onStable.subscribe({
                next: function next() {
                  We.assertNotInAngularZone(), el(function () {
                    _this25._isZoneStable = !0, _this25._runCallbacksIfReady();
                  });
                }
              });
            });
          }
        }, {
          key: "increasePendingRequestCount",
          value: function increasePendingRequestCount() {
            return this._pendingCount += 1, this._didWork = !0, this._pendingCount;
          }
        }, {
          key: "decreasePendingRequestCount",
          value: function decreasePendingRequestCount() {
            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
            return this._runCallbacksIfReady(), this._pendingCount;
          }
        }, {
          key: "isStable",
          value: function isStable() {
            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
          }
        }, {
          key: "_runCallbacksIfReady",
          value: function _runCallbacksIfReady() {
            var _this26 = this;

            if (this.isStable()) el(function () {
              for (; 0 !== _this26._callbacks.length;) {
                var n = _this26._callbacks.pop();

                clearTimeout(n.timeoutId), n.doneCb(_this26._didWork);
              }

              _this26._didWork = !1;
            });else {
              var n = this.getPendingTasks();
              this._callbacks = this._callbacks.filter(function (r) {
                return !r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId), !1);
              }), this._didWork = !0;
            }
          }
        }, {
          key: "getPendingTasks",
          value: function getPendingTasks() {
            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function (n) {
              return {
                source: n.source,
                creationLocation: n.creationLocation,
                data: n.data
              };
            }) : [];
          }
        }, {
          key: "addCallback",
          value: function addCallback(n, r, o) {
            var _this27 = this;

            var i = -1;
            r && r > 0 && (i = setTimeout(function () {
              _this27._callbacks = _this27._callbacks.filter(function (s) {
                return s.timeoutId !== i;
              }), n(_this27._didWork, _this27.getPendingTasks());
            }, r)), this._callbacks.push({
              doneCb: n,
              timeoutId: i,
              updateCb: o
            });
          }
        }, {
          key: "whenStable",
          value: function whenStable(n, r, o) {
            if (o && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
            this.addCallback(n, r, o), this._runCallbacksIfReady();
          }
        }, {
          key: "getPendingRequestCount",
          value: function getPendingRequestCount() {
            return this._pendingCount;
          }
        }, {
          key: "registerApplication",
          value: function registerApplication(n) {
            this.registry.registerApplication(n, this);
          }
        }, {
          key: "unregisterApplication",
          value: function unregisterApplication(n) {
            this.registry.unregisterApplication(n);
          }
        }, {
          key: "findProviders",
          value: function findProviders(n, r, o) {
            return [];
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)(se(We), se(ol), se(Zi));
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac
      }), e;
    }(),
        ol = function () {
      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);

          this._applications = new Map();
        }

        _createClass(e, [{
          key: "registerApplication",
          value: function registerApplication(n, r) {
            this._applications.set(n, r);
          }
        }, {
          key: "unregisterApplication",
          value: function unregisterApplication(n) {
            this._applications["delete"](n);
          }
        }, {
          key: "unregisterAllApplications",
          value: function unregisterAllApplications() {
            this._applications.clear();
          }
        }, {
          key: "getTestability",
          value: function getTestability(n) {
            return this._applications.get(n) || null;
          }
        }, {
          key: "getAllTestabilities",
          value: function getAllTestabilities() {
            return Array.from(this._applications.values());
          }
        }, {
          key: "getAllRootElements",
          value: function getAllRootElements() {
            return Array.from(this._applications.keys());
          }
        }, {
          key: "findTestabilityInTree",
          value: function findTestabilityInTree(n) {
            var _il$findTestabilityIn, _il;

            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return (_il$findTestabilityIn = (_il = il) === null || _il === void 0 ? void 0 : _il.findTestabilityInTree(this, n, r)) !== null && _il$findTestabilityIn !== void 0 ? _il$findTestabilityIn : null;
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)();
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac,
        providedIn: "platform"
      }), e;
    }(),
        Sn = null;

    var im = new K("AllowMultipleToken"),
        sl = new K("PlatformDestroyListeners");

    function am(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var r = "Platform: ".concat(t),
          o = new K(r);
      return function () {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var s = al();

        if (!s || s.injector.get(im, !1)) {
          var a = [].concat(_toConsumableArray(n), _toConsumableArray(i), [{
            provide: o,
            useValue: !0
          }]);
          e ? e(a) : function d0(e) {
            if (Sn && !Sn.get(im, !1)) throw new O(400, !1);
            Sn = e;
            var t = e.get(lm);

            (function sm(e) {
              var t = e.get(Jg, null);
              t && t.forEach(function (n) {
                return n();
              });
            })(e);
          }(function um() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var t = arguments.length > 1 ? arguments[1] : undefined;
            return bn.create({
              name: t,
              providers: [{
                provide: wa,
                useValue: "platform"
              }, {
                provide: sl,
                useValue: new Set([function () {
                  return Sn = null;
                }])
              }].concat(_toConsumableArray(e))
            });
          }(a, r));
        }

        return function h0(e) {
          var t = al();
          if (!t) throw new O(401, !1);
          return t;
        }();
      };
    }

    function al() {
      var _Sn$get, _Sn;

      return (_Sn$get = (_Sn = Sn) === null || _Sn === void 0 ? void 0 : _Sn.get(lm)) !== null && _Sn$get !== void 0 ? _Sn$get : null;
    }

    var lm = function () {
      var e = /*#__PURE__*/function () {
        function e(n) {
          _classCallCheck(this, e);

          this._injector = n, this._modules = [], this._destroyListeners = [], this._destroyed = !1;
        }

        _createClass(e, [{
          key: "bootstrapModuleFactory",
          value: function bootstrapModuleFactory(n, r) {
            var _this28 = this;

            var o = function dm(e, t) {
              var n;
              return n = "noop" === e ? new a0() : ("zone.js" === e ? void 0 : e) || new We(t), n;
            }(r === null || r === void 0 ? void 0 : r.ngZone, function cm(e) {
              return {
                enableLongStackTrace: !1,
                shouldCoalesceEventChangeDetection: !(!e || !e.ngZoneEventCoalescing) || !1,
                shouldCoalesceRunChangeDetection: !(!e || !e.ngZoneRunCoalescing) || !1
              };
            }(r)),
                i = [{
              provide: We,
              useValue: o
            }];

            return o.run(function () {
              var s = bn.create({
                providers: i,
                parent: _this28.injector,
                name: n.moduleType.name
              }),
                  a = n.create(s),
                  u = a.injector.get(yr, null);
              if (!u) throw new O(402, !1);
              return o.runOutsideAngular(function () {
                var l = o.onError.subscribe({
                  next: function next(c) {
                    u.handleError(c);
                  }
                });
                a.onDestroy(function () {
                  Qi(_this28._modules, a), l.unsubscribe();
                });
              }), function fm(e, t, n) {
                try {
                  var _r12 = n();

                  return Li(_r12) ? _r12["catch"](function (o) {
                    throw t.runOutsideAngular(function () {
                      return e.handleError(o);
                    }), o;
                  }) : _r12;
                } catch (r) {
                  throw t.runOutsideAngular(function () {
                    return e.handleError(r);
                  }), r;
                }
              }(u, o, function () {
                var l = a.injector.get(qi);
                return l.runInitializers(), l.donePromise.then(function () {
                  return function jp(e) {
                    lt(e, "Expected localeId to be defined"), "string" == typeof e && (Bp = e.toLowerCase().replace(/_/g, "-"));
                  }(a.injector.get(hn, Pr) || Pr), _this28._moduleDoBootstrap(a), a;
                });
              });
            });
          }
        }, {
          key: "bootstrapModule",
          value: function bootstrapModule(n) {
            var _this29 = this;

            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var o = hm({}, r);
            return function l0(e, t, n) {
              var r = new Bu(n);
              return Promise.resolve(r);
            }(0, 0, n).then(function (i) {
              return _this29.bootstrapModuleFactory(i, o);
            });
          }
        }, {
          key: "_moduleDoBootstrap",
          value: function _moduleDoBootstrap(n) {
            var r = n.injector.get(ul);
            if (n._bootstrapComponents.length > 0) n._bootstrapComponents.forEach(function (o) {
              return r.bootstrap(o);
            });else {
              if (!n.instance.ngDoBootstrap) throw new O(403, !1);
              n.instance.ngDoBootstrap(r);
            }

            this._modules.push(n);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy(n) {
            this._destroyListeners.push(n);
          }
        }, {
          key: "injector",
          get: function get() {
            return this._injector;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            if (this._destroyed) throw new O(404, !1);
            this._modules.slice().forEach(function (r) {
              return r.destroy();
            }), this._destroyListeners.forEach(function (r) {
              return r();
            });

            var n = this._injector.get(sl, null);

            n && (n.forEach(function (r) {
              return r();
            }), n.clear()), this._destroyed = !0;
          }
        }, {
          key: "destroyed",
          get: function get() {
            return this._destroyed;
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)(se(bn));
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac,
        providedIn: "platform"
      }), e;
    }();

    function hm(e, t) {
      return Array.isArray(t) ? t.reduce(hm, e) : _objectSpread(_objectSpread({}, e), t);
    }

    var ul = function () {
      var e = /*#__PURE__*/function () {
        function e(n, r, o) {
          var _this30 = this;

          _classCallCheck(this, e);

          this._zone = n, this._injector = r, this._exceptionHandler = o, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this._destroyed = !1, this._destroyListeners = [], this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
            next: function next() {
              _this30._zone.run(function () {
                _this30.tick();
              });
            }
          });
          var i = new Qe(function (a) {
            _this30._stable = _this30._zone.isStable && !_this30._zone.hasPendingMacrotasks && !_this30._zone.hasPendingMicrotasks, _this30._zone.runOutsideAngular(function () {
              a.next(_this30._stable), a.complete();
            });
          }),
              s = new Qe(function (a) {
            var u;

            _this30._zone.runOutsideAngular(function () {
              u = _this30._zone.onStable.subscribe(function () {
                We.assertNotInAngularZone(), el(function () {
                  !_this30._stable && !_this30._zone.hasPendingMacrotasks && !_this30._zone.hasPendingMicrotasks && (_this30._stable = !0, a.next(!0));
                });
              });
            });

            var l = _this30._zone.onUnstable.subscribe(function () {
              We.assertInAngularZone(), _this30._stable && (_this30._stable = !1, _this30._zone.runOutsideAngular(function () {
                a.next(!1);
              }));
            });

            return function () {
              u.unsubscribe(), l.unsubscribe();
            };
          });
          this.isStable = zD(i, s.pipe(function WD() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _e$connector = e.connector,
                t = _e$connector === void 0 ? function () {
              return new bs();
            } : _e$connector,
                _e$resetOnError = e.resetOnError,
                n = _e$resetOnError === void 0 ? !0 : _e$resetOnError,
                _e$resetOnComplete = e.resetOnComplete,
                r = _e$resetOnComplete === void 0 ? !0 : _e$resetOnComplete,
                _e$resetOnRefCountZer = e.resetOnRefCountZero,
                o = _e$resetOnRefCountZer === void 0 ? !0 : _e$resetOnRefCountZer;
            return function (i) {
              var s,
                  a,
                  u,
                  l = 0,
                  c = !1,
                  d = !1;

              var f = function f() {
                var _a14;

                (_a14 = a) !== null && _a14 !== void 0 && _a14.unsubscribe(), a = void 0;
              },
                  h = function h() {
                f(), s = u = void 0, c = d = !1;
              },
                  p = function p() {
                var g = s;
                h(), g === null || g === void 0 ? void 0 : g.unsubscribe();
              };

              return Hr(function (g, _) {
                var _u13;

                l++, !d && !c && f();
                var b = u = (_u13 = u) !== null && _u13 !== void 0 ? _u13 : t();
                _.add(function () {
                  l--, 0 === l && !d && !c && (a = As(p, o));
                }), b.subscribe(_), !s && l > 0 && (s = new A({
                  next: function next(F) {
                    return b.next(F);
                  },
                  error: function error(F) {
                    d = !0, f(), a = As(h, n, F), b.error(F);
                  },
                  complete: function complete() {
                    c = !0, f(), a = As(h, r), b.complete();
                  }
                }), yn(g).subscribe(s));
              })(i);
            };
          }()));
        }

        _createClass(e, [{
          key: "destroyed",
          get: function get() {
            return this._destroyed;
          }
        }, {
          key: "injector",
          get: function get() {
            return this._injector;
          }
        }, {
          key: "bootstrap",
          value: function bootstrap(n, r) {
            var _this31 = this;

            var o = n instanceof uf;
            if (!this._injector.get(qi).done) throw !o && function Gr(e) {
              var t = ae(e) || Ke(e) || Ye(e);
              return null !== t && t.standalone;
            }(n), new O(405, false);
            var s;
            s = o ? n : this._injector.get(Ci).resolveComponentFactory(n), this.componentTypes.push(s.componentType);
            var a = function c0(e) {
              return e.isBoundToModule;
            }(s) ? void 0 : this._injector.get(Vr),
                l = s.create(bn.NULL, [], r || s.selector, a),
                c = l.location.nativeElement,
                d = l.injector.get(om, null);
            return d !== null && d !== void 0 && d.registerApplication(c), l.onDestroy(function () {
              _this31.detachView(l.hostView), Qi(_this31.components, l), d === null || d === void 0 ? void 0 : d.unregisterApplication(c);
            }), this._loadComponent(l), l;
          }
        }, {
          key: "tick",
          value: function tick() {
            var _this32 = this;

            if (this._runningTick) throw new O(101, !1);

            try {
              this._runningTick = !0;

              var _iterator12 = _createForOfIteratorHelper(this._views),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var n = _step12.value;
                  n.detectChanges();
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            } catch (n) {
              this._zone.runOutsideAngular(function () {
                return _this32._exceptionHandler.handleError(n);
              });
            } finally {
              this._runningTick = !1;
            }
          }
        }, {
          key: "attachView",
          value: function attachView(n) {
            var r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
        }, {
          key: "detachView",
          value: function detachView(n) {
            var r = n;
            Qi(this._views, r), r.detachFromAppRef();
          }
        }, {
          key: "_loadComponent",
          value: function _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n), this._injector.get(QI, []).concat(this._bootstrapListeners).forEach(function (o) {
              return o(n);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!this._destroyed) try {
              this._destroyListeners.forEach(function (n) {
                return n();
              }), this._views.slice().forEach(function (n) {
                return n.destroy();
              }), this._onMicrotaskEmptySubscription.unsubscribe();
            } finally {
              this._destroyed = !0, this._views = [], this._bootstrapListeners = [], this._destroyListeners = [];
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy(n) {
            var _this33 = this;

            return this._destroyListeners.push(n), function () {
              return Qi(_this33._destroyListeners, n);
            };
          }
        }, {
          key: "destroy",
          value: function destroy() {
            if (this._destroyed) throw new O(406, !1);
            var n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
        }, {
          key: "viewCount",
          get: function get() {
            return this._views.length;
          }
        }, {
          key: "warnIfDestroyed",
          value: function warnIfDestroyed() {}
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)(se(We), se(pr), se(yr));
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac,
        providedIn: "root"
      }), e;
    }();

    function Qi(e, t) {
      var n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }

    var gm = !0;
    var N0 = am(null, "core", []);

    var x0 = function () {
      var e = /*#__PURE__*/_createClass(function e(n) {
        _classCallCheck(this, e);
      });

      return e.ɵfac = function (n) {
        return new (n || e)(se(ul));
      }, e.ɵmod = nn({
        type: e
      }), e.ɵinj = Ht({}), e;
    }(),
        Xi = null;

    function Wn() {
      return Xi;
    }

    var gn = new K("DocumentToken");

    var XS = function () {
      var e = /*#__PURE__*/_createClass(function e() {
        _classCallCheck(this, e);
      });

      return e.ɵfac = function (n) {
        return new (n || e)();
      }, e.ɵmod = nn({
        type: e
      }), e.ɵinj = Ht({}), e;
    }();

    var Tl = /*#__PURE__*/function (_wA) {
      _inherits(Tl, _wA);

      var _super15 = _createSuper(Tl);

      function Tl() {
        _classCallCheck(this, Tl);

        return _super15.apply(this, arguments);
      }

      _createClass(Tl, [{
        key: "onAndCancel",
        value: function onAndCancel(t, n, r) {
          return t.addEventListener(n, r, !1), function () {
            t.removeEventListener(n, r, !1);
          };
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(t, n) {
          t.dispatchEvent(n);
        }
      }, {
        key: "remove",
        value: function remove(t) {
          t.parentNode && t.parentNode.removeChild(t);
        }
      }, {
        key: "createElement",
        value: function createElement(t, n) {
          return (n = n || this.getDefaultDocument()).createElement(t);
        }
      }, {
        key: "createHtmlDocument",
        value: function createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
      }, {
        key: "getDefaultDocument",
        value: function getDefaultDocument() {
          return document;
        }
      }, {
        key: "isElementNode",
        value: function isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
      }, {
        key: "isShadowRoot",
        value: function isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
      }, {
        key: "getGlobalEventTarget",
        value: function getGlobalEventTarget(t, n) {
          return "window" === n ? window : "document" === n ? t : "body" === n ? t.body : null;
        }
      }, {
        key: "getBaseHref",
        value: function getBaseHref(t) {
          var n = function EA() {
            return Po = Po || document.querySelector("base"), Po ? Po.getAttribute("href") : null;
          }();

          return null == n ? null : function bA(e) {
            cs = cs || document.createElement("a"), cs.setAttribute("href", e);
            var t = cs.pathname;
            return "/" === t.charAt(0) ? t : "/".concat(t);
          }(n);
        }
      }, {
        key: "resetBaseElement",
        value: function resetBaseElement() {
          Po = null;
        }
      }, {
        key: "getUserAgent",
        value: function getUserAgent() {
          return window.navigator.userAgent;
        }
      }, {
        key: "getCookie",
        value: function getCookie(t) {
          return function vS(e, t) {
            t = encodeURIComponent(t);

            var _iterator13 = _createForOfIteratorHelper(e.split(";")),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var n = _step13.value;

                var r = n.indexOf("="),
                    _ref2 = -1 == r ? [n, ""] : [n.slice(0, r), n.slice(r + 1)],
                    _ref3 = _slicedToArray(_ref2, 2),
                    o = _ref3[0],
                    i = _ref3[1];

                if (o.trim() === t) return decodeURIComponent(i);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            return null;
          }(document.cookie, t);
        }
      }], [{
        key: "makeCurrent",
        value: function makeCurrent() {
          !function O0(e) {
            Xi || (Xi = e);
          }(new Tl());
        }
      }]);

      return Tl;
    }( /*#__PURE__*/function (_P) {
      _inherits(wA, _P);

      var _super16 = _createSuper(wA);

      function wA() {
        var _this34;

        _classCallCheck(this, wA);

        _this34 = _super16.apply(this, arguments), _this34.supportsDOMEvents = !0;
        return _this34;
      }

      return _createClass(wA);
    }( /*#__PURE__*/_createClass(function P0() {
      _classCallCheck(this, P0);
    })));

    var cs,
        Po = null;
    var qm = new K("TRANSITION_ID"),
        IA = [{
      provide: Kg,
      useFactory: function MA(e, t, n) {
        return function () {
          n.get(qi).donePromise.then(function () {
            var r = Wn(),
                o = t.querySelectorAll("style[ng-transition=\"".concat(e, "\"]"));

            for (var i = 0; i < o.length; i++) {
              r.remove(o[i]);
            }
          });
        };
      },
      deps: [qm, gn, bn],
      multi: !0
    }];

    var AA = function () {
      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);
        }

        _createClass(e, [{
          key: "build",
          value: function build() {
            return new XMLHttpRequest();
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)();
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac
      }), e;
    }();

    var ds = new K("EventManagerPlugins");

    var fs = function () {
      var e = /*#__PURE__*/function () {
        function e(n, r) {
          var _this35 = this;

          _classCallCheck(this, e);

          this._zone = r, this._eventNameToPlugin = new Map(), n.forEach(function (o) {
            return o.manager = _this35;
          }), this._plugins = n.slice().reverse();
        }

        _createClass(e, [{
          key: "addEventListener",
          value: function addEventListener(n, r, o) {
            return this._findPluginFor(r).addEventListener(n, r, o);
          }
        }, {
          key: "addGlobalEventListener",
          value: function addGlobalEventListener(n, r, o) {
            return this._findPluginFor(r).addGlobalEventListener(n, r, o);
          }
        }, {
          key: "getZone",
          value: function getZone() {
            return this._zone;
          }
        }, {
          key: "_findPluginFor",
          value: function _findPluginFor(n) {
            var r = this._eventNameToPlugin.get(n);

            if (r) return r;
            var o = this._plugins;

            for (var i = 0; i < o.length; i++) {
              var s = o[i];
              if (s.supports(n)) return this._eventNameToPlugin.set(n, s), s;
            }

            throw new Error("No event manager plugin found for event ".concat(n));
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)(se(ds), se(We));
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac
      }), e;
    }();

    var Zm = /*#__PURE__*/function () {
      function Zm(t) {
        _classCallCheck(this, Zm);

        this._doc = t;
      }

      _createClass(Zm, [{
        key: "addGlobalEventListener",
        value: function addGlobalEventListener(t, n, r) {
          var o = Wn().getGlobalEventTarget(this._doc, t);
          if (!o) throw new Error("Unsupported event target ".concat(o, " for event ").concat(n));
          return this.addEventListener(o, n, r);
        }
      }]);

      return Zm;
    }();

    var Qm = function () {
      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);

          this._stylesSet = new Set();
        }

        _createClass(e, [{
          key: "addStyles",
          value: function addStyles(n) {
            var _this36 = this;

            var r = new Set();
            n.forEach(function (o) {
              _this36._stylesSet.has(o) || (_this36._stylesSet.add(o), r.add(o));
            }), this.onStylesAdded(r);
          }
        }, {
          key: "onStylesAdded",
          value: function onStylesAdded(n) {}
        }, {
          key: "getAllStyles",
          value: function getAllStyles() {
            return Array.from(this._stylesSet);
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)();
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac
      }), e;
    }(),
        Ro = function () {
      var e = /*#__PURE__*/function (_Qm) {
        _inherits(e, _Qm);

        var _super17 = _createSuper(e);

        function e(n) {
          var _this37;

          _classCallCheck(this, e);

          _this37 = _super17.call(this), _this37._doc = n, _this37._hostNodes = new Map(), _this37._hostNodes.set(n.head, []);
          return _this37;
        }

        _createClass(e, [{
          key: "_addStylesToHost",
          value: function _addStylesToHost(n, r, o) {
            var _this38 = this;

            n.forEach(function (i) {
              var s = _this38._doc.createElement("style");

              s.textContent = i, o.push(r.appendChild(s));
            });
          }
        }, {
          key: "addHost",
          value: function addHost(n) {
            var r = [];
            this._addStylesToHost(this._stylesSet, n, r), this._hostNodes.set(n, r);
          }
        }, {
          key: "removeHost",
          value: function removeHost(n) {
            var r = this._hostNodes.get(n);

            r && r.forEach(Km), this._hostNodes["delete"](n);
          }
        }, {
          key: "onStylesAdded",
          value: function onStylesAdded(n) {
            var _this39 = this;

            this._hostNodes.forEach(function (r, o) {
              _this39._addStylesToHost(n, o, r);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._hostNodes.forEach(function (n) {
              return n.forEach(Km);
            });
          }
        }]);

        return e;
      }(Qm);

      return e.ɵfac = function (n) {
        return new (n || e)(se(gn));
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac
      }), e;
    }();

    function Km(e) {
      Wn().remove(e);
    }

    var Nl = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
      math: "http://www.w3.org/1998/MathML/"
    },
        xl = /%COMP%/g;

    function hs(e, t, n) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        Array.isArray(o) ? hs(e, o, n) : (o = o.replace(xl, e), n.push(o));
      }

      return n;
    }

    function Xm(e) {
      return function (t) {
        if ("__ngUnwrap__" === t) return e;
        !1 === e(t) && (t.preventDefault(), t.returnValue = !1);
      };
    }

    var Fl = function () {
      var e = /*#__PURE__*/function () {
        function e(n, r, o) {
          _classCallCheck(this, e);

          this.eventManager = n, this.sharedStylesHost = r, this.appId = o, this.rendererByCompId = new Map(), this.defaultRenderer = new Ol(n);
        }

        _createClass(e, [{
          key: "createRenderer",
          value: function createRenderer(n, r) {
            if (!n || !r) return this.defaultRenderer;

            switch (r.encapsulation) {
              case $t.Emulated:
                {
                  var o = this.rendererByCompId.get(r.id);
                  return o || (o = new PA(this.eventManager, this.sharedStylesHost, r, this.appId), this.rendererByCompId.set(r.id, o)), o.applyToHost(n), o;
                }

              case 1:
              case $t.ShadowDom:
                return new RA(this.eventManager, this.sharedStylesHost, n, r);

              default:
                if (!this.rendererByCompId.has(r.id)) {
                  var _o13 = hs(r.id, r.styles, []);

                  this.sharedStylesHost.addStyles(_o13), this.rendererByCompId.set(r.id, this.defaultRenderer);
                }

                return this.defaultRenderer;
            }
          }
        }, {
          key: "begin",
          value: function begin() {}
        }, {
          key: "end",
          value: function end() {}
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)(se(fs), se(Ro), se(To));
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac
      }), e;
    }();

    var Ol = /*#__PURE__*/function () {
      function Ol(t) {
        _classCallCheck(this, Ol);

        this.eventManager = t, this.data = Object.create(null), this.destroyNode = null;
      }

      _createClass(Ol, [{
        key: "destroy",
        value: function destroy() {}
      }, {
        key: "createElement",
        value: function createElement(t, n) {
          return n ? document.createElementNS(Nl[n] || n, t) : document.createElement(t);
        }
      }, {
        key: "createComment",
        value: function createComment(t) {
          return document.createComment(t);
        }
      }, {
        key: "createText",
        value: function createText(t) {
          return document.createTextNode(t);
        }
      }, {
        key: "appendChild",
        value: function appendChild(t, n) {
          (ty(t) ? t.content : t).appendChild(n);
        }
      }, {
        key: "insertBefore",
        value: function insertBefore(t, n, r) {
          t && (ty(t) ? t.content : t).insertBefore(n, r);
        }
      }, {
        key: "removeChild",
        value: function removeChild(t, n) {
          t && t.removeChild(n);
        }
      }, {
        key: "selectRootElement",
        value: function selectRootElement(t, n) {
          var r = "string" == typeof t ? document.querySelector(t) : t;
          if (!r) throw new Error("The selector \"".concat(t, "\" did not match any elements"));
          return n || (r.textContent = ""), r;
        }
      }, {
        key: "parentNode",
        value: function parentNode(t) {
          return t.parentNode;
        }
      }, {
        key: "nextSibling",
        value: function nextSibling(t) {
          return t.nextSibling;
        }
      }, {
        key: "setAttribute",
        value: function setAttribute(t, n, r, o) {
          if (o) {
            n = o + ":" + n;
            var i = Nl[o];
            i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r);
          } else t.setAttribute(n, r);
        }
      }, {
        key: "removeAttribute",
        value: function removeAttribute(t, n, r) {
          if (r) {
            var o = Nl[r];
            o ? t.removeAttributeNS(o, n) : t.removeAttribute("".concat(r, ":").concat(n));
          } else t.removeAttribute(n);
        }
      }, {
        key: "addClass",
        value: function addClass(t, n) {
          t.classList.add(n);
        }
      }, {
        key: "removeClass",
        value: function removeClass(t, n) {
          t.classList.remove(n);
        }
      }, {
        key: "setStyle",
        value: function setStyle(t, n, r, o) {
          o & (st.DashCase | st.Important) ? t.style.setProperty(n, r, o & st.Important ? "important" : "") : t.style[n] = r;
        }
      }, {
        key: "removeStyle",
        value: function removeStyle(t, n, r) {
          r & st.DashCase ? t.style.removeProperty(n) : t.style[n] = "";
        }
      }, {
        key: "setProperty",
        value: function setProperty(t, n, r) {
          t[n] = r;
        }
      }, {
        key: "setValue",
        value: function setValue(t, n) {
          t.nodeValue = n;
        }
      }, {
        key: "listen",
        value: function listen(t, n, r) {
          return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, n, Xm(r)) : this.eventManager.addEventListener(t, n, Xm(r));
        }
      }]);

      return Ol;
    }();

    function ty(e) {
      return "TEMPLATE" === e.tagName && void 0 !== e.content;
    }

    var PA = /*#__PURE__*/function (_Ol) {
      _inherits(PA, _Ol);

      var _super18 = _createSuper(PA);

      function PA(t, n, r, o) {
        var _this40;

        _classCallCheck(this, PA);

        _this40 = _super18.call(this, t), _this40.component = r;
        var i = hs(o + "-" + r.id, r.styles, []);
        n.addStyles(i), _this40.contentAttr = function xA(e) {
          return "_ngcontent-%COMP%".replace(xl, e);
        }(o + "-" + r.id), _this40.hostAttr = function FA(e) {
          return "_nghost-%COMP%".replace(xl, e);
        }(o + "-" + r.id);
        return _this40;
      }

      _createClass(PA, [{
        key: "applyToHost",
        value: function applyToHost(t) {
          _get(_getPrototypeOf(PA.prototype), "setAttribute", this).call(this, t, this.hostAttr, "");
        }
      }, {
        key: "createElement",
        value: function createElement(t, n) {
          var r = _get(_getPrototypeOf(PA.prototype), "createElement", this).call(this, t, n);

          return _get(_getPrototypeOf(PA.prototype), "setAttribute", this).call(this, r, this.contentAttr, ""), r;
        }
      }]);

      return PA;
    }(Ol);

    var RA = /*#__PURE__*/function (_Ol2) {
      _inherits(RA, _Ol2);

      var _super19 = _createSuper(RA);

      function RA(t, n, r, o) {
        var _this41;

        _classCallCheck(this, RA);

        _this41 = _super19.call(this, t), _this41.sharedStylesHost = n, _this41.hostEl = r, _this41.shadowRoot = r.attachShadow({
          mode: "open"
        }), _this41.sharedStylesHost.addHost(_this41.shadowRoot);
        var i = hs(o.id, o.styles, []);

        for (var s = 0; s < i.length; s++) {
          var a = document.createElement("style");
          a.textContent = i[s], _this41.shadowRoot.appendChild(a);
        }

        return _this41;
      }

      _createClass(RA, [{
        key: "nodeOrShadowRoot",
        value: function nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }, {
        key: "appendChild",
        value: function appendChild(t, n) {
          return _get(_getPrototypeOf(RA.prototype), "appendChild", this).call(this, this.nodeOrShadowRoot(t), n);
        }
      }, {
        key: "insertBefore",
        value: function insertBefore(t, n, r) {
          return _get(_getPrototypeOf(RA.prototype), "insertBefore", this).call(this, this.nodeOrShadowRoot(t), n, r);
        }
      }, {
        key: "removeChild",
        value: function removeChild(t, n) {
          return _get(_getPrototypeOf(RA.prototype), "removeChild", this).call(this, this.nodeOrShadowRoot(t), n);
        }
      }, {
        key: "parentNode",
        value: function parentNode(t) {
          return this.nodeOrShadowRoot(_get(_getPrototypeOf(RA.prototype), "parentNode", this).call(this, this.nodeOrShadowRoot(t)));
        }
      }]);

      return RA;
    }(Ol);

    var VA = function () {
      var e = /*#__PURE__*/function (_Zm) {
        _inherits(e, _Zm);

        var _super20 = _createSuper(e);

        function e(n) {
          _classCallCheck(this, e);

          return _super20.call(this, n);
        }

        _createClass(e, [{
          key: "supports",
          value: function supports(n) {
            return !0;
          }
        }, {
          key: "addEventListener",
          value: function addEventListener(n, r, o) {
            var _this42 = this;

            return n.addEventListener(r, o, !1), function () {
              return _this42.removeEventListener(n, r, o);
            };
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(n, r, o) {
            return n.removeEventListener(r, o);
          }
        }]);

        return e;
      }(Zm);

      return e.ɵfac = function (n) {
        return new (n || e)(se(gn));
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac
      }), e;
    }();

    var ny = ["alt", "control", "meta", "shift"],
        LA = {
      "\b": "Backspace",
      "\t": "Tab",
      "\x7f": "Delete",
      "\x1b": "Escape",
      Del: "Delete",
      Esc: "Escape",
      Left: "ArrowLeft",
      Right: "ArrowRight",
      Up: "ArrowUp",
      Down: "ArrowDown",
      Menu: "ContextMenu",
      Scroll: "ScrollLock",
      Win: "OS"
    },
        kA = {
      alt: function alt(e) {
        return e.altKey;
      },
      control: function control(e) {
        return e.ctrlKey;
      },
      meta: function meta(e) {
        return e.metaKey;
      },
      shift: function shift(e) {
        return e.shiftKey;
      }
    };

    var BA = function () {
      var e = /*#__PURE__*/function (_Zm2) {
        _inherits(e, _Zm2);

        var _super21 = _createSuper(e);

        function e(n) {
          _classCallCheck(this, e);

          return _super21.call(this, n);
        }

        _createClass(e, [{
          key: "supports",
          value: function supports(n) {
            return null != e.parseEventName(n);
          }
        }, {
          key: "addEventListener",
          value: function addEventListener(n, r, o) {
            var i = e.parseEventName(r),
                s = e.eventCallback(i.fullKey, o, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function () {
              return Wn().onAndCancel(n, i.domEventName, s);
            });
          }
        }], [{
          key: "parseEventName",
          value: function parseEventName(n) {
            var r = n.toLowerCase().split("."),
                o = r.shift();
            if (0 === r.length || "keydown" !== o && "keyup" !== o) return null;

            var i = e._normalizeKey(r.pop());

            var s = "",
                a = r.indexOf("code");
            if (a > -1 && (r.splice(a, 1), s = "code."), ny.forEach(function (l) {
              var c = r.indexOf(l);
              c > -1 && (r.splice(c, 1), s += l + ".");
            }), s += i, 0 != r.length || 0 === i.length) return null;
            var u = {};
            return u.domEventName = o, u.fullKey = s, u;
          }
        }, {
          key: "matchEventFullKeyCode",
          value: function matchEventFullKeyCode(n, r) {
            var o = LA[n.key] || n.key,
                i = "";
            return r.indexOf("code.") > -1 && (o = n.code, i = "code."), !(null == o || !o) && (o = o.toLowerCase(), " " === o ? o = "space" : "." === o && (o = "dot"), ny.forEach(function (s) {
              s !== o && (0, kA[s])(n) && (i += s + ".");
            }), i += o, i === r);
          }
        }, {
          key: "eventCallback",
          value: function eventCallback(n, r, o) {
            return function (i) {
              e.matchEventFullKeyCode(i, n) && o.runGuarded(function () {
                return r(i);
              });
            };
          }
        }, {
          key: "_normalizeKey",
          value: function _normalizeKey(n) {
            return "esc" === n ? "escape" : n;
          }
        }]);

        return e;
      }(Zm);

      return e.ɵfac = function (n) {
        return new (n || e)(se(gn));
      }, e.ɵprov = ge({
        token: e,
        factory: e.ɵfac
      }), e;
    }();

    var UA = am(N0, "browser", [{
      provide: Xg,
      useValue: "browser"
    }, {
      provide: Jg,
      useValue: function jA() {
        Tl.makeCurrent();
      },
      multi: !0
    }, {
      provide: gn,
      useFactory: function $A() {
        return function A_(e) {
          ha = e;
        }(document), document;
      },
      deps: []
    }]),
        iy = new K(""),
        sy = [{
      provide: Zi,
      useClass: /*#__PURE__*/function () {
        function SA() {
          _classCallCheck(this, SA);
        }

        _createClass(SA, [{
          key: "addToWindow",
          value: function addToWindow(t) {
            de.getAngularTestability = function (r) {
              var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
              var i = t.findTestabilityInTree(r, o);
              if (null == i) throw new Error("Could not find testability for element.");
              return i;
            }, de.getAllAngularTestabilities = function () {
              return t.getAllTestabilities();
            }, de.getAllAngularRootElements = function () {
              return t.getAllRootElements();
            }, de.frameworkStabilizers || (de.frameworkStabilizers = []), de.frameworkStabilizers.push(function (r) {
              var o = de.getAllAngularTestabilities();
              var i = o.length,
                  s = !1;

              var a = function a(u) {
                s = s || u, i--, 0 == i && r(s);
              };

              o.forEach(function (u) {
                u.whenStable(a);
              });
            });
          }
        }, {
          key: "findTestabilityInTree",
          value: function findTestabilityInTree(t, n, r) {
            var _t$getTestability;

            return null == n ? null : (_t$getTestability = t.getTestability(n)) !== null && _t$getTestability !== void 0 ? _t$getTestability : r ? Wn().isShadowRoot(n) ? this.findTestabilityInTree(t, n.host, !0) : this.findTestabilityInTree(t, n.parentElement, !0) : null;
          }
        }]);

        return SA;
      }(),
      deps: []
    }, {
      provide: om,
      useClass: rl,
      deps: [We, ol, Zi]
    }, {
      provide: rl,
      useClass: rl,
      deps: [We, ol, Zi]
    }],
        ay = [{
      provide: wa,
      useValue: "root"
    }, {
      provide: yr,
      useFactory: function HA() {
        return new yr();
      },
      deps: []
    }, {
      provide: ds,
      useClass: VA,
      multi: !0,
      deps: [gn, We, Xg]
    }, {
      provide: ds,
      useClass: BA,
      multi: !0,
      deps: [gn]
    }, {
      provide: Fl,
      useClass: Fl,
      deps: [fs, Ro, To]
    }, {
      provide: cf,
      useExisting: Fl
    }, {
      provide: Qm,
      useExisting: Ro
    }, {
      provide: Ro,
      useClass: Ro,
      deps: [gn]
    }, {
      provide: fs,
      useClass: fs,
      deps: [ds, We]
    }, {
      provide: /*#__PURE__*/_createClass(function oA() {
        _classCallCheck(this, oA);
      }),
      useClass: AA,
      deps: []
    }, []];

    var GA = function () {
      var e = /*#__PURE__*/function () {
        function e(n) {
          _classCallCheck(this, e);
        }

        _createClass(e, null, [{
          key: "withServerTransition",
          value: function withServerTransition(n) {
            return {
              ngModule: e,
              providers: [{
                provide: To,
                useValue: n.appId
              }, {
                provide: qm,
                useExisting: To
              }, IA]
            };
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)(se(iy, 12));
      }, e.ɵmod = nn({
        type: e
      }), e.ɵinj = Ht({
        providers: [].concat(ay, sy),
        imports: [XS, x0]
      }), e;
    }();

    (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window;
    var eT = Array.isArray,
        tT = Object.getPrototypeOf,
        nT = Object.prototype,
        rT = Object.keys;
    var sT = Array.isArray;

    function lT(e, t) {
      return e.reduce(function (n, r, o) {
        return n[r] = t[o], n;
      }, {});
    }

    function cT() {
      for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        e[_key7] = arguments[_key7];
      }

      var t = function VD(e) {
        return D(Ss(e)) ? e.pop() : void 0;
      }(e),
          _oT = function oT(e) {
        if (1 === e.length) {
          var _t7 = e[0];
          if (eT(_t7)) return {
            args: _t7,
            keys: null
          };

          if (function iT(e) {
            return e && "object" == _typeof(e) && tT(e) === nT;
          }(_t7)) {
            var _n12 = rT(_t7);

            return {
              args: _n12.map(function (r) {
                return _t7[r];
              }),
              keys: _n12
            };
          }
        }

        return {
          args: e,
          keys: null
        };
      }(e),
          n = _oT.args,
          r = _oT.keys,
          o = new Qe(function (i) {
        var s = n.length;
        if (!s) return void i.complete();
        var a = new Array(s);
        var u = s,
            l = s;

        var _loop3 = function _loop3(c) {
          var d = !1;
          yn(n[c]).subscribe($r(i, function (f) {
            d || (d = !0, l--), a[c] = f;
          }, function () {
            return u--;
          }, void 0, function () {
            (!u || !d) && (l || i.next(r ? lT(r, a) : a), i.complete());
          }));
        };

        for (var c = 0; c < s; c++) {
          _loop3(c);
        }
      });

      return t ? o.pipe(function uT(e) {
        return Ms(function (t) {
          return function aT(e, t) {
            return sT(t) ? e.apply(void 0, _toConsumableArray(t)) : e(t);
          }(e, t);
        });
      }(t)) : o;
    }

    var cy = function () {
      var e = /*#__PURE__*/function () {
        function e(n, r) {
          _classCallCheck(this, e);

          this._renderer = n, this._elementRef = r, this.onChange = function (o) {}, this.onTouched = function () {};
        }

        _createClass(e, [{
          key: "setProperty",
          value: function setProperty(n, r) {
            this._renderer.setProperty(this._elementRef.nativeElement, n, r);
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(n) {
            this.onTouched = n;
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(n) {
            this.onChange = n;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(n) {
            this.setProperty("disabled", n);
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)(S(jn), S(xt));
      }, e.ɵdir = W({
        type: e
      }), e;
    }(),
        qn = function () {
      var e = /*#__PURE__*/function (_cy) {
        _inherits(e, _cy);

        var _super22 = _createSuper(e);

        function e() {
          _classCallCheck(this, e);

          return _super22.apply(this, arguments);
        }

        return _createClass(e);
      }(cy);

      return e.ɵfac = function () {
        var t;
        return function (r) {
          return (t || (t = $e(e)))(r || e);
        };
      }(), e.ɵdir = W({
        type: e,
        features: [ue]
      }), e;
    }();

    var Yt = new K("NgValueAccessor"),
        fT = {
      provide: Yt,
      useExisting: fe(function () {
        return ps;
      }),
      multi: !0
    },
        pT = new K("CompositionEventMode");

    var ps = function () {
      var e = /*#__PURE__*/function (_cy2) {
        _inherits(e, _cy2);

        var _super23 = _createSuper(e);

        function e(n, r, o) {
          var _this43;

          _classCallCheck(this, e);

          _this43 = _super23.call(this, n, r), _this43._compositionMode = o, _this43._composing = !1, null == _this43._compositionMode && (_this43._compositionMode = !function hT() {
            var e = Wn() ? Wn().getUserAgent() : "";
            return /android (\d+)/.test(e.toLowerCase());
          }());
          return _this43;
        }

        _createClass(e, [{
          key: "writeValue",
          value: function writeValue(n) {
            this.setProperty("value", n !== null && n !== void 0 ? n : "");
          }
        }, {
          key: "_handleInput",
          value: function _handleInput(n) {
            (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(n);
          }
        }, {
          key: "_compositionStart",
          value: function _compositionStart() {
            this._composing = !0;
          }
        }, {
          key: "_compositionEnd",
          value: function _compositionEnd(n) {
            this._composing = !1, this._compositionMode && this.onChange(n);
          }
        }]);

        return e;
      }(cy);

      return e.ɵfac = function (n) {
        return new (n || e)(S(jn), S(xt), S(pT, 8));
      }, e.ɵdir = W({
        type: e,
        selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
        hostBindings: function hostBindings(n, r) {
          1 & n && wt("input", function (i) {
            return r._handleInput(i.target.value);
          })("blur", function () {
            return r.onTouched();
          })("compositionstart", function () {
            return r._compositionStart();
          })("compositionend", function (i) {
            return r._compositionEnd(i.target.value);
          });
        },
        features: [De([fT]), ue]
      }), e;
    }();

    var Ze = new K("NgValidators"),
        Nn = new K("NgAsyncValidators");

    function Cy(e) {
      return null != e;
    }

    function wy(e) {
      return Li(e) ? Vc(e) : e;
    }

    function Ey(e) {
      var t = {};
      return e.forEach(function (n) {
        t = null != n ? _objectSpread(_objectSpread({}, t), n) : t;
      }), 0 === Object.keys(t).length ? null : t;
    }

    function by(e, t) {
      return t.map(function (n) {
        return n(e);
      });
    }

    function My(e) {
      return e.map(function (t) {
        return function yT(e) {
          return !e.validate;
        }(t) ? t : function (n) {
          return t.validate(n);
        };
      });
    }

    function Vl(e) {
      return null != e ? function Iy(e) {
        if (!e) return null;
        var t = e.filter(Cy);
        return 0 == t.length ? null : function (n) {
          return Ey(by(n, t));
        };
      }(My(e)) : null;
    }

    function Ll(e) {
      return null != e ? function Sy(e) {
        if (!e) return null;
        var t = e.filter(Cy);
        return 0 == t.length ? null : function (n) {
          return cT(by(n, t).map(wy)).pipe(Ms(Ey));
        };
      }(My(e)) : null;
    }

    function Ay(e, t) {
      return null === e ? [t] : Array.isArray(e) ? [].concat(_toConsumableArray(e), [t]) : [e, t];
    }

    function Ty(e) {
      return e._rawValidators;
    }

    function Ny(e) {
      return e._rawAsyncValidators;
    }

    function kl(e) {
      return e ? Array.isArray(e) ? e : [e] : [];
    }

    function ms(e, t) {
      return Array.isArray(e) ? e.includes(t) : e === t;
    }

    function xy(e, t) {
      var n = kl(t);
      return kl(e).forEach(function (o) {
        ms(n, o) || n.push(o);
      }), n;
    }

    function Fy(e, t) {
      return kl(t).filter(function (n) {
        return !ms(e, n);
      });
    }

    var xn = /*#__PURE__*/function (_Oy) {
      _inherits(xn, _Oy);

      var _super24 = _createSuper(xn);

      function xn() {
        var _this44;

        _classCallCheck(this, xn);

        _this44 = _super24.apply(this, arguments), _this44._parent = null, _this44.name = null, _this44.valueAccessor = null;
        return _this44;
      }

      return _createClass(xn);
    }( /*#__PURE__*/function () {
      function Oy() {
        _classCallCheck(this, Oy);

        this._rawValidators = [], this._rawAsyncValidators = [], this._onDestroyCallbacks = [];
      }

      _createClass(Oy, [{
        key: "value",
        get: function get() {
          return this.control ? this.control.value : null;
        }
      }, {
        key: "valid",
        get: function get() {
          return this.control ? this.control.valid : null;
        }
      }, {
        key: "invalid",
        get: function get() {
          return this.control ? this.control.invalid : null;
        }
      }, {
        key: "pending",
        get: function get() {
          return this.control ? this.control.pending : null;
        }
      }, {
        key: "disabled",
        get: function get() {
          return this.control ? this.control.disabled : null;
        }
      }, {
        key: "enabled",
        get: function get() {
          return this.control ? this.control.enabled : null;
        }
      }, {
        key: "errors",
        get: function get() {
          return this.control ? this.control.errors : null;
        }
      }, {
        key: "pristine",
        get: function get() {
          return this.control ? this.control.pristine : null;
        }
      }, {
        key: "dirty",
        get: function get() {
          return this.control ? this.control.dirty : null;
        }
      }, {
        key: "touched",
        get: function get() {
          return this.control ? this.control.touched : null;
        }
      }, {
        key: "status",
        get: function get() {
          return this.control ? this.control.status : null;
        }
      }, {
        key: "untouched",
        get: function get() {
          return this.control ? this.control.untouched : null;
        }
      }, {
        key: "statusChanges",
        get: function get() {
          return this.control ? this.control.statusChanges : null;
        }
      }, {
        key: "valueChanges",
        get: function get() {
          return this.control ? this.control.valueChanges : null;
        }
      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }, {
        key: "_setValidators",
        value: function _setValidators(t) {
          this._rawValidators = t || [], this._composedValidatorFn = Vl(this._rawValidators);
        }
      }, {
        key: "_setAsyncValidators",
        value: function _setAsyncValidators(t) {
          this._rawAsyncValidators = t || [], this._composedAsyncValidatorFn = Ll(this._rawAsyncValidators);
        }
      }, {
        key: "validator",
        get: function get() {
          return this._composedValidatorFn || null;
        }
      }, {
        key: "asyncValidator",
        get: function get() {
          return this._composedAsyncValidatorFn || null;
        }
      }, {
        key: "_registerOnDestroy",
        value: function _registerOnDestroy(t) {
          this._onDestroyCallbacks.push(t);
        }
      }, {
        key: "_invokeOnDestroyCallbacks",
        value: function _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach(function (t) {
            return t();
          }), this._onDestroyCallbacks = [];
        }
      }, {
        key: "reset",
        value: function reset(t) {
          this.control && this.control.reset(t);
        }
      }, {
        key: "hasError",
        value: function hasError(t, n) {
          return !!this.control && this.control.hasError(t, n);
        }
      }, {
        key: "getError",
        value: function getError(t, n) {
          return this.control ? this.control.getError(t, n) : null;
        }
      }]);

      return Oy;
    }());

    var Ry = function () {
      var e = /*#__PURE__*/function (_Py) {
        _inherits(e, _Py);

        var _super25 = _createSuper(e);

        function e(n) {
          _classCallCheck(this, e);

          return _super25.call(this, n);
        }

        return _createClass(e);
      }( /*#__PURE__*/function () {
        function Py(t) {
          _classCallCheck(this, Py);

          this._cd = t;
        }

        _createClass(Py, [{
          key: "isTouched",
          get: function get() {
            var _this$_cd, _this$_cd$control;

            return !!((_this$_cd = this._cd) !== null && _this$_cd !== void 0 && (_this$_cd$control = _this$_cd.control) !== null && _this$_cd$control !== void 0 && _this$_cd$control.touched);
          }
        }, {
          key: "isUntouched",
          get: function get() {
            var _this$_cd2, _this$_cd2$control;

            return !!((_this$_cd2 = this._cd) !== null && _this$_cd2 !== void 0 && (_this$_cd2$control = _this$_cd2.control) !== null && _this$_cd2$control !== void 0 && _this$_cd2$control.untouched);
          }
        }, {
          key: "isPristine",
          get: function get() {
            var _this$_cd3, _this$_cd3$control;

            return !!((_this$_cd3 = this._cd) !== null && _this$_cd3 !== void 0 && (_this$_cd3$control = _this$_cd3.control) !== null && _this$_cd3$control !== void 0 && _this$_cd3$control.pristine);
          }
        }, {
          key: "isDirty",
          get: function get() {
            var _this$_cd4, _this$_cd4$control;

            return !!((_this$_cd4 = this._cd) !== null && _this$_cd4 !== void 0 && (_this$_cd4$control = _this$_cd4.control) !== null && _this$_cd4$control !== void 0 && _this$_cd4$control.dirty);
          }
        }, {
          key: "isValid",
          get: function get() {
            var _this$_cd5, _this$_cd5$control;

            return !!((_this$_cd5 = this._cd) !== null && _this$_cd5 !== void 0 && (_this$_cd5$control = _this$_cd5.control) !== null && _this$_cd5$control !== void 0 && _this$_cd5$control.valid);
          }
        }, {
          key: "isInvalid",
          get: function get() {
            var _this$_cd6, _this$_cd6$control;

            return !!((_this$_cd6 = this._cd) !== null && _this$_cd6 !== void 0 && (_this$_cd6$control = _this$_cd6.control) !== null && _this$_cd6$control !== void 0 && _this$_cd6$control.invalid);
          }
        }, {
          key: "isPending",
          get: function get() {
            var _this$_cd7, _this$_cd7$control;

            return !!((_this$_cd7 = this._cd) !== null && _this$_cd7 !== void 0 && (_this$_cd7$control = _this$_cd7.control) !== null && _this$_cd7$control !== void 0 && _this$_cd7$control.pending);
          }
        }, {
          key: "isSubmitted",
          get: function get() {
            var _this$_cd8;

            return !!((_this$_cd8 = this._cd) !== null && _this$_cd8 !== void 0 && _this$_cd8.submitted);
          }
        }]);

        return Py;
      }());

      return e.ɵfac = function (n) {
        return new (n || e)(S(xn, 2));
      }, e.ɵdir = W({
        type: e,
        selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
        hostVars: 14,
        hostBindings: function hostBindings(n, r) {
          2 & n && ki("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)("ng-valid", r.isValid)("ng-invalid", r.isInvalid)("ng-pending", r.isPending);
        },
        features: [ue]
      }), e;
    }();

    var Vo = "VALID",
        Ds = "INVALID",
        Br = "PENDING",
        Lo = "DISABLED";

    function Ly(e) {
      return Array.isArray(e) ? Vl(e) : e || null;
    }

    function ky(e) {
      return Array.isArray(e) ? Ll(e) : e || null;
    }

    function vs(e) {
      return null != e && !Array.isArray(e) && "object" == _typeof(e);
    }

    function ko(e, t) {
      var _t$valueAccessor$setD, _t$valueAccessor;

      (function zl(e, t) {
        var n = Ty(e);
        null !== t.validator ? e.setValidators(Ay(n, t.validator)) : "function" == typeof n && e.setValidators([n]);
        var r = Ny(e);
        null !== t.asyncValidator ? e.setAsyncValidators(Ay(r, t.asyncValidator)) : "function" == typeof r && e.setAsyncValidators([r]);

        var o = function o() {
          return e.updateValueAndValidity();
        };

        ws(t._rawValidators, o), ws(t._rawAsyncValidators, o);
      })(e, t), t.valueAccessor.writeValue(e.value), e.disabled && (_t$valueAccessor$setD = (_t$valueAccessor = t.valueAccessor).setDisabledState) !== null && _t$valueAccessor$setD !== void 0 && _t$valueAccessor$setD.call(_t$valueAccessor, !0), function ST(e, t) {
        t.valueAccessor.registerOnChange(function (n) {
          e._pendingValue = n, e._pendingChange = !0, e._pendingDirty = !0, "change" === e.updateOn && $y(e, t);
        });
      }(e, t), function TT(e, t) {
        var n = function n(r, o) {
          t.valueAccessor.writeValue(r), o && t.viewToModelUpdate(r);
        };

        e.registerOnChange(n), t._registerOnDestroy(function () {
          e._unregisterOnChange(n);
        });
      }(e, t), function AT(e, t) {
        t.valueAccessor.registerOnTouched(function () {
          e._pendingTouched = !0, "blur" === e.updateOn && e._pendingChange && $y(e, t), "submit" !== e.updateOn && e.markAsTouched();
        });
      }(e, t), function IT(e, t) {
        if (t.valueAccessor.setDisabledState) {
          var n = function n(r) {
            t.valueAccessor.setDisabledState(r);
          };

          e.registerOnDisabledChange(n), t._registerOnDestroy(function () {
            e._unregisterOnDisabledChange(n);
          });
        }
      }(e, t);
    }

    function Cs(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;

      var r = function r() {};

      t.valueAccessor && (t.valueAccessor.registerOnChange(r), t.valueAccessor.registerOnTouched(r)), function Es(e, t) {
        var n = !1;

        if (null !== e) {
          if (null !== t.validator) {
            var o = Ty(e);

            if (Array.isArray(o) && o.length > 0) {
              var i = o.filter(function (s) {
                return s !== t.validator;
              });
              i.length !== o.length && (n = !0, e.setValidators(i));
            }
          }

          if (null !== t.asyncValidator) {
            var _o14 = Ny(e);

            if (Array.isArray(_o14) && _o14.length > 0) {
              var _i18 = _o14.filter(function (s) {
                return s !== t.asyncValidator;
              });

              _i18.length !== _o14.length && (n = !0, e.setAsyncValidators(_i18));
            }
          }
        }

        var r = function r() {};

        return ws(t._rawValidators, r), ws(t._rawAsyncValidators, r), n;
      }(e, t), e && (t._invokeOnDestroyCallbacks(), e._registerOnCollectionChange(function () {}));
    }

    function ws(e, t) {
      e.forEach(function (n) {
        n.registerOnValidatorChange && n.registerOnValidatorChange(t);
      });
    }

    function $y(e, t) {
      e._pendingDirty && e.markAsDirty(), e.setValue(e._pendingValue, {
        emitModelToViewChange: !1
      }), t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1;
    }

    function Wy(e, t) {
      var n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }

    function qy(e) {
      return "object" == _typeof(e) && null !== e && 2 === Object.keys(e).length && "value" in e && "disabled" in e;
    }

    var BT = {
      provide: Yt,
      useExisting: fe(function () {
        return Kl;
      }),
      multi: !0
    };

    var Kl = function () {
      var e = /*#__PURE__*/function (_qn) {
        _inherits(e, _qn);

        var _super26 = _createSuper(e);

        function e() {
          _classCallCheck(this, e);

          return _super26.apply(this, arguments);
        }

        _createClass(e, [{
          key: "writeValue",
          value: function writeValue(n) {
            this.setProperty("value", n !== null && n !== void 0 ? n : "");
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(n) {
            this.onChange = function (r) {
              n("" == r ? null : parseFloat(r));
            };
          }
        }]);

        return e;
      }(qn);

      return e.ɵfac = function () {
        var t;
        return function (r) {
          return (t || (t = $e(e)))(r || e);
        };
      }(), e.ɵdir = W({
        type: e,
        selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
        hostBindings: function hostBindings(n, r) {
          1 & n && wt("input", function (i) {
            return r.onChange(i.target.value);
          })("blur", function () {
            return r.onTouched();
          });
        },
        features: [De([BT]), ue]
      }), e;
    }(),
        Jy = function () {
      var e = /*#__PURE__*/_createClass(function e() {
        _classCallCheck(this, e);
      });

      return e.ɵfac = function (n) {
        return new (n || e)();
      }, e.ɵmod = nn({
        type: e
      }), e.ɵinj = Ht({}), e;
    }();

    var Yl = new K("NgModelWithFormControlWarning"),
        UT = {
      provide: xn,
      useExisting: fe(function () {
        return Jl;
      })
    };

    var Jl = function () {
      var e = /*#__PURE__*/function (_xn) {
        _inherits(e, _xn);

        var _super27 = _createSuper(e);

        function e(n, r, o, i) {
          var _this45;

          _classCallCheck(this, e);

          _this45 = _super27.call(this), _this45._ngModelWarningConfig = i, _this45.update = new ze(), _this45._ngModelWarningSent = !1, _this45._setValidators(n), _this45._setAsyncValidators(r), _this45.valueAccessor = function ql(e, t) {
            if (!t) return null;
            var n, r, o;
            return Array.isArray(t), t.forEach(function (i) {
              i.constructor === ps ? n = i : function FT(e) {
                return Object.getPrototypeOf(e.constructor) === qn;
              }(i) ? r = i : o = i;
            }), o || r || n || null;
          }(0, o);
          return _this45;
        }

        _createClass(e, [{
          key: "isDisabled",
          set: function set(n) {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(n) {
            if (this._isControlChanged(n)) {
              var r = n.form.previousValue;
              r && Cs(r, this, !1), ko(this.form, this), this.form.updateValueAndValidity({
                emitEvent: !1
              });
            }

            (function Wl(e, t) {
              if (!e.hasOwnProperty("model")) return !1;
              var n = e.model;
              return !!n.isFirstChange() || !Object.is(t, n.currentValue);
            })(n, this.viewModel) && (this.form.setValue(this.model), this.viewModel = this.model);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.form && Cs(this.form, this, !1);
          }
        }, {
          key: "path",
          get: function get() {
            return [];
          }
        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(n) {
            this.viewModel = n, this.update.emit(n);
          }
        }, {
          key: "_isControlChanged",
          value: function _isControlChanged(n) {
            return n.hasOwnProperty("form");
          }
        }]);

        return e;
      }(xn);

      return e._ngModelWarningSentOnce = !1, e.ɵfac = function (n) {
        return new (n || e)(S(Ze, 10), S(Nn, 10), S(Yt, 10), S(Yl, 8));
      }, e.ɵdir = W({
        type: e,
        selectors: [["", "formControl", ""]],
        inputs: {
          form: ["formControl", "form"],
          isDisabled: ["disabled", "isDisabled"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngForm"],
        features: [De([UT]), ue, rn]
      }), e;
    }(),
        pD = function () {
      var e = /*#__PURE__*/_createClass(function e() {
        _classCallCheck(this, e);
      });

      return e.ɵfac = function (n) {
        return new (n || e)();
      }, e.ɵmod = nn({
        type: e
      }), e.ɵinj = Ht({
        imports: [Jy]
      }), e;
    }(),
        uN = function () {
      var e = /*#__PURE__*/_createClass(function e() {
        _classCallCheck(this, e);
      });

      return e.ɵfac = function (n) {
        return new (n || e)();
      }, e.ɵmod = nn({
        type: e
      }), e.ɵinj = Ht({
        imports: [pD]
      }), e;
    }(),
        lN = function () {
      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);
        }

        _createClass(e, null, [{
          key: "withConfig",
          value: function withConfig(n) {
            return {
              ngModule: e,
              providers: [{
                provide: Yl,
                useValue: n.warnOnNgModelWithFormControl
              }]
            };
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)();
      }, e.ɵmod = nn({
        type: e
      }), e.ɵinj = Ht({
        imports: [pD]
      }), e;
    }();

    var dN = w(184),
        fN = w.n(dN);

    var hN = function () {
      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);
        }

        _createClass(e, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.message = "please input your name:", this.input = new ( /*#__PURE__*/function (_Hy) {
              _inherits(_class, _Hy);

              var _super28 = _createSuper(_class);

              function _class() {
                var _this46;

                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var n = arguments.length > 1 ? arguments[1] : undefined;
                var r = arguments.length > 2 ? arguments[2] : undefined;

                _classCallCheck(this, _class);

                _this46 = _super28.call(this, function $l(e) {
                  return (vs(e) ? e.validators : e) || null;
                }(n), function Ul(e, t) {
                  return (vs(t) ? t.asyncValidators : e) || null;
                }(r, n)), _this46.defaultValue = null, _this46._onChange = [], _this46._pendingChange = !1, _this46._applyFormState(t), _this46._setUpdateStrategy(n), _this46._initObservables(), _this46.updateValueAndValidity({
                  onlySelf: !0,
                  emitEvent: !!_this46.asyncValidator
                }), vs(n) && (n.nonNullable || n.initialValueIsDefault) && (_this46.defaultValue = qy(t) ? t.value : t);
                return _this46;
              }

              _createClass(_class, [{
                key: "setValue",
                value: function setValue(t) {
                  var _this47 = this;

                  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  this.value = this._pendingValue = t, this._onChange.length && !1 !== n.emitModelToViewChange && this._onChange.forEach(function (r) {
                    return r(_this47.value, !1 !== n.emitViewToModelChange);
                  }), this.updateValueAndValidity(n);
                }
              }, {
                key: "patchValue",
                value: function patchValue(t) {
                  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  this.setValue(t, n);
                }
              }, {
                key: "reset",
                value: function reset() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultValue;
                  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  this._applyFormState(t), this.markAsPristine(n), this.markAsUntouched(n), this.setValue(this.value, n), this._pendingChange = !1;
                }
              }, {
                key: "_updateValue",
                value: function _updateValue() {}
              }, {
                key: "_anyControls",
                value: function _anyControls(t) {
                  return !1;
                }
              }, {
                key: "_allControlsDisabled",
                value: function _allControlsDisabled() {
                  return this.disabled;
                }
              }, {
                key: "registerOnChange",
                value: function registerOnChange(t) {
                  this._onChange.push(t);
                }
              }, {
                key: "_unregisterOnChange",
                value: function _unregisterOnChange(t) {
                  Wy(this._onChange, t);
                }
              }, {
                key: "registerOnDisabledChange",
                value: function registerOnDisabledChange(t) {
                  this._onDisabledChange.push(t);
                }
              }, {
                key: "_unregisterOnDisabledChange",
                value: function _unregisterOnDisabledChange(t) {
                  Wy(this._onDisabledChange, t);
                }
              }, {
                key: "_forEachChild",
                value: function _forEachChild(t) {}
              }, {
                key: "_syncPendingControls",
                value: function _syncPendingControls() {
                  return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
                    onlySelf: !0,
                    emitModelToViewChange: !1
                  }), 0));
                }
              }, {
                key: "_applyFormState",
                value: function _applyFormState(t) {
                  qy(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({
                    onlySelf: !0,
                    emitEvent: !1
                  }) : this.enable({
                    onlySelf: !0,
                    emitEvent: !1
                  })) : this.value = this._pendingValue = t;
                }
              }]);

              return _class;
            }( /*#__PURE__*/function () {
              function Hy(t, n) {
                _classCallCheck(this, Hy);

                this._pendingDirty = !1, this._hasOwnPendingAsyncValidator = !1, this._pendingTouched = !1, this._onCollectionChange = function () {}, this._parent = null, this.pristine = !0, this.touched = !1, this._onDisabledChange = [], this._rawValidators = t, this._rawAsyncValidators = n, this._composedValidatorFn = Ly(this._rawValidators), this._composedAsyncValidatorFn = ky(this._rawAsyncValidators);
              }

              _createClass(Hy, [{
                key: "validator",
                get: function get() {
                  return this._composedValidatorFn;
                },
                set: function set(t) {
                  this._rawValidators = this._composedValidatorFn = t;
                }
              }, {
                key: "asyncValidator",
                get: function get() {
                  return this._composedAsyncValidatorFn;
                },
                set: function set(t) {
                  this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
                }
              }, {
                key: "parent",
                get: function get() {
                  return this._parent;
                }
              }, {
                key: "valid",
                get: function get() {
                  return this.status === Vo;
                }
              }, {
                key: "invalid",
                get: function get() {
                  return this.status === Ds;
                }
              }, {
                key: "pending",
                get: function get() {
                  return this.status == Br;
                }
              }, {
                key: "disabled",
                get: function get() {
                  return this.status === Lo;
                }
              }, {
                key: "enabled",
                get: function get() {
                  return this.status !== Lo;
                }
              }, {
                key: "dirty",
                get: function get() {
                  return !this.pristine;
                }
              }, {
                key: "untouched",
                get: function get() {
                  return !this.touched;
                }
              }, {
                key: "updateOn",
                get: function get() {
                  return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
                }
              }, {
                key: "setValidators",
                value: function setValidators(t) {
                  this._rawValidators = t, this._composedValidatorFn = Ly(t);
                }
              }, {
                key: "setAsyncValidators",
                value: function setAsyncValidators(t) {
                  this._rawAsyncValidators = t, this._composedAsyncValidatorFn = ky(t);
                }
              }, {
                key: "addValidators",
                value: function addValidators(t) {
                  this.setValidators(xy(t, this._rawValidators));
                }
              }, {
                key: "addAsyncValidators",
                value: function addAsyncValidators(t) {
                  this.setAsyncValidators(xy(t, this._rawAsyncValidators));
                }
              }, {
                key: "removeValidators",
                value: function removeValidators(t) {
                  this.setValidators(Fy(t, this._rawValidators));
                }
              }, {
                key: "removeAsyncValidators",
                value: function removeAsyncValidators(t) {
                  this.setAsyncValidators(Fy(t, this._rawAsyncValidators));
                }
              }, {
                key: "hasValidator",
                value: function hasValidator(t) {
                  return ms(this._rawValidators, t);
                }
              }, {
                key: "hasAsyncValidator",
                value: function hasAsyncValidator(t) {
                  return ms(this._rawAsyncValidators, t);
                }
              }, {
                key: "clearValidators",
                value: function clearValidators() {
                  this.validator = null;
                }
              }, {
                key: "clearAsyncValidators",
                value: function clearAsyncValidators() {
                  this.asyncValidator = null;
                }
              }, {
                key: "markAsTouched",
                value: function markAsTouched() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t);
                }
              }, {
                key: "markAllAsTouched",
                value: function markAllAsTouched() {
                  this.markAsTouched({
                    onlySelf: !0
                  }), this._forEachChild(function (t) {
                    return t.markAllAsTouched();
                  });
                }
              }, {
                key: "markAsUntouched",
                value: function markAsUntouched() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  this.touched = !1, this._pendingTouched = !1, this._forEachChild(function (n) {
                    n.markAsUntouched({
                      onlySelf: !0
                    });
                  }), this._parent && !t.onlySelf && this._parent._updateTouched(t);
                }
              }, {
                key: "markAsDirty",
                value: function markAsDirty() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t);
                }
              }, {
                key: "markAsPristine",
                value: function markAsPristine() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  this.pristine = !0, this._pendingDirty = !1, this._forEachChild(function (n) {
                    n.markAsPristine({
                      onlySelf: !0
                    });
                  }), this._parent && !t.onlySelf && this._parent._updatePristine(t);
                }
              }, {
                key: "markAsPending",
                value: function markAsPending() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  this.status = Br, !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t);
                }
              }, {
                key: "disable",
                value: function disable() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                  var n = this._parentMarkedDirty(t.onlySelf);

                  this.status = Lo, this.errors = null, this._forEachChild(function (r) {
                    r.disable(_objectSpread(_objectSpread({}, t), {}, {
                      onlySelf: !0
                    }));
                  }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(_objectSpread(_objectSpread({}, t), {}, {
                    skipPristineCheck: n
                  })), this._onDisabledChange.forEach(function (r) {
                    return r(!0);
                  });
                }
              }, {
                key: "enable",
                value: function enable() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                  var n = this._parentMarkedDirty(t.onlySelf);

                  this.status = Vo, this._forEachChild(function (r) {
                    r.enable(_objectSpread(_objectSpread({}, t), {}, {
                      onlySelf: !0
                    }));
                  }), this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                  }), this._updateAncestors(_objectSpread(_objectSpread({}, t), {}, {
                    skipPristineCheck: n
                  })), this._onDisabledChange.forEach(function (r) {
                    return r(!1);
                  });
                }
              }, {
                key: "_updateAncestors",
                value: function _updateAncestors(t) {
                  this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched());
                }
              }, {
                key: "setParent",
                value: function setParent(t) {
                  this._parent = t;
                }
              }, {
                key: "getRawValue",
                value: function getRawValue() {
                  return this.value;
                }
              }, {
                key: "updateValueAndValidity",
                value: function updateValueAndValidity() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), (this.status === Vo || this.status === Br) && this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
                }
              }, {
                key: "_updateTreeValidity",
                value: function _updateTreeValidity() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    emitEvent: !0
                  };
                  this._forEachChild(function (n) {
                    return n._updateTreeValidity(t);
                  }), this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                  });
                }
              }, {
                key: "_setInitialStatus",
                value: function _setInitialStatus() {
                  this.status = this._allControlsDisabled() ? Lo : Vo;
                }
              }, {
                key: "_runValidator",
                value: function _runValidator() {
                  return this.validator ? this.validator(this) : null;
                }
              }, {
                key: "_runAsyncValidator",
                value: function _runAsyncValidator(t) {
                  var _this48 = this;

                  if (this.asyncValidator) {
                    this.status = Br, this._hasOwnPendingAsyncValidator = !0;
                    var n = wy(this.asyncValidator(this));
                    this._asyncValidationSubscription = n.subscribe(function (r) {
                      _this48._hasOwnPendingAsyncValidator = !1, _this48.setErrors(r, {
                        emitEvent: t
                      });
                    });
                  }
                }
              }, {
                key: "_cancelExistingSubscription",
                value: function _cancelExistingSubscription() {
                  this._asyncValidationSubscription && (this._asyncValidationSubscription.unsubscribe(), this._hasOwnPendingAsyncValidator = !1);
                }
              }, {
                key: "setErrors",
                value: function setErrors(t) {
                  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  this.errors = t, this._updateControlsErrors(!1 !== n.emitEvent);
                }
              }, {
                key: "get",
                value: function get(t) {
                  var n = t;
                  return null == n || (Array.isArray(n) || (n = n.split(".")), 0 === n.length) ? null : n.reduce(function (r, o) {
                    return r && r._find(o);
                  }, this);
                }
              }, {
                key: "getError",
                value: function getError(t, n) {
                  var r = n ? this.get(n) : this;
                  return r && r.errors ? r.errors[t] : null;
                }
              }, {
                key: "hasError",
                value: function hasError(t, n) {
                  return !!this.getError(t, n);
                }
              }, {
                key: "root",
                get: function get() {
                  var t = this;

                  for (; t._parent;) {
                    t = t._parent;
                  }

                  return t;
                }
              }, {
                key: "_updateControlsErrors",
                value: function _updateControlsErrors(t) {
                  this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t);
                }
              }, {
                key: "_initObservables",
                value: function _initObservables() {
                  this.valueChanges = new ze(), this.statusChanges = new ze();
                }
              }, {
                key: "_calculateStatus",
                value: function _calculateStatus() {
                  return this._allControlsDisabled() ? Lo : this.errors ? Ds : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Br) ? Br : this._anyControlsHaveStatus(Ds) ? Ds : Vo;
                }
              }, {
                key: "_anyControlsHaveStatus",
                value: function _anyControlsHaveStatus(t) {
                  return this._anyControls(function (n) {
                    return n.status === t;
                  });
                }
              }, {
                key: "_anyControlsDirty",
                value: function _anyControlsDirty() {
                  return this._anyControls(function (t) {
                    return t.dirty;
                  });
                }
              }, {
                key: "_anyControlsTouched",
                value: function _anyControlsTouched() {
                  return this._anyControls(function (t) {
                    return t.touched;
                  });
                }
              }, {
                key: "_updatePristine",
                value: function _updatePristine() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t);
                }
              }, {
                key: "_updateTouched",
                value: function _updateTouched() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t);
                }
              }, {
                key: "_registerOnCollectionChange",
                value: function _registerOnCollectionChange(t) {
                  this._onCollectionChange = t;
                }
              }, {
                key: "_setUpdateStrategy",
                value: function _setUpdateStrategy(t) {
                  vs(t) && null != t.updateOn && (this._updateOn = t.updateOn);
                }
              }, {
                key: "_parentMarkedDirty",
                value: function _parentMarkedDirty(t) {
                  return !t && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty();
                }
              }, {
                key: "_find",
                value: function _find(t) {
                  return null;
                }
              }]);

              return Hy;
            }()))("noname");
          }
        }, {
          key: "doAction",
          value: function doAction() {
            var _this49 = this;

            fN().get("/hello/json/" + this.input.value).then(function (n) {
              var r = n.data;
              _this49.message = r.id + ":" + r.name + " [" + r.mail + "] (" + r.age + ")";
            });
          }
        }]);

        return e;
      }();

      return e.ɵfac = function (n) {
        return new (n || e)();
      }, e.ɵcmp = Vs({
        type: e,
        selectors: [["app-my"]],
        decls: 6,
        vars: 2,
        consts: [["type", "number", 3, "formControl"], [3, "click"]],
        template: function template(n, r) {
          1 & n && (vo(0, "div")(1, "p"), Nu(2), _o(), Mu(3, "input", 0), vo(4, "button", 1), wt("click", function () {
            return r.doAction();
          }), Nu(5, "click"), _o()()), 2 & n && (Za(2), xu(r.message), Za(1), Eu("formControl", r.input));
        },
        dependencies: [ps, Kl, Ry, Jl]
      }), e;
    }(),
        pN = function () {
      var e = /*#__PURE__*/_createClass(function e() {
        _classCallCheck(this, e);
      });

      return e.ɵfac = function (n) {
        return new (n || e)();
      }, e.ɵmod = nn({
        type: e,
        bootstrap: [hN]
      }), e.ɵinj = Ht({
        imports: [GA, uN, lN]
      }), e;
    }();

    (function g0() {
      gm = !1;
    })(), UA().bootstrapModule(pN)["catch"](function (e) {
      return console.error(e);
    });
  }
}, function (V) {
  V(V.s = 137);
}]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/ngapp/dist/ngapp/polyfills.js":
/*!*************************************************!*\
  !*** ./resources/ngapp/dist/ngapp/polyfills.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(self.webpackChunkngapp = self.webpackChunkngapp || []).push([[429], {
  435: function _(ie, Ee, de) {
    de(583);
  },
  583: function _() {
    !function (e) {
      var n = e.performance;

      function i(M) {
        n && n.mark && n.mark(M);
      }

      function o(M, E) {
        n && n.measure && n.measure(M, E);
      }

      i("Zone");
      var c = e.__Zone_symbol_prefix || "__zone_symbol__";

      function a(M) {
        return c + M;
      }

      var y = !0 === e[a("forceDuplicateZoneCheck")];

      if (e.Zone) {
        if (y || "function" != typeof e.Zone.__symbol__) throw new Error("Zone already loaded.");
        return e.Zone;
      }

      var d = function () {
        var M = /*#__PURE__*/function () {
          function M(t, r) {
            _classCallCheck(this, M);

            this._parent = t, this._name = r ? r.name || "unnamed" : "<root>", this._properties = r && r.properties || {}, this._zoneDelegate = new v(this, this._parent && this._parent._zoneDelegate, r);
          }

          _createClass(M, [{
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }, {
            key: "get",
            value: function get(t) {
              var r = this.getZoneWith(t);
              if (r) return r._properties[t];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(t) {
              var r = this;

              for (; r;) {
                if (r._properties.hasOwnProperty(t)) return r;
                r = r._parent;
              }

              return null;
            }
          }, {
            key: "fork",
            value: function fork(t) {
              if (!t) throw new Error("ZoneSpec required!");
              return this._zoneDelegate.fork(this, t);
            }
          }, {
            key: "wrap",
            value: function wrap(t, r) {
              if ("function" != typeof t) throw new Error("Expecting function got: " + t);

              var k = this._zoneDelegate.intercept(this, t, r),
                  C = this;

              return function () {
                return C.runGuarded(k, this, arguments, r);
              };
            }
          }, {
            key: "run",
            value: function run(t, r, k, C) {
              U = {
                parent: U,
                zone: this
              };

              try {
                return this._zoneDelegate.invoke(this, t, r, k, C);
              } finally {
                U = U.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(t) {
              var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var k = arguments.length > 2 ? arguments[2] : undefined;
              var C = arguments.length > 3 ? arguments[3] : undefined;
              U = {
                parent: U,
                zone: this
              };

              try {
                try {
                  return this._zoneDelegate.invoke(this, t, r, k, C);
                } catch ($) {
                  if (this._zoneDelegate.handleError(this, $)) throw $;
                }
              } finally {
                U = U.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(t, r, k) {
              if (t.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (t.zone || K).name + "; Execution: " + this.name + ")");
              if (t.state === x && (t.type === Q || t.type === w)) return;
              var C = t.state != p;
              C && t._transitionTo(p, j), t.runCount++;
              var $ = re;
              re = t, U = {
                parent: U,
                zone: this
              };

              try {
                t.type == w && t.data && !t.data.isPeriodic && (t.cancelFn = void 0);

                try {
                  return this._zoneDelegate.invokeTask(this, t, r, k);
                } catch (l) {
                  if (this._zoneDelegate.handleError(this, l)) throw l;
                }
              } finally {
                t.state !== x && t.state !== h && (t.type == Q || t.data && t.data.isPeriodic ? C && t._transitionTo(j, p) : (t.runCount = 0, this._updateTaskCount(t, -1), C && t._transitionTo(x, p, x))), U = U.parent, re = $;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(t) {
              if (t.zone && t.zone !== this) {
                var k = this;

                for (; k;) {
                  if (k === t.zone) throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(t.zone.name));
                  k = k.parent;
                }
              }

              t._transitionTo(X, x);

              var r = [];
              t._zoneDelegates = r, t._zone = this;

              try {
                t = this._zoneDelegate.scheduleTask(this, t);
              } catch (k) {
                throw t._transitionTo(h, X, x), this._zoneDelegate.handleError(this, k), k;
              }

              return t._zoneDelegates === r && this._updateTaskCount(t, 1), t.state == X && t._transitionTo(j, X), t;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(t, r, k, C) {
              return this.scheduleTask(new m(I, t, r, k, C, void 0));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(t, r, k, C, $) {
              return this.scheduleTask(new m(w, t, r, k, C, $));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(t, r, k, C, $) {
              return this.scheduleTask(new m(Q, t, r, k, C, $));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(t) {
              if (t.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (t.zone || K).name + "; Execution: " + this.name + ")");

              t._transitionTo(G, j, p);

              try {
                this._zoneDelegate.cancelTask(this, t);
              } catch (r) {
                throw t._transitionTo(h, G), this._zoneDelegate.handleError(this, r), r;
              }

              return this._updateTaskCount(t, -1), t._transitionTo(x, G), t.runCount = 0, t;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(t, r) {
              var k = t._zoneDelegates;
              -1 == r && (t._zoneDelegates = null);

              for (var C = 0; C < k.length; C++) {
                k[C]._updateTaskCount(t.type, r);
              }
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (e.Promise !== oe.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
            }
          }, {
            key: "root",
            get: function get() {
              var t = M.current;

              for (; t.parent;) {
                t = t.parent;
              }

              return t;
            }
          }, {
            key: "current",
            get: function get() {
              return U.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return re;
            }
          }, {
            key: "__load_patch",
            value: function __load_patch(t, r) {
              var k = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

              if (oe.hasOwnProperty(t)) {
                if (!k && y) throw Error("Already loaded patch: " + t);
              } else if (!e["__Zone_disable_" + t]) {
                var C = "Zone:" + t;
                i(C), oe[t] = r(e, M, z), o(C, C);
              }
            }
          }]);

          return M;
        }();

        return M.__symbol__ = a, M;
      }();

      var P = {
        name: "",
        onHasTask: function onHasTask(M, E, t, r) {
          return M.hasTask(t, r);
        },
        onScheduleTask: function onScheduleTask(M, E, t, r) {
          return M.scheduleTask(t, r);
        },
        onInvokeTask: function onInvokeTask(M, E, t, r, k, C) {
          return M.invokeTask(t, r, k, C);
        },
        onCancelTask: function onCancelTask(M, E, t, r) {
          return M.cancelTask(t, r);
        }
      };

      var v = /*#__PURE__*/function () {
        function v(E, t, r) {
          _classCallCheck(this, v);

          this._taskCounts = {
            microTask: 0,
            macroTask: 0,
            eventTask: 0
          }, this.zone = E, this._parentDelegate = t, this._forkZS = r && (r && r.onFork ? r : t._forkZS), this._forkDlgt = r && (r.onFork ? t : t._forkDlgt), this._forkCurrZone = r && (r.onFork ? this.zone : t._forkCurrZone), this._interceptZS = r && (r.onIntercept ? r : t._interceptZS), this._interceptDlgt = r && (r.onIntercept ? t : t._interceptDlgt), this._interceptCurrZone = r && (r.onIntercept ? this.zone : t._interceptCurrZone), this._invokeZS = r && (r.onInvoke ? r : t._invokeZS), this._invokeDlgt = r && (r.onInvoke ? t : t._invokeDlgt), this._invokeCurrZone = r && (r.onInvoke ? this.zone : t._invokeCurrZone), this._handleErrorZS = r && (r.onHandleError ? r : t._handleErrorZS), this._handleErrorDlgt = r && (r.onHandleError ? t : t._handleErrorDlgt), this._handleErrorCurrZone = r && (r.onHandleError ? this.zone : t._handleErrorCurrZone), this._scheduleTaskZS = r && (r.onScheduleTask ? r : t._scheduleTaskZS), this._scheduleTaskDlgt = r && (r.onScheduleTask ? t : t._scheduleTaskDlgt), this._scheduleTaskCurrZone = r && (r.onScheduleTask ? this.zone : t._scheduleTaskCurrZone), this._invokeTaskZS = r && (r.onInvokeTask ? r : t._invokeTaskZS), this._invokeTaskDlgt = r && (r.onInvokeTask ? t : t._invokeTaskDlgt), this._invokeTaskCurrZone = r && (r.onInvokeTask ? this.zone : t._invokeTaskCurrZone), this._cancelTaskZS = r && (r.onCancelTask ? r : t._cancelTaskZS), this._cancelTaskDlgt = r && (r.onCancelTask ? t : t._cancelTaskDlgt), this._cancelTaskCurrZone = r && (r.onCancelTask ? this.zone : t._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
          var k = r && r.onHasTask;
          (k || t && t._hasTaskZS) && (this._hasTaskZS = k ? r : P, this._hasTaskDlgt = t, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = E, r.onScheduleTask || (this._scheduleTaskZS = P, this._scheduleTaskDlgt = t, this._scheduleTaskCurrZone = this.zone), r.onInvokeTask || (this._invokeTaskZS = P, this._invokeTaskDlgt = t, this._invokeTaskCurrZone = this.zone), r.onCancelTask || (this._cancelTaskZS = P, this._cancelTaskDlgt = t, this._cancelTaskCurrZone = this.zone));
        }

        _createClass(v, [{
          key: "fork",
          value: function fork(E, t) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, E, t) : new d(E, t);
          }
        }, {
          key: "intercept",
          value: function intercept(E, t, r) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, E, t, r) : t;
          }
        }, {
          key: "invoke",
          value: function invoke(E, t, r, k, C) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, E, t, r, k, C) : t.apply(r, k);
          }
        }, {
          key: "handleError",
          value: function handleError(E, t) {
            return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, E, t);
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(E, t) {
            var r = t;
            if (this._scheduleTaskZS) this._hasTaskZS && r._zoneDelegates.push(this._hasTaskDlgtOwner), r = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, E, t), r || (r = t);else if (t.scheduleFn) t.scheduleFn(t);else {
              if (t.type != I) throw new Error("Task is missing scheduleFn.");
              R(t);
            }
            return r;
          }
        }, {
          key: "invokeTask",
          value: function invokeTask(E, t, r, k) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, E, t, r, k) : t.callback.apply(r, k);
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(E, t) {
            var r;
            if (this._cancelTaskZS) r = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, E, t);else {
              if (!t.cancelFn) throw Error("Task is not cancelable");
              r = t.cancelFn(t);
            }
            return r;
          }
        }, {
          key: "hasTask",
          value: function hasTask(E, t) {
            try {
              this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, E, t);
            } catch (r) {
              this.handleError(E, r);
            }
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(E, t) {
            var r = this._taskCounts,
                k = r[E],
                C = r[E] = k + t;
            if (C < 0) throw new Error("More tasks executed then were scheduled.");
            0 != k && 0 != C || this.hasTask(this.zone, {
              microTask: r.microTask > 0,
              macroTask: r.macroTask > 0,
              eventTask: r.eventTask > 0,
              change: E
            });
          }
        }]);

        return v;
      }();

      var m = /*#__PURE__*/function () {
        function m(E, t, r, k, C, $) {
          _classCallCheck(this, m);

          if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = E, this.source = t, this.data = k, this.scheduleFn = C, this.cancelFn = $, !r) throw new Error("callback is not defined");
          this.callback = r;
          var l = this;
          this.invoke = E === Q && k && k.useG ? m.invokeTask : function () {
            return m.invokeTask.call(e, l, this, arguments);
          };
        }

        _createClass(m, [{
          key: "zone",
          get: function get() {
            return this._zone;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }, {
          key: "cancelScheduleRequest",
          value: function cancelScheduleRequest() {
            this._transitionTo(x, X);
          }
        }, {
          key: "_transitionTo",
          value: function _transitionTo(E, t, r) {
            if (this._state !== t && this._state !== r) throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(E, "', expecting state '").concat(t, "'").concat(r ? " or '" + r + "'" : "", ", was '").concat(this._state, "'."));
            this._state = E, E == x && (this._zoneDelegates = null);
          }
        }, {
          key: "toString",
          value: function toString() {
            return this.data && _typeof(this.data.handleId) < "u" ? this.data.handleId.toString() : Object.prototype.toString.call(this);
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount
            };
          }
        }], [{
          key: "invokeTask",
          value: function invokeTask(E, t, r) {
            E || (E = this), ee++;

            try {
              return E.runCount++, E.zone.runTask(E, t, r);
            } finally {
              1 == ee && _(), ee--;
            }
          }
        }]);

        return m;
      }();

      var L = a("setTimeout"),
          Z = a("Promise"),
          N = a("then");
      var J,
          B = [],
          H = !1;

      function q(M) {
        if (J || e[Z] && (J = e[Z].resolve(0)), J) {
          var E = J[N];
          E || (E = J.then), E.call(J, M);
        } else e[L](M, 0);
      }

      function R(M) {
        0 === ee && 0 === B.length && q(_), M && B.push(M);
      }

      function _() {
        if (!H) {
          for (H = !0; B.length;) {
            var M = B;
            B = [];

            for (var E = 0; E < M.length; E++) {
              var t = M[E];

              try {
                t.zone.runTask(t, null, null);
              } catch (r) {
                z.onUnhandledError(r);
              }
            }
          }

          z.microtaskDrainDone(), H = !1;
        }
      }

      var K = {
        name: "NO ZONE"
      },
          x = "notScheduled",
          X = "scheduling",
          j = "scheduled",
          p = "running",
          G = "canceling",
          h = "unknown",
          I = "microTask",
          w = "macroTask",
          Q = "eventTask",
          oe = {},
          z = {
        symbol: a,
        currentZoneFrame: function currentZoneFrame() {
          return U;
        },
        onUnhandledError: W,
        microtaskDrainDone: W,
        scheduleMicroTask: R,
        showUncaughtError: function showUncaughtError() {
          return !d[a("ignoreConsoleErrorUncaughtError")];
        },
        patchEventTarget: function patchEventTarget() {
          return [];
        },
        patchOnProperties: W,
        patchMethod: function patchMethod() {
          return W;
        },
        bindArguments: function bindArguments() {
          return [];
        },
        patchThen: function patchThen() {
          return W;
        },
        patchMacroTask: function patchMacroTask() {
          return W;
        },
        patchEventPrototype: function patchEventPrototype() {
          return W;
        },
        isIEOrEdge: function isIEOrEdge() {
          return !1;
        },
        getGlobalObjects: function getGlobalObjects() {},
        ObjectDefineProperty: function ObjectDefineProperty() {
          return W;
        },
        ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {},
        ObjectCreate: function ObjectCreate() {},
        ArraySlice: function ArraySlice() {
          return [];
        },
        patchClass: function patchClass() {
          return W;
        },
        wrapWithCurrentZone: function wrapWithCurrentZone() {
          return W;
        },
        filterProperties: function filterProperties() {
          return [];
        },
        attachOriginToPatched: function attachOriginToPatched() {
          return W;
        },
        _redefineProperty: function _redefineProperty() {
          return W;
        },
        patchCallbacks: function patchCallbacks() {
          return W;
        },
        nativeScheduleMicroTask: q
      };
      var U = {
        parent: null,
        zone: new d(null, null)
      },
          re = null,
          ee = 0;

      function W() {}

      o("Zone", "Zone"), e.Zone = d;
    }((typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window || (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && self || global);

    var ie = Object.getOwnPropertyDescriptor,
        Ee = Object.defineProperty,
        de = Object.getPrototypeOf,
        ge = Object.create,
        Ve = Array.prototype.slice,
        Oe = "addEventListener",
        Se = "removeEventListener",
        Ze = Zone.__symbol__(Oe),
        Ne = Zone.__symbol__(Se),
        ce = "true",
        ae = "false",
        ke = Zone.__symbol__("");

    function Ie(e, n) {
      return Zone.current.wrap(e, n);
    }

    function Me(e, n, i, o, c) {
      return Zone.current.scheduleMacroTask(e, n, i, o, c);
    }

    var A = Zone.__symbol__,
        Pe = (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u",
        Te = Pe ? window : void 0,
        Y = Pe && Te || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || global;

    function Le(e, n) {
      for (var i = e.length - 1; i >= 0; i--) {
        "function" == typeof e[i] && (e[i] = Ie(e[i], n + "_" + i));
      }

      return e;
    }

    function Fe(e) {
      return !e || !1 !== e.writable && !("function" == typeof e.get && _typeof(e.set) > "u");
    }

    var Be = (typeof WorkerGlobalScope === "undefined" ? "undefined" : _typeof(WorkerGlobalScope)) < "u" && self instanceof WorkerGlobalScope,
        we = !("nw" in Y) && _typeof(Y.process) < "u" && "[object process]" === {}.toString.call(Y.process),
        je = !we && !Be && !(!Pe || !Te.HTMLElement),
        Ue = _typeof(Y.process) < "u" && "[object process]" === {}.toString.call(Y.process) && !Be && !(!Pe || !Te.HTMLElement),
        Re = {},
        We = function We(e) {
      if (!(e = e || Y.event)) return;
      var n = Re[e.type];
      n || (n = Re[e.type] = A("ON_PROPERTY" + e.type));
      var i = this || e.target || Y,
          o = i[n];
      var c;

      if (je && i === Te && "error" === e.type) {
        var a = e;
        c = o && o.call(this, a.message, a.filename, a.lineno, a.colno, a.error), !0 === c && e.preventDefault();
      } else c = o && o.apply(this, arguments), null != c && !c && e.preventDefault();

      return c;
    };

    function qe(e, n, i) {
      var o = ie(e, n);
      if (!o && i && ie(i, n) && (o = {
        enumerable: !0,
        configurable: !0
      }), !o || !o.configurable) return;
      var c = A("on" + n + "patched");
      if (e.hasOwnProperty(c) && e[c]) return;
      delete o.writable, delete o.value;
      var a = o.get,
          y = o.set,
          d = n.slice(2);
      var P = Re[d];
      P || (P = Re[d] = A("ON_PROPERTY" + d)), o.set = function (v) {
        var m = this;
        !m && e === Y && (m = Y), m && ("function" == typeof m[P] && m.removeEventListener(d, We), y && y.call(m, null), m[P] = v, "function" == typeof v && m.addEventListener(d, We, !1));
      }, o.get = function () {
        var v = this;
        if (!v && e === Y && (v = Y), !v) return null;
        var m = v[P];
        if (m) return m;

        if (a) {
          var L = a.call(this);
          if (L) return o.set.call(this, L), "function" == typeof v.removeAttribute && v.removeAttribute(n), L;
        }

        return null;
      }, Ee(e, n, o), e[c] = !0;
    }

    function Xe(e, n, i) {
      if (n) for (var o = 0; o < n.length; o++) {
        qe(e, "on" + n[o], i);
      } else {
        var _o = [];

        for (var c in e) {
          "on" == c.slice(0, 2) && _o.push(c);
        }

        for (var _c = 0; _c < _o.length; _c++) {
          qe(e, _o[_c], i);
        }
      }
    }

    var ne = A("originalInstance");

    function ve(e) {
      var n = Y[e];
      if (!n) return;
      Y[A(e)] = n, Y[e] = function () {
        var c = Le(arguments, e);

        switch (c.length) {
          case 0:
            this[ne] = new n();
            break;

          case 1:
            this[ne] = new n(c[0]);
            break;

          case 2:
            this[ne] = new n(c[0], c[1]);
            break;

          case 3:
            this[ne] = new n(c[0], c[1], c[2]);
            break;

          case 4:
            this[ne] = new n(c[0], c[1], c[2], c[3]);
            break;

          default:
            throw new Error("Arg list too long.");
        }
      }, ue(Y[e], n);
      var i = new n(function () {});
      var o;

      for (o in i) {
        "XMLHttpRequest" === e && "responseBlob" === o || function (c) {
          "function" == typeof i[c] ? Y[e].prototype[c] = function () {
            return this[ne][c].apply(this[ne], arguments);
          } : Ee(Y[e].prototype, c, {
            set: function set(a) {
              "function" == typeof a ? (this[ne][c] = Ie(a, e + "." + c), ue(this[ne][c], a)) : this[ne][c] = a;
            },
            get: function get() {
              return this[ne][c];
            }
          });
        }(o);
      }

      for (o in n) {
        "prototype" !== o && n.hasOwnProperty(o) && (Y[e][o] = n[o]);
      }
    }

    function le(e, n, i) {
      var o = e;

      for (; o && !o.hasOwnProperty(n);) {
        o = de(o);
      }

      !o && e[n] && (o = e);
      var c = A(n);
      var a = null;

      if (o && (!(a = o[c]) || !o.hasOwnProperty(c)) && (a = o[c] = o[n], Fe(o && ie(o, n)))) {
        var d = i(a, c, n);
        o[n] = function () {
          return d(this, arguments);
        }, ue(o[n], a);
      }

      return a;
    }

    function lt(e, n, i) {
      var o = null;

      function c(a) {
        var y = a.data;
        return y.args[y.cbIdx] = function () {
          a.invoke.apply(this, arguments);
        }, o.apply(y.target, y.args), a;
      }

      o = le(e, n, function (a) {
        return function (y, d) {
          var P = i(y, d);
          return P.cbIdx >= 0 && "function" == typeof d[P.cbIdx] ? Me(P.name, d[P.cbIdx], P, c) : a.apply(y, d);
        };
      });
    }

    function ue(e, n) {
      e[A("OriginalDelegate")] = n;
    }

    var ze = !1,
        Ae = !1;

    function ft() {
      if (ze) return Ae;
      ze = !0;

      try {
        var e = Te.navigator.userAgent;
        (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/") || -1 !== e.indexOf("Edge/")) && (Ae = !0);
      } catch (_unused) {}

      return Ae;
    }

    Zone.__load_patch("ZoneAwarePromise", function (e, n, i) {
      var o = Object.getOwnPropertyDescriptor,
          c = Object.defineProperty,
          y = i.symbol,
          d = [],
          P = !0 === e[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
          v = y("Promise"),
          m = y("then");
      i.onUnhandledError = function (l) {
        if (i.showUncaughtError()) {
          var u = l && l.rejection;
          u ? console.error("Unhandled Promise rejection:", u instanceof Error ? u.message : u, "; Zone:", l.zone.name, "; Task:", l.task && l.task.source, "; Value:", u, u instanceof Error ? u.stack : void 0) : console.error(l);
        }
      }, i.microtaskDrainDone = function () {
        var _loop = function _loop() {
          var l = d.shift();

          try {
            l.zone.runGuarded(function () {
              throw l.throwOriginal ? l.rejection : l;
            });
          } catch (u) {
            N(u);
          }
        };

        for (; d.length;) {
          _loop();
        }
      };
      var Z = y("unhandledPromiseRejectionHandler");

      function N(l) {
        i.onUnhandledError(l);

        try {
          var u = n[Z];
          "function" == typeof u && u.call(this, l);
        } catch (_unused2) {}
      }

      function B(l) {
        return l && l.then;
      }

      function H(l) {
        return l;
      }

      function J(l) {
        return t.reject(l);
      }

      var q = y("state"),
          R = y("value"),
          _ = y("finally"),
          K = y("parentPromiseValue"),
          x = y("parentPromiseState"),
          j = null,
          p = !0,
          G = !1;

      function I(l, u) {
        return function (s) {
          try {
            z(l, u, s);
          } catch (f) {
            z(l, !1, f);
          }
        };
      }

      var w = function w() {
        var l = !1;
        return function (s) {
          return function () {
            l || (l = !0, s.apply(null, arguments));
          };
        };
      },
          oe = y("currentTaskTrace");

      function z(l, u, s) {
        var f = w();
        if (l === s) throw new TypeError("Promise resolved with itself");

        if (l[q] === j) {
          var g = null;

          try {
            ("object" == _typeof(s) || "function" == typeof s) && (g = s && s.then);
          } catch (b) {
            return f(function () {
              z(l, !1, b);
            })(), l;
          }

          if (u !== G && s instanceof t && s.hasOwnProperty(q) && s.hasOwnProperty(R) && s[q] !== j) re(s), z(l, s[q], s[R]);else if (u !== G && "function" == typeof g) try {
            g.call(s, f(I(l, u)), f(I(l, !1)));
          } catch (b) {
            f(function () {
              z(l, !1, b);
            })();
          } else {
            l[q] = u;
            var b = l[R];

            if (l[R] = s, l[_] === _ && u === p && (l[q] = l[x], l[R] = l[K]), u === G && s instanceof Error) {
              var T = n.currentTask && n.currentTask.data && n.currentTask.data.__creationTrace__;
              T && c(s, oe, {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: T
              });
            }

            for (var _T = 0; _T < b.length;) {
              ee(l, b[_T++], b[_T++], b[_T++], b[_T++]);
            }

            if (0 == b.length && u == G) {
              l[q] = 0;
              var _T2 = s;

              try {
                throw new Error("Uncaught (in promise): " + function a(l) {
                  return l && l.toString === Object.prototype.toString ? (l.constructor && l.constructor.name || "") + ": " + JSON.stringify(l) : l ? l.toString() : Object.prototype.toString.call(l);
                }(s) + (s && s.stack ? "\n" + s.stack : ""));
              } catch (D) {
                _T2 = D;
              }

              P && (_T2.throwOriginal = !0), _T2.rejection = s, _T2.promise = l, _T2.zone = n.current, _T2.task = n.currentTask, d.push(_T2), i.scheduleMicroTask();
            }
          }
        }

        return l;
      }

      var U = y("rejectionHandledHandler");

      function re(l) {
        if (0 === l[q]) {
          try {
            var u = n[U];
            u && "function" == typeof u && u.call(this, {
              rejection: l[R],
              promise: l
            });
          } catch (_unused3) {}

          l[q] = G;

          for (var _u = 0; _u < d.length; _u++) {
            l === d[_u].promise && d.splice(_u, 1);
          }
        }
      }

      function ee(l, u, s, f, g) {
        re(l);
        var b = l[q],
            T = b ? "function" == typeof f ? f : H : "function" == typeof g ? g : J;
        u.scheduleMicroTask("Promise.then", function () {
          try {
            var D = l[R],
                O = !!s && _ === s[_];
            O && (s[K] = D, s[x] = b);
            var S = u.run(T, void 0, O && T !== J && T !== H ? [] : [D]);
            z(s, !0, S);
          } catch (D) {
            z(s, !1, D);
          }
        }, s);
      }

      var M = function M() {},
          E = e.AggregateError;

      var t = /*#__PURE__*/function (_Symbol$toStringTag, _Symbol$species) {
        function t(u) {
          _classCallCheck(this, t);

          var s = this;
          if (!(s instanceof t)) throw new Error("Must be an instanceof Promise.");
          s[q] = j, s[R] = [];

          try {
            var f = w();
            u && u(f(I(s, p)), f(I(s, G)));
          } catch (f) {
            z(s, !1, f);
          }
        }

        _createClass(t, [{
          key: _Symbol$toStringTag,
          get: function get() {
            return "Promise";
          }
        }, {
          key: _Symbol$species,
          get: function get() {
            return t;
          }
        }, {
          key: "then",
          value: function then(u, s) {
            var f;
            var g = null === (f = this.constructor) || void 0 === f ? void 0 : f[Symbol.species];
            (!g || "function" != typeof g) && (g = this.constructor || t);
            var b = new g(M),
                T = n.current;
            return this[q] == j ? this[R].push(T, b, u, s) : ee(this, T, b, u, s), b;
          }
        }, {
          key: "catch",
          value: function _catch(u) {
            return this.then(null, u);
          }
        }, {
          key: "finally",
          value: function _finally(u) {
            var s;
            var f = null === (s = this.constructor) || void 0 === s ? void 0 : s[Symbol.species];
            (!f || "function" != typeof f) && (f = t);
            var g = new f(M);
            g[_] = _;
            var b = n.current;
            return this[q] == j ? this[R].push(b, g, u, u) : ee(this, b, g, u, u), g;
          }
        }], [{
          key: "toString",
          value: function toString() {
            return "function ZoneAwarePromise() { [native code] }";
          }
        }, {
          key: "resolve",
          value: function resolve(u) {
            return z(new this(null), p, u);
          }
        }, {
          key: "reject",
          value: function reject(u) {
            return z(new this(null), G, u);
          }
        }, {
          key: "any",
          value: function any(u) {
            if (!u || "function" != typeof u[Symbol.iterator]) return Promise.reject(new E([], "All promises were rejected"));
            var s = [];
            var f = 0;

            try {
              var _iterator = _createForOfIteratorHelper(u),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var T = _step.value;
                  f++, s.push(t.resolve(T));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } catch (_unused4) {
              return Promise.reject(new E([], "All promises were rejected"));
            }

            if (0 === f) return Promise.reject(new E([], "All promises were rejected"));
            var g = !1;
            var b = [];
            return new t(function (T, D) {
              for (var O = 0; O < s.length; O++) {
                s[O].then(function (S) {
                  g || (g = !0, T(S));
                }, function (S) {
                  b.push(S), f--, 0 === f && (g = !0, D(new E(b, "All promises were rejected")));
                });
              }
            });
          }
        }, {
          key: "race",
          value: function race(u) {
            var s,
                f,
                g = new this(function (D, O) {
              s = D, f = O;
            });

            function b(D) {
              s(D);
            }

            function T(D) {
              f(D);
            }

            var _iterator2 = _createForOfIteratorHelper(u),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var D = _step2.value;
                B(D) || (D = this.resolve(D)), D.then(b, T);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return g;
          }
        }, {
          key: "all",
          value: function all(u) {
            return t.allWithCallback(u);
          }
        }, {
          key: "allSettled",
          value: function allSettled(u) {
            return (this && this.prototype instanceof t ? this : t).allWithCallback(u, {
              thenCallback: function thenCallback(f) {
                return {
                  status: "fulfilled",
                  value: f
                };
              },
              errorCallback: function errorCallback(f) {
                return {
                  status: "rejected",
                  reason: f
                };
              }
            });
          }
        }, {
          key: "allWithCallback",
          value: function allWithCallback(u, s) {
            var _this = this;

            var f,
                g,
                b = new this(function (S, V) {
              f = S, g = V;
            }),
                T = 2,
                D = 0;
            var O = [];

            var _iterator3 = _createForOfIteratorHelper(u),
                _step3;

            try {
              var _loop2 = function _loop2() {
                var S = _step3.value;
                B(S) || (S = _this.resolve(S));
                var V = D;

                try {
                  S.then(function (F) {
                    O[V] = s ? s.thenCallback(F) : F, T--, 0 === T && f(O);
                  }, function (F) {
                    s ? (O[V] = s.errorCallback(F), T--, 0 === T && f(O)) : g(F);
                  });
                } catch (F) {
                  g(F);
                }

                T++, D++;
              };

              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return T -= 2, 0 === T && f(O), b;
          }
        }]);

        return t;
      }(Symbol.toStringTag, Symbol.species);

      t.resolve = t.resolve, t.reject = t.reject, t.race = t.race, t.all = t.all;
      var r = e[v] = e.Promise;
      e.Promise = t;
      var k = y("thenPatched");

      function C(l) {
        var u = l.prototype,
            s = o(u, "then");
        if (s && (!1 === s.writable || !s.configurable)) return;
        var f = u.then;
        u[m] = f, l.prototype.then = function (g, b) {
          var _this2 = this;

          return new t(function (D, O) {
            f.call(_this2, D, O);
          }).then(g, b);
        }, l[k] = !0;
      }

      return i.patchThen = C, r && (C(r), le(e, "fetch", function (l) {
        return function $(l) {
          return function (u, s) {
            var f = l.apply(u, s);
            if (f instanceof t) return f;
            var g = f.constructor;
            return g[k] || C(g), f;
          };
        }(l);
      })), Promise[n.__symbol__("uncaughtPromiseErrors")] = d, t;
    }), Zone.__load_patch("toString", function (e) {
      var n = Function.prototype.toString,
          i = A("OriginalDelegate"),
          o = A("Promise"),
          c = A("Error"),
          a = function a() {
        if ("function" == typeof this) {
          var v = this[i];
          if (v) return "function" == typeof v ? n.call(v) : Object.prototype.toString.call(v);

          if (this === Promise) {
            var m = e[o];
            if (m) return n.call(m);
          }

          if (this === Error) {
            var _m = e[c];
            if (_m) return n.call(_m);
          }
        }

        return n.call(this);
      };

      a[i] = n, Function.prototype.toString = a;
      var y = Object.prototype.toString;

      Object.prototype.toString = function () {
        return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : y.call(this);
      };
    });
    var ye = !1;
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) < "u") try {
      var e = Object.defineProperty({}, "passive", {
        get: function get() {
          ye = !0;
        }
      });
      window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
    } catch (_unused5) {
      ye = !1;
    }
    var ht = {
      useG: !0
    },
        te = {},
        Ye = {},
        $e = new RegExp("^" + ke + "(\\w+)(true|false)$"),
        Ke = A("propagationStopped");

    function Je(e, n) {
      var i = (n ? n(e) : e) + ae,
          o = (n ? n(e) : e) + ce,
          c = ke + i,
          a = ke + o;
      te[e] = {}, te[e][ae] = c, te[e][ce] = a;
    }

    function dt(e, n, i, o) {
      var c = o && o.add || Oe,
          a = o && o.rm || Se,
          y = o && o.listeners || "eventListeners",
          d = o && o.rmAll || "removeAllListeners",
          P = A(c),
          v = "." + c + ":",
          Z = function Z(R, _, K) {
        if (R.isRemoved) return;
        var x = R.callback;
        var X;
        "object" == _typeof(x) && x.handleEvent && (R.callback = function (p) {
          return x.handleEvent(p);
        }, R.originalDelegate = x);

        try {
          R.invoke(R, _, [K]);
        } catch (p) {
          X = p;
        }

        var j = R.options;
        return j && "object" == _typeof(j) && j.once && _[a].call(_, K.type, R.originalDelegate ? R.originalDelegate : R.callback, j), X;
      };

      function N(R, _, K) {
        if (!(_ = _ || e.event)) return;
        var x = R || _.target || e,
            X = x[te[_.type][K ? ce : ae]];

        if (X) {
          var j = [];

          if (1 === X.length) {
            var p = Z(X[0], x, _);
            p && j.push(p);
          } else {
            var _p = X.slice();

            for (var G = 0; G < _p.length && (!_ || !0 !== _[Ke]); G++) {
              var h = Z(_p[G], x, _);
              h && j.push(h);
            }
          }

          if (1 === j.length) throw j[0];

          var _loop3 = function _loop3(_p2) {
            var G = j[_p2];
            n.nativeScheduleMicroTask(function () {
              throw G;
            });
          };

          for (var _p2 = 0; _p2 < j.length; _p2++) {
            _loop3(_p2);
          }
        }
      }

      var B = function B(R) {
        return N(this, R, !1);
      },
          H = function H(R) {
        return N(this, R, !0);
      };

      function J(R, _) {
        if (!R) return !1;
        var K = !0;
        _ && void 0 !== _.useG && (K = _.useG);
        var x = _ && _.vh;
        var X = !0;
        _ && void 0 !== _.chkDup && (X = _.chkDup);
        var j = !1;
        _ && void 0 !== _.rt && (j = _.rt);
        var p = R;

        for (; p && !p.hasOwnProperty(c);) {
          p = de(p);
        }

        if (!p && R[c] && (p = R), !p || p[P]) return !1;
        var G = _ && _.eventNameToString,
            h = {},
            I = p[P] = p[c],
            w = p[A(a)] = p[a],
            Q = p[A(y)] = p[y],
            oe = p[A(d)] = p[d];
        var z;

        function U(s, f) {
          return !ye && "object" == _typeof(s) && s ? !!s.capture : ye && f ? "boolean" == typeof s ? {
            capture: s,
            passive: !0
          } : s ? "object" == _typeof(s) && !1 !== s.passive ? Object.assign(Object.assign({}, s), {
            passive: !0
          }) : s : {
            passive: !0
          } : s;
        }

        _ && _.prepend && (z = p[A(_.prepend)] = p[_.prepend]);

        var t = K ? function (s) {
          if (!h.isExisting) return I.call(h.target, h.eventName, h.capture ? H : B, h.options);
        } : function (s) {
          return I.call(h.target, h.eventName, s.invoke, h.options);
        },
            r = K ? function (s) {
          if (!s.isRemoved) {
            var f = te[s.eventName];
            var g;
            f && (g = f[s.capture ? ce : ae]);
            var b = g && s.target[g];
            if (b) for (var T = 0; T < b.length; T++) {
              if (b[T] === s) {
                b.splice(T, 1), s.isRemoved = !0, 0 === b.length && (s.allRemoved = !0, s.target[g] = null);
                break;
              }
            }
          }

          if (s.allRemoved) return w.call(s.target, s.eventName, s.capture ? H : B, s.options);
        } : function (s) {
          return w.call(s.target, s.eventName, s.invoke, s.options);
        },
            C = _ && _.diff ? _.diff : function (s, f) {
          var g = _typeof(f);

          return "function" === g && s.callback === f || "object" === g && s.originalDelegate === f;
        },
            $ = Zone[A("UNPATCHED_EVENTS")],
            l = e[A("PASSIVE_EVENTS")],
            u = function u(s, f, g, b) {
          var T = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
          var D = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
          return function () {
            var O = this || e;
            var S = arguments[0];
            _ && _.transferEventName && (S = _.transferEventName(S));
            var V = arguments[1];
            if (!V) return s.apply(this, arguments);
            if (we && "uncaughtException" === S) return s.apply(this, arguments);
            var F = !1;

            if ("function" != typeof V) {
              if (!V.handleEvent) return s.apply(this, arguments);
              F = !0;
            }

            if (x && !x(s, V, O, arguments)) return;
            var fe = ye && !!l && -1 !== l.indexOf(S),
                se = U(arguments[2], fe);
            if ($) for (var _e = 0; _e < $.length; _e++) {
              if (S === $[_e]) return fe ? s.call(O, S, V, se) : s.apply(this, arguments);
            }
            var xe = !!se && ("boolean" == typeof se || se.capture),
                nt = !(!se || "object" != _typeof(se)) && se.once,
                gt = Zone.current;
            var Ge = te[S];
            Ge || (Je(S, G), Ge = te[S]);
            var rt = Ge[xe ? ce : ae];
            var De,
                me = O[rt],
                ot = !1;

            if (me) {
              if (ot = !0, X) for (var _e2 = 0; _e2 < me.length; _e2++) {
                if (C(me[_e2], V)) return;
              }
            } else me = O[rt] = [];

            var st = O.constructor.name,
                it = Ye[st];
            it && (De = it[S]), De || (De = st + f + (G ? G(S) : S)), h.options = se, nt && (h.options.once = !1), h.target = O, h.capture = xe, h.eventName = S, h.isExisting = ot;
            var be = K ? ht : void 0;
            be && (be.taskData = h);
            var he = gt.scheduleEventTask(De, V, be, g, b);
            return h.target = null, be && (be.taskData = null), nt && (se.once = !0), !ye && "boolean" == typeof he.options || (he.options = se), he.target = O, he.capture = xe, he.eventName = S, F && (he.originalDelegate = V), D ? me.unshift(he) : me.push(he), T ? O : void 0;
          };
        };

        return p[c] = u(I, v, t, r, j), z && (p.prependListener = u(z, ".prependListener:", function (s) {
          return z.call(h.target, h.eventName, s.invoke, h.options);
        }, r, j, !0)), p[a] = function () {
          var s = this || e;
          var f = arguments[0];
          _ && _.transferEventName && (f = _.transferEventName(f));
          var g = arguments[2],
              b = !!g && ("boolean" == typeof g || g.capture),
              T = arguments[1];
          if (!T) return w.apply(this, arguments);
          if (x && !x(w, T, s, arguments)) return;
          var D = te[f];
          var O;
          D && (O = D[b ? ce : ae]);
          var S = O && s[O];
          if (S) for (var V = 0; V < S.length; V++) {
            var F = S[V];
            if (C(F, T)) return S.splice(V, 1), F.isRemoved = !0, 0 === S.length && (F.allRemoved = !0, s[O] = null, "string" == typeof f) && (s[ke + "ON_PROPERTY" + f] = null), F.zone.cancelTask(F), j ? s : void 0;
          }
          return w.apply(this, arguments);
        }, p[y] = function () {
          var s = this || e;
          var f = arguments[0];
          _ && _.transferEventName && (f = _.transferEventName(f));
          var g = [],
              b = Qe(s, G ? G(f) : f);

          for (var T = 0; T < b.length; T++) {
            var D = b[T];
            g.push(D.originalDelegate ? D.originalDelegate : D.callback);
          }

          return g;
        }, p[d] = function () {
          var s = this || e;
          var f = arguments[0];

          if (f) {
            _ && _.transferEventName && (f = _.transferEventName(f));
            var g = te[f];

            if (g) {
              var D = s[g[ae]],
                  O = s[g[ce]];

              if (D) {
                var S = D.slice();

                for (var V = 0; V < S.length; V++) {
                  var F = S[V];
                  this[a].call(this, f, F.originalDelegate ? F.originalDelegate : F.callback, F.options);
                }
              }

              if (O) {
                var _S = O.slice();

                for (var _V = 0; _V < _S.length; _V++) {
                  var _F = _S[_V];
                  this[a].call(this, f, _F.originalDelegate ? _F.originalDelegate : _F.callback, _F.options);
                }
              }
            }
          } else {
            var _g = Object.keys(s);

            for (var b = 0; b < _g.length; b++) {
              var _D = $e.exec(_g[b]);

              var _O = _D && _D[1];

              _O && "removeListener" !== _O && this[d].call(this, _O);
            }

            this[d].call(this, "removeListener");
          }

          if (j) return this;
        }, ue(p[c], I), ue(p[a], w), oe && ue(p[d], oe), Q && ue(p[y], Q), !0;
      }

      var q = [];

      for (var R = 0; R < i.length; R++) {
        q[R] = J(i[R], o);
      }

      return q;
    }

    function Qe(e, n) {
      if (!n) {
        var a = [];

        for (var y in e) {
          var d = $e.exec(y);
          var P = d && d[1];

          if (P && (!n || P === n)) {
            var v = e[y];
            if (v) for (var m = 0; m < v.length; m++) {
              a.push(v[m]);
            }
          }
        }

        return a;
      }

      var i = te[n];
      i || (Je(n), i = te[n]);
      var o = e[i[ae]],
          c = e[i[ce]];
      return o ? c ? o.concat(c) : o.slice() : c ? c.slice() : [];
    }

    function _t(e, n) {
      var i = e.Event;
      i && i.prototype && n.patchMethod(i.prototype, "stopImmediatePropagation", function (o) {
        return function (c, a) {
          c[Ke] = !0, o && o.apply(c, a);
        };
      });
    }

    function Et(e, n, i, o, c) {
      var a = Zone.__symbol__(o);

      if (n[a]) return;
      var y = n[a] = n[o];
      n[o] = function (d, P, v) {
        return P && P.prototype && c.forEach(function (m) {
          var L = "".concat(i, ".").concat(o, "::") + m,
              Z = P.prototype;

          try {
            if (Z.hasOwnProperty(m)) {
              var N = e.ObjectGetOwnPropertyDescriptor(Z, m);
              N && N.value ? (N.value = e.wrapWithCurrentZone(N.value, L), e._redefineProperty(P.prototype, m, N)) : Z[m] && (Z[m] = e.wrapWithCurrentZone(Z[m], L));
            } else Z[m] && (Z[m] = e.wrapWithCurrentZone(Z[m], L));
          } catch (_unused6) {}
        }), y.call(n, d, P, v);
      }, e.attachOriginToPatched(n[o], y);
    }

    function et(e, n, i) {
      if (!i || 0 === i.length) return n;
      var o = i.filter(function (a) {
        return a.target === e;
      });
      if (!o || 0 === o.length) return n;
      var c = o[0].ignoreProperties;
      return n.filter(function (a) {
        return -1 === c.indexOf(a);
      });
    }

    function tt(e, n, i, o) {
      e && Xe(e, et(e, n, i), o);
    }

    function He(e) {
      return Object.getOwnPropertyNames(e).filter(function (n) {
        return n.startsWith("on") && n.length > 2;
      }).map(function (n) {
        return n.substring(2);
      });
    }

    Zone.__load_patch("util", function (e, n, i) {
      var o = He(e);
      i.patchOnProperties = Xe, i.patchMethod = le, i.bindArguments = Le, i.patchMacroTask = lt;

      var c = n.__symbol__("BLACK_LISTED_EVENTS"),
          a = n.__symbol__("UNPATCHED_EVENTS");

      e[a] && (e[c] = e[a]), e[c] && (n[c] = n[a] = e[c]), i.patchEventPrototype = _t, i.patchEventTarget = dt, i.isIEOrEdge = ft, i.ObjectDefineProperty = Ee, i.ObjectGetOwnPropertyDescriptor = ie, i.ObjectCreate = ge, i.ArraySlice = Ve, i.patchClass = ve, i.wrapWithCurrentZone = Ie, i.filterProperties = et, i.attachOriginToPatched = ue, i._redefineProperty = Object.defineProperty, i.patchCallbacks = Et, i.getGlobalObjects = function () {
        return {
          globalSources: Ye,
          zoneSymbolEventNames: te,
          eventNames: o,
          isBrowser: je,
          isMix: Ue,
          isNode: we,
          TRUE_STR: ce,
          FALSE_STR: ae,
          ZONE_SYMBOL_PREFIX: ke,
          ADD_EVENT_LISTENER_STR: Oe,
          REMOVE_EVENT_LISTENER_STR: Se
        };
      };
    });

    var Ce = A("zoneTask");

    function pe(e, n, i, o) {
      var c = null,
          a = null;
      i += o;
      var y = {};

      function d(v) {
        var m = v.data;
        return m.args[0] = function () {
          return v.invoke.apply(this, arguments);
        }, m.handleId = c.apply(e, m.args), v;
      }

      function P(v) {
        return a.call(e, v.data.handleId);
      }

      c = le(e, n += o, function (v) {
        return function (m, L) {
          if ("function" == typeof L[0]) {
            var Z = {
              isPeriodic: "Interval" === o,
              delay: "Timeout" === o || "Interval" === o ? L[1] || 0 : void 0,
              args: L
            },
                N = L[0];

            L[0] = function () {
              try {
                return N.apply(this, arguments);
              } finally {
                Z.isPeriodic || ("number" == typeof Z.handleId ? delete y[Z.handleId] : Z.handleId && (Z.handleId[Ce] = null));
              }
            };

            var B = Me(n, L[0], Z, d, P);
            if (!B) return B;
            var H = B.data.handleId;
            return "number" == typeof H ? y[H] = B : H && (H[Ce] = B), H && H.ref && H.unref && "function" == typeof H.ref && "function" == typeof H.unref && (B.ref = H.ref.bind(H), B.unref = H.unref.bind(H)), "number" == typeof H || H ? H : B;
          }

          return v.apply(e, L);
        };
      }), a = le(e, i, function (v) {
        return function (m, L) {
          var Z = L[0];
          var N;
          "number" == typeof Z ? N = y[Z] : (N = Z && Z[Ce], N || (N = Z)), N && "string" == typeof N.type ? "notScheduled" !== N.state && (N.cancelFn && N.data.isPeriodic || 0 === N.runCount) && ("number" == typeof Z ? delete y[Z] : Z && (Z[Ce] = null), N.zone.cancelTask(N)) : v.apply(e, L);
        };
      });
    }

    Zone.__load_patch("legacy", function (e) {
      var n = e[Zone.__symbol__("legacyPatch")];

      n && n();
    }), Zone.__load_patch("queueMicrotask", function (e, n, i) {
      i.patchMethod(e, "queueMicrotask", function (o) {
        return function (c, a) {
          n.current.scheduleMicroTask("queueMicrotask", a[0]);
        };
      });
    }), Zone.__load_patch("timers", function (e) {
      var n = "set",
          i = "clear";
      pe(e, n, i, "Timeout"), pe(e, n, i, "Interval"), pe(e, n, i, "Immediate");
    }), Zone.__load_patch("requestAnimationFrame", function (e) {
      pe(e, "request", "cancel", "AnimationFrame"), pe(e, "mozRequest", "mozCancel", "AnimationFrame"), pe(e, "webkitRequest", "webkitCancel", "AnimationFrame");
    }), Zone.__load_patch("blocking", function (e, n) {
      var i = ["alert", "prompt", "confirm"];

      for (var o = 0; o < i.length; o++) {
        le(e, i[o], function (a, y, d) {
          return function (P, v) {
            return n.current.run(a, e, v, d);
          };
        });
      }
    }), Zone.__load_patch("EventTarget", function (e, n, i) {
      (function mt(e, n) {
        n.patchEventPrototype(e, n);
      })(e, i), function pt(e, n) {
        if (Zone[n.symbol("patchEventTarget")]) return;

        var _n$getGlobalObjects = n.getGlobalObjects(),
            i = _n$getGlobalObjects.eventNames,
            o = _n$getGlobalObjects.zoneSymbolEventNames,
            c = _n$getGlobalObjects.TRUE_STR,
            a = _n$getGlobalObjects.FALSE_STR,
            y = _n$getGlobalObjects.ZONE_SYMBOL_PREFIX;

        for (var P = 0; P < i.length; P++) {
          var v = i[P],
              Z = y + (v + a),
              N = y + (v + c);
          o[v] = {}, o[v][a] = Z, o[v][c] = N;
        }

        var d = e.EventTarget;
        d && d.prototype && n.patchEventTarget(e, n, [d && d.prototype]);
      }(e, i);
      var o = e.XMLHttpRequestEventTarget;
      o && o.prototype && i.patchEventTarget(e, i, [o.prototype]);
    }), Zone.__load_patch("MutationObserver", function (e, n, i) {
      ve("MutationObserver"), ve("WebKitMutationObserver");
    }), Zone.__load_patch("IntersectionObserver", function (e, n, i) {
      ve("IntersectionObserver");
    }), Zone.__load_patch("FileReader", function (e, n, i) {
      ve("FileReader");
    }), Zone.__load_patch("on_property", function (e, n, i) {
      !function Tt(e, n) {
        if (we && !Ue || Zone[e.symbol("patchEvents")]) return;
        var i = n.__Zone_ignore_on_properties;
        var o = [];

        if (je) {
          var c = window;
          o = o.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
          var a = function ut() {
            try {
              var _e3 = Te.navigator.userAgent;
              if (-1 !== _e3.indexOf("MSIE ") || -1 !== _e3.indexOf("Trident/")) return !0;
            } catch (_unused7) {}

            return !1;
          }() ? [{
            target: c,
            ignoreProperties: ["error"]
          }] : [];
          tt(c, He(c), i && i.concat(a), de(c));
        }

        o = o.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);

        for (var _c2 = 0; _c2 < o.length; _c2++) {
          var _a = n[o[_c2]];
          _a && _a.prototype && tt(_a.prototype, He(_a.prototype), i);
        }
      }(i, e);
    }), Zone.__load_patch("customElements", function (e, n, i) {
      !function yt(e, n) {
        var _n$getGlobalObjects2 = n.getGlobalObjects(),
            i = _n$getGlobalObjects2.isBrowser,
            o = _n$getGlobalObjects2.isMix;

        (i || o) && e.customElements && "customElements" in e && n.patchCallbacks(n, e.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback"]);
      }(e, i);
    }), Zone.__load_patch("XHR", function (e, n) {
      !function P(v) {
        var m = v.XMLHttpRequest;
        if (!m) return;
        var L = m.prototype;
        var N = L[Ze],
            B = L[Ne];

        if (!N) {
          var h = v.XMLHttpRequestEventTarget;

          if (h) {
            var I = h.prototype;
            N = I[Ze], B = I[Ne];
          }
        }

        var H = "readystatechange",
            J = "scheduled";

        function q(h) {
          var I = h.data,
              w = I.target;
          w[a] = !1, w[d] = !1;
          var Q = w[c];
          N || (N = w[Ze], B = w[Ne]), Q && B.call(w, H, Q);

          var oe = w[c] = function () {
            if (w.readyState === w.DONE) if (!I.aborted && w[a] && h.state === J) {
              var U = w[n.__symbol__("loadfalse")];

              if (0 !== w.status && U && U.length > 0) {
                var re = h.invoke;
                h.invoke = function () {
                  var ee = w[n.__symbol__("loadfalse")];

                  for (var W = 0; W < ee.length; W++) {
                    ee[W] === h && ee.splice(W, 1);
                  }

                  !I.aborted && h.state === J && re.call(h);
                }, U.push(h);
              } else h.invoke();
            } else !I.aborted && !1 === w[a] && (w[d] = !0);
          };

          return N.call(w, H, oe), w[i] || (w[i] = h), p.apply(w, I.args), w[a] = !0, h;
        }

        function R() {}

        function _(h) {
          var I = h.data;
          return I.aborted = !0, G.apply(I.target, I.args);
        }

        var K = le(L, "open", function () {
          return function (h, I) {
            return h[o] = 0 == I[2], h[y] = I[1], K.apply(h, I);
          };
        }),
            X = A("fetchTaskAborting"),
            j = A("fetchTaskScheduling"),
            p = le(L, "send", function () {
          return function (h, I) {
            if (!0 === n.current[j] || h[o]) return p.apply(h, I);
            {
              var w = {
                target: h,
                url: h[y],
                isPeriodic: !1,
                args: I,
                aborted: !1
              },
                  Q = Me("XMLHttpRequest.send", R, w, q, _);
              h && !0 === h[d] && !w.aborted && Q.state === J && Q.invoke();
            }
          };
        }),
            G = le(L, "abort", function () {
          return function (h, I) {
            var w = function Z(h) {
              return h[i];
            }(h);

            if (w && "string" == typeof w.type) {
              if (null == w.cancelFn || w.data && w.data.aborted) return;
              w.zone.cancelTask(w);
            } else if (!0 === n.current[X]) return G.apply(h, I);
          };
        });
      }(e);
      var i = A("xhrTask"),
          o = A("xhrSync"),
          c = A("xhrListener"),
          a = A("xhrScheduled"),
          y = A("xhrURL"),
          d = A("xhrErrorBeforeScheduled");
    }), Zone.__load_patch("geolocation", function (e) {
      e.navigator && e.navigator.geolocation && function at(e, n) {
        var i = e.constructor.name;

        var _loop4 = function _loop4(o) {
          var c = n[o],
              a = e[c];

          if (a) {
            if (!Fe(ie(e, c))) return "continue";

            e[c] = function (d) {
              var P = function P() {
                return d.apply(this, Le(arguments, i + "." + c));
              };

              return ue(P, d), P;
            }(a);
          }
        };

        for (var o = 0; o < n.length; o++) {
          var _ret = _loop4(o);

          if (_ret === "continue") continue;
        }
      }(e.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
    }), Zone.__load_patch("PromiseRejectionEvent", function (e, n) {
      function i(o) {
        return function (c) {
          Qe(e, o).forEach(function (y) {
            var d = e.PromiseRejectionEvent;

            if (d) {
              var P = new d(o, {
                promise: c.promise,
                reason: c.rejection
              });
              y.invoke(P);
            }
          });
        };
      }

      e.PromiseRejectionEvent && (n[A("unhandledPromiseRejectionHandler")] = i("unhandledrejection"), n[A("rejectionHandledHandler")] = i("rejectionhandled"));
    });
  }
}, function (ie) {
  ie(ie.s = 435);
}]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/ngapp/dist/ngapp/runtime.js":
/*!***********************************************!*\
  !*** ./resources/ngapp/dist/ngapp/runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(function () {
  "use strict";

  var e,
      p = {},
      _ = {};

  function n(e) {
    var a = _[e];
    if (void 0 !== a) return a.exports;
    var r = _[e] = {
      exports: {}
    };
    return p[e](r, r.exports, n), r.exports;
  }

  n.m = p, e = [], n.O = function (a, r, u, l) {
    if (!r) {
      var o = 1 / 0;

      for (f = 0; f < e.length; f++) {
        for (var _e$f = _slicedToArray(e[f], 3), r = _e$f[0], u = _e$f[1], l = _e$f[2], s = !0, t = 0; t < r.length; t++) {
          (!1 & l || o >= l) && Object.keys(n.O).every(function (h) {
            return n.O[h](r[t]);
          }) ? r.splice(t--, 1) : (s = !1, l < o && (o = l));
        }

        if (s) {
          e.splice(f--, 1);
          var c = u();
          void 0 !== c && (a = c);
        }
      }

      return a;
    }

    l = l || 0;

    for (var f = e.length; f > 0 && e[f - 1][2] > l; f--) {
      e[f] = e[f - 1];
    }

    e[f] = [r, u, l];
  }, n.n = function (e) {
    var a = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(a, {
      a: a
    }), a;
  }, n.d = function (e, a) {
    for (var r in a) {
      n.o(a, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: a[r]
      });
    }
  }, n.o = function (e, a) {
    return Object.prototype.hasOwnProperty.call(e, a);
  }, function () {
    var e = {
      666: 0
    };

    n.O.j = function (u) {
      return 0 === e[u];
    };

    var a = function a(u, l) {
      var t,
          c,
          _l = _slicedToArray(l, 3),
          f = _l[0],
          o = _l[1],
          s = _l[2],
          v = 0;

      if (f.some(function (d) {
        return 0 !== e[d];
      })) {
        for (t in o) {
          n.o(o, t) && (n.m[t] = o[t]);
        }

        if (s) var b = s(n);
      }

      for (u && u(l); v < f.length; v++) {
        n.o(e, c = f[v]) && e[c] && e[c][0](), e[c] = 0;
      }

      return n.O(b);
    },
        r = self.webpackChunkngapp = self.webpackChunkngapp || [];

    r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r));
  }();
})();

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************************************!*\
  !*** multi ./resources/ngapp/dist/ngapp/runtime.js ./resources/ngapp/dist/ngapp/polyfills.js ./resources/ngapp/dist/ngapp/main.js ./resources/sass/app.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/shoumemoto/local/laravel_practice2/resources/ngapp/dist/ngapp/runtime.js */"./resources/ngapp/dist/ngapp/runtime.js");
__webpack_require__(/*! /Users/shoumemoto/local/laravel_practice2/resources/ngapp/dist/ngapp/polyfills.js */"./resources/ngapp/dist/ngapp/polyfills.js");
__webpack_require__(/*! /Users/shoumemoto/local/laravel_practice2/resources/ngapp/dist/ngapp/main.js */"./resources/ngapp/dist/ngapp/main.js");
module.exports = __webpack_require__(/*! /Users/shoumemoto/local/laravel_practice2/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });