const Calculate = {
    factorial(num){
      if(num===0){
      let errInfo = 1
      return errInfo;
      }
      for(let i=(num-1); i>=1; i-- ){
         num*=i
      }
      return num
    }
  }
  
  module.exports = Calculate;
  
  
  