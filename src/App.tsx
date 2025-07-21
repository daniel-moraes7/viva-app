import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Loading from './components/UI/Loading'

// Lazy loading das páginas para melhor performance
const Cgviva = lazy(() => import('./pages/Cgviva/Cgviva'))
const AplicativoViva = lazy(() => import('./pages/AplicativoViva/AplicativoVivaUnified'))
const VidaNoTransito = lazy(() => import('./pages/VidaNoTransito/VidaNoTransito'))
const Inqueritos = lazy(() => import('./pages/Inqueritos/Inqueritos'))
const BoletinsEpidemiologicos = lazy(() => import('./pages/BoletinsEpidemiologicos/BoletinsEpidemiologicos'))
const Infograficos = lazy(() => import('./pages/Infograficos/Infograficos'))
const SobreDesenvolvedores = lazy(() => import('./pages/SobreDesenvolvedores/SobreDesenvolvedores'))

// Componente de loading para páginas
const LoadingPage = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
    <Loading size="large" text="Carregando página..." />
  </div>
)

function App() {
  const location = useLocation()
  
  // Definir título baseado na rota
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return "Vigilância de Violência e Acidentes"
      case '/cgviva': return "Coordenação-Geral de Vigilância de Violências e Acidentes"
      case '/aplicativo-viva': return "Aplicativo VIVA"
      case '/vida-no-transito': return "Programa Vida no Trânsito"
      case '/inqueritos': return "Inquéritos de Saúde"
      case '/boletins-epidemiologicos': return "Boletins Epidemiológicos"
      case '/infograficos': return "Infográficos"
      case '/sobre-desenvolvedores': return "Sobre os Desenvolvedores"
      default: return "Vigilância de Violência e Acidentes"
    }
  }

  return (
    <Layout showMainHeader={true} title={getPageTitle()}>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cgviva" element={<Cgviva />} />
          <Route path="/aplicativo-viva" element={<AplicativoViva />} />
          <Route path="/vida-no-transito" element={<VidaNoTransito />} />
          <Route path="/inqueritos" element={<Inqueritos />} />
          <Route path="/boletins-epidemiologicos" element={<BoletinsEpidemiologicos />} />
          <Route path="/infograficos" element={<Infograficos />} />
          <Route path="/sobre-desenvolvedores" element={<SobreDesenvolvedores />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App