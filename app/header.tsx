'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { motion } from 'framer-motion';
export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          opacity: { duration: 1.5 }
        }}
      >
        <img
          src="/me.jpeg"
          alt="Profile Picture"
          className="h-20 w-20 rounded-full object-cover mb-2"
        />
      </motion.div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <TextEffect as="span" preset="fade" per="char" delay={0.5}>
            Alexa Tran
          </TextEffect>
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Student, Engineer, Human
        </TextEffect>
      </div>
    </header>
  )
}
