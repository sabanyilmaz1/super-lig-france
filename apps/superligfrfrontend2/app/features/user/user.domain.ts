export class User {
  constructor(
    public id: number,
    public teamFavoriteApiId: number,
    public apiFootballKey: string,
    public username: string,
    public email: string,
    public createdAt: string,
    public updatedAt: string
  ) {}
}
