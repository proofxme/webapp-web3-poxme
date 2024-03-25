import LogtoClient from '@logto/next/edge';

import { config } from './logto-config';

export const logtoClient = new LogtoClient(config);
