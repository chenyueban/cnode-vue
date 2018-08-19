import http from '@/utils/http';

export default class Api {
  /**
   * @api /topics
   * @name 主题首页
   *
   * @method GET
   *
   * @param page     Number 页数
   * @param tab      String 主题分类。目前有 ask share job good
   * @param limit    Number 每一页的主题数量
   * @param mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
   */
  static getTopics(params) {
    return http.get('/topics', { params });
  }

  /**
   * @api /topic/:id
   * @name 主题详情
   *
   * @method GET
   *
   * @param mdrender    String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
   * @param accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。
   *                           会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值
   */
  static getTopic(params) {
    return http.get(`/topic/${params.id}`);
  }

  /**
   * @api /user/:loginname
   * @name 用户详情
   *
   * @method GET
   */
  static getUserInfo(loginName) {
    return http.get(`/user/${loginName}`);
  }
}