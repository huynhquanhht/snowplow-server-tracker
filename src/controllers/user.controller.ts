import { Request, Response } from "express";
import logger from "../utils/logger";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import UserService from "../services/user.service";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public createUser(req: Request, res: Response) {
    try {
      const newUser = this.userService.createUser(req.body);
      res.status(StatusCodes.OK).json(newUser);
    } catch (error) {
      console.log("error - ", error);
      logger.error(error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  }
}
