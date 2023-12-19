import './App.css';
import CalculatorContainer from './components/CalculatorContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoBar from './components/InfoBar';

function App() {
  return (
    <>

      <Header />
      <InfoBar
        title="Para você que é MEI
        ou quer se tornar MEI, calcule o valor da sua hora de trabalho:"
      />

      {/* <InfoBar
        title="Calcule o valor a ser cobrado para um projeto:"
      /> */}

      <CalculatorContainer />

      <Footer />

    </>
  );
}

export default App;
