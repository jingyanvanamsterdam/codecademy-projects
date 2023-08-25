class School {
    constructor(name, level, number){
      this._name = name;
      this._level = level;
      this._numberOfStudents = number;
    }
  
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(number){
      if (typeof number === 'number'){
        return this._numberOfStudents=number;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }
  
    quickFacts(){
      console.log(`${this._name} educated ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
  
    //staticmethod
    static pickSubstituteTeacher(substituteTeachers){
      let num = Math.floor(Math.random()*substituteTeachers.length);
      console.log(substituteTeachers[num]);
    }
  }
  
  const testone = new School('testSchool', 'primary', 100);
  
  let subTeachers = ['Alice', 'Bob', 'Coco', 'David']; 
  
  School.pickSubstituteTeacher(subTeachers)
  
  class PrimarySchool extends School{
    constructor(name, number, pickupPolicy){
      super(name, 'primary', number);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
      return this._pickupPolicy
    }
  }
  
  s = new School('x', 'primary', 1)
  console.log(s.numberOfStudents)
  s.numberOfStudents = 2
  console.log(s.numberOfStudents)
  
  
  class Middle extends School {
    constructor(name, level, number){
      super(name, level, number)
    }
  }
  
  class HighSchool extends School {
    constructor(name, number, sportsTeams){
      super(name, 'high', number);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  lorraineHansbury.quickFacts()
  
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  
  console.log(alSmith.sportsTeams)
  
  class SchoolCatalog {
    constructor(level){
      this._level = level;
      this._schools = [];
    }
  
    get level(){
      return this._level;
    }
    get schools(){
      return this._schools;
    }
    addSchool(school){
      console.log("catalog level", this.level)
      console.log("school level", school.level)
      if(school.level === this.level){
        this._schools.push(school)
      } else {
        console.log("The school you are trying to add does not match the level of the catalog")
      }
    }
  }
  
  primaryCatalog = new SchoolCatalog('primary')
  console.log("empty catalog", primaryCatalog.schools)
  primaryCatalog.addSchool(lorraineHansbury)
  console.log("catalog with one school",primaryCatalog.schools)
  primaryCatalog.addSchool(alSmith)
  
  