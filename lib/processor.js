module.exports = function(less) {

    function Processor(options) {
        this.options = options || {replace: []};
        this._visitor = new less.visitors.Visitor(this);
    }

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

            var path = URLNode.value.value;

            // add current directory if path is relative
            var absPattern = new RegExp("^([a-zA-Z]+\:\/\/|\/|data\:).+");
            if (!absPattern.test(URLNode.value.value)) {
                path = URLNode.value.currentFileInfo.currentDirectory + path;
            }

            // iterate over replace options
            this.options.replace.forEach(function(repl) {
                var pattern = new RegExp(repl.search, "g");
                path = path.replace(pattern, repl.replace);
            });

            URLNode.value.value = path;
            return URLNode;
        }
    };
    return Processor;
};
