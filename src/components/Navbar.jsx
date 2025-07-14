import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-500 dark:bg-gray-900 text-white dark:text-gray-200 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">MyReactShop</h1>
      <button
        onClick={toggleTheme}
        className="bg-white text-blue-500 dark:bg-gray-700 dark:text-white px-4 py-2 rounded transition duration-300 hover:scale-105"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
}

export default Navbar;


