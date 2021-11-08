const fs = require('fs'); 

let maxRange = 256;
let output = '';
while (maxRange-->0){
    if (maxRange == 0) break;
    output += `\n<ipRanges>\n<end>${maxRange}.0.0.0</end>\n<start>${maxRange-1 > 0 ? maxRange-1 : 0}.0.0.0</start>\n</ipRanges>`

}

fs.writeFile('./scripts/node/ipranges.xml', output, error => {
    console.log(error ? error : 'ipranges saved!');
})