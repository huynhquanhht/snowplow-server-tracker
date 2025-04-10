import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import ProductController from "../controllers/product.controller";
import ProductService from "../services/product.service";
import SnowplowService from "../services/snowplow.service";
import UserService from "../services/user.service";

const router = Router();

const snowplowService = new SnowplowService();
const productService = new ProductService(snowplowService);
const userService = new UserService(snowplowService);
const productController = new ProductController(productService);
const userController = new UserController(userService);

router.post("/products", productController.createProduct.bind(productController));
router.post("/users", userController.createUser.bind(userController));

export default router;
