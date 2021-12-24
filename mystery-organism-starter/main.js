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
  console.log(dna);
  return {
    specimenNum,
    dna,
    mutate() {
      let idx = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();

      if (newBase !== this.dna[idx]) {
        this.dna.splice(idx, 1, newBase);
      }
      return this.dna;
    },
    compareDna(pAequor) {
      let percent = 0;
      let survivalPercent = 0;
      for (let i = pAequor.length - 1; i >= 0; i--) {
        for (let a = this.dna.length - 1; a >= 0; a--) {
          if (pAequor[i] === this.dna[a] && i === a) {
            percent += 1;
            if (this.dna[a] === "G" || this.dna[a] === "C")
              survivalPercent += 1;
          }
        }
      }
      percent = (percent / pAequor.length) * 100;
      percent = Math.floor(percent);
      console.log(
        `specimen #${this.specimenNum} and specimen #2 have ${percent}% DNA in common`
      );
    },
    willLikelySurvive() {
      return this.survivalPercent >= 6;
    },
  };
};

const strangeAnimal = pAequorFactory(
  Math.floor(Math.random() * 9),
  mockUpStrand()
);

//console.log(strangeAnimal)
