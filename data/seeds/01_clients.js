
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        { id: 1, username: 'timSmith', password: 'test'},
        { id: 2, username: 'johnSmith123', password: 'test1'},
        { id: 3, username: 'marySmith123', password: 'test2'}
      ]);
    });
};
