import React, { useEffect, useState } from 'react';
import { currencyConverter } from '../APIs/api';
import currencies from '../APIs/Currencies.json'

const Converter = () => {

    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [fromAmount, setFromAmount] = useState("USD");
    const [toAmount, setToAmount] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [error, setError] = useState("");
    const handleConvert = async () => {
        setLoading(true)
        try {
            if (amount > 0) {
                const res = await currencyConverter(fromAmount, toAmount, amount);
                const { conversion_result } = res.data
                setConvertedAmount(conversion_result)
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error)
        }

    }
    const handleSwap = () => {
        setFromAmount(toAmount);
        setToAmount(fromAmount);
    };

    useEffect(() => {
        handleConvert();
    }, [fromAmount, toAmount, amount])

    return (
        <div className="min-h-screen flex items-center justify-center p-7 relative overflow-hidden">

            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg')] bg-cover bg-center bg-no-repeat blur-xs scale-110"></div>

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-sm border border-slate-200 p-8">

                <div className="mb-8">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Currency Converter</h2>
                    <p className="text-slate-500 text-sm mt-1">Enter amount and select currencies.</p>
                </div>

                <div className="space-y-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Amount</label>
                        <input
                            value={amount}
                            min={1}
                            onChange={(e) => setAmount(e.target.value)}
                            type="number"
                            placeholder="0.00"
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 font-medium rounded-xl p-3 outline-none focus:border-indigo-500 transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-end">

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1">From</label>
                            <select
                                onChange={(e) => setFromAmount(e.target.value)}
                                value={fromAmount}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl p-3 outline-none focus:border-indigo-500 cursor-pointer">
                                {currencies.map((currency, index) => (
                                    <option value={currency.currency} key={index}>
                                        {currency.currencyName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handleSwap}
                            className="mb-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-3 py-2 font-bold active:scale-95 transition"
                        >
                            ⇄
                        </button>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1">To</label>
                            <select
                                onChange={(e) => setToAmount(e.target.value)}
                                value={toAmount}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl p-3 outline-none focus:border-indigo-500 cursor-pointer">
                                {currencies.map((currency, index) => (
                                    <option value={currency.currency} key={index}>
                                        {currency.currencyName}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>

                    {
                        convertedAmount &&
                        <div className="mt-8 p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                            <p className="text-indigo-400 text-[10px] text-center uppercase font-black tracking-[0.2em] mb-1">Converted Amount</p>
                            <p className="text-indigo-900 font-black text-xl text-center">
                                {amount} <span className="text-sm font-bold opacity-60">{fromAmount}</span> = {convertedAmount} <span className="text-sm font-bold opacity-60">{toAmount}</span>
                            </p>
                        </div>
                    }
                    {
                        error &&
                        <p className='text-red-500 font-black  text-center'>{error.message}</p>
                    }

                </div>
            </div>
        </div >

    );
};

export default Converter;