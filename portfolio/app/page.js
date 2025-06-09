import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Billy Richardson | Portfolio</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="text-center py-4 dark:bg-gray-900">
          <p className="dark:text-white">&copy; {new Date().getFullYear()} Billy Richardson. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
