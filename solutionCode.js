function nucleotideCountsOf(string) {
  return nucleotides.reduce( (counts,n) => {
    counts[n] = Array.from(string).filter( char => char === n).length
    return counts;
  }, {}) 
}