import { Request, Response } from "express";

export const getAllEvents = (req: Request, res: Response) => {
  // Endpoint to retrieve all events
  // Sample response
  // TODO: Implement the third party API call to retrieve all events
  //   res.send("Get all events");
};

export const getEventById = (req: Request, res: Response) => {
  // Endpoint to retrieve event by id
  res.send("Get event by id");
};
