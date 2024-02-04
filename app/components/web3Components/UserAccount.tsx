"use client"

import { useAccount } from 'wagmi'
export default function UserAccount() {
    const { address, isConnecting, isDisconnected } = useAccount()

    if (isConnecting) return <div>Connecting…</div>
    if (isDisconnected) return <div>Disconnected</div>
    return <div>{address}</div>
  }