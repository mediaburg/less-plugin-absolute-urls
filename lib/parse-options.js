module.exports = function(options) {
    if (typeof options === 'string') {
        var cleanOptionArgs = options.split(" ");
        options = {replace: []};
        for(var i = 0; i < cleanOptionArgs.length; i++) {
            var argSplit = cleanOptionArgs[i].split("="),
                argName = argSplit[0].replace(/^-+/,"");
            switch(argName) {
                case "replace":
                    if (typeof argSplit[1] === 'string') {
                        var r = argSplit[1].split(':');
                        if (r.length === 2) {
                            options.replace.push({search: r[0], replace: r[1]});
                        } else {
                            throw new Error("wrong format for replace option");
                        }
                    } else {
                        throw new Error("replace option must be a string");
                    }
                    break;
                default:
                    throw new Error("unrecognised option '" + argSplit[0] + "'");
            }
        }
    }
    return options;
};