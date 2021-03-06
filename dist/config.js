define('melon/config', [
    'require',
    'exports',
    'module',
    './babelHelpers'
], function (require, exports, module) {
    var babelHelpers = require('./babelHelpers');
    module.exports = {
        COMPONENT_SIZES: [
            'xxs',
            'xs',
            's',
            'm',
            'l',
            'xl',
            'xxl',
            'xxxl'
        ],
        COMPONENT_CLASS_PREFIX: 'ui',
        COMPONENT_VARIANT_PREFIX: 'variant',
        COMPONENT_STATE_PREFIX: 'state'
    };
});