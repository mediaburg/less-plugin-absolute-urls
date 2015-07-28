var getProcessor = require("./processor"),
    parseOptions = require("./parse-options");

module.exports = {
    install: function(less, pluginManager) {
      var Processor = getProcessor(less);
      pluginManager.addVisitor(new Processor(this.options));
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    }
};
