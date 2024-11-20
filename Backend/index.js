import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()
const port = 3000;

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const corsOptions = {
    origin : 'http://localhost:5173',
    credentials : true
}

app.use(cors(corsOptions))

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
    
})