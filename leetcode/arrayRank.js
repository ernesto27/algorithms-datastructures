function arrayRankTransform(arr) {

    //make a set of arr to remove duplicate
    var set = new Set(arr)
	//convert the set to new array
    let array = Array.from(set);
    //sort the array in ascending order
	var sorted = [...array].sort((a,b) => a-b)
    var rank = []
    for(var i = 0; i < arr.length; i++){
		//assign the rank or current arr element according to index position of the sorted arr
        rank[i] = sorted.indexOf(arr[i]) + 1
    }
    console.log(rank)
    return rank


};


arrayRankTransform([40,10,20,30]);