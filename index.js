const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 9002;
const coursesRoute = require('./routes/courses');
app.use('/api/courses', coursesRoute);

app.get('/', (req, res)=>{
    return res.status(200).json({status:200,success:'Servidor de prueba funcionando :)'})
});

app.get('*', (req, res) => {

    return res.status(404).json({status:404,error:'404 ruta no encontrada en el servidor!'})
})

app.listen(port,() => {
    console.log(`Listening to port ${port}`);
});