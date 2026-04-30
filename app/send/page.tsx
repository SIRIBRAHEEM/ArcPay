'use client';
import { useState } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { sendUSDC, getViemAdapter } from '@/lib/arc';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

const tags = ['coffee', 'rent', 'invoice', 'gift', 'other'];

export default function SendPage() {
  const { address, connector } = useAccount();
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [tag, setTag] = useState('coffee');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!address || !connector || !to || !amount) return;
    setLoading(true);
    try {
      const walletClient = await connector.getWalletClient();
      const adapter = await getViemAdapter(walletClient);
      const result = await sendUSDC(adapter, to as `0x${string}`, amount, tag);
      toast.success(`Sent ${amount} USDC • Tag: ${tag}`);
      console.log('Tx:', result.txHash);
    } catch (e: any) {
      toast.error(e.message || 'Send failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <button onClick={() => window.history.back()} className="flex items-center gap-2 mb-6">
        <ArrowLeft /> Back
      </button>
      <h1 className="text-2xl font-bold mb-6">Send USDC</h1>
      <input
        placeholder="0xRecipient..."
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full bg-zinc-900 p-4 rounded-2xl mb-4"
      />
      <input
        type="text"
        placeholder="Amount (e.g. 5.00)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full bg-zinc-900 p-4 rounded-2xl mb-4"
      />
      <select value={tag} onChange={(e) => setTag(e.target.value)} className="w-full bg-zinc-900 p-4 rounded-2xl mb-6">
        {tags.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <button
        onClick={handleSend}
        disabled={loading}
        className="w-full bg-emerald-500 hover:bg-emerald-600 py-6 rounded-3xl text-xl font-bold"
      >
        {loading ? 'Sending...' : 'Send USDC'}
      </button>
    </div>
  );
}
