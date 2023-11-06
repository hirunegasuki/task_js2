const button = document.querySelectorAll('button');
const result = document.getElementById('result');

let calcText = "";

function buttonClick(event) {
  const text = event.target.textContent;

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
    else {
      result.textContent += event.target.textContent;
    } 
  }
  
  else if (result.textContent.slice(-1) === "0" && text !== "." || result.textContent.slice(-1) === "00" && text !== ".") {
    let str = result.textContent.slice(0, -1);
    calcText += text;
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
  
  else {
    calcText += text;
  }
  
  result.textContent = calcText;
}

button.forEach(button => button.addEventListener('click', buttonClick));
