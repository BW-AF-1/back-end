
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('classes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          id: 1, name: "Get Ripped 100", type: 'Pump Me Up', startTime: '4 PM', duration: '1 hr',
          intensityLevel: 'Easy', location: 'Seattle, Wa', attendees: '11', maxClassSize: '20', instructor_id: 1
        },
        {
          id: 2, name: "Get Ripped 200", type: 'Pump Me Up', startTime: '4 PM', duration: '1 hr',
          intensityLevel: 'Medium', location: 'Nashville, TN', attendees: '10', maxClassSize: '20', instructor_id: 2
        },
        {
          id: 3, name: "Get Ripped 404", type: 'Pump Me Up', startTime: '4 PM', duration: '1 hr',
          intensityLevel: 'Hard', location: 'Ann Arbor, MI', attendees: '12', maxClassSize: '20', instructor_id: 3
        },
      ]);
    });
};
