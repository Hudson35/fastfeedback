import Head from 'next/head'
import Image from 'next/image'
import { Button, Heading, Text, Code } from "@chakra-ui/core";

import { useAuth } from '@/lib/auth'
import styles from '../styles/Home.module.css'

export default function Home() {
  const auth = useAuth();
  
  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <main >
        <Heading>Fast Feedback</Heading>

        <Text>
          Current user: <Code >{auth.user ? auth.user.email : 'None'}</Code>
        </Text>

        {
          auth.user ? (
            <Button onClick={(e) => auth.signout()}>Sign Out</Button>
          ) : (
            <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
          )
        }
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
