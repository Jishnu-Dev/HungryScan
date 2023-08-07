import { Card, StyledAction, StyledBody } from 'baseui/card'
import { Fragment, useState } from 'react'
import { Heading, HeadingLevel } from 'baseui/heading'
import { ParagraphSmall, ParagraphXSmall } from 'baseui/typography'

import { Button } from 'baseui/button'
import { Input } from 'baseui/input'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  return (
    <Fragment>
      <div
        className={classNames({
          'min-h-screen w-screen flex flex-col justify-center items-center p-10': true,
          'bg-black': isDark,
          'bg-[url("/images/bg-pattern.jpg")] bg-repeat bg-contain': !isDark
        })}
        // style={{
        //   backgroundImage: isDark ? 'url("/images/bg-pattern.jpg")' : 'none'
        // }}
      >
        <div className="w-full bg-white bg-gradient-to-r from-orange-100 via-yellow-400 to-orange-200 p-10 rounded-2xl">
          <div className="flex justify-between">
            <div>
              <HeadingLevel>
                <Heading styleLevel={5}>
                  Welcome to Hungryscan Resto Cafe
                </Heading>
                <ParagraphSmall>
                  Order your menu without waiting for the waiter
                </ParagraphSmall>
              </HeadingLevel>
            </div>
            <div className="flex space-x-3">
              <Button
                kind="secondary"
                onClick={() => {
                  setIsDark(state => !state)
                }}>
                Dark Mode
              </Button>
              <Button>Call Waiter</Button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-flow-row gap-3 mt-10">
          <Input
            name="foodSearch"
            placeholder="Search on the menu"
            endEnhancer={
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#000000"
                  fillRule="evenodd"
                  d="M14.385 15.446a6.751 6.751 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06l-5.156-5.155ZM6.46 13.884a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004Z"
                  clipRule="evenodd"></path>
              </svg>
            }
          />
          <div className="h-full overflow-y-scroll grid grid-cols-1 md:grid-cols-2 gap-3">
            {[...Array(4)].map((item, i) => (
              <Card
                key={i}
                overrides={{ Root: { style: { width: '328px' } } }}
                headerImage={
                  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
                }
                title="Mixed Vegetable Salad">
                <StyledBody>
                  Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                  ornare faucibus ex, non facilisis nisl.
                </StyledBody>
                <StyledAction>
                  <Button
                    // kind="secondary"
                    overrides={{ BaseButton: { style: { width: '100%' } } }}>
                    Add to Order
                  </Button>
                </StyledAction>
              </Card>
            ))}
          </div>
          <Button
            size="large"
            overrides={{
              BaseButton: {
                style: {
                  backgroundColor: '#E23744',
                  ':hover': {
                    backgroundColor: '#be2837'
                  }
                }
              }
            }}>
            Confirm Your Order
          </Button>
        </div>
      </div>

      <footer className="bg-black px-5 py-3 flex justify-between">
        <ParagraphXSmall color="#FFF">
          © {new Date().getFullYear()} HungryScan. All rights reserved.
        </ParagraphXSmall>
        <div className="flex space-x-3">
          <Link href="/about">
            <ParagraphXSmall color="FFF">About</ParagraphXSmall>
          </Link>
          <Link href="/privacy-policy">
            <ParagraphXSmall color="FFF">Privacy Policy</ParagraphXSmall>
          </Link>
          <Link href="/terms">
            <ParagraphXSmall color="FFF">Terms and Conditions</ParagraphXSmall>
          </Link>
        </div>
      </footer>
    </Fragment>
  )
}
