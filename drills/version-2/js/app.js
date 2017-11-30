var screen = document.querySelector("#screen");
var buttons = document.querySelectorAll("span");

buttons.forEach(button => {
  if(button.id === 'equals'){
    button.addEventListener('click', evaluate);
  } else if(button.id === 'zero'){
    button.addEventListener('click', () => {
      screen.textContent += '0';
    });
  } else if(button.id === 'clear'){
    button.addEventListener('click', () => {
      screen.textContent = '';
    });
  } else {
    button.addEventListener('click', () => {
      screen.textContent += button.textContent;
    });
  }
});

function evaluate(){
  var simplifyScreen = screen.textContent.split('').map(opperand => {
    if(opperand ==='x'){
      opperand = '*';
    } else if (opperand ==='÷'){
      opperand = '/';
    }
    return opperand;
  }).join('');
  screen.textContent = 'ERROR';
  var strEval = eval(simplifyScreen);
  if(Number.isFinite(strEval)) {
    screen.textContent = strEval;
  };
};
