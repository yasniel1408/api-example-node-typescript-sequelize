/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import Route from '../common/route';

export class UserRoute extends Route {
  constructor(app: express.Application) {
    super(app, 'UserRoute');
  }

  configureRoutes(): express.Application {
    // this.app
    //   .route('/user')
    //   .get(
    //     jwtMiddleware.validJWTNeeded,
    //     permissionMiddleware.permissionFlagRequired(
    //       PermissionFlag.ADMIN_PERMISSION,
    //     ),
    //     UsersController.listUsers,
    //   )
    //   .post(
    //     body('email').isEmail(),
    //     body('password')
    //       .isLength({ min: 5 })
    //       .withMessage('Must include password (5+ characters)'),
    //     BodyValidationMiddleware.verifyBodyFieldsErrors,
    //     UsersMiddleware.validateSameEmailDoesntExist,
    //     UsersController.createUser,
    //   );

    // this.app.param('userId', UsersMiddleware.extractUserId);
    // this.app
    //   .route('/users/:userId')
    //   .all(
    //     UsersMiddleware.validateUserExists,
    //     jwtMiddleware.validJWTNeeded,
    //     permissionMiddleware.onlySameUserOrAdminCanDoThisAction,
    //   )
    //   .get(UsersController.getUserById)
    //   .delete(UsersController.removeUser);

    // this.app.put('/users/:userId', [
    //   body('email').isEmail(),
    //   body('password')
    //     .isLength({ min: 5 })
    //     .withMessage('Must include password (5+ characters)'),
    //   body('firstName').isString(),
    //   body('lastName').isString(),
    //   body('permissionFlags').isInt(),
    //   BodyValidationMiddleware.verifyBodyFieldsErrors,
    //   UsersMiddleware.validateSameEmailBelongToSameUser,
    //   UsersMiddleware.userCantChangePermission,
    //   permissionMiddleware.permissionFlagRequired(
    //     PermissionFlag.PAID_PERMISSION,
    //   ),
    //   UsersController.put,
    // ]);

    // this.app.patch('/users/:userId', [
    //   body('email').isEmail().optional(),
    //   body('password')
    //     .isLength({ min: 5 })
    //     .withMessage('Password must be 5+ characters')
    //     .optional(),
    //   body('firstName').isString().optional(),
    //   body('lastName').isString().optional(),
    //   body('permissionFlags').isInt().optional(),
    //   BodyValidationMiddleware.verifyBodyFieldsErrors,
    //   UsersMiddleware.validatePatchEmail,
    //   UsersMiddleware.userCantChangePermission,
    //   permissionMiddleware.permissionFlagRequired(
    //     PermissionFlag.PAID_PERMISSION,
    //   ),
    //   UsersController.patch,
    // ]);

    // /**
    //  * This route does not currently require extra permissions.
    //  *
    //  * Please update it for admin usage in your own application!
    //  */
    // this.app.put('/users/:userId/permissionFlags/:permissionFlags', [
    //   jwtMiddleware.validJWTNeeded,
    //   permissionMiddleware.onlySameUserOrAdminCanDoThisAction,
    //   permissionMiddleware.permissionFlagRequired(
    //     PermissionFlag.FREE_PERMISSION,
    //   ),
    //   UsersController.updatePermissionFlags,
    // ]);

    return this.app;
  }
}

export default UserRoute;
