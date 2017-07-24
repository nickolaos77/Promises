addEventListener("message", function(evt){
  
  var n   = evt.data,
      sum = 0,
      i   = 0;
  while (i<n){
    sum += i;
    i++
  }
  postMessage(sum);
})
