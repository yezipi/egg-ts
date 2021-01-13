import { Controller } from 'egg';

// 文章相关接口
export default class ArticleController extends Controller {

  public async index() {
    const { ctx, service } = this;
    const data = await service.article.index(ctx.query);
    ctx.success(data);
  }

}
