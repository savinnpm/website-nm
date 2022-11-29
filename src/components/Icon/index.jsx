import Placeholder from "./variants/placeholder";
import ArrowNarrowRight from "./variants/arrow-narrow-right";
import ArrowRight from "./variants/arrow-right";
import ArrowLeft from "./variants/arrow-left";
import MoonStar from "./variants/moon-star";
import MoonStarFilled from "./variants/moon-star-filled";
import Sun from "./variants/sun";
import SunFilled from "./variants/sun-filled";
import LinkExternal01 from "./variants/link-external-01";
import XClose from "./variants/x-close";
import Menu01 from "./variants/menu-01";
import Discord from "./variants/social/discord";

export const Icon = ({size, variant}) => {
  let IconComponent = null
  
  if (variant == 'placeholder') {
    IconComponent = Placeholder
  }
  
  if (variant == 'arrow-narrow-right') {
    IconComponent = ArrowNarrowRight
  }
  
  if (variant == 'arrow-right') {
    IconComponent = ArrowRight
  }
  
  if (variant == 'arrow-left') {
    IconComponent = ArrowLeft
  }
  
  if (variant == 'moon-star') {
    IconComponent = MoonStar
  }
  
  if (variant == 'moon-star-filled') {
    IconComponent = MoonStarFilled
  }
  
  if (variant == 'sun') {
    IconComponent = Sun
  }
  
  if (variant == 'sun-filled') {
    IconComponent = SunFilled
  }
  
  if (variant == 'link-external-01') {
    IconComponent = LinkExternal01
  }
  
  if (variant == 'x-close') {
    IconComponent = XClose
  }
  
  if (variant == 'menu-01') {
    IconComponent = Menu01
  }
  
  if (variant == 'discord') {
    IconComponent = Discord
  }
  
  return IconComponent ? (
    <IconComponent width={size} height={size}/>
  ) : null
}