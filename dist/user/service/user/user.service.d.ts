import { UserDto } from 'src/user/dto/user.dto/user.dto';
export declare class UserService {
    users: UserDto[];
    create(user: UserDto): UserDto;
    findAll(): UserDto[];
}
