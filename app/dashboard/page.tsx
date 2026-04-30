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
    <div className="min-h-screen bg-[#050505] text-white pb-24">
      <div className="max-w-md mx-auto px-6 pt-14">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-3xl shadow-inner">
              ⚡
            </div>
            <div>
              <h1 className="text-5xl font-bold tracking-[-2.5px] leading-none">ArcPay</h1>
              <p className="text-emerald-400 text-sm tracking-widest mt-1">ARC TESTNET</p>
            </div>
          </div>
          <div className="text-xs text-zinc-500 self-end">Private • Instant • Secure</div>
        </div>

        {/* Balance Card - Refined Spacing */}
        <div className="glass rounded-3xl p-10 mb-14 text-center relative overflow-hidden">
          <p className="uppercase tracking-[3px] text-xs text-zinc-400 mb-2">AVAILABLE BALANCE</p>
          <p className="text-[72px] leading-none font-semibold tracking-[-3px] mt-2">42.50</p>
          <p className="text-3xl text-emerald-400 mt-1">USDC</p>
          <div className="absolute -bottom-10 -right-6 text-[160px] opacity-5 pointer-events-none">💸</div>
        </div>

        {/* Connect Wallet */}
        {!isConnected && (
          <div className="glass rounded-3xl p-8 mb-12 text-center">
            <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
              Connect your wallet to send, receive and shop with USDC on Arc Testnet
            </p>
            <button
              onClick={handleConnect}
              className="w-full bg-white hover:bg-emerald-400 active:bg-emerald-500 text-black font-semibold py-4 rounded-2xl text-lg transition-all duration-200"
            >
              Connect Wallet
            </button>
          </div>
        )}

        {isConnected && (
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => disconnect()} 
              className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition"
            >
              <LogOut size={16} /> Disconnect
            </button>
          </div>
        )}

        {/* Quick Actions - Improved Spacing & Typography */}
        <div className="space-y-5">
          <Link href="/send" className="glass card-hover rounded-3xl p-7 flex items-center gap-6 group">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Send size={34} className="text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-semibold tracking-tight">Send USDC</p>
              <p className="text-zinc-400 text-[15px] mt-1">Instant transfer with tags</p>
            </div>
            <ArrowRight className="text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
          </Link>

          <Link href="/receive" className="glass card-hover rounded-3xl p-7 flex items-center gap-6 group">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <QrCode size={34} className="text-cyan-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-semibold tracking-tight">Receive</p>
              <p className="text-zinc-400 text-[15px] mt-1">Show QR code or link</p>
            </div>
            <ArrowRight className="text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
          </Link>

          <Link href="/shop" className="glass card-hover rounded-3xl p-7 flex items-center gap-6 group">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShoppingBag size={34} className="text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-semibold tracking-tight">Shop</p>
              <p className="text-zinc-400 text-[15px] mt-1">Buy credits with USDC</p>
            </div>
            <ArrowRight className="text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
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
