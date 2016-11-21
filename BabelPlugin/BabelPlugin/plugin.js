"use strict";

module.exports = function (_ref) {
    var t = _ref.types;

    return {
        visitor: {
            VariableDeclarator: function VariableDeclarator(path, state) {
                if (path.node.init.value === true) {
                    path.node.init.value = false;
                } else if (path.node.init.value === false) {
                    path.node.init.value = true;
                }
            }
        }
    };
};
