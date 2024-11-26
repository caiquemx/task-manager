import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);
app.use(cors());

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
