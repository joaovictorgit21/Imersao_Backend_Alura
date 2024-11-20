import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();
const PORT = 3000;

routes(app);

app.listen(PORT, () => {
    console.log("hay man, server rodando na porta 3000");
    console.log("Server excutando...");
});
