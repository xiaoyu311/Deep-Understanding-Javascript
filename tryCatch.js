var getErr = function (id) {
  if (!id) {
    throw new Error(id+ ' must be negative');
  }
  return {id: id}
}

var getPersons = function (ids) {
  var result = [];
  ids.forEach(function(id) {
    try {
      var person = getErr(id);
      result.push(person);
    } catch (err) {
      console.log(err)
    }
  });
}

getPersons([1,0])