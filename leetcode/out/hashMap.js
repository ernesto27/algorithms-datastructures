class MyHashSet {
    constructor() {
        this.data = {};
    }
    add(key) {
        this.data[key] = true;
    }
    remove(key) {
        //delete this.data[key];
    }
    contains(key) {
        if (this.data[key] !== undefined) {
            return true;
        }
        return false;
    }
}
var obj = new MyHashSet();
obj.add(1);
obj.remove(1);
// var param_3 = obj.contains(key)
//# sourceMappingURL=hashMap.js.map