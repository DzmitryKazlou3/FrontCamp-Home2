module.exports = function ({ types: t }) {
    return {
        visitor: {
            StringLiteral(path, state) {
                path.node.value = path.node.value.toUpperCase();
            }
        }
    };
};