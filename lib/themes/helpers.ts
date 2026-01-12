import { cookies } from 'next/headers'
import 'server-only'
import type { ModeSettings } from '@/contexts/setting-context'

export const getSettingsFromCookie = async (): Promise<ModeSettings> => {
  try {
    const cookieStore = await cookies()
    const settings = cookieStore.get('hq-mode')

    if (!settings?.value) {
      return {
        mode: 'light'
      }
    }

    try {
      return JSON.parse(settings.value) as ModeSettings
    } catch {
      return {
        mode: 'light'
      }
    }
  } catch {
    return {
      mode: 'light'
    }
  }
}
