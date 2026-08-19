import Search from "../Search/Search";
import { useState, useEffect } from 'react';

export default function Weatherapp() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }

    async function weathercheck(param) {
        if (!param || !param.trim()) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e95448ec77bba00413e888aab1e8fb4c&units=metric`
            );

            const result = await response.json();

            if (result && result.cod !== '404') {
                setData(result);
            } else {
                setData(null);
            }
        } catch (error) {
            console.log(`${error} occurs`);
            setData(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        weathercheck('karachi');
    }, []);

    async function handleSearch() {
        weathercheck(search);
    }

    return (
        <div className="min-h-screen bg-slate-100 p-6">
            <div className="mx-auto max-w-3xl">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-slate-800">Weather App</h1>
                </div>

                <Search handleSearch={handleSearch} search={search} setSearch={setSearch} />

                {loading ? (
                    <div className="mt-6 text-center text-slate-600">Loading...</div>
                ) : data ? (
                    <div className="mt-6 rounded-3xl bg-white p-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-800">{data.name}, <span className="text-lg font-medium text-slate-500">{data.sys?.country}</span></h2>
                                <p className="mt-1 text-sm text-slate-500">{getCurrentDate()}</p>
                            </div>
                            <div className="rounded-full bg-sky-100 px-3 py-2 text-sm font-semibold text-sky-600">
                                {data.weather?.[0]?.main || 'Weather'}
                            </div>
                        </div>

                        <div className="mt-6 flex items-end gap-3">
                            <span className="text-5xl font-bold text-slate-800">{Math.round(data.main?.temp || 0)}</span>
                            <span className="pb-2 text-xl text-slate-500">°C</span>
                        </div>

                        <p className="mt-2 capitalize text-slate-600">{data.weather?.[0]?.description || ''}</p>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-2xl font-bold text-slate-800">{data.wind?.speed ?? 0} m/s</p>
                                <p className="text-sm text-slate-500">Wind Speed</p>
                            </div>

                            <div className="rounded-2xl bg-slate-50 p-4">
                                <p className="text-2xl font-bold text-slate-800">{data.main?.humidity ?? 0}%</p>
                                <p className="text-sm text-slate-500">Humidity</p>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}