import { CircleClient } from '@circle-fin/developer-controlled-wallets';

export const circle = new CircleClient({
  apiKey: process.env.CIRCLE_API_KEY!,
  entitySecret: process.env.CIRCLE_ENTITY_SECRET!,
  blockchain: process.env.CIRCLE_BLOCKCHAIN!,
});
