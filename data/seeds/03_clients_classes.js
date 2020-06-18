
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('clients_classes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('clients_classes').insert([
        { class_id: 1, client_id: 2 },
        { class_id: 2, client_id: 1 },
        { class_id: 3, client_id: 1 },
      ]);
    });
};
