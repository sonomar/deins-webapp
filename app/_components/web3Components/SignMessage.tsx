"use client"

import { useSignMessage } from 'wagmi'
export default function SignMessage() {
    const { signMessage } = useSignMessage()

    return <button onClick={() => signMessage({ message: 'hello world' })}>Sign message</button>
  }