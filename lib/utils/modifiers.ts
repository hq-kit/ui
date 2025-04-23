import { titleCase } from 'usemods'

const goodTitle = (str: string): string => titleCase(str.replaceAll('-', ' '))

export { goodTitle }
