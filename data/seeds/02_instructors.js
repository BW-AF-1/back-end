
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructors').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructors').insert([
        { id: 1, username: 'MarkRipper1', password: 'test' },
        { id: 2, username: 'NodeBuff', password: 'test1' },
        { id: 3, username: 'JavaScriptFustion1', password: 'test2' }
      ]);
    });
};
