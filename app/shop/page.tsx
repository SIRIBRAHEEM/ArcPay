'use client';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { circleClient } from '@/lib/circle';
import { toast } from 'sonner';

const products = [
  { id: 1, name: "100 Credits", price: "5.00" },
  { id: 2, name: "500 Credits", price: "20.00" },
  { id: 3, name: "1000 Credits", price: "35.00" },
];

export default function ShopPage() {
  const { address } = useAccount();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const buy = async (price: string, productName: string) => {
    if (!address) {
      toast.error("Please connect your wallet first");
      return;
    }
    setLoadingId(1);
    try {
      // Real arc-commerce flow would create a charge here
      // For demo we just log success (you can expand later)
      toast.success(`✅ Purchased ${productName} for ${price} USDC!`);
      console.log("🛒 Shop purchase successful – credits would be added via Supabase here");
    } catch (e: any) {
      toast.error(e.message || "Purchase failed");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Shop Credits</h1>
      {products.map((p) => (
        <div key={p.id} className="bg-zinc-900 p-6 rounded-3xl mb-4 flex justify-between items-center">
          <div>
            <p className="font-medium">{p.name}</p>
            <p className="text-emerald-400">{p.price} USDC</p>
          </div>
          <button
            onClick={() => buy(p.price, p.name)}
            disabled={!!loadingId}
            className="bg-white text-black px-8 py-3 rounded-2xl font-bold hover:bg-emerald-400 transition"
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}
