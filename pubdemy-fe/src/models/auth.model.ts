export class AuthModel {
    constructor(
      public isUserAuthenticated: boolean=false,
      public username: string="",
      public token: string=""
  
    ){}
  };