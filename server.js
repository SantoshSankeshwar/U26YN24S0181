const http=require("http");
require("dotenv").config()
const fs=require("fs");
const server=http.createServer((req,resp)=>{
    if(req.method=="GET" && req.url=="/"){
        fs.readFile("index.html",(err,data)=>{
            if(err){
                resp.write("Error in file");
            }
            else{
                resp.writeHead(200,{"content-type":"text/html"});
                resp.write(data);
                resp.end();
            }
        })
    }
    
    else if(req.method=="GET" && req.url=="/about"){
        fs.readFile("about.html",(err,data)=>{
            if(err){
                resp.write("Error in file");
            }
            else{
                resp.writeHead(200,{"content-type":"text/html"});
                resp.write(data);
                resp.end();
            }
        })
    }
    
    else if(req.method=="GET" && req.url=="/course"){
            fs.readFile("course.html",(err,data)=>{
                if(err){    
                    resp.write("Error in file");
                }
                else{
                    resp.writeHead(200,{"content-type":"text/html"});
                    resp.write(data);
                    resp.end();
                }
            }
            
        )}
    else if(req.method=="GET" && req.url=="/contact"){
            fs.readFile("contact.html",(err,data)=>{
                if(err){
                    resp.write("Error in file");
                }
                else{
                    resp.writeHead(200,{"content-type":"text/html"});
                    resp.write(data);
                    resp.end();
                }
            });
        }

    })
    server.listen(process.env.PORT,()=>{
            console.log("server is started")
        }
    );