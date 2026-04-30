'use client';
import { useAccount } from 'wagmi';
// In production: fetch balance via App Kit unified balance
export function BalanceCard() {
  return (
    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-center mb-8">
      <p className="text-sm opacity-75">Your USDC Balance</p>
      <p className="text-6xl font-bold mt-2">42.50</p>
      <p className="text-sm mt-1">USDC on Arc Testnet</p>
    </div>
  );
}
