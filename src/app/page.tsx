'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Modal from './components/modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <main className={styles.main}>
      <h1>Rust damage calculator</h1>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(prevState => !prevState)}>
        <section>
          <h2 className="text-2xl font-bold">Rust damage calculator</h2>
        </section>
      </Modal>
    </main>
  )
}
