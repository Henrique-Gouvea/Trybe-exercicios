import './App.css';
import Hello from './components/Hello';
import Image from './components/Image';
import Album from './components/Album';
import { album01, album02 } from './components/Objeto';

function App() {
  return (
    <header>
      <Hello firstName="Henrique" lastName="Gouvea"/>
      <Image source="https://s2.glbimg.com/kY7AbKs0CqXQuNd3Q65Ld-oIb58=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/A/S/EFBSAgSqyRRFei3zG3Cg/1.jpg" text="NFT monkey"/>
      <Album albuns= {album01, album02}/>
    </header>
  );
}

export default App;
