const chirp = (n) => {
  // return the last chirp in the base case. if the return is blank, the function will just return undefined
  if (n === 1) {
    return 'chirp';
  }
  return 'chirp ' + chirp(--n);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});