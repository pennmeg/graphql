import { config, createSchema } from '@keystone-next/keystone/schema'
import { createAuth } from '@keystone-next/auth'
import { User } from './schemas/User'
import 'dotenv/config'
import { withItemData, statelessSessions } from '@keystone-next/keystone/session'


const databaseURL = process.env.DATABASE_URL // TODO: Add fall back

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30, // How long is session
  secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password']
    // TODO: Add roles
  }
})

export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true
    },
  },
  db: {
    adapter: 'mongoose', 
    url: databaseURL,
    // TODO: add data seeding here
  },
  lists: createSchema({
    // Schema goes in here
    User
  }),
  ui: {
    // Show the UI only for ppl who have a session + logged in
    isAccessAllowed: ({ session }) => {
      return !!session?.data
    },
  },
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id`
  })
}))
