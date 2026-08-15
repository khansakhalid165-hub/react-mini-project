import useLocalStorage from "./Uselocalstorage"

export default function Light_dark() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    const isDark = theme === 'dark'

    function handleToggleTheme() {
        setTheme(isDark ? 'light' : 'dark')
    }

    return (
        <div
            className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
                isDark ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'
            }`}
        >
            <div
                className={`flex flex-col items-center gap-4 rounded-2xl p-8 shadow-md transition-colors duration-300 ${
                    isDark ? 'bg-slate-800' : 'bg-white'
                }`}
            >
                <p className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    Hello world
                </p>

                <button
                    onClick={handleToggleTheme}
                    className={`rounded-full px-5 py-2.5 font-medium transition duration-200 ${
                        isDark
                            ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                    {isDark ? 'Light Theme' : 'Dark Theme'}
                </button>
            </div>
        </div>
    )
}