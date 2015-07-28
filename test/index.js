var less = require("less"),
    lessTest = require("less/test/less-test"),
    lessTester = lessTest(),
    plugin = require("../lib"),
    stylize = less.lesscHelper.stylize;

console.log("\n" + stylize("LESS - absolute urls", 'underline') + "\n");

plugin.setOptions("replace=" + process.cwd() + ":/some/path replace=/some/path:/custom/path");

lessTester.runTestSet({plugins: [plugin]}, "absolute-urls/");

if (lessTester.finish) {
    lessTester.finish();
}