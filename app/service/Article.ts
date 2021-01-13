import { Service } from 'egg';
export default class Article extends Service {

  /**
   * 文章列表
   * @param { String } params 参数
   * @param { String } params.page 页数
   * @param { String } params.page_size 页码
   * @param { String } params.title 标题
   */
  public async index(params: any) {
    const { title } = params;
    const where: any = {};
    if (title) {
      where.title = title;
    }
    console.log('@@@@@@@', params);
    return await this.ctx.model.Article.findAndCountAll({ where });
  }

}
