// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/Article';
import ExportColumn from '../../../app/model/Column';
import ExportComment from '../../../app/model/Comment';
import ExportFeedback from '../../../app/model/Feedback';
import ExportUser from '../../../app/model/User';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Column: ReturnType<typeof ExportColumn>;
    Comment: ReturnType<typeof ExportComment>;
    Feedback: ReturnType<typeof ExportFeedback>;
    User: ReturnType<typeof ExportUser>;
  }
}
