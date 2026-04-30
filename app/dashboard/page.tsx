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
    <div className="min-h-screen bg-[#f8f9fa] text-black">
      <div className="max-w-md mx-auto pt-12 px-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl">
              ⚡
            </div>
            <h1 className="text-4xl font-bold tracking-tight">ArcPay</h1>
          </div>
          <div className="text-sm text-zinc-500">ARC TESTNET</div>
        </div>

        {/* Hero Headline */}
        <div className="mb-12">
          <h2 className="text-5xl leading-[1.05] font-bold tracking-[-2px]">
            The simplest way<br />to pay with USDC
          </h2>
          <p className="text-zinc-600 mt-4 text-lg">
            Send, receive, and shop instantly on Arc Testnet
          </p>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10 border border-zinc-100">
          <p className="text-sm text-zinc-500 mb-1">AVAILABLE BALANCE</p>
          <p className="text-6xl font-semibold tracking-tighter">42.50</p>
          <p className="text-2xl text-emerald-600">USDC</p>
        </div>

        {/* Connect Wallet */}
        {!isConnected && (
          <div className="mb-10">
            <button
              onClick={handleConnect}
              className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:bg-zinc-800 transition"
            >
              Connect Wallet
            </button>
          </div>
        )}

        {isConnected && (
          <div className="flex justify-end mb-6">
            <button onClick={() => disconnect()} className="text-sm flex items-center gap-2 text-zinc-500 hover:text-black
