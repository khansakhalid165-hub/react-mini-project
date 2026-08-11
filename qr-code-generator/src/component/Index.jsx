import { useState } from 'react'
import QRCode from 'react-qr-code'

export default function Qrcode() {
    const [qrcode, setQrcode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateCode() {
        setQrcode(input.trim())
    }

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-3xl font-semibold">QR Code Generator</h1>
                <p className="text-sm text-slate-500">Enter a value and generate a QR code instantly.</p>

                <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        name="qr-code"
                        placeholder="Enter your value"
                        value={input}
                        className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-blue-500"
                    />
                    <button
                        disabled={!input.trim()}
                        onClick={handleGenerateCode}
                        className="rounded-lg bg-blue-600 px-4 py-3 font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                        Generate
                    </button>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <QRCode
                        id="qr-code-value"
                        value={qrcode || 'Enter a value'}
                        size={280}
                        bgColor="white"
                        fgColor="#0f172a"
                    />
                </div>
            </div>
        </div>
    )
}