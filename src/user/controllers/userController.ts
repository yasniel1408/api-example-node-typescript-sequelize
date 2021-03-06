/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import argon2 from 'argon2';
import express from 'express';
import { PatchUserDto } from '../models/patchUserDto';
import userService from '../services/userService';

class UsersController {
  async listUsers(req: express.Request, res: express.Response) {
    const users = await userService.findAll(req.body.limit || 100, req.body.page || 0);
    res.status(200).send(users);
  }

  async getUserById(req: express.Request, res: express.Response) {
    const user = await userService.getById(req.body.id);
    res.status(200).send(user);
  }

  async createUser(req: express.Request, res: express.Response) {
    req.body.password = await argon2.hash(req.body.password);
    const userId = await userService.create(req.body);
    res.status(201).send({ id: userId });
  }

  async patchUser(req: express.Request, res: express.Response) {
    if (req.body.password) {
      req.body.password = await argon2.hash(req.body.password);
    }
    await userService.patchById(req.body.id, req.body);
    res.status(204).send();
  }

  async editUser(req: express.Request, res: express.Response) {
      req.body.password = await argon2.hash(req.body.password);
      await userService.editById(req.body.id, req.body);
      res.status(204).send();
  }

  async removeUser(req: express.Request, res: express.Response) {
    await userService.deleteById(req.body.id);
    res.status(204).send();
  }

  async updatePermissionRol(req: express.Request, res: express.Response) {
    const patchUserDto: PatchUserDto = {
      rol: parseInt(req.params.rol, 10),
    };
    await userService.patchById(req.body.id, patchUserDto);
    res.status(204).send();
  }
}

export default new UsersController();
