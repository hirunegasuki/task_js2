const button = document.querySelectorAll('button');
const result = document.getElementById('result');

let calcText = "";

function buttonClick(event) {
  const text = event.target.textContent;
  
  const symbolMark = result.textContent;
  const plusClick = symbolMark.substr(symbolMark.indexOf("+") + 1);
  const minusClick = symbolMark.substr(symbolMark.indexOf("-") + 1);
  const multipliedClick = symbolMark.substr(symbolMark.indexOf("*") + 1);
  const dividedClick = symbolMark.substr(symbolMark.indexOf("/") + 1);

  //const symbolClick = symbolMark.substr(symbolMark.indexOf("+") + 1);


  if (text === "=") {
    calcText = eval(calcText);
  } 
  
  else if (text === "AC") {
    calcText = "";
  }
  
  else if (text === "+" || text === "-" || text === "*" || text === "/") {
    calcText += text;
    if (result.textContent.slice(-1) === "+" || result.textContent.slice(-1) === "-" || result.textContent.slice(-1) === "*" || result.textContent.slice(-1) === "/") {
      let str = result.textContent.slice(0, -1);
      calcText = str + event.target.textContent;
    } 
  }
  
 /*
  else if (symbolClick === "0" && text !== "."){
    calcText += text;
    let str = result.textContent.slice(0, -1);
    calcText = str + event.target.textContent;
 }
 */

  else if (plusClick === "0" && text !== "."){
    calcText += text;
    let str = result.textContent.slice(0, -1);
    calcText = str + event.target.textContent;
 }
  else if (minusClick === "0" && text !== "."){
    calcText += text;
    let str = result.textContent.slice(0, -1);
    calcText = str + event.target.textContent;
 }
  else if (multipliedClick === "0" && text !== "."){
    calcText += text;
    let str = result.textContent.slice(0, -1);
    calcText = str + event.target.textContent;
 }
  else if (dividedClick === "0" && text !== "."){
    calcText += text;
    let str = result.textContent.slice(0, -1);
    calcText = str + event.target.textContent;
 }

 else if (text === "00") {
    calcText += text;
    if (result.textContent == "") {
      calcText = "0";
    }
    if (result.textContent.slice(-1) === "+" || result.textContent.slice(-1) === "-" || result.textContent.slice(-1) === "*" || result.textContent.slice(-1) === "/") {
      let str = event.target.textContent.slice(0, -1);
      calcText = result.textContent + str;
    } 
  }
  
  else if (text === ".") {
    calcText += text;
    if (result.textContent.slice(-1) === "."){
      let str = result.textContent.slice(0, -1);
      calcText = str + event.target.textContent;
    }
    if (result.textContent.slice(-1) === "+" || result.textContent.slice(-1) === "-" || result.textContent.slice(-1) === "*" || result.textContent.slice(-1) === "/") {
      let str = event.target.textContent.slice(0, -1);
      calcText = result.textContent + str;
    }
  }
  
  else {
    calcText += text;
  }
  
  result.textContent = calcText;
}

button.forEach(button => button.addEventListener('click', buttonClick));
