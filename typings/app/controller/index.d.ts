// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminArticle from '../../../app/controller/admin/article';
import ExportAdminUser from '../../../app/controller/admin/user';

declare module 'egg' {
  interface IController {
    admin: {
      article: ExportAdminArticle;
      user: ExportAdminUser;
    }
  }
}
