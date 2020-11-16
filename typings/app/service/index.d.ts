// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAlbum from '../../../app/service/Album';
import ExportArticle from '../../../app/service/Article';
import ExportComment from '../../../app/service/Comment';
import ExportFeedback from '../../../app/service/Feedback';
import ExportMood from '../../../app/service/Mood';
import ExportPicture from '../../../app/service/Picture';
import ExportSettings from '../../../app/service/Settings';
import ExportUser from '../../../app/service/User';

declare module 'egg' {
  interface IService {
    album: AutoInstanceType<typeof ExportAlbum>;
    article: AutoInstanceType<typeof ExportArticle>;
    comment: AutoInstanceType<typeof ExportComment>;
    feedback: AutoInstanceType<typeof ExportFeedback>;
    mood: AutoInstanceType<typeof ExportMood>;
    picture: AutoInstanceType<typeof ExportPicture>;
    settings: AutoInstanceType<typeof ExportSettings>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
