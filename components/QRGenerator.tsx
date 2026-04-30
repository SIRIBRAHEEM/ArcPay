'use client';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export default function QRGenerator({ address, amount = '', tag = '' }: { address: string; amount?: string; tag?: string }) {
  const [qrUrl, setQrUrl] = useState('');
  const payload = `arcpay://pay?to=${address}&amount=${amount}&tag=${encodeURIComponent(tag)}`;

  useEffect(() => {
    QRCode.toDataURL(payload, { width: 280, margin: 2 }).then(setQrUrl);
  }, [payload]);

  return (
    <div className="bg-white p-4 rounded-3xl mx-auto w-fit">
      {qrUrl && <img src={qrUrl} alt="Pay me" className="rounded-2xl" />}
    </div>
  );
}
