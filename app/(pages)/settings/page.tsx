import UserAccount from '@/app/components/web3Components/UserAccount'
import SignMessage from '@/app/components/web3Components/SignMessage'
import React from 'react'

export default function Settings() {
  return (
    <>
    <div className='flex-center'>Settings</div>
    <div></div>
    <UserAccount />
    <SignMessage/>
    </>
  )
}
