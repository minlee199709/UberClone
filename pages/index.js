import {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/*Header*/}
        <Header>
          {/*self closing tag*/}
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
          <Profile>
            <Name>Hyemin Lee</Name>
            <UserImage src="data:image/jpeg;base64,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"/>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`
const ActionItems = tw.div`
  flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-20 text-sm
`
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div`
flex 
`
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl font-bold
`
const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 font-bold
`