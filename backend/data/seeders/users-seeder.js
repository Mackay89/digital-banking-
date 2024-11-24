// /data/seeders/users-seeder.js

const { User } = require('../../models'); // Assume you have a Sequelize model for User

async function seedUsers() {
  const users = [
    {
      id: 'user-uuid-1',
      email: 'john.doe@example.com',
      name: 'John Doe',
      country: 'US',
    },
    {
      id: 'user-uuid-2',
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      country: 'CO',
    },
    // Add more users as needed
  ];

  for (const user of users) {
    await User.create(user);
  }

  console.log('Seeded users successfully.');
}

seedUsers();

