const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// Get the client

const cors = require('cors')
const session = require('express-session')
const md5 = require('md5');
const bcrypt = require('bcrypt');
const login = require('./login');
const registro = require('./registro');
const { obtenerusuarios, eliminarusuarios } = require('./usuarios');
const connection = require('./conexion')
const saltRounds = 10;
const MySQLStore = require('express-mysql-session')(session);
const myPlaintextPassword = 's0/\/\P4$$w0rD';
app.use(express.json());

mysql://root:hjscctMoUgwZMQBORaCrtUawpUgbsybI@junction.proxy.rlwy.net:38366/railway

const sessionStore = new MySQLStore({}/* session store options */, connectiontion);


app.use(session({
    secret: process.env.SECRETSESSION || 'kjhdjshkjsjha',
    proxy: process.env.NODE_ENV === 'production',
cookie:{
   secure: process.env.NODE_ENV === 'production',
   sameSite: 'none'
},
store: sessionStore
}
))



app.use(cors({
    origin: process.env.URLFRONTEND || 'http://localhost:5173',
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', login)

app.get('/validar', (req, res) => {
    if (req.session.usuario) {
        res.status(200).send('Inicio de sesion correcto')
    } else {
        res.status(401).send('No autorizado')
    }
})

app.post('/registro', registro)

app.get('/usuarios', obtenerusuarios)

app.delete('/usuarios', eliminarusuarios)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})