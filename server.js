 console.log('welcome to node series');

//  console.log(global);

 const os = require('os');
 const path = require('path');
//  console.log(os.type());
//  console.log(os.homedir());
//  console.log(os.version());

//  console.log(__dirname);
//  console.log(__filename);
//  console.log(path.dirname(__filename));


 

 const {add, sub} = require('./math');
//  console.log(math.add(2,3));
//  console.log(math.sub(44,23));

 console.log(add(2,77));
 console.log(sub(0,3));

