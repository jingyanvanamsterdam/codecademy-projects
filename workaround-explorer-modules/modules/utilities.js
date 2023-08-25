const formatNumber = num => {
    let stringNum = num.toLocaleString("en-US",{style:'currency', currency: "USD"})
    return stringNum
  }
  
  export {formatNumber}