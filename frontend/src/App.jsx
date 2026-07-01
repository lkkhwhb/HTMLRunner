import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileTab, setMobileTab] = useState('editor');

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`h-screen w-full flex flex-col ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <header className="h-14 border-b dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between px-4 shrink-0 relative z-50">
        <div className="font-bold text-lg tracking-wide">HTML Runner</div>
        
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg py-1">
              <button 
                onClick={toggleTheme}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Change theme ({darkMode ? 'Light' : 'Dark'})
              </button>
              
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                Deployments
              </button>
              
              <div 
                className="relative"
                onMouseEnter={() => setIsWorkspaceOpen(true)}
                onMouseLeave={() => setIsWorkspaceOpen(false)}
              >
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center transition-colors">
                  Manage Workspace
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {isWorkspaceOpen && (
                  <div className="absolute right-full top-0 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg py-1 mr-1">
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Export as .zip
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      Import Zip
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden pb-16 md:pb-0 relative z-0">
        <div className={`w-full md:w-1/2 h-full bg-white dark:bg-gray-900 md:border-r dark:border-gray-700 ${mobileTab === 'preview' ? 'block' : 'hidden md:block'}`}>
        </div>

        <div className={`w-full md:w-1/2 h-full bg-gray-50 dark:bg-gray-800 ${mobileTab === 'editor' ? 'block' : 'hidden md:block'}`}>
        </div>
        
        <div className={`w-full h-full bg-white dark:bg-gray-900 p-6 ${mobileTab === 'settings' ? 'block' : 'hidden'}`}>
          <h2 className="text-xl font-bold mb-4">Settings Menu</h2>
        </div>
      </main>

      <nav className="md:hidden fixed bottom-0 w-full h-16 bg-white dark:bg-gray-800 border-t dark:border-gray-700 flex z-50">
        <button 
          onClick={() => setMobileTab('editor')}
          className={`flex-1 flex flex-col items-center justify-center transition-colors ${mobileTab === 'editor' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="text-xs font-medium">Editor</span>
        </button>
        
        <button 
          onClick={() => setMobileTab('preview')}
          className={`flex-1 flex flex-col items-center justify-center transition-colors ${mobileTab === 'preview' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-xs font-medium">Preview</span>
        </button>
        
        <button 
          onClick={() => setMobileTab('settings')}
          className={`flex-1 flex flex-col items-center justify-center transition-colors ${mobileTab === 'settings' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs font-medium">Settings</span>
        </button>
      </nav>
    </div>
  );
}

export default App;