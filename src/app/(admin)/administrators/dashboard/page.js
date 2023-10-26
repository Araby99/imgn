"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default () => {
    const router = useRouter();
    router.push("dashboard/home")
    return <></>
}
