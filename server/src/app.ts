import express from 'express';
import dogsRouter from './routes/dogs.route';
import dogsService from './services/dogs.service';
import { SERVER_PORT, DATA_REFRESH_INTERVAL } from './config/constants';
import cors from 'cors'; 

const app = express();
app.use(cors()); 

app.use(express.json());

app.use('/api/dogs', dogsRouter);

async function startServer(): Promise<void> {
  try {
    await dogsService.initializeData();
    
    app.listen(SERVER_PORT, () => {
      console.log(`Server running on http://localhost:${SERVER_PORT}`);
      setInterval(async () => {
        try {
          await dogsService.initializeData();
        } catch (error: unknown) {
          console.error('Failed to refresh data:', error instanceof Error ? error.message : 'Unknown error');
        }
      }, DATA_REFRESH_INTERVAL);
    });
  } catch (error: unknown) {
    console.error('Failed to start server:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

startServer();