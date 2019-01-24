/**
 * Created by Administrator on 2018/9/15/015
 */
import { ajax } from '@/http/ajax';

export const fetchDetailList = ajax('/detail');
export const fetchCityList = ajax('/detail');
export const fetchHome = ajax('/home');