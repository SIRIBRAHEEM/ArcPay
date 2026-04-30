'use client';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import Link from 'next/link';
import { Send, QrCode, ShoppingBag, ArrowRight, LogOut } from 'lucide-react';
import { toast } from 'sonner';

export default function Dashboard() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = () => {
    const metaMask = connectors.find((c) => c.name.toLowerCase().includes('metamask') || c.name.includes('Injected'));
    if (metaMask) connect({ connector: metaMask });
    else toast.error("Please install MetaMask or another EVM wallet");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-24 overflow-hidden">
      <div className="max-w-md mx-auto px-6 pt-12">
        {/* Header - AnomaPay Style */}
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-3xl">
              ⚡
            </div>
            <div>
              <h1 className="text-5xl font-bold tracking-[-2px]">ArcPay</h1>
              <p className="text-emerald-400 text-sm -mt-1">ARC TESTNET</p>
            </div>
          </div>
          <div className="text-xs text-zinc-500">Private • Fast • Secure</div>
        </div>

        {/* Balance - Large & Premium */}
        <div className="glass rounded-3xl p-10 mb-12 text-center relative">
          <p className="uppercase tracking-[4px] text-xs text-zinc-400 mb-3">YOUR BALANCE</p>
          <p className="text-7xl font-semibold tracking-tighter">42.50</p>
          <p className="text-4xl text-emerald-400 mt-2">USDC</p>
          <div className="absolute bottom-0 right-6 text-[180px] opacity-5 pointer-events-none">💸</div>
        </div>

        {/* Connect Wallet Prompt */}
        {!isConnected && (
          <div className="glass rounded-3xl p-8 mb-10 text-center">
            <p className="text-zinc-400 mb-6">Connect your wallet to send and receive USDC on Arc Testnet</p>
            <button
              onClick={handleConnect}
              className="w-full bg-white hover:bg-emerald-400 active:bg-emerald-500 text-black font-semibold py-4.5 rounded-2xl text-lg transition-all duration-200"
            >
              Connect Wallet
            </button>
          </div>
        )}

        {isConnected && (
          <div className="flex justify-end mb-6">
            <button onClick={() => disconnect()} className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm">
              <LogOut size={18} /> Disconnect
            </button>
          </div>
        )}

        {/* Quick Actions - Clean & Spacious like AnomaPay */}
        <div className="space-y-4">
          <Link href="/send" className="glass card-hover rounded-3xl p-7 flex items-center gap-6 group">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Send size={32} className="text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-semibold">Send</p>
              <p className="text-zinc-400">Instant with tags</p>
            </div>
            <ArrowRight className="text-zinc-400 group-hover:translate-x-1 transition" />
          </Link>

          <Link href="/receive" className="glass card-hover rounded-3xl p-7 flex items-center gap-6 group">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <QrCode size={32} className="text-cyan-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-semibold">Receive</p>
              <p className="text-zinc-400">QR Code & Link</p>
            </div>
            <ArrowRight className="text-zinc-400 group-hover:translate-x-1 transition" />
          </Link>

          <Link href="/shop" className="glass card-hover rounded-3xl p-7 flex items-center gap-6 group">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShoppingBag size={32} className="text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-semibold">Shop</p>
              <p className="text-zinc-400">Buy with USDC</p>
            </div>
            <ArrowRight className="text-zinc-400 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {isConnected && address && (
          <p className="text-center mt-16 text-[10px] text-zinc-700 font-mono break-all px-4">
            {address}
          </p>
        )}
      </div>
    </div>
  );
}
