Object.defineProperty(exports, "__esModule", { value: true });
exports.nativeCrash = exports.init = exports.SDK_VERSION = exports.SDK_NAME = exports.withScope = exports.startTransaction = exports.setUser = exports.setTags = exports.setTag = exports.setExtras = exports.setExtra = exports.setContext = exports.Scope = exports.Hub = exports.getCurrentHub = exports.getHubFromCarrier = exports.configureScope = exports.captureMessage = exports.captureEvent = exports.captureException = exports.addBreadcrumb = exports.addGlobalEventProcessor = void 0;
var tslib_1 = require("tslib");
tslib_1.__exportStar(require("./definitions"), exports);
var core_1 = require("@sentry/core");
Object.defineProperty(exports, "addGlobalEventProcessor", { enumerable: true, get: function () { return core_1.addGlobalEventProcessor; } });
Object.defineProperty(exports, "addBreadcrumb", { enumerable: true, get: function () { return core_1.addBreadcrumb; } });
Object.defineProperty(exports, "captureException", { enumerable: true, get: function () { return core_1.captureException; } });
Object.defineProperty(exports, "captureEvent", { enumerable: true, get: function () { return core_1.captureEvent; } });
Object.defineProperty(exports, "captureMessage", { enumerable: true, get: function () { return core_1.captureMessage; } });
Object.defineProperty(exports, "configureScope", { enumerable: true, get: function () { return core_1.configureScope; } });
Object.defineProperty(exports, "getHubFromCarrier", { enumerable: true, get: function () { return core_1.getHubFromCarrier; } });
Object.defineProperty(exports, "getCurrentHub", { enumerable: true, get: function () { return core_1.getCurrentHub; } });
Object.defineProperty(exports, "Hub", { enumerable: true, get: function () { return core_1.Hub; } });
Object.defineProperty(exports, "Scope", { enumerable: true, get: function () { return core_1.Scope; } });
Object.defineProperty(exports, "setContext", { enumerable: true, get: function () { return core_1.setContext; } });
Object.defineProperty(exports, "setExtra", { enumerable: true, get: function () { return core_1.setExtra; } });
Object.defineProperty(exports, "setExtras", { enumerable: true, get: function () { return core_1.setExtras; } });
Object.defineProperty(exports, "setTag", { enumerable: true, get: function () { return core_1.setTag; } });
Object.defineProperty(exports, "setTags", { enumerable: true, get: function () { return core_1.setTags; } });
Object.defineProperty(exports, "setUser", { enumerable: true, get: function () { return core_1.setUser; } });
Object.defineProperty(exports, "startTransaction", { enumerable: true, get: function () { return core_1.startTransaction; } });
Object.defineProperty(exports, "withScope", { enumerable: true, get: function () { return core_1.withScope; } });
var version_1 = require("./version");
Object.defineProperty(exports, "SDK_NAME", { enumerable: true, get: function () { return version_1.SDK_NAME; } });
Object.defineProperty(exports, "SDK_VERSION", { enumerable: true, get: function () { return version_1.SDK_VERSION; } });
var sdk_1 = require("./sdk");
Object.defineProperty(exports, "init", { enumerable: true, get: function () { return sdk_1.init; } });
Object.defineProperty(exports, "nativeCrash", { enumerable: true, get: function () { return sdk_1.nativeCrash; } });
//# sourceMappingURL=index.js.map