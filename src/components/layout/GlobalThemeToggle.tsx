import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeWrapper'

export default function GlobalThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-yellow-500" />
      ) : (
        <Moon className="w-4 h-4 text-gray-600" />
      )}
      <span className="text-sm font-medium">{isDark ? 'Clair' : 'Sombre'}</span>
    </button>
  )
}
