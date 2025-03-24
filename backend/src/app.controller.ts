/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return "pong";
  }
}
