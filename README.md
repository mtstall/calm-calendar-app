# Calm-Calendar

This calendar allows new and returning users to add and view events as a calendar layout. Events are stored using cookies, so when user logs back in, they can still see any past or future events.

New users must first sign-up, but then everything will be saved as desired.

## Features

- mySQL2
- Sequelize
- handlebars-express
- environmental variables
- FullCalendar.io (npm package)
- session-Sequelize

## Installation

Install dependencies with npm

```cmd-line
  npm install
```

Requires `dotenv`,
Requires `MYSQL2`,
Requires `Sequelize`,
Requires `FullCalendar`,
Requires `express-session`,
Requires `express-handlebars`,
Requires `Sequelize-session`,

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```cmd-line
`DB_HOST:` '127.0.0.1' || localhost (whatever works for you!)

`DB_NAME =` 'calendar_db`

`DB_USER =` 'root'

`DB_PASSWORD =` 'your password here'

`SESSION_SECRET =` 'your session secret'
```

## Demo
<img width="1370" alt="landing-page" src="https://user-images.githubusercontent.com/115678318/226114806-1c2efaaa-286c-4373-a18b-05fed1776ae1.png">


## Deployment

To see deployed site, click here:

## Authors (alphabetical)

Buck Blocker,
Samuel Harper,
Camila Moreiras,
Ben Rashleigh,
Taylor Stallings,
Conner Williams,

## License

Please refer to license in Repo.
