// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  console.log(dna)
  return {
    specimenNum,
    dna,
    mutate() {
      let idx = Math.floor(Math.random() * this.dna.length)
      let newBase = returnRandBase()
      
      if (newBase !== this.dna[idx]) {
        this.dna.splice(idx, 1, newBase)
      } 
      return this.dna
    },
    compareDna(pAequor) {

    }
  };
};

const magma = pAequorFactory(5, mockUpStrand());

console.log(magma.mutate());
