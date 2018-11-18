
function range(multiple_of, limit, start) {
  var increasing_number =  (start === undefined)  ? 0 : start;
  var numbers_range = [];
  for(;;) {
    
    increasing_number = increasing_number + multiple_of;
    if (increasing_number > limit) return numbers_range;
    numbers_range.push(increasing_number);
     
  }
  
}
