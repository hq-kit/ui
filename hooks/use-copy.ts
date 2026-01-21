'use client'
import type { ButtonProps } from 'react-aria-components'
import { useCallback, useEffect, useRef, useState } from 'react'

export function useCopyButton(onCopy: () => void): [checked: boolean, onClick: ButtonProps['onPress']] {
  const [checked, setChecked] = useState(false)
  const timeoutRef = useRef<number | null>(null)
  const callbackRef = useRef(onCopy)
  callbackRef.current = onCopy

  const onClick: ButtonProps['onPress'] = useCallback(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      setChecked(false)
    }, 1500)
    callbackRef.current()
    setChecked(true)
  }, [])

  // Avoid updates after being unmounted
  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  return [checked, onClick]
}
