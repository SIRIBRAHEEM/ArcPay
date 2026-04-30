'use client';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import { Send, QrCode, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const { address, isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-24">
      <div className="max-w-md mx-auto px-6 pt-10">
        {/* Header - exact AnomaPay style */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
              ⚡
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">ArcPay</h1>
              <p className="text-xs text-emerald-400 -mt-1">ARC TESTNET</p>
            </div>
          </div>
          <div className="text-xs text-zinc-500">Private • Instant</div>
        </div>

        {/* Balance Card */}
        <div className="glass rounded-3xl p-8 mb-10 text-center relative overflow-hidden">
          <p className="uppercase text-xs tracking-[2px] text-zinc-400 mb-1">Available Balance</p>
          <p className="text-7xl font-semibold tracking-tighter">42.50</p>
          <p className="text-3xl text-emerald-400 mt-1">USDC</p>
          <div className="absolute -bottom-8 -right-8 text-[140px] opacity-5 pointer-events-none">💸</div>
        </div>

        {/* Wallet Connection Prompt */}
        {!isConnected && (
          <div className="glass rounded-3xl p-5 mb-8 text-center">
            <p className="text-sm text-zinc-400 mb-3">Connect wallet to send USDC on Arc Testnet</p>
            <w3m-button />
          </div>
        )}

        {/* Quick Actions - exact AnomaPay layout */}
        <div className="space-y-4">
          <Link href="/send" className="glass card-hover rounded-3xl p-6 flex items-center gap-5 group">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Send className="text-emerald-400" size={28} />
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold">Send USDC</p>
              <p className="text-zinc-400 text-sm">With tags • Instant</p>
            </div>
            <ArrowRight className="text-zinc-400 group-hover:text-white transition" />
          </Link>

          <Link href="/receive" className="glass card-hover rounded-3xl p-6 flex items-center gap-5 group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <QrCode className="text-cyan-400" size={28} />
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold">Receive</p>
              <p className="text-zinc-400 text-sm">Show QR code</p>
            </div>
            <ArrowRight className="text-zinc-400 group-hover:text-white transition" />
          </Link>

          <Link href="/shop" className="glass card-hover rounded-3xl p-6 flex items-center gap-5 group">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="text-purple-400" size={28} />
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold">Shop</p>
              <p className="text-zinc-400 text-sm">Buy with USDC</p>
            </div>
            <ArrowRight className="text-zinc-400 group-hover:text-white transition" />
          </Link>
        </div>

        {isConnected && address && (
          <p className="text-center text-[10px] text-zinc-600 font-mono mt-12 break-all">
            {address}
          </p>
        )}
      </div>
    </div>
  );
}
