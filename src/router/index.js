import {Router} from "express";
import path from "path";
import {io} from "../app";

export const router = Router();

router.get('/',(req,res)=>{


    return(res.sendFile(path.join(__dirname, '..','..','public','index.html')));
})