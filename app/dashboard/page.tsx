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
    else toast.error("Please install MetaMask or WalletConnect");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent pointer-events-none" />

      <div className="max-w-md mx-auto px-6 pt-12 relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-3xl flex items-center justify-center text-3xl shadow-lg">
              ⚡
            </div>
            <div>
              <h1 className="text-5xl font-bold tracking-[-2px]">ArcPay</h1>
              <p className="text-emerald-400 text-sm -mt-1">ARC TESTNET</p>
            </div>
          </div>
          {isConnected && (
            <button onClick={() => disconnect()} className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm">
              <LogOut size={18} /> Disconnect
            </button>
          )}
        </div>

        {/* Hero + Balance */}
        <div className="mb-16 text-center">
          <h2 className="text-6xl font-bold tracking-[-3px] leading-none mb-6">
            The simplest way<br />to pay with USDC
          </h2>
          <div className="glass rounded-3xl p-10 inline-block">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">YOUR BALANCE</p>
            <p className="text-7xl font-semibold tracking-tighter text-white">42.50</p>
            <p className="text-3xl text-emerald-400">USDC</p>
          </div>
        </div>

        {/* Connect Prompt */}
        {!isConnected && (
          <div className="mb-12 text-center">
            <p className="text-zinc-400 mb-4">Connect wallet to start sending & receiving</p>
            <button
              onClick={handleConnect}
              className="w-full bg-white text-black font-semibold py-5 rounded-3xl text-xl hover:bg-emerald-400 transition-all active:scale-[0.98]"
            >
              Connect Wallet
            </button>
          </div>
        )}

        {/* Action Cards */}
        <div className="space-y-5">
          <Link href="/send" className="block group">
            <div className="glass rounded-3xl p-7 flex items-center gap-6 hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                <Send size={36} className="text-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-semibold">Send</p>
                <p className="text-zinc-400">Instant P2P with tags</p>
              </div>
              <ArrowRight className="text-zinc-400 group-hover:text-emerald-400 transition" />
            </div>
          </Link>

          <Link href="/receive" className="block group">
            <div className="glass rounded-3xl p-7 flex items-center gap-6 hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center">
                <QrCode size={36} className="text-cyan-400" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-semibold">Receive</p>
                <p className="text-zinc-400">Share QR code</p>
              </div>
              <ArrowRight className="text-zinc-400 group-hover:text-cyan-400 transition" />
            </div>
          </Link>

          <Link href="/shop" className="block group">
            <div className="glass rounded-3xl p-7 flex items-center gap-6 hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                <ShoppingBag size={36} className="text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-semibold">Shop</p>
                <p className="text-zinc-400">Buy credits & more</p>
              </div>
              <ArrowRight className="text-zinc-400 group-hover:text-purple-400 transition" />
            </div>
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
