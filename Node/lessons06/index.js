const fs = require('fs');


// 查找文件是否存在
// fs.stat('./data.txt', (err, stats) => {
  // if (err) {
  //   console.log(err);
  // } else {
  //   console.log('文件存在');
  // }
// });


//更改文件名
// fs.rename('./data.txt', 'dome.txt', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('修改成功');
//   }
// })


//获取文件绝对路径
// fs.realpath('./data.txt', (err, path) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(path);
//   }
// })


//写入文件内容
// fs.writeFile('./data.txt', 'utf-8', (err, date) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(date);
//   }
// })


//读取文件内容
// fs.readFile('./data.txt', (err, date) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(date.toString());
//   }
// })


/* ***************************************** */
//管道流

// 创建读取流

// const rs = fs.createReadStream('./data.txt');
// var i = 1;
// var temp = '';
// // 读取数据时,可以通过data事件的事件函数获取读到的结果
// rs.on('data', (chunk) => {
//   // console.log(chunk.toString());
//   console.log(i++);
//   temp += chunk;
// });

// //end
// rs.on('end', () => {
//   console.log('结束');
// })

//通过流写入数据
// const ws = fs.createWriteStream('./test.txt');
// ws.write('写入数据!');

// 读取data.txt文件写入带test.txt文件
// const rs = fs.createReadStream('./data.txt');
// const ws = fs.createWriteStream('./test.txt');
// rs.on('data', (chunk) => {
//   ws.write(chunk);
//   console.log('写入成功');
// })

//pipe方法写入数据时,会等当前读出的数据全部写入后,才进行下一次的读取操作.内从利用充分,但是读写事件比较长.
// rs.pipe(ws);