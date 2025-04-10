import { CreateUserDto } from "../dtos/user/createUser.dto";
import SnowplowService from "./snowplow.service";

export default class UserService {
  private snowplowService: SnowplowService;

  constructor(snowplowService: SnowplowService) {
    this.snowplowService = snowplowService;
  }

  public createUser(createUserDto: CreateUserDto) {
    this.snowplowService.emitCreateUserEvent(createUserDto);
    return createUserDto;
  }
}
