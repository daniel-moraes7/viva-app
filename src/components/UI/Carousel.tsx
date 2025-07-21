import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- ÍCONES ---
// Ícones em SVG para evitar dependências externas e facilitar a estilização.
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// --- TIPOS ---
// Interface que define a estrutura de dados para cada item do carrossel.
interface CarouselItem {
  imagem: string;
  titulo: string;
  descricao: string;
  link: string;
}

// --- DADOS (COM NOVAS IMAGENS TEMÁTICAS) ---
// Dados que alimentam o carrossel, com novas imagens profissionais.
const carouselItemsData: CarouselItem[] = [
  {
    imagem: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
    titulo: "Aplicativo Viva",
    descricao: "Conheça a ferramenta para subsidiar o atendimento a vítimas de violência.",
    link: "/aplicativo-viva"
  },
  {
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    titulo: "Programa Vida no Trânsito",
    descricao: "Ações de vigilância e prevenção de lesões e mortes no trânsito.",
    link: "/vida-no-transito"
  },
  {
    imagem: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
    titulo: "Boletins Epidemiológicos",
    descricao: "Acesse as publicações de caráter técnico-científico da Cgviva.",
    link: "/boletins-epidemiologicos"
  },
  {
    imagem: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",
    titulo: "Cgviva",
    descricao: "Conheça a Coordenação-Geral de Vigilância de Violências e Acidentes.",
    link: "/cgviva"
  }
];

// --- CUSTOM HOOK: useCarousel ---
// Este hook encapsula toda a lógica do carrossel para manter os componentes limpos.
const useCarousel = (itemCount: number, autoplayInterval: number = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragTranslate, setDragTranslate] = useState(0);
  const [isAutoplayPaused, setAutoplayPaused] = useState(false);
  const autoplayTimerRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % itemCount);
  }, [itemCount]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };
  
  const pauseAutoplay = useCallback(() => {
    setAutoplayPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = window.setTimeout(() => setAutoplayPaused(false), autoplayInterval + 1000);
  }, [autoplayInterval]);

  const handleInteractionStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    pauseAutoplay();
  };

  const handleInteractionMove = (clientX: number, containerWidth: number) => {
    if (!isDragging) return;
    const diff = startX - clientX;
    setDragTranslate((diff / containerWidth) * 100);
  };

  const handleInteractionEnd = () => {
    if (!isDragging) return;
    if (Math.abs(dragTranslate) > 20) { // Limiar de 20%
      dragTranslate > 0 ? goToNext() : goToPrev();
    }
    setIsDragging(false);
    setDragTranslate(0);
  };
  
  useEffect(() => {
    if (isAutoplayPaused) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }
    autoplayTimerRef.current = window.setInterval(goToNext, autoplayInterval);
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [isAutoplayPaused, goToNext, autoplayInterval]);

  return {
    currentIndex,
    isDragging,
    dragTranslate,
    goTo,
    goToNext,
    goToPrev,
    pauseAutoplay,
    handleInteractionStart,
    handleInteractionMove,
    handleInteractionEnd
  };
};

// --- COMPONENTES FILHOS ---

const CarouselSlide = ({ item, isCurrent }: { item: CarouselItem; isCurrent: boolean; }) => (
  <div className="relative w-full flex-shrink-0 h-full bg-gray-100">
    <img
      src={item.imagem}
      alt={item.titulo}
      className="w-full h-full object-cover"
      draggable="false"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
    <div className={`absolute bottom-4 left-0 p-4 md:p-6 carousel-text-content transition-opacity duration-500 ${isCurrent ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="carousel-title">{item.titulo}</h2>
      <p className="carousel-description">{item.descricao}</p>
      <button
        className="mt-3 px-4 py-2 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-200 transition-all duration-300"
        onClick={() => console.log(`Navegar para ${item.link}`)}
      >
        Saber Mais
      </button>
    </div>
  </div>
);

const CarouselControls = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void; }) => (
  <>
    <button
      onClick={onPrev}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/50 text-gray-800 rounded-full p-1.5 hover:bg-white transition-colors duration-300 shadow-md"
      aria-label="Slide anterior"
    >
      <ChevronLeftIcon />
    </button>
    <button
      onClick={onNext}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/50 text-gray-800 rounded-full p-1.5 hover:bg-white transition-colors duration-300 shadow-md"
      aria-label="Próximo slide"
    >
      <ChevronRightIcon />
    </button>
  </>
);

const CarouselIndicators = ({ count, current, onGoTo }: { count: number; current: number; onGoTo: (index: number) => void; }) => (
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
    {Array.from({ length: count }).map((_, index) => (
      <button
        key={index}
        onClick={() => onGoTo(index)}
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}`}
        aria-label={`Ir para o slide ${index + 1}`}
      />
    ))}
  </div>
);


// --- COMPONENTE PRINCIPAL: Carousel ---
const CarouselComponent = ({ items }: { items: CarouselItem[] }) => {
  const {
    currentIndex,
    isDragging,
    dragTranslate,
    goTo,
    goToNext,
    goToPrev,
    pauseAutoplay,
    handleInteractionStart,
    handleInteractionMove,
    handleInteractionEnd
  } = useCarousel(items.length);
  
  const carouselRef = useRef<HTMLDivElement>(null);

  const onInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleInteractionStart(clientX);
  };

  const onInteractionMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleInteractionMove(clientX, carouselRef.current.offsetWidth);
  };

  const transformValue = `translateX(calc(-${currentIndex * 100}% - ${dragTranslate}%))`;

  return (
    <div
      ref={carouselRef}
      className="relative w-full max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden h-[50vh] max-h-[500px] cursor-grab active:cursor-grabbing"
      onMouseDown={onInteractionStart}
      onMouseMove={onInteractionMove}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={onInteractionStart}
      onTouchMove={onInteractionMove}
      onTouchEnd={handleInteractionEnd}
    >
      <div
        className="flex h-full"
        style={{ transform: transformValue, transition: isDragging ? 'none' : 'transform 0.5s ease-out' }}
      >
        {items.map((item, index) => (
          <CarouselSlide key={index} item={item} isCurrent={currentIndex === index} />
        ))}
      </div>

      <CarouselControls 
        onPrev={() => { goToPrev(); pauseAutoplay(); }} 
        onNext={() => { goToNext(); pauseAutoplay(); }} 
      />
      <CarouselIndicators 
        count={items.length} 
        current={currentIndex} 
        onGoTo={(index) => { goTo(index); pauseAutoplay(); }}
      />
    </div>
  );
};

// Exportar o componente Carousel para uso em outras partes da aplicação
export { CarouselComponent as Carousel };

// --- COMPONENTE PAI: App ---
// Simula uma página onde o carrossel será exibido.
export default function App() {
  return (
    <div className="bg-gray-200 min-h-screen w-full flex items-center justify-center font-sans px-2">
      <CarouselComponent items={carouselItemsData} />
    </div>
  );
}
