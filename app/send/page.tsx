'use client';
import { useState } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import { sendUSDC, getViemAdapter } from '../lib/arc';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

const tags = ['coffee', 'rent', 'invoice', 'gift', 'other'];

export default function SendPage() {
  const { address, connector, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [tag, setTag] = useState('coffee');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!isConnected || !walletClient || !to || !amount) {
      toast.error("Please connect wallet and fill all fields");
      return;
    }

    setLoading(true);
    try {
      const adapter = await getViemAdapter(walletClient);
      const result = await sendUSDC(adapter, to as `0x${string}`, amount, tag);

      toast.success(`✅ Sent ${amount} USDC • Tag: ${tag}`);
      
      // Clear form
      setTo('');
      setAmount('');
    } catch (e: any) {
      toast.error(e.message || "Send failed");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 min-h-screen bg-zinc-950">
      <button 
        onClick={() => window.history.back()} 
        className="flex items-center gap-2 mb-6 text-zinc-400 hover:text-white"
      >
        <ArrowLeft size={20} /> Back
      </button>

      <h1 className="text-3xl font-bold mb-8">Send USDC</h1>

      <div className="space-y-6">
        <input
          placeholder="Recipient address (0x...)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full bg-zinc-900 p-4 rounded-2xl border border-zinc-800 focus:border-emerald-500 outline-none"
        />

        <input
          type="text"
          placeholder="Amount (e.g. 5.00)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-zinc-900 p-4 rounded-2xl border border-zinc-800 focus:border-emerald-500 outline-none"
        />

        <select 
          value={tag} 
          onChange={(e) => setTag(e.target.value)}
          className="w-full bg-zinc-900 p-4 rounded-2xl border border-zinc-800 focus:border-emerald-500 outline-none"
        >
          {tags.map(t => (
            <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
          ))}
        </select>

        <button
          onClick={handleSend}
          disabled={loading || !to || !amount || !isConnected}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-zinc-700 py-6 rounded-3xl text-xl font-bold transition mt-4"
        >
          {loading ? 'Sending...' : `Send ${amount || ''} USDC`}
        </button>
      </div>
    </div>
  );
}
