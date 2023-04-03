import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useGlobalContext } from './context';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenus from './Submenus';
import Hero from './Hero';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenus />
    </div>
  )
}

export default App;
