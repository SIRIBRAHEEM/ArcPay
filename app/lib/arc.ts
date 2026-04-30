// app/lib/arc.ts
import { AppKit } from '@circle-fin/app-kit';
import { createAdapterFromProvider } from '@circle-fin/adapter-viem-v2';
import { arcTestnet } from './chain';

export const kit = new AppKit();

// For browser wallets (wagmi / WalletConnect / MetaMask)
export async function getViemAdapter(walletClient: any) {
  if (!walletClient) throw new Error("No wallet client");
  
  const provider = walletClient.transport?.value?.provider || walletClient;
  return createAdapterFromProvider({ provider });
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
