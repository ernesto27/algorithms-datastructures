class MyHashSet {
    data;
    constructor() { 
        this.data = {};
    }

    add(key: number): void {
        this.data[key] = true;
    }

    remove(key: number): void {
        //delete this.data[key];
    }

    contains(key: number): boolean {
        
        if (this.data[key] !== undefined) {
            return true;
        }
        
        return false;
    }
}


  var obj = new MyHashSet()
  obj.add(1)
  obj.remove(1)
 // var param_3 = obj.contains(key)
 