var getProcessor = require("./processor");

module.exports = {
    install: function(less, pluginManager) {
      var Processor = getProcessor(less);
      pluginManager.addVisitor(new Processor());
    }
};
