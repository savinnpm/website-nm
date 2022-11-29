import { Hero } from "./01-Hero"
import { SecuringApps } from "./02-SecuringApps";
import { WhatsNew } from "./03-WhatsNew";
import { ParametricCovers } from "./04-ParametricCovers";
import { LetsBuidl } from "./05-LetsBuidl";
import { Partners } from "./06-Partners";
import { NftCollection } from "./07-NftCollection";

export const Home = ({blogPosts}) => {
  return (
    <>
      <Hero />

      <SecuringApps/>

      <WhatsNew blogPosts={blogPosts}/>

      <ParametricCovers/>

      <LetsBuidl/>

      <Partners/>

      <NftCollection/>      
    </>
  )
}