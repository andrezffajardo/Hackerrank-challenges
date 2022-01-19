let input = 'C;M;white sheet of paper';
let i=0;
let character='';
let b = " ";
let c = "";

if (input.includes('S;')) {
let str = input.slice(4).replace('()', '');
c = str;
let x = str.length;

while (i < x){
    character = c.charAt(i);
        if (character == character.toUpperCase() && (i>1)) {
            var output = [c.slice(0, i), b, c.slice(i)].join('');
            c = output;
            x++;
            i++;
        }
    i++;
}

c = c.toLowerCase();
return c;
}

else if (input.includes('C;C;')) {
  const y = input.slice(4).split(" ");
  //console.log("yes1");
  for (let i = 0; i < y.length; i++){
    y[i] =y[i].charAt(0).toUpperCase() + y[i].slice(1);
  }

const str2 = y.join('');
return str2;
//console.log(str2);
}

  else if (input.includes('C;V;')) {
  const y = input.slice(4).split(" ");
    y[1] = y[1].charAt(0).toUpperCase() + y[1].slice(1);
const str2 = y.join('');
return str2;
//console.log(str2);
  }

    else if (input.includes('C;M;')) {
      const y = input.slice(4).split(" ");
  for (let i = 0; i < y.length; i++){
    y[i] =y[i].charAt(0).toUpperCase() + y[i].slice(1);
  }

const str2 = y.join('') + "()";
return str2;
//console.log(str2);
}