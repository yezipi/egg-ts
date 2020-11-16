// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAlbum from '../../../app/model/Album';
import ExportArticle from '../../../app/model/Article';
import ExportBasesetting from '../../../app/model/Basesetting';
import ExportBehaviorlog from '../../../app/model/Behaviorlog';
import ExportBlogroll from '../../../app/model/Blogroll';
import ExportBrowselog from '../../../app/model/Browselog';
import ExportClassification from '../../../app/model/Classification';
import ExportColumn from '../../../app/model/Column';
import ExportComment from '../../../app/model/Comment';
import ExportCustomsetting from '../../../app/model/Customsetting';
import ExportFeedback from '../../../app/model/Feedback';
import ExportMailsetting from '../../../app/model/Mailsetting';
import ExportMood from '../../../app/model/Mood';
import ExportPicture from '../../../app/model/Picture';
import ExportUpdatelog from '../../../app/model/Updatelog';
import ExportUser from '../../../app/model/User';

declare module 'egg' {
  interface IModel {
    Album: ReturnType<typeof ExportAlbum>;
    Article: ReturnType<typeof ExportArticle>;
    Basesetting: ReturnType<typeof ExportBasesetting>;
    Behaviorlog: ReturnType<typeof ExportBehaviorlog>;
    Blogroll: ReturnType<typeof ExportBlogroll>;
    Browselog: ReturnType<typeof ExportBrowselog>;
    Classification: ReturnType<typeof ExportClassification>;
    Column: ReturnType<typeof ExportColumn>;
    Comment: ReturnType<typeof ExportComment>;
    Customsetting: ReturnType<typeof ExportCustomsetting>;
    Feedback: ReturnType<typeof ExportFeedback>;
    Mailsetting: ReturnType<typeof ExportMailsetting>;
    Mood: ReturnType<typeof ExportMood>;
    Picture: ReturnType<typeof ExportPicture>;
    Updatelog: ReturnType<typeof ExportUpdatelog>;
    User: ReturnType<typeof ExportUser>;
  }
}
