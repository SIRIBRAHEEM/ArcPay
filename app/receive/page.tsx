'use client';
import { useAccount } from 'wagmi';
import QRGenerator from '@/components/QRGenerator';
import { useState } from 'react';

export default function ReceivePage() {
  const { address } = useAccount();
  const [amount, setAmount] = useState('');
  const [tag, setTag] = useState('');

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Receive USDC</h1>
      {address && (
        <>
          <QRGenerator address={address} amount={amount} tag={tag} />
          <div className="mt-8 space-y-4">
            <input placeholder="Optional amount" value={amount} onChange={e => setAmount(e.target.value)} className="w-full bg-zinc-900 p-4 rounded-2xl" />
            <input placeholder="Tag (e.g. coffee)" value={tag} onChange={e => setTag(e.target.value)} className="w-full bg-zinc-900 p-4 rounded-2xl" />
          </div>
          <p className="text-center text-xs text-zinc-500 mt-8 break-all">{address}</p>
        </>
      )}
    </div>
  );
}
