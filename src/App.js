import './App.css';
import AppRoutes from './routes';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>

  );
}

export default App;
