module.exports = function(less) {

    function Processor() {
        this._visitor = new less.visitors.Visitor(this);
    };

    Processor.prototype = {
        isReplacing: true,
        isPreEvalVisitor: true,
        run: function (root) {
            return this._visitor.visit(root);
        },
        visitRule: function (ruleNode, visitArgs) {
            this._inRule = true;
            return ruleNode;
        },
        visitRuleOut: function (ruleNode, visitArgs) {
            this._inRule = false;
        },
        visitUrl: function (URLNode, visitArgs) {
            if (!this._inRule) {
                return URLNode;
            }
            var absPattern = new RegExp("^([a-zA-Z]+\:\/\/|\/).+");
            if (!absPattern.test(URLNode.value.value)) {
                URLNode.value.value = URLNode.value.currentFileInfo.currentDirectory + URLNode.value.value
            }
            return URLNode;
        }
    };
    return Processor;
};
