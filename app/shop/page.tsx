'use client';
import { useAccount } from 'wagmi';
import { toast } from 'sonner';

export default function ShopPage() {
  const { address } = useAccount();

  const buy = (price: string, name: string) => {
    if (!address) {
      toast.error("Please connect wallet first");
      return;
    }
    toast.success(`✅ Demo purchase: ${name} for ${price} USDC`);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">🛒 Shop</h1>
      <p className="text-zinc-400 text-center mb-8">Buy credits with USDC on Arc Testnet</p>

      <div className="space-y-4">
        {[
          { name: "100 Credits", price: "5.00" },
          { name: "500 Credits", price: "20.00" },
          { name: "1000 Credits", price: "35.00" },
        ].map((item, i) => (
          <div key={i} className="bg-zinc-900 p-6 rounded-3xl flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-emerald-400 text-xl font-bold">{item.price} USDC</p>
            </div>
            <button 
              onClick={() => buy(item.price, item.name)}
              className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:bg-emerald-400 transition"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
