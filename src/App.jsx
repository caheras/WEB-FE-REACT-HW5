import Header from './components/Header';
import Introduction from './components/Introduction';
import SWOT from './components/SWOT';
import Identity from './components/Identity';
import Objectives from './components/Objectives';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-#1b191a text-white min-h-screen">
      <Header />
      <main className="w-full px-4 lg:px-12">
        <Introduction />
        <SWOT />
        <Identity />
        <Objectives />
      </main>
      <Footer />
    </div>
  );
}

export default App;
