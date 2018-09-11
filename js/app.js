function ginger() {
  let num = 1;

  while (num <= 1000) {
    console.log('Ginger choclate honey patties');
    num++;
  }
}
ginger();

function count1000() {
  let num = 0;

  while (num <= 1000) {
    console.log(num);
    num++;
  }
}
count1000();

function loopNum() {
  for ( let i = 0; i <= 1000; i++ ) {
    console.log('Current loop number is: ' + i) ;
  }
}
loopNum();

function forLoop() {
  for ( let i = 7; i <= 635; i++ ) {
    console.log(i);
  }
}
forLoop();

function limit() {
  let start = 0;
  const limit = 100;

  for ( let i = start; i <= limit; i++ ) {
    console.log('hello' + i);
  }
}
limit();
