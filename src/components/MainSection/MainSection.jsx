import MenImage from '../../images/image-hero-desktop.png';
import MenImageMobile from '../../images/image-hero-mobile.png';
import { ReactComponent as Databiz } from '../../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../../images/client-meet.svg';
import { ReactComponent as Maker } from '../../images/client-maker.svg';
import Button from '../Button';

const MainSection = () => {
  return (
    <section className='w-full flex-col xl:flex-row flex mt-6 h-screen justify-between'>
        <div className="relative order-2 xl:order-1 text-center xl:text-left w-full xl:w-2/4 mt-12 xl:mt-60">
            <h1 className="text-3xl xl:text-8xl font-black dark:text-white xl:whitespace-pre-line mt-6">{`Make\n remote work`}</h1>
            <p className="text-medium-gray dark:text-almost-white text-lg my-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum error voluptatem ipsa, corporis ullam commodi quas quis porro nemo facilis maiores facere incidunt laborum sed ipsum. Dolorum, similique fuga.
            </p>
            <Button isFilled={true}>Learn more</Button>
            <div className="flex justify-around xl:absolute bottom-2 w-full mt-20">
              <Databiz />
              <Audiophile />
              <Meet />
              <Maker />
            </div>
        </div>
        <div className="hidden xl:flex w-2/4 mt-20 xl:order-2">
          <img src={MenImage} alt="Men" />
        </div>
        <div className="flex xl:hidden w-full mt-20 justify-center mb-8 order-1">
          <img src={MenImageMobile} alt="Men" />
        </div>
    </section>
  )
}

export default MainSection