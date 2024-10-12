import { Request, Response } from 'express';
import { getXataClient } from '../xata';

const xataClient = getXataClient();

// READ all events
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await xataClient.db.events.getMany();
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve events.' });
  }
};

// READ single event by ID
export const getEventById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const event = await xataClient.db.events.read(id);
    if (!event) {
      res.status(404).send({ error: 'Event not found.' });
    } else {
      res.status(200).send(event);
    }
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve the event.' });
  }
};

// CREATE new event
export const createEvent = async (req: Request, res: Response) => {
  const { name, location, description, price } = req.body;
  try {
    const newEvent = await xataClient.db.events.create({ name, location, description, price });
    res.status(201).send(newEvent);
  } catch (error) {
    res.status(500).send({ error: 'Failed to create the event.' });
  }
};

// UPDATE event by ID
export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, location, description, price } = req.body;
  try {
    const updatedEvent = await xataClient.db.events.update(id, { name, location, description, price });
    if (!updatedEvent) {
      res.status(404).send({ error: 'Event not found.' });
    } else {
      res.status(200).send(updatedEvent);
    }
  } catch (error) {
    res.status(500).send({ error: 'Failed to update the event.' });
  }
};

// DELETE event by ID
export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await xataClient.db.events.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete the event.' });
  }
};
