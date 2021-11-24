import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private ListSpecificationsUseCase: ListSpecificationsUseCase) {}
  handle(request: Request, response: Response): Response {
    const all = this.ListSpecificationsUseCase.execute();

    return response.json(all);
  }
}

export { ListSpecificationsController };
