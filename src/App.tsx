import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Funcionalidades from './components/Funcionalidades'
import Tecnologias from './components/Tecnologias'
import Footer from './components/Footer'

// App.tsx — ponto de entrada da aplicação.
// Compõe todos os componentes da página na ordem correta.
// O componente OrdemServicoForm é renderizado dentro de
// Funcionalidades, quando o usuário clica em "Cadastrar".

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Funcionalidades />   {/* ← contém o OrdemServicoForm */}
        <Tecnologias />
      </main>
      <Footer />
    </>
  )
}

export default App
