import Express,{Router} from 'express'
import {router} from "./router";
import path from 'path'

export const app  = require('express')();
app.use(Express.static(path.join(__dirname, 'public')));
app.use(Express.json())
app.use(Express.urlencoded({extended:true}))
app.use(router)





