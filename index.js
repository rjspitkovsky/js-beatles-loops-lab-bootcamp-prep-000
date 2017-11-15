var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["guitar", "vocals", "bass", "drums"]


function theBeatlesPlay(musicians, instruments) {
  var array = [] 
  for (let i = 0; i < musicians.length; i++) {
    array.push(`$[musicians[i]] plays $[instruments[i]]`)
  };
  return array 
}