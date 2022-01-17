let string = 'C;C;LargeSoftwareBook';
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

else if (string.includes('C;V;')) { console.log("yes1");}

  else if (string.includes('C;C;')) { console.log("yes2");}
  
    else if (string.includes('C;M;')) { console.log("yes3");}