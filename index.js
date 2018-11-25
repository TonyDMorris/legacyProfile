function cipherGenerator() {
  var variableName = document.getElementById("variable_name").value;
  var plainCode = document.getElementById("plain_code").value;
  var cipherCode = document.getElementById("cipher_code").value;

  var beginning = `let ${variableName} = { ${plainCode[0]}:"${cipherCode[0]}",`;
  var middle = [];
  var end = `, ${plainCode[plainCode.length - 1]}:"${
    cipherCode[cipherCode.length - 1]
  }" } `;
  for (i = 1; i < plainCode.length - 1; i++) {
    middle.push(` ${plainCode[i]}:"${cipherCode[i]}"`);
  }
  document.getElementById("answer").innerHTML = `${beginning}${middle}${end}`;
}