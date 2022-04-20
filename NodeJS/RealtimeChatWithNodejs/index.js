const express = require("express")
const cors = require("cors")
const Pusher = require("pusher");

// ------------------------------------
const pusher = new Pusher({
  appId: "1354107",
  key: "e539673027ef09cb4835",
  secret: "651533a12345d1bbadb3",
  cluster: "ap3",
  useTLS: true
});

// pusher.trigger("my-channel", "my-event", {
//   message: "hello world"
// });

// ------------------------------------


const app = express();
// app.use(cors(o: {
//     origin:['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
// }))
app.use(cors({
    origin:['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200', 'http://localhost:8000']
}));

app.use(express.json());


app.post('/api/messages', async(req,res)=>{
    await pusher.trigger("my-channel", "my-event", {
        username: req.body.username,
        message: req.body.message
      }); 
      res.json([]);
})


console.log("listening to port 8080");
// app.listen(port: 8080)
app.listen(8080)

