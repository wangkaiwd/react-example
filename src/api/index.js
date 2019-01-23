/**
 * Created by Administrator on 2018/9/15/015
 */
import { ajaxFunc } from '@/http/tool';

export const fetchDetailList = ajaxFunc('/travel/detail');
export const fetchCityList = ajaxFunc('travel/detail');
export const fetchHome = ajaxFunc('travel/home');