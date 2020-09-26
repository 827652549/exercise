function getMaxFilmCost( film = [["A", "B", "C"], ["B", "E"]] ) {

  let obj = {
    A:10,
    B:25,
    C:5,
    D:15,
    E:40,
    F:30
  }
  let max = Number.MIN_VALUE
  film.forEach(e=>{
    let total = 0;
    e.forEach(e=>{
      total+=obj[e]
    })
    max = max > total ? max : total
  })
  return max
}

getMaxFilmCost()
