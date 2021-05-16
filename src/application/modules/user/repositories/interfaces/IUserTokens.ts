import UserTokens from '../../models/UserTokens';

export default interface IUserTokens {
  findByToken(token: string): Promise<UserTokens | undefined>;
  generate(user_id: string): Promise<UserTokens>;
}
