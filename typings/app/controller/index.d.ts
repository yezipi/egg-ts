// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminUser from '../../../app/controller/admin/user';

declare module 'egg' {
  interface IController {
    admin: {
      user: ExportAdminUser;
    }
  }
}
