document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DO MENU E SCROLL SUAVE
    // ==========================================
    
    // Seleção dos elementos do cabeçalho
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // Evento de Scroll (Muda a cor do cabeçalho ao descer a página)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/10', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/20');
            navbar.classList.remove('bg-transparent', 'py-6');
        } else {
            navbar.classList.add('bg-transparent', 'py-6');
            navbar.classList.remove('bg-white/10', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/20');
        }
        
        const sections = ['inicio', 'sobre', 'menu', 'galeria', 'criticas', 'contacto'];
        for (const section of [...sections].reverse()) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100) {
                    menuLinks.forEach(link => {
                        if (link.dataset.target === section) {
                            link.classList.add('text-[#D4AF37]');
                            link.classList.remove('text-white/80');
                            link.querySelector('.active-indicator')?.classList.remove('hidden');
                        } else {
                            link.classList.remove('text-[#D4AF37]');
                            link.classList.add('text-white/80');
                            link.querySelector('.active-indicator')?.classList.add('hidden');
                        }
                    });
                    break;
                }
            }
        }
    });

    // Alternar abertura do Menu Mobile (Ícone Hambúrguer)
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Scroll suave para links com a classe 'menu-link'
    // Aqui também funciona o 'Ver Menu' e o 'Contacto' para as respetivas secções
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.target;
            const element = document.getElementById(targetId);
            
            if (element) {
                // Desce suavemente até à secção definida em data-target
                element.scrollIntoView({ behavior: 'smooth' });
                // Fecha o menu mobile se estiver aberto
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // ==========================================
    // 2. BASE DE DADOS (INFORMAÇÕES E IMAGENS)
    // ==========================================

    // Dados do Banner Principal (Hero Section)
    const heroSlidesData = [
        { image: 'fotos/gastronimica.webp', title: 'Uma Viagem Gastronómica', subtitle: 'Entre o mar e a terra, descobre sabores únicos' },
        { image: 'fotos/mariscos.webp', title: 'Marisco Fresco', subtitle: 'Do oceano diretamente para a sua mesa' },
        { image: 'fotos/carnes.webp', title: 'Carnes Selecionadas', subtitle: 'Picanha e filetes preparados com mestria' },
        { image: 'fotos/ambiente.webp', title: 'Ambiente Elegante', subtitle: 'O cenário perfeito para momentos especiais' },
        { image: 'fotos/saboresM.webp', title: 'Sabores do Mundo', subtitle: 'A arte da culinária em cada prato' }
    ];

    const premiumCuts = [
        { name: 'T-BONE WAGYU 900g', origin: 'América', desc: 'Corte nobre wagyu com marmoreio excepcional', price: '113.500 KZ', img: 'vanilla-project/grill.webp' },
        { name: 'RIBEYE BELGA 400g', origin: 'Bélgica', desc: 'Ribeye de excelente marmoreio', price: '75.950 KZ', img: 'vanilla-project/foto3.webp' },
        { name: 'COSTELÃO GALEGO 1kg', origin: 'Espanha', desc: 'Sabor profundo e incomparável', price: '122.500 KZ', img: 'vanilla-project/costela.webp' },
        { name: 'LOMBO BLACK ANGUS 240g', origin: 'Uruguai', desc: 'Corte magro e tenro', price: '65.000 KZ', img: 'vanilla-project/keda.webp' },
        { name: 'TOMAHAWK HUTTEN 900g', origin: 'Holanda', desc: 'Corte impressionante, osso longo', price: '168.500 KZ', img: 'vanilla-project/foto2.webp' },
        { name: 'PICANHA BLACK ANGUS 300g', origin: 'Uruguai', desc: 'A rainha das carnes', price: '49.500 KZ', img: 'vanilla-project/delicio.webp' },
        { name: 'ENTRECOTE BLACK ANGUS 300g', origin: 'Uruguai', desc: 'Excelente distribuição de gordura', price: '48.500 KZ', img: 'vanilla-project/entre.webp' },
        { name: 'TOMAHAWK WAGYU PREMIUM', origin: 'Namíbia', desc: 'O mais exclusivo da casa', price: 'SOB CONSULTA', img: 'vanilla-project/foto1.webp' }
    ];

    const galleryImages = [
        { src: 'fotos/01atlântico.webp', title: 'Mariscos Frescos', desc: 'Sabores do mar atlântico' },
        { src: 'fotos/02Decoração.jpg', title: 'Ambiente Sofisticado', desc: 'Decoração moderna' },
        { src: 'fotos/03CarnesPremium.webp', title: 'Carnes Premium', desc: 'Seleção especial' },
        { src: 'fotos/04Receitas exclusivas.webp', title: 'Especialidades', desc: 'Receitas exclusivas' },
        { src: 'fotos/05Gastronomia.webp', title: 'Gastronomia', desc: 'Viagem de sabores' }
    ];

    const reviewsData = [
        { name: 'Ana P.', text: 'Fomos jantar em família e foi uma experiência maravilhosa.', rating: 5, date: 'há 2 semanas' },
        { name: 'Carlos M.', text: 'Melhor restaurante de Talatona sem dúvida. A vitela é de outro nível.', rating: 5, date: 'há 3 semanas' },
        { name: 'Graça V.', text: 'Celebrámos o nosso aniversário de casamento no Terraza e foi perfeito.', rating: 5, date: 'há 1 mês' },
        { name: 'Fernando G.', text: 'Boa comida e ambiente agradável. Pedi o camarão tigre.', rating: 4, date: 'há 1 mês' },
        { name: 'Luísa M.', text: 'Simplesmente fantástico! A esplanada é linda.', rating: 5, date: 'há 1 mês' },
        { name: 'Pedro N.', text: 'Ambiente discreto e elegante, perfeito para reuniões.', rating: 5, date: 'há 2 meses' },
        { name: 'Marta C.', text: 'O melhor sítio para comer marisco em Luanda! Fresco e bem preparado.', rating: 5, date: 'há 2 meses' },
        { name: 'Hélder S.', text: 'Bom restaurante com boa variedade no menu.', rating: 4, date: 'há 2 meses' }
    ];

    // ==========================================
    // 3. RENDERIZAÇÃO E LÓGICA DO MENU DE PRATOS
    // ==========================================

    // Geração do Menu Dinâmico na página
    const menuContainer = document.getElementById('menu-container');
    let menuHtml = `<div class="mb-20">
        <div class="relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a] border border-[#D4AF37]/30 rounded-sm p-1">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0a0a0a] px-6">
                <p class="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold">Sugestão do Chefe</p>
            </div>
            <div class="border border-[#D4AF37]/10 p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center group relative overflow-hidden">
                <div class="w-full md:w-1/2 aspect-[4/3] rounded-sm overflow-hidden relative">
                    <img src="vanilla-project/negra.webp" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Pata Negra">
                </div>
                <div class="w-full md:w-1/2 text-center md:text-left relative z-10">
                    <h3 class="font-serif text-3xl sm:text-4xl text-white mb-4">PRESUNTO PATA NEGRA</h3>
                    <p class="text-white/60 mb-8 max-w-md text-sm leading-relaxed">Presunto ibérico de bellota curado artesanalmente, fatiado na hora — a jóia da charcutaria espanhola</p>
                    <div class="flex items-center gap-6 justify-center md:justify-start">
                        <span class="font-serif text-3xl text-[#D4AF37] tracking-widest">72.650 KZ</span>
                        <a href="https://wa.me/244922257705" class="bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37] px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all font-bold">Encomendar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    menuHtml += `<div class="mb-12">
        <h3 class="font-serif text-2xl sm:text-3xl text-white mb-10 flex items-center gap-4">
            <span class="w-12 h-px bg-[#D4AF37]/30"></span>
            Cortes Premium
            <span class="flex-1 h-px bg-white/5"></span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">`;

    premiumCuts.forEach(corte => {
        menuHtml += `
        <div class="group bg-[#0a0a0a] rounded-sm overflow-hidden border border-white/5 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col">
            <div class="relative h-64 sm:h-80 overflow-hidden">
                <img src="${corte.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="${corte.name}">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div class="absolute bottom-3 right-3"><span class="text-white/50 text-[10px] uppercase tracking-wider">${corte.origin}</span></div>
            </div>
            <div class="p-6 flex flex-col flex-1">
                <h4 class="font-serif text-xl sm:text-2xl text-white mb-3 tracking-wide">${corte.name}</h4>
                <p class="text-white/50 text-sm leading-relaxed mb-6">${corte.desc}</p>
                <div class="flex items-center justify-between mt-auto">
                    <span class="font-serif text-2xl tracking-widest ${corte.price === 'SOB CONSULTA' ? 'text-white/60 text-sm italic' : 'text-[#D4AF37]'}">${corte.price}</span>
                    <a href="https://wa.me/244922257705" class="w-10 h-10 rounded-full bg-amber-600/20 hover:bg-amber-600 flex items-center justify-center transition-colors group/btn">
                        <svg class="w-4 h-4 text-amber-400 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    </a>
                </div>
            </div>
        </div>`;
    });
    menuHtml += '</div></div>';
    menuContainer.innerHTML = menuHtml; // Renderiza os dados no HTML

    // ==========================================
    // 4. LÓGICA DO BANNER AUTOMÁTICO (SLIDESHOW)
    // ==========================================
    const heroSlidesContainer = document.getElementById('hero-slides-container');
    const heroTextsContainer = document.getElementById('hero-texts-container');
    const heroDotsContainer = document.getElementById('hero-dots-container');
    
    heroSlidesData.forEach((slide, i) => {
        heroSlidesContainer.innerHTML += `
            <div class="hero-slide absolute inset-0 transition-all duration-700 ease-in-out ${i===0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}">
                <img src="${slide.image}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/35"></div>
                <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,240,228,0.94)_0%,rgba(247,240,228,0.86)_28%,rgba(247,240,228,0.34)_54%,rgba(0,0,0,0.22)_100%)]"></div>
            </div>`;
        
        heroTextsContainer.innerHTML += `
            <div class="hero-text absolute inset-0 transition-all duration-700 ease-in-out ${i===0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
                <h1 class="font-serif text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium max-w-[15ch] [text-shadow:0_10px_30px_rgba(255,255,255,0.8)]">
                    ${slide.title}
                </h1>
                <p class="mt-3 sm:mt-4 text-black/80 text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed max-w-[25ch] [text-shadow:0_2px_15px_rgba(255,255,255,0.9)]">
                    ${slide.subtitle}
                </p>
            </div>`;
    });

    // Hero Logic
    let currentHero = 0;
    let heroTransitioning = false;
    let heroPaused = false;
    const heroSection = document.getElementById('inicio');
    
    const goHero = (i) => {
        if(heroTransitioning || i === currentHero) return;
        heroTransitioning = true;
        
        const slides = document.querySelectorAll('.hero-slide');
        const texts = document.querySelectorAll('.hero-text');
        const dots = document.querySelectorAll('.hero-dot');
        
        slides[currentHero].classList.replace('opacity-100', 'opacity-0');
        slides[currentHero].classList.replace('scale-100', 'scale-105');
        texts[currentHero].classList.replace('opacity-100', 'opacity-0');
        texts[currentHero].classList.replace('translate-y-0', 'translate-y-4');
        if (dots.length > 0) {
            dots[currentHero].className = 'hero-dot transition-all duration-300 rounded-full w-2 h-2 bg-[#F5E6C8]/40';
        }
        
        currentHero = i;
        
        slides[currentHero].classList.replace('opacity-0', 'opacity-100');
        slides[currentHero].classList.replace('scale-105', 'scale-100');
        texts[currentHero].classList.replace('opacity-0', 'opacity-100');
        texts[currentHero].classList.replace('translate-y-4', 'translate-y-0');
        if (dots.length > 0) {
            dots[currentHero].className = 'hero-dot transition-all duration-300 rounded-full w-6 sm:w-8 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] shadow-lg';
        }
        
        setTimeout(() => heroTransitioning = false, 700);
    };
    
    const heroNextBtn = document.getElementById('hero-next');
    const heroPrevBtn = document.getElementById('hero-prev');
    if (heroNextBtn) heroNextBtn.onclick = () => goHero((currentHero + 1) % heroSlidesData.length);
    if (heroPrevBtn) heroPrevBtn.onclick = () => goHero((currentHero - 1 + heroSlidesData.length) % heroSlidesData.length);
    
    heroSection.onmouseenter = () => heroPaused = true; // Para o banner ao passar o rato
    heroSection.onmouseleave = () => heroPaused = false;
    
    // Troca os banners de 8 em 8 segundos
    setInterval(() => { if(!heroPaused) goHero((currentHero + 1) % heroSlidesData.length); }, 8000);

    // ==========================================
    // 5. LÓGICA DA GALERIA (MOMENTOS ESPECIAIS)
    // ==========================================
    const galleryContainer = document.getElementById('gallery-container');
    const galleryThumbs = document.getElementById('gallery-thumbs');
    
    galleryImages.forEach((img, i) => {
        galleryContainer.innerHTML += `
            <div class="gallery-slide absolute inset-0 transition-all duration-700 ease-in-out ${i===0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}">
                <img src="${img.src}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div class="gallery-text absolute bottom-0 left-0 right-0 p-6 md:p-10 transition-all duration-500 ${i===0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
                    <h3 class="font-serif text-2xl md:text-4xl text-white mb-2">${img.title}</h3>
                    <p class="text-white/70 text-sm md:text-base">${img.desc}</p>
                </div>
            </div>`;
            
        galleryThumbs.innerHTML += `
            <button class="gallery-thumb relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ${i===0 ? 'ring-2 md:ring-4 ring-amber-500 scale-100' : 'ring-1 ring-white/10 opacity-60'}">
                <img src="${img.src}" class="w-full h-full object-cover">
                <div class="thumb-overlay absolute inset-0 bg-black transition-opacity ${i===0 ? 'opacity-0' : 'opacity-30'}"></div>
            </button>`;
    });
    
    let currentGallery = 0;
    let galleryTransitioning = false;
    
    const goGallery = (i) => {
        if(galleryTransitioning || i === currentGallery) return;
        galleryTransitioning = true;
        
        const slides = document.querySelectorAll('.gallery-slide');
        const texts = document.querySelectorAll('.gallery-text');
        const thumbs = document.querySelectorAll('.gallery-thumb');
        
        slides[currentGallery].classList.replace('opacity-100', 'opacity-0');
        slides[currentGallery].classList.replace('scale-100', 'scale-105');
        texts[currentGallery].classList.replace('opacity-100', 'opacity-0');
        texts[currentGallery].classList.replace('translate-y-0', 'translate-y-4');
        thumbs[currentGallery].className = 'gallery-thumb relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ring-1 ring-white/10 opacity-60';
        thumbs[currentGallery].querySelector('.thumb-overlay').className = 'thumb-overlay absolute inset-0 bg-black transition-opacity opacity-30';
        
        currentGallery = i;
        
        slides[currentGallery].classList.replace('opacity-0', 'opacity-100');
        slides[currentGallery].classList.replace('scale-105', 'scale-100');
        texts[currentGallery].classList.replace('opacity-0', 'opacity-100');
        texts[currentGallery].classList.replace('translate-y-4', 'translate-y-0');
        thumbs[currentGallery].className = 'gallery-thumb relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ring-2 md:ring-4 ring-amber-500 scale-100';
        thumbs[currentGallery].querySelector('.thumb-overlay').className = 'thumb-overlay absolute inset-0 bg-black transition-opacity opacity-0';
        
        document.getElementById('gallery-counter').textContent = currentGallery + 1;
        setTimeout(() => galleryTransitioning = false, 500);
    };
    
    // Clica nas miniaturas para trocar a galeria e define o automático para 5 segundos
    document.querySelectorAll('.gallery-thumb').forEach((t, i) => t.onclick = () => goGallery(i));
    setInterval(() => goGallery((currentGallery + 1) % galleryImages.length), 5000);

    // ==========================================
    // 6. CARROSSEL DE COMENTÁRIOS (INFINITO)
    // ==========================================
    const revContainer = document.getElementById('reviews-container');
    
    // Duplica os comentários da base de dados para fazer o efeito infinito
    const allReviews = [...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData];
    
    allReviews.forEach(r => {
        const starHtml = '<svg class="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>'.repeat(5);
        
        revContainer.innerHTML += `
        <div class="flex-shrink-0 w-[300px] md:w-[340px] bg-[#0a0a0a] p-5 md:p-6 rounded-xl border border-white/5 hover:border-amber-500/20 transition-colors duration-300">
            <div class="flex items-center gap-3 mb-4">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=random&color=fff&size=100&bold=true" class="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover bg-white/10" alt="${r.name}">
                <div class="flex-1 min-w-0">
                    <p class="text-white font-medium text-sm truncate">${r.name}</p>
                    <p class="text-white/40 text-xs">${r.date}</p>
                </div>
            </div>
            <div class="flex items-center gap-0.5">${starHtml}</div>
            <p class="text-white/65 text-xs sm:text-sm leading-relaxed mt-3 line-clamp-3 sm:line-clamp-4">${r.text}</p>
        </div>`;
    });
    
    let revPaused = false;
    let revScroll = 0;
    revContainer.onmouseenter = () => revPaused = true;
    revContainer.onmouseleave = () => revPaused = false;
    revContainer.ontouchstart = () => revPaused = true;
    revContainer.ontouchend = () => revPaused = false;
    
    const animateRev = () => {
        if (!revPaused) {
            revScroll += 0.4;
            if (revScroll >= revContainer.scrollWidth / 2) revScroll = 0;
            revContainer.scrollLeft = revScroll;
        }
        requestAnimationFrame(animateRev);
    };
    requestAnimationFrame(animateRev);
});
