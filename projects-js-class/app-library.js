class Media {
    constructor(title){
      this._title = title; 
      this._isCheckedOut = false;
      this._rating = []; 
    }
  
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut; 
    }
    get rating() {
      return this._rating;
    }
  //not sure below
    set isCheckedOut(checkout) {
      this._isCheckedOut = checkout
    }
  
  
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut 
    }
  
    getAverageRating(){
      let ratingsSum = this._rating.reduce((currentSum, rating) => currentSum + rating, 0)
      return Math.floor(ratingsSum/this._rating.length)
    }
  
    addRating(rating){
      return this._rating.push(rating)
    }
  }
  
  /*
  const testmedia = new Media('testBook')
  testmedia.isCheckedOut = '1';
  console.log(testmedia.isCheckedOut)
  testmedia.toggleCheckOutStatus()
  console.log(testmedia.isCheckedOut)
  testmedia.addRating(5);
  testmedia.addRating(4);
  testmedia.addRating(3);
  console.log(testmedia.getAverageRating())
  */
  
  class Book extends Media {
    constructor(author, title, pages){
      super(title);
      this._author = author; 
      this._pages = pages; 
    }
      get author() {
        return this._author;
      }
  
      get pages() {
        return this._pages;
      }
  }
  
  class Movie extends Media {
    constructor(director, title, runtime) {
      super(title);
      this._director = director;
      this._runTime = runtime;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  //book instance
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating())
  
  //move instance
  const speed = new Movie('Jan de Bont', 'Speed', 116)
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut)
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  class CD extends Media {
    constructor(artist, title){
      super(title);
      this._artist = artist;
      this._songs = []
    }
  
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs
    }
  
    addSongs(song){
      return this._songs.push(song)
    }
  
    shuffle(){
      const shuffledSongs = this._songs.sort(sfunc)
      function sfunc(a,b){
        return 0.5 - Math.random()
      }
      return shuffledSongs
    }
  }
  
  const cdone = new CD('Beatles', 'Alblum one');
  cdone.addSongs('Hi'); 
  cdone.addSongs('Hungry'); 
  cdone.addSongs('Dinner'); 
  cdone.addSongs('Willem'); 
  cdone.addSongs('Qian'); 
  console.log(cdone.shuffle())