namespace Express {
  export interface Request {
    user: {
      id: string;
      email: string;
      role: string;
      username: string;
      password: string;
    };
  }
}
