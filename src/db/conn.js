const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/youtuberegistration")
.then(()=>{
    console.log(`connection sskddkncgit successful`); 
}).catch((e)=>{
    console.log(`no connection`);

})

