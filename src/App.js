// import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Pool from './components/pool/pool';
import Staking from './components/staking/staking';
import Action from './components/action/action';
import Work from './components/work/work';
import StakingPool from './components/stakingpoop/StakingPool';
import Footer from './components/footer/footer';
// import HamburgerMenu from './components/hamburgerMenu/HamburgerMebu';
// import Stakingpool from './components/stakingpool/stakingpool';



function App() {
  return (
  <div className='wed'>
    {/* <h1 className="text-3x font-bold underline"> */}
      <Navbar />
      {/* <HamburgerMenu/> */}
      <Hero />
      <Pool />
      <Staking />
      <Action />
      <Work />
      <StakingPool/>
      <Footer/>
      {/* <Stakingpool/> */}
    {/* Hello world! */}
    {/* <Footer /> */}
  {/* </h1> */}
  </div>
  );
}

export default App;
