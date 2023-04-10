const mongoose = require('mongoose');

// Thay đổi thông tin kết nối của bạn ở đây
const uri = "mongodb+srv://quoctichle:quoctichle@quoctichle.bvtm2gs.mongodb.net/WebSach";
//
mongoose.connect(uri);

mongoose.connection.once('open',()=>{
  console.log("Kết Nối Thành Công");
}).on('error',(error)=>{
  console.log(error);
})
