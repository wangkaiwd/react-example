/**
 * Created by wangkai on 2019/1/23
 */
import Axios from './axios';

export const ajax = (url, method = 'post') => {
  return (params) => {
    const data = method === 'post' ? 'data' : 'params';
    return Axios({
      url,
      method,
      [data]: params
    });
  };
};