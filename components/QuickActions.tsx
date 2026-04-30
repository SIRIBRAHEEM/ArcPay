'use client';
import Link from 'next/link';
import { Send, QrCode, ShoppingBag } from 'lucide-react';

export function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <Link href="/send" className="bg-zinc-900 p-6 rounded-3xl text-center hover:bg-zinc-800">
        <Send className="mx-auto mb-2" />
        <p className="text-sm">Send</p>
      </Link>
      <Link href="/receive" className="bg-zinc-900 p-6 rounded-3xl text-center hover:bg-zinc-800">
        <QrCode className="mx-auto mb-2" />
        <p className="text-sm">Receive</p>
      </Link>
      <Link href="/shop" className="bg-zinc-900 p-6 rounded-3xl text-center hover:bg-zinc-800">
        <ShoppingBag className="mx-auto mb-2" />
        <p className="text-sm">Shop</p>
      </Link>
    </div>
  );
}
