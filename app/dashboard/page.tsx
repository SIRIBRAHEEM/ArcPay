'use client';
import { useAccount } from 'wagmi';
import { BalanceCard } from '@/components/BalanceCard';
import { QuickActions } from '@/components/QuickActions';
import { RecentTx } from '@/components/RecentTx';

export default function Dashboard() {
  const { address } = useAccount();

  return (
    <div className="max-w-md mx-auto p-6 min-h-screen bg-zinc-950">
      <h1 className="text-3xl font-bold mb-8">ArcPay</h1>
      <BalanceCard />
      <QuickActions />
      <RecentTx />
      {address && <p className="text-xs text-zinc-500 mt-8 text-center">Connected: {address.slice(0,6)}...{address.slice(-4)}</p>}
    </div>
  );
}
