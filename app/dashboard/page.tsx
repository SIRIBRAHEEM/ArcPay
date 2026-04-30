'use client';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import { Send, QrCode, ShoppingBag, History, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const { address, isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-cyan-950 text-white pb-20">
      <div className="max-w-md mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              ArcPay
            </h1>
            <p className="text-cyan-400 text-sm">Arc Testnet • Instant USDC</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center text-xl">
            💸
          </div>
        </div>

        {/* Balance Card */}
        <div className="glass rounded-3xl p-8 mb-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
          <p className="text-sm text-cyan-300 tracking-widest">YOUR BALANCE</p>
          <p className="text-7xl font-bold mt-3 mb-1">42.50</p>
          <p className="text-2xl text-emerald-400">USDC</p>
          <p className="text-xs text-zinc-400 mt-4">on Arc Testnet</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <Link href="/send" className="group glass rounded-3xl p-6 hover:scale-105 transition-all duration-300 flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition">
              <Send size={32} className="text-emerald-400" />
            </div>
            <p className="font-semibold text-lg">Send</p>
            <p className="text-xs text-zinc-400">Instant P2P</p>
          </Link>

          <Link href="/receive" className="group glass rounded-3xl p-6 hover:scale-105 transition-all duration-300 flex flex-col items-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:-rotate-12 transition">
              <QrCode size={32} className="text-cyan-400" />
            </div>
            <p className="font-semibold text-lg">Receive</p>
            <p className="text-xs text-zinc-400">Show QR</p>
          </Link>

          <Link href="/shop" className="group glass rounded-3xl p-6 hover:scale-105 transition-all duration-300 flex flex-col items-center col-span-2">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4">
              <ShoppingBag size={32} className="text-purple-400" />
            </div>
            <p className="font-semibold text-lg">Shop Credits</p>
            <p className="text-xs text-zinc-400">Buy with USDC</p>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="glass rounded-3xl p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <History size={18} /> Recent Activity
          </h3>
          <div className="text-center py-8 text-zinc-400">
            Your tagged transactions will appear here
          </div>
        </div>

        {isConnected && address && (
          <p className="text-center text-[10px] text-zinc-500 mt-10 font-mono break-all">
            {address}
          </p>
        )}
      </div>
    </div>
  );
}
