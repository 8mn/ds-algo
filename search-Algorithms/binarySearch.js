// only works on sorted array


let mid

const binarySearch = (arr, t ) => {
    mid = arr.length / 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2)
    // console.log(arr)
    // console.log("mid",mid)
    if(arr[mid] === t){
        return mid
    }
    if(arr[mid] > t){
        return binarySearch(arr.slice(0,mid),t)
    }
    if(arr[mid] < t){
        return binarySearch(arr.slice(mid),t)
    }

    return -1

    
}



console.log(binarySearch([-5,2,6,10,4], -512))