import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Mobile App Development' },
    { id: 3, name: 'UI/UX Design' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
