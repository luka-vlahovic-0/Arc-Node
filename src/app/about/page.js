import AbCto from '@/components/About/AbCto'
import AbHeader from '@/components/About/AbHeader'
import AbPrinciples from '@/components/About/AbPrinciples'
import AbSubHeader from '@/components/About/AbSubHeader'
import React from 'react'

export default function page() {
  return (
    <>
        <AbHeader />
        <AbSubHeader />
        <AbPrinciples />
        <AbCto />
    </>
  )
}
