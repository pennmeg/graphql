import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema'

const databaseURL = process.env.DATABASE_URL // TODO: Add fall back

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30, // How long is session
  secret: process.env.COOKIE_SECRET,
}

export default config({
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
  }),
  ui: {
    // TODO: Change this for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session values here
})
