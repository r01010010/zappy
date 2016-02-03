var zappy = {
 tree: function(str, last_value){
  
  var objs = str.split('.');
  var r = {};
  var last = r;
  
  for(i=0; i < objs.length; i++) {
    if(i !== objs.length - 1){
      last = last[objs[i]] = {};
    }else{
      last[objs[i]] = last_value;
    }
  }
  
  return r;
 
}
}
module.exports = zappy;
