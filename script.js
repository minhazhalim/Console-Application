const consoleInput = document.querySelector('.console-input');
const consoleHistory = document.querySelector('.console-history');
function addResult(inputAsString,output){
     const outputAsString = output instanceof Array ? `[${output.join(',')}]` : output.toString();
     const div1 = document.createElement('div');
     const div2 = document.createElement('div');
     div1.classList.add('console-input-log');
     div2.classList.add('console-output-log');
     div1.textContent = `> ${inputAsString}`;
     div2.textContent = outputAsString;
     consoleHistory.append(div1,div2);
}
consoleInput.addEventListener('keyup',(event) => {
     const code = consoleInput.value.trim();
     if(code.length === 0) return;
     if(event.key === 'Enter'){
          try {
               addResult(code,eval(code));
          }catch(error){
               addResult(code,error);
          }
          consoleInput.value = "";
          consoleHistory.scrollTop = consoleHistory.scrollHeight;
     }
});