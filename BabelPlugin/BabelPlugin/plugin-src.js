module.exports = function ({ types: t }) {
    return {
        visitor: {
            VariableDeclarator(path, state) {
                if (path.node.init.value === true) {
                    path.node.init.value = false;
                } else if (path.node.init.value === false) {
                    path.node.init.value = true;
                }
            }
        }
    };
};