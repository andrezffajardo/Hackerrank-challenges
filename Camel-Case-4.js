let string = 'C;C;coffee machine';
let i=0;
let character='';
let b = " ";
let c = "";

if (string.includes('S;')) {
let str = string.slice(4).replace('()', '');
c = str;
let x = str.length;

while (i <= x){
    
    character = c.charAt(i);
        if (character == character.toUpperCase() && (i>1)) {
            var output = [c.slice(0, i), b, c.slice(i)].join('');
           // .toLowerCase()
            c = output;
            console.log(c);
            x++;
            i++;
            
        }
     
   
    i++;
}

c = c.toLowerCase();
}

else if (string.includes('C;C;')) {
  const y = string.slice(4).split(" ");
  //console.log("yes1");
  for (let i = 0; i < y.length; i++){
    y[i] =y[i].charAt(0).toUpperCase() + y[i].slice(1);
  }

const str2 = y.join('');
console.log(str2);

  //let str = string.slice(4).split('').filter(e => e.trim().length).join('');
  //console.log(str);
}

  else if (string.includes('C;V;')) { console.log("yes2");}
  
    else if (string.includes('C;M;')) { console.log("yes3");}