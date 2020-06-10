/*******************************************************************************
 * Your code here!
 ******************************************************************************/

const fname=getInput(0);//assigning output of getinput(0) to var fname
const sname=getInput(1);//assigning output of getinput(0) to var sname

// function to return upppercase initial of firstname and lastname
function initial(fname,sname){
  return fname[0].toUpperCase()+'.'+sname[0].toUpperCase()+'.'
}
const ini=initial(fname,sname)//assigning o/p of initial(fname,sname) to var ini

const len=fname.length + sname.length;//calculate' the length of name

const msg='Hey, '+ini+' Mind if I call you that? \nYour full name is '+ len + ' letters long!'

console.log(msg);




/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  It takes a number as a parameter and returns the argument with that index, as
  a string.

  If no argument with that index exists, undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string.
  Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined
 ******************************************************************************************/

function getInput(n) {
  return process.argv[n + 2];
}
