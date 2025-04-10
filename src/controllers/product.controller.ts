import { Request, Response } from "express";
import logger from "../utils/logger";
import ProductService from "../services/product.service";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export default class ProductController {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  public createProduct(req: Request, res: Response) {
    try {
      const newProduct = this.productService.createProduct(req.body);
      res.status(StatusCodes.OK).json(newProduct);
    } catch (error) {
      logger.error(error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  }
}
