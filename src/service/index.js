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
  static getTopic(id) {
    return http.get(`/topic/${id}`);
  }

  /**
   * @api /topic
   * @name 新建主题
   *
   * @method POST
   *
   * @param accesstoken String 用户的 accessToken
   * @param title       String 标题
   * @param tab         String 目前有 ask share job dev
   * @param content     String 主体内容
   */
  static postTopic(accesstoken, tab, title, content) {
    return http.post('/topics', {
      accesstoken,
      tab,
      title,
      content,
    });
  }

  /**
   * @api /topics/update
   * @name 编辑主题
   *
   * @method POST
   *
   * @param accesstoken String 用户的 accessToken
   * @param topic_id    String 主题id
   * @param title       String 标题
   * @param tab         String 目前有 ask share job dev
   * @param content     String 主体内容
   */
  static postUpdateTopic(accesstoken, topicId, tab, title, content) {
    return http.post('/topics', {
      accesstoken,
      topicId,
      tab,
      title,
      content,
    });
  }

  /**
   * @api /user/:loginname
   * @name 用户详情
   *
   * @method GET
   *
   * @param loginname String
   */
  static getUserInfo(loginName) {
    return http.get(`/user/${loginName}`);
  }

  /**
   * @api /accesstoken
   *
   * @name 验证 accessToken 的正确性
   *
   * @method POST
   *
   * @param accesstoken String 用户的 accessToken
   *                           如果成功匹配上用户，返回成功信息。否则 403。
   */
  static postAccessToken(accesstoken) {
    return http.post('/accesstoken', { accesstoken });
  }

  /**
   * @api /message/count
   *
   * @name 获取未读消息数
   *
   * @method GET
   *
   * @param accesstoken String 用户的 accessToken
   */
  static getUnreadCount(accesstoken) {
    return http.get('/message/count', {
      params: {
        accesstoken,
      },
    });
  }

  /**
   * @api /messages
   *
   * @name 获取已读和未读消息
   *
   * @method GET
   *
   * @param accesstoken String 用户的 accessToken
   * @param mdrender    String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
   */
  static getMessages(accesstoken) {
    return http.get('/messages', {
      params: {
        accesstoken,
      },
    });
  }

  /**
   * @api /topic_collect/collect
   *
   * @name 收藏主题
   *
   * @method POST
   *
   * @param accesstoken String 用户的 accessToken
   * @param topic_id    String 主题的id
   */
  static postCollect(accesstoken, topicId) {
    return http.post('/topic_collect/collect', {
      accesstoken,
      topic_id: topicId,
    });
  }

  /**
   * @api /topic_collect/de_collect
   *
   * @name 取消收藏主题
   *
   * @method POST
   *
   * @param accesstoken String 用户的 accessToken
   * @param topic_id    String 主题的id
   */
  static postDeCollect(accesstoken, topicId) {
    return http.post('/topic_collect/de_collect', {
      accesstoken,
      topic_id: topicId,
    });
  }

  /**
   * @api /topic_collect/:loginname
   *
   * @name 用户所收藏的主题
   *
   * @method GET
   *
   * @param loginname String
   */
  static getCollects(loginname) {
    return http.get(`/topic_collect/${loginname}`);
  }

  /**
   * @api /topic/:topic_id/replies
   *
   * @name 新建评论
   *
   * @method POST
   *
   * @param accesstoken String 用户的 accessToken
   * @param content     String 评论的主体
   * @param reply_id    String 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。
   */
  static postReplies(topicId, accesstoken, content, replyId) {
    return http.post(`/topic/${topicId}/replies`, {
      accesstoken,
      content,
      replyId,
    });
  }

  /**
   * @api /reply/:reply_id/ups
   *
   * @name 为评论点赞
   *
   * @method POST
   *
   * @param accesstoken String 用户的 accessToken
   * 接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 action 字段中，up or down。
   */
  static postUps(replyId, accesstoken) {
    return http.post(`/reply/${replyId}/ups`, { accesstoken });
  }
}
