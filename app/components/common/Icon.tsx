import { Icon } from '@iconify/react'
import { getIconOptions } from '../../utils/Icon'

interface IconProps {
  tag?: string
  customClass?: string | Record<string, boolean> | string[]
  customStyle?: Record<string, string>
}

export default function MyIcon({ tag, customClass, customStyle }: IconProps) {
  const iconConfig = getIconOptions(tag)

  const classNames = Array.isArray(customClass)
    ? [iconConfig.class, ...customClass].filter(Boolean).join(' ')
    : [iconConfig.class, customClass].filter(Boolean).join(' ')

  const style = { color: iconConfig.color ?? 'currentColor', ...customStyle }

  if (iconConfig.icon) {
    return <Icon icon={iconConfig.icon} className={classNames} style={style} />
  }

  if (iconConfig.url) {
    return <img src={iconConfig.url} className={`${classNames} inline-block`} style={style} />
  }

  return null
}
