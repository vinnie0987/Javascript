import express, { Express } from 'express';
import dotenv from 'dotenv';
import { logMiddleware } from './middlewares/logMiddleware';
import { validate } from './utils/validate';
import { eventSchema } from './schemas/eventSchema';
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from './controllers/eventsController';

dotenv.config();

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for logging
app.use(logMiddleware);

// Routes
app.get('/api/v1/events', getAllEvents);
app.get('/api/v1/events/:id', getEventById);
app.post('/api/v1/events', validate(eventSchema), createEvent);
app.put('/api/v1/events/:id', validate(eventSchema), updateEvent);
app.delete('/api/v1/events/:id', deleteEvent);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
