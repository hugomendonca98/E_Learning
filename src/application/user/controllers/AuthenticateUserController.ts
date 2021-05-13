import { sign } from 'jsonwebtoken';

import authConfig from '../../config/auth';
import AppError from '../../errors/AppError';
import IAutheticationUserDTO from '../dtos/IAutheticationUserDTO';
import User from '../models/User';
import BCryptHashProvider from '../providers/hashProvider/implementations/BCryptHashProvider';
import UserRepository from '../repositories/UserRepository';

interface IResponse {
  user: User;
  token: string;
}

export default class AuthenticateUserController {
  public async authentication({
    email,
    password,
  }: IAutheticationUserDTO): Promise<IResponse> {
    const userRepository = new UserRepository();
    const hashProvider = new BCryptHashProvider();

    const user = await userRepository.findUserByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatch = await hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expireIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expireIn,
    });

    return {
      user,
      token,
    };
  }
}
