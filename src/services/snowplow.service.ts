import { buildSelfDescribingEvent } from "@snowplow/node-tracker";
import tracker from "../config/snowplow.config";
import { SCHEMA } from "../types/schema.type";
import { CreateUserDto } from "../dtos/user/createUser.dto";
import { CreateProductDto } from "../dtos/product/createProduct.dto";

export default class SnowplowService {
  constructor() {}

  public emitCreateUserEvent(createUserDto: CreateUserDto) {
    tracker.track(buildSelfDescribingEvent({
      event: {
        schema: SCHEMA.user,
        data: {...createUserDto}
      }
    }));
  }

  public emitCreateProductEvent(product: CreateProductDto) {
    tracker.track(buildSelfDescribingEvent({
      event: {
        schema: SCHEMA.product,
        data: {...product}
      }
    }));
  }
}
