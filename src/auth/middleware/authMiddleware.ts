/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import * as argon2 from 'argon2';
import express from 'express';
import userService from '../../user/services/userService';

class AuthMiddleware {
  async verifyUserPassword(req: express.Request, res: express.Response,
    next: express.NextFunction) {
    const user: any = await userService.getUserByEmail(
      req.body.email,
    );
    if (user) {
      const passwordHash = user.password;
      if (await argon2.verify(passwordHash, req.body.password)) {
        req.body = {
          userId: user.id,
          email: user.email,
          rol: user.rol,
        };
        return next();
      }
    }
    res.status(400).send({ errors: ['Invalid email and/or password'] });
  }
}

export default new AuthMiddleware();
