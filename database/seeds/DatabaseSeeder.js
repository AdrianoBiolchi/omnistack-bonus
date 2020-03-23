'use strict';

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User');
class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: 'Adriano Biolchi',
      email: 'adrianobiolchi@outlook.com',
      password: '123456',
    });

    const teram = await user.teams().create({
      name: 'Rocketseat',
      user_id: user.id,
    });
  }
}

module.exports = DatabaseSeeder;
