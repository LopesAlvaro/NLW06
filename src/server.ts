import express from "express";

//@types/express
const app = express();
 
app.get("/test", (request, response) =>{
    return response.send("TESTE");
});

app.post("/test-post", (request, response)=>{
    return response.send("TEST POST");
});

app.listen(3000, () => console.log("Server is running 🚀"));