const Mock = require('mockjs');
export const commentsData = Mock.mock({
  'comments|4': [
    { 'id|+1': 1, username: '@name', avatar: '@image(60x60)', comment: '@sentence' }
  ]
});
