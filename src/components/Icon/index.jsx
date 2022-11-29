import SvgTwitter from "./variants/Socials/White/Twitter";
import {
  Copy01,
  Link04,
  LinkExternal01,
  Menu01,
  Placeholder,
  Target04,
  Target05,
  XClose,
} from "./variants/General";
import {
  ArrowLeft,
  ArrowNarrowRight,
  ArrowRight,
  ArrowSquareUpRight,
  ChevronDown,
  ChevronRight,
} from "./variants/Arrows";
import { MoonStar, Sun } from "./variants/Weather";
import {
  Discord,
  Facebook,
  GitHub,
  LinkedIn,
  Medium,
  Reddit,
  Telegram,
  Twitter,
  YouTube,
} from "./variants/Socials/White";
import { CodeSquare01 } from "./variants/Development";
import { Bell02 } from "./variants/AlertsAndFeedback";
import { ChartBreakoutSquare } from "./variants/Charts";
import { Cube01, Cube02, Star02 } from "./variants/Shapes";
import { Globe01 } from "./variants/Education";
import { Play } from "./variants/MediaDevices";
import { Clock } from "./variants/Time";
import { MarkerPin01 } from "./variants/MapsAndTravel";
import { FaceSmile, User01 } from "./variants/Users";

export const Icon = ({ size, variant }) => {
  let IconComponent = null;

  if (variant == "placeholder") {
    IconComponent = Placeholder;
  }

  if (variant == "arrow-narrow-right") {
    IconComponent = ArrowNarrowRight;
  }

  if (variant == "arrow-right") {
    IconComponent = ArrowRight;
  }

  if (variant == "arrow-left") {
    IconComponent = ArrowLeft;
  }

  if (variant == "moon-star") {
    IconComponent = MoonStar;
  }

  if (variant == "sun") {
    IconComponent = Sun;
  }

  if (variant == "link-external-01") {
    IconComponent = LinkExternal01;
  }

  if (variant == "x-close") {
    IconComponent = XClose;
  }

  if (variant == "menu-01") {
    IconComponent = Menu01;
  }

  if (variant == "discord") {
    IconComponent = Discord;
  }

  if (variant == "twitter") {
    IconComponent = Twitter;
  }

  if (variant == "telegram") {
    IconComponent = Telegram;
  }

  if (variant == "github") {
    IconComponent = GitHub;
  }

  if (variant == "linkedin") {
    IconComponent = LinkedIn;
  }

  if (variant == "medium") {
    IconComponent = Medium;
  }

  if (variant == "youtube") {
    IconComponent = YouTube;
  }

  if (variant == "reddit") {
    IconComponent = Reddit;
  }

  if (variant == "code-square-one") {
    IconComponent = CodeSquare01;
  }

  if (variant == "bell-02") {
    IconComponent = Bell02;
  }

  if (variant == "chart-breakout-square") {
    IconComponent = ChartBreakoutSquare;
  }

  if (variant == "cube-02") {
    IconComponent = Cube02;
  }

  if (variant == "cube-01") {
    IconComponent = Cube01;
  }

  if (variant == "globe-01") {
    IconComponent = Globe01;
  }

  if (variant == "play") {
    IconComponent = Play;
  }

  if (variant == "link-04") {
    IconComponent = Link04;
  }

  if (variant == "facebook") {
    IconComponent = Facebook;
  }

  if (variant == "clock") {
    IconComponent = Clock;
  }

  if (variant == "marker-pin-01") {
    IconComponent = MarkerPin01;
  }

  if (variant == "users-01") {
    IconComponent = User01;
  }

  if (variant == "chevron-down") {
    IconComponent = ChevronDown;
  }

  if (variant == "target-05") {
    IconComponent = Target05;
  }

  if (variant == "target-04") {
    IconComponent = Target04;
  }

  if (variant == "stars-02") {
    IconComponent = Star02;
  }

  if (variant == "face-smile") {
    IconComponent = FaceSmile;
  }

  if (variant == "chevron-right") {
    IconComponent = ChevronRight;
  }

  if (variant == "arrow-square-up-right") {
    IconComponent = ArrowSquareUpRight;
  }

  if (variant == "copy-01") {
    IconComponent = Copy01;
  }

  return IconComponent ? <IconComponent width={size} height={size} /> : null;
};
