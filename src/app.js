import Express,{Router} from 'express'
import {router} from "./router";

export const app = Express();

const path = require('path');

app.use(Express.static(path.join(__dirname, 'public')));
app.use(Express.json())
app.use(Express.urlencoded({extended:true}))
app.use(router)