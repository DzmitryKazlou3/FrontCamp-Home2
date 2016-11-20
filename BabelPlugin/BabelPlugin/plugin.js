"use strict";

module.exports = function (_ref) {
    var t = _ref.types;

    return {
        visitor: {
            StringLiteral: function StringLiteral(path, state) {
                path.node.value = path.node.value.toUpperCase();
            }
        }
    };
};
