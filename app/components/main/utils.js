export function minimumVersion(arr, key, value){
    return arr.reduce((newArr, item) =>{
          if(item[key] === value && newArr.length !== 16){
               newArr.push(item)
          }
            return newArr;
    },[])
}
 