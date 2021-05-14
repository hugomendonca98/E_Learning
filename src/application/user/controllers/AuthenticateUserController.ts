import { sign } from 'jsonwebtoken';
import { Request, Response } from 'express';

import authConfig from '../../config/auth';
import AppError from '../../errors/AppError';
import BCryptHashProvider from '../providers/hashProvider/implementations/BCryptHashProvider';
import UserRepository from '../repositories/UserRepository';

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
    created_at: Date;
    updated_at: Date;
  };
  token: string;
}

export default class AuthenticateUserController {
  public async authentication(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, password } = request.body;
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

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    const AuthResponse: IResponse = {
      user: userWithoutPassword,
      token,
    };

    return response.json(AuthResponse);
  }
}
