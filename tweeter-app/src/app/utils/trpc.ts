import { createReactQueryHooks } from '@trpc/react-query';
import { AppRouter } from '../pages/api/trpc/[trpc]';

export const trpc = createReactQueryHooks<AppRouter>();
