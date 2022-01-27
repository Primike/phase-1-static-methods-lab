class Formatter {
  //add static methods here
  static capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
  }
  static sanitize(word) {
    return word.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(word) {
    //the, a, an, but, of, and, for, at, by, and fro
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'and', 'from']
    let array = word.split(' ')
    for(let i = 0; i < array.length; i++) {
      if(i === 0) {
        let word = array[i]
        array[i] = this.capitalize(word)
      }
      if(words.includes(array[i])) {
        continue
      }
      else {
        let word = array[i]
        array[i] = this.capitalize(word)
      }
    }
    return array.join(' ')
  }
}