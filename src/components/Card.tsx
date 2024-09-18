import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Switch from './Switch'
import SocialLinks from '../data/social_links.json'

export default function Card() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const handleSwitch = () => setIsDarkMode(!isDarkMode)

  return (
    <main className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-black/15 shadow-lg">
      <header>
        <div className="flex items-center justify-end gap-2">
          <Icon icon="ph:sun" width={20} height={20} color="#eab308" />
          <Switch isSwitched={isDarkMode} handleSwitch={handleSwitch} />
          <Icon icon="ph:moon" width={20} height={20} color="#3b82f6" />
        </div>

        <div className="mt-2">
          <img
            className="size-28 mx-auto"
            src="/images/profile_1_transparent.png"
            alt="My profile avatar"
          />
          <h1 className="text-center uppercase text-2xl font-bold mt-2">
            Miguel Terán
          </h1>
        </div>
      </header>

      <section className="mt-8 flex flex-col gap-4">
        {SocialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center justify-center gap-3 border rounded-md py-2 font-normal tracking-wider text-md"
          >
            <Icon icon={link.icon} width={20} height={20} />
            {link.name}
          </a>
        ))}
      </section>
    </main>
  )
}
