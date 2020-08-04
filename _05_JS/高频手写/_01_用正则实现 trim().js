function trim() {
    return this.replace(/^\s+|\s+$/g, '');
}
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '')
};
