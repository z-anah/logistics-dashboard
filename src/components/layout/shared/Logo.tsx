'use client'

// React Imports
import type { CSSProperties } from 'react'
import Image from 'next/image'

// Third-party Imports
import styled from '@emotion/styled'

// Component Imports
import MaterioLogo from '@core/svg/Logo'

// Config Imports
import themeConfig from '@configs/themeConfig'

type LogoTextProps = {
  color?: CSSProperties['color']
}

const LogoText = styled.span<LogoTextProps>`
  color: ${({ color }) => color ?? 'var(--mui-palette-text-primary)'};
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  margin-inline-start: 10px;
`

const Logo = ({ color }: { color?: CSSProperties['color'] }) => {
  return (
    <div className='flex items-center justify-center min-bs-[24px]'>
      <Image
        src='/images/logo.png'
        alt='Logo'
        width={40}
        height={40}
        priority
        style={{ display: 'flex' }}
      />
      <LogoText color={color}>{themeConfig.templateName}</LogoText>
    </div>
  )
}

export default Logo
