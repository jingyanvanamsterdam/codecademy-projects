// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      mutate (){
        let i= Math.floor(Math.random()*15);
        switch(this.dna[i]){
          case 'A': 
            const randBaseA = ['C', 'T', 'G'];
            this.dna[i] = randBaseA[Math.floor(Math.random()*3)];
            return this.dna;
            console.log(`test ${this.dna[i]}`);
            break;
          case 'C': 
            const randBaseC = ['A', 'T', 'G'];
            this.dna[i]=randBaseC[Math.floor(Math.random()*3)];
            return this.dna;
            console.log(`test ${this.dna[i]}`);
            break;
          case 'T': 
            const randBaseT = ['C', 'A', 'G'];
            this.dna[i]=randBaseT[Math.floor(Math.random()*3)];
            return this.dna;
            console.log(`test ${this.dna[i]}`);
            break;
          case 'G': 
            const randBaseG = ['C', 'T', 'A'];
            this.dna[i]=randBaseG[Math.floor(Math.random()*3)];
            return this.dna;
            console.log(`test ${this.dna[i]}`);
            break;
        }
      },
        /*
        let newBase = returnRandBase();
        while(this.dna[i]===newBase){
          newBase = returnRandBase()
        }
        this.dna[i]=newBase;
        return this.dna*/
  
        /*
        this.dna[i]= 4
        console.log(`test function ${this.dna[i]}`)*/
        //console.log(i)
      /*
      compareDNA(pAequorObj){
        let j = 0;
        for(let i=0; i<this.dna.length; i++){
          if(this.dna[i]===pAequorObj.dna[i]){
           j++;
          }
        }
        let percentCom = (j/15)*100;
        const persentCommon = percentCom.toFixed(2);
        //console.log(`test ${j}`)
        console.log(`specimen #${this.specimenNum} and specimen #${pAequorObj.specimenNum} have ${persentCommon}% in common.`)
      },
      willLikelySurvive(){
        const containCG = this.dna.filter(base => base==='C'||base==='G');
        const compValue = (containCG.length/this.dna.length)*100;
        const containValue = compValue.toFixed(2);
        return containValue >= 60
      },
      complementStrand(){
        let compleStran = [];
        this.dna.forEach(ele=>{
          switch(ele){
            case 'A':
              compleStran.push('T');
              break;
            case 'T':
              compleStran.push('A');
              break;
            case 'C':
              compleStran.push('G');
              break;
            case 'G':
              compleStran.push('C');
              break;
          };
        })
        console.log(compleStran)
      }
      */
    }
  }
  
  const test1 = pAequorFactory(1, mockUpStrand())
  const test2 = pAequorFactory(2, mockUpStrand())
  
  console.log("test1:", test1.dna)
  test1.mutate()
  console.log("test1 after", test1.dna)
  
  
  //console.log(test2)
  
  
  //test1.compareDNA(test2)
  /*
  console.log(test1.willLikelySurvive())
  
  let dataBase = [];  
  for(let idNum =1; dataBase.length<30; idNum++){
    dataBase.push(pAequorFactory(idNum, mockUpStrand()));
  }
  
  //console.log(dataBase)
  function mostRelated (dataBase) {
  
  }
  
  const compStrand1 = dataBase[1].complementStrand()
  
  function findRelated (){
    for (let q=1; q<dataBase.length; q++){
      dataBase[q].compareDNA(compStrand1)
    }
  }
  
  findRelated()
  
  
  */
  
  
  