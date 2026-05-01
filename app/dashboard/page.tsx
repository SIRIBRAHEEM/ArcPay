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
    const metaMask = connectors.find((c) => 
      c.name.toLowerCase().includes('metamask') || c.name.includes('Injected')
    );
    if (metaMask) connect({ connector: metaMask });
    else toast.error("Please install MetaMask or another wallet");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent pointer-events-none" />

      <div className="max-w-md mx-auto px-6 pt-14 relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-3xl flex items-center justify-center text-3xl shadow-2xl">
              ⚡
            </div>
            <h1 className="text-5xl font-bold tracking-[-3px]">ArcPay</h1>
          </div>
          <div className="text-xs text-zinc-400">ARC TESTNET</div>
        </div>

        {/* Hero Headline */}
        <div className="mb-16">
          <h2 className="text-6xl font-bold tracking-[-3px] leading-none">
            Private payments<br />made easy
          </h2>
          <p className="text-xl text-zinc-400 mt-6">
            Send, receive and shop with USDC instantly
          </p>
        </div>

        {/* Balance */}
        <div className="glass rounded-3xl p-10 mb-16 text-center">
          <p className="uppercase text-xs tracking-widest text-zinc-400 mb-3">AVAILABLE BALANCE</p>
          <p className="text-7xl font-semibold tracking-[-4px]">42.50</p>
          <p className="text-4xl text-emerald-400 mt-2">USDC</p>
        </div>

        {/* Connect Wallet */}
        {!isConnected && (
          <div className="mb-12">
            <button
              onClick={handleConnect}
              className="w-full py-5 bg-white text-black rounded-3xl text-xl font-semibold hover:bg-emerald-400 transition-all active:scale-95"
            >
              Connect Wallet
            </button>
          </div>
        )}

        {isConnected && (
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => disconnect()} 
              className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm"
            >
              <LogOut size={18} /> Disconnect
            </button>
          </div>
        )}

        {/* Quick Actions */}
        <div className="space-y-5">
          <Link href="/send" className="glass card-hover rounded-3xl p-7 flex items-center gap-6">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
              <Send size={36} className="text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-semibold">Send USDC</p>
              <p className="text-zinc-400">Instant with tags</p>
            </div>
            <ArrowRight className="text-zinc-400" />
          </Link>

          <Link href="/receive" className="glass card-hover rounded-3xl p-7 flex items-center gap-6">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center">
              <QrCode size={36} className="text-cyan-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-semibold">Receive</p>
              <p className="text-zinc-400">Show QR code</p>
            </div>
            <ArrowRight className="text-zinc-400" />
          </Link>

          <Link href="/shop" className="glass card-hover rounded-3xl p-7 flex items-center gap-6">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center">
              <ShoppingBag size={36} className="text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-semibold">Shop</p>
              <p className="text-zinc-400">Buy with USDC</p>
            </div>
            <ArrowRight className="text-zinc-400" />
          </Link>
        </div>

        {isConnected && address && (
          <p className="text-center text-[10px] text-zinc-600 mt-16 font-mono break-all">
            {address}
          </p>
        )}
      </div>
    </div>
  );
}
