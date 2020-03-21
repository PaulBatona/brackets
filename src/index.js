module.exports = function check(str, bracketsConfig) {
  let resultConfig = bracketsConfig.map(function(o){
    return o.join('');
  })
  for(let i=0; i<resultConfig.length; i++){
    if(str.includes(resultConfig[i])){
      str=str.replace(resultConfig[i], '')
      i=-1;
    }
  }
  // console.log(resultConfig);
  if(str==='') {
    return true;
  }
  else{
    return false;
  }
  }
