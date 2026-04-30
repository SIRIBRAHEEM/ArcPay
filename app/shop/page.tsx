'use client';
import { toast } from 'sonner';

export default function ShopPage() {
  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">🛒 Shop</h1>
      <p className="text-zinc-400">Shopping with USDC coming soon!<br />Core P2P payments are ready.</p>
      <button 
        onClick={() => toast.success("Demo purchase – full shop in next update")}
        className="mt-8 bg-emerald-500 text-white px-8 py-4 rounded-2xl"
      >
        Try Demo Buy
      </button>
    </div>
  );
}
