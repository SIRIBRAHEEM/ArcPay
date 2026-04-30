'use client';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import { Send, QrCode, ShoppingBag, History, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const { address, isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-24">
      <div className="max-w-md mx-auto px-6 pt-10">
        {/* Logo & Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center text-2xl">
              ⚡
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">ArcPay</h1>
              <p className="text-xs text-emerald-400 -mt-1">ARC TESTNET</p>
            </div>
          </div>
          <div className="text-right text-xs text-zinc-500">
            Private • Instant • Secure
          </div>
        </div>

        {/* Balance */}
        <div className="glass rounded-3xl p-8 mb-10 text-center relative overflow-hidden">
          <p className="uppercase tracking-[3px] text-xs text-zinc-400 mb-2">Available Balance</p>
          <p className="text-6xl font-semibold tracking-tighter">42.50</p>
          <p className="text-2xl text-emerald-400 mt-1">USDC</p>
          <div className="absolute -bottom-6 -right-6 text-[120px] opacity-5">💸</div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <Link href="/send" className="glass card-hover rounded-3xl p-6 flex items-center gap-5 group">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
              <Send className="text-emerald-400" size={28} />
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold">Send</p>
              <p className="text-zinc-400 text-sm">Instant transfer with tags</p>
            </div>
            <ArrowRight className="opacity-40 group-hover:opacity-100 transition" />
          </Link>

          <Link href="/receive" className="glass card-hover rounded-3xl p-6 flex items-center gap-5 group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center">
              <QrCode className="text-cyan-400" size={28} />
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold">Receive</p>
              <p className="text-zinc-400 text-sm">Share QR or link</p>
            </div>
            <ArrowRight className="opacity-40 group-hover:opacity-100 transition" />
          </Link>

          <Link href="/shop" className="glass card-hover rounded-3xl p-6 flex items-center gap-5 group">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center">
              <ShoppingBag className="text-purple-400" size={28} />
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold">Shop</p>
              <p className="text-zinc-400 text-sm">Buy credits & more</p>
            </div>
            <ArrowRight className="opacity-40 group-hover:opacity-100 transition" />
          </Link>
        </div>

        {isConnected && address && (
          <p className="text-center mt-12 text-[10px] text-zinc-600 font-mono break-all px-4">
            {address}
          </p>
        )}
      </div>
    </div>
  );
}
