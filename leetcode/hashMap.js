var MyHashSet = /** @class */ (function () {
    function MyHashSet() {
        this.data = {};
    }
    MyHashSet.prototype.add = function (key) {
        this.data[key] = true;
    };
    MyHashSet.prototype.remove = function (key) {
        //delete this.data[key];
    };
    MyHashSet.prototype.contains = function (key) {
        if (this.data[key] !== undefined) {
            return true;
        }
        return false;
    };
    return MyHashSet;
}());
var obj = new MyHashSet();
obj.add(1);
obj.remove(1);
// var param_3 = obj.contains(key)
