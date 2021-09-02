const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors('https://front-end-ga.vercel.app/'))
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

require('./controllers/authController')(app)

app.listen(3000, () => console.log('Rodando'));








