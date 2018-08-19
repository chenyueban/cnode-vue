import axios from 'axios';
import iView from 'iview';
import Config from '../config';

const instance = axios.create({
  baseURL: Config.baseURL,
  timeout: 10000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    iView.LoadingBar.start();
    return config;
  },
  (error) => {
    iView.LoadingBar.error();
    return Promise.error(error);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      iView.LoadingBar.finish();
      return Promise.resolve(response.data);
    }
    iView.LoadingBar.error();
    return Promise.reject(response);
  },
  // 服务器状态码不是2开头的的情况
  (error) => {
    iView.LoadingBar.error();
    return Promise.reject(error.response);
  },
);

export default instance;
