import { Controller,Get,Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Post()
    create(): string{
        return "This Action from Post Method";
    }
    @Get()
    findAll(): string{
        return "All Data user";
    }
}
