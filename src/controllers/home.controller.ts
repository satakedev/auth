import { Request, Response } from "express";

export default class HomeController {
  welcome(req: Request, res: Response): Response {
    return res.json({ 
      ok: true,
      version: "1.0.0",
      description: "User management and authentication API"
     });
  }
}