angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Berenice Ledezma',
    lastText: 'Donde estas?',
    face: 'http://41.media.tumblr.com/tumblr_m8z3n6WD0c1rbwu24o1_500.jpg'
  }, {
    id: 1,
    name: 'Arlenne Mota',
    lastText: 'Hey,Hola',
    face: 'http://spa.fotolog.com/photo/10/32/106/panchis_black/1206585485_f.jpg'
  }, {
    id: 2,
    name: 'Adriana Marroquin',
    lastText: 'Esta bien, te espero',
    face: 'http://33.media.tumblr.com/fdcf63c97dc0c265e29d74d2552903da/tumblr_inline_njm327y8js1t5u1md.png'
  }, {
    id: 3,
    name: 'Jessica Ledezma',
    lastText: 'Hola,Berenice!',
    face: 'http://data.whicdn.com/images/37811676/tumblr_ly7qagIM1g1qaobbko1_500_large.png'
  }, {
    id: 4,
    name: 'Karen Ledezma',
    lastText: 'Donde estas Berenice?.',
    face: 'https://40.media.tumblr.com/b169b5740347121ff37efbddc087da90/tumblr_na8w0kK3ID1tgt1wvo1_500.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
