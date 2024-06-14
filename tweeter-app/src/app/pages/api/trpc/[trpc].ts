import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';
import { createRouter } from '@trpc/server';

// Define your router and procedures
const appRouter = createRouter()
  .query('getAllTweets', {
    resolve: async () => {
      // Fetch all tweets logic
      return [
        { id: 1, content: 'Hello, world!', author: { name: 'Alice' } },
        { id: 2, content: 'This is a second tweet', author: { name: 'Bob' } },
      ];
    },
  })
  .mutation('createTweet', {
    input: z.object({
      content: z.string(),
      authorId: z.number(),
    }),
    resolve: async ({ input }) => {
      // Create a new tweet logic
      return { id: 3, ...input, author: { name: 'Alice' } };
    },
  });

// Export type definition of API
export type AppRouter = typeof appRouter;

// Create the API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
