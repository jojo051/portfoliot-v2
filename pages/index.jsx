import Layout from '../component/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Layout page="My portfoliot - accueil">
        <div>
          <Image
          src="/myhead.png"
          alt="Rodier joel" 
          width="100"
          height="100"
          />
        </div>
        <div>
          <h2> BIENVENU </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officiis dolores, amet nemo commodi adipisci rem voluptate cumque deserunt tenetur cum aliquam repudiandae? Ad, perspiciatis! Quae commodi quam labore vero?</p>
        </div>
        <div>
          <h2>SKILL</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVA SCRIP</li>
            <li>REACT</li>
            <li>NODE JS</li>
          </ul>
        </div>
        <div>
        </div>
      </Layout>
    </div>
  )
}
