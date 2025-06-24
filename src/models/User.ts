import BaseModel from "./BaseMode";

export class User {
  constructor(
    private  id: number,
    public name: string,
    public email: string
  ) {}
}

class UserModel extends BaseModel<User> {
  constructor() {
    super("user");
  }

  mapRowToModel(row: any): User {
    return new User(row.id, row.name, row.email);
  }
}

export default UserModel;
