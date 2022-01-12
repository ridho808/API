import express from 'express';
import db from './config/db.js';
import router from './routers/router.js'

try {
    await db.authenticate()
    
    console.log('DAtabase connected......')
} catch (error) {
    
}


const app = express()
const Port = 6999;

app.use(express.json())
app.use(router)

app.listen(Port,()=>{
    console.log('connectedd....')
})