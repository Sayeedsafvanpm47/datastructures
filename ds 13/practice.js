function missing(arr)
{
           arr.length = 100
           let miss = []
           for(let i=0; i<arr.length; i++)
           {
                    if(arr[i] == i)
                    {
                              break
                    }else{
                    miss.push(i)
                    }
           }
           return console.log(miss)

}

arr = [1,2,4]
missing(arr)