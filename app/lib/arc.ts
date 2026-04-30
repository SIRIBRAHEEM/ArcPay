import { AppKit } from '@circle-fin/app-kit';
import { createViemAdapter } from '@circle-fin/adapter-viem-v2';
import { arcTestnet } from './chain';

export const kit = new AppKit();

export async function getViemAdapter(walletClient: any) {
  return createViemAdapter({
    walletClient,
    chain: arcTestnet,
  });
}

export async function sendUSDC(
  adapter: any,
  to: `0x${string}`,
  amount: string,
  tag?: string
) {
  const params = {
    from: { adapter, chain: 'Arc_Testnet' as const },
    to,
    amount,
    token: 'USDC' as const,
    metadata: tag ? { tag } : undefined,
  };

  const result = await kit.send(params);
  return result;
}
