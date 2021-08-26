'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Stories', [{
      title : "Sepucuk Perih Yang Mendamaikan",
      sinopsis : "Cinta memang mampu membuat siapapun berubah",
      story_text : "Cinta memang mampu membuat siapapun berubah. Itulah pengaruh kekuatannya, Cinta memang mampu membuat siapapun berubah. Itulah pengaruh kekuatannya, Cinta memang mampu membuat siapapun berubah. Itulah pengaruh kekuatannya",
      cover_image_url : "https://picsum.photos/200/300?random=2",
      AuthorId : 1,
      tag : 'romance',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      title : "Gemuruh yang meniada",
      sinopsis : "Persahabatan miskin dan kaya",
      story_text : "Cinta memang mampu membuat siapapun berubah. Itulah pengaruh kekuatannya, Cinta memang mampu membuat siapapun berubah. Itulah pengaruh kekuatannya, Cinta memang mampu membuat siapapun berubah. Itulah pengaruh kekuatannya",
      cover_image_url : "https://picsum.photos/200/300?random=1",
      AuthorId : 2,
      tag : 'inspiration',
      createdAt : new Date(),
      updatedAt : new Date()      
    },{
      title : "Temaram Waktu Itu",
      sinopsis : "Cerita cinta segitiga",
      story_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      cover_image_url : "https://picsum.photos/200/300?random=2",
      AuthorId : 3,
      tag : 'inspiration',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      title : "Temaram Waktu Itu",
      sinopsis : "Cerita cinta segitiga",
      story_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      cover_image_url : "https://picsum.photos/200/300?random=1",
      AuthorId : 4,
      tag : 'inspiration',
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Stories', null, {restartIdentity : true})
  }
};
