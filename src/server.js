import {app} from './app'
const port = 3001;

app.listen(port, () => {
    console.log('server is running on port', port);
});