function validAnagram(s1, s2){
  // add whatever parameters you deem necessary - good luck
  if( s1.length != s2.length){
      return false;
  } 
  
  let frequencys1 = {}
  let frequencys2 = {}
  
  for(let chr of s1){
      frequencys1[chr] = (frequencys1[chr] || 0) +1
  }
  
    for(let chr of s2){
      frequencys2[chr] = (frequencys2[chr] || 0) +1
  }
  for(let key in frequencys1){
      if (!(key in frequencys1)){
          return false
      }
      if(frequencys2[key] !== frequencys1[key]){
          return false
      }
  }
  return true
  
}
