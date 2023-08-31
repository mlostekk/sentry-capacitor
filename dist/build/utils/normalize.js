Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToNormalizedObject = void 0;
var utils_1 = require("@sentry/utils");
var KEY = 'value';
/**
 * Converts any input into a valid record with string keys.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertToNormalizedObject(data) {
    var _a;
    var normalized = utils_1.normalize(data);
    if (normalized === null || typeof normalized !== 'object') {
        return _a = {},
            _a[KEY] = normalized,
            _a;
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return normalized;
    }
}
exports.convertToNormalizedObject = convertToNormalizedObject;
//# sourceMappingURL=normalize.js.map