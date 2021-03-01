import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin',
    password: bcrypt.hashSync('123456', 10),
    email: 'admin@hotmail.com',
    isAdmin: true,
    questionnaire1Complete: true,
    questionnaire2Complete: true,
    quez1: [
      {
        score: 0,
        hasAccess: true,
      },
    ],
    quez2: [
      {
        score: 0,
        hasAccess: true,
      },
    ],
    quez3: [
      {
        score: 0,
        hasAccess: true,
      },
    ],
  },
];

export default users;
