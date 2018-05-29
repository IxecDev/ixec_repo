window.Core = new ((function (Core) {

    /* * CORE UTILITIES * */
    Core.prototype.extend = function (object) {
        for (var item in object) {
            this[item] = object[item];
        }
    };

    return Core;

})(function () {}))();