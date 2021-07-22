/** @jsx jsx */
import * as React from "react"
import { keyframes, css, jsx } from "@emotion/react"

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`

const leftRight = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(5px);
}
`
const leftRightWide = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(15px);
}
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const leftRightAnimation = css`
  ${leftRight} 8s ease-in-out infinite alternate;
`
const leftRightWideAnimation = css`
  ${leftRight} 5s ease-in-out infinite alternate;
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

export function UpDown({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${upDownAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  )
}

export function UpDownWide({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${upDownWideAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  )
}

export function LeftRight({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${leftRightAnimation};
        font-size: 2em
      `}
    >
      {children}
    </div>
  )
}

export function LeftRightWide({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        animation: ${leftRightWideAnimation};
        font-size: 1em
      `}
    >
      {children}
    </div>
  )
}

export const waveAnimation = (length: string) => `${wave} ${length} linear infinite alternate`

