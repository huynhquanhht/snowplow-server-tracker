import { CreateProductDto } from "../dtos/product/createProduct.dto";
import SnowplowService from "./snowplow.service";

export default class ProductService {
  private snowplowService: SnowplowService;

  constructor(snowplowService: SnowplowService) {
    this.snowplowService = snowplowService;
  }

  public createProduct(product: CreateProductDto) {
    this.snowplowService.emitCreateProductEvent(product);
    return product;
  }
}
