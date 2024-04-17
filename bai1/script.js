function calculate(operation) {
    let inputA = parseFloat(document.getElementById("inputA").value);
    let inputB = parseFloat(document.getElementById("inputB").value);
    let result;
  
    if (isNaN(inputA) || isNaN(inputB)) {
      document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ cho A và B.";
      return;
    }
  
    switch(operation) {
      case 'sum':
        result = inputA + inputB;
        break;
      case 'subtract':
        result = inputA - inputB;
        break;
      case 'multiply':
        result = inputA * inputB;
        break;
      case 'divide':
        if (inputB === 0) {
          document.getElementById("result").innerText = "Không thể chia cho 0";
          return;
        }
        result = inputA / inputB;
        break;
      default:
        break;
    }
  
    document.getElementById("result").innerText = "Result: " + result;
  }
  
  function reset() {
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("result").innerText = "";
  }
  