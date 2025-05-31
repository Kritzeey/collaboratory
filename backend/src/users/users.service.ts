import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateOneDto } from "./dto/create-one.dto";

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async createOne(data: CreateOneDto) {
    const userWithSameEmail = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });

    if (userWithSameEmail) {
      throw new BadRequestException("Email is not available");
    }

    const userWithSameUsername = await this.prismaService.user.findUnique({
      where: { username: data.username },
    });

    if (userWithSameEmail) {
      throw new BadRequestException("Username is not available");
    }

    return await this.prismaService.user.create({
      data,
      select: {
        id: true,
        email: true,
        username: true,
        firstName: true,
        lastName: true,
        password: false,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
