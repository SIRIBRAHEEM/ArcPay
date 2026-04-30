'use client';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { circle } from '@/lib/circle';
import { toast } from 'sonner';

const products = [
  { id: 1, name: "100 Credits", price: "5.00" },
  { id: 2, name: "500 Credits", price: "20.00" },
  { id: 3, name: "1000 Credits", price: "35.00" },
];

export default function ShopPage() {
  const { address } = useAccount();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const buy = async (price: string) => {
    if (!address) return;
    setLoadingId(1); // demo
    try {
      // In real arc-commerce this creates a developer wallet charge + credits user in Supabase
      toast.success(`Purchased ${price} USDC worth of credits!`);
    } catch (e) {
      toast.error('Purchase failed');
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Shop Credits</h1>
      {products.map(p => (
        <div key={p.id} className="bg-zinc-900 p-6 rounded-3xl mb-4 flex justify-between items-center">
          <div>
            <p className="font-medium">{p.name}</p>
            <p className="text-emerald-400">{p.price} USDC</p>
          </div>
          <button
            onClick={() => buy(p.price)}
            disabled={!!loadingId}
            className="bg-white text-black px-8 py-3 rounded-2xl font-bold"
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}
