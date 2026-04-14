const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="pt-PT" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terraza Talatona - Restaurante Marisqueira</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        serif: ['"Cormorant Garamond"', 'serif'],
                        sans: ['Lato', 'sans-serif'],
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-[#0a0a0a] text-white font-sans antialiased">
    <!-- Navbar -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent py-6">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-700 flex items-center justify-center">
                    <span class="font-serif text-xl font-bold text-white">T</span>
                </div>
                <div>
                    <h1 class="font-serif text-xl font-semibold tracking-wide text-white uppercase tracking-widest">
                        Terraza Talatona
                    </h1>
                    <p class="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Restaurante Marisqueira</p>
                </div>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden lg:flex items-center gap-8">
                <a href="#inicio" class="menu-link text-sm uppercase tracking-wider transition-colors relative py-2 text-[#D4AF37]" data-target="inicio">
                    Início
                    <span class="active-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></span>
                </a>
                <a href="#sobre" class="menu-link text-sm uppercase tracking-wider transition-colors relative py-2 text-white/80 hover:text-white" data-target="sobre">
                    Sobre
                    <span class="active-indicator hidden absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></span>
                </a>
                <a href="#menu" class="menu-link text-sm uppercase tracking-wider transition-colors relative py-2 text-white/80 hover:text-white" data-target="menu">
                    Menu
                    <span class="active-indicator hidden absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></span>
                </a>
                <a href="#galeria" class="menu-link text-sm uppercase tracking-wider transition-colors relative py-2 text-white/80 hover:text-white" data-target="galeria">
                    Galeria
                    <span class="active-indicator hidden absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></span>
                </a>
                <a href="#criticas" class="menu-link text-sm uppercase tracking-wider transition-colors relative py-2 text-white/80 hover:text-white" data-target="criticas">
                    Críticas
                    <span class="active-indicator hidden absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></span>
                </a>
                <a href="#contacto" class="menu-link text-sm uppercase tracking-wider transition-colors relative py-2 text-white/80 hover:text-white" data-target="contacto">
                    Contacto
                    <span class="active-indicator hidden absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></span>
                </a>
            </div>

            <a href="https://wa.me/244922257705?text=Olá,%20tenho%20interesse%20no%20produto!" target="_blank" rel="noopener noreferrer" class="hidden lg:flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F5D76E] text-black border border-[#D4AF37] px-6 py-2.5 rounded-sm transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em]">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Reservar Mesa
            </a>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="lg:hidden text-white p-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden lg:hidden bg-black/98 backdrop-blur-md border-t border-white/10 mt-4">
            <div class="px-6 py-6 space-y-4">
                <a href="#inicio" class="menu-link block w-full text-left text-sm uppercase tracking-wider py-2 text-[#D4AF37]" data-target="inicio">Início</a>
                <a href="#sobre" class="menu-link block w-full text-left text-sm uppercase tracking-wider py-2 text-white/80" data-target="sobre">Sobre</a>
                <a href="#menu" class="menu-link block w-full text-left text-sm uppercase tracking-wider py-2 text-white/80" data-target="menu">Menu</a>
                <a href="#galeria" class="menu-link block w-full text-left text-sm uppercase tracking-wider py-2 text-white/80" data-target="galeria">Galeria</a>
                <a href="#criticas" class="menu-link block w-full text-left text-sm uppercase tracking-wider py-2 text-white/80" data-target="criticas">Críticas</a>
                <a href="#contacto" class="menu-link block w-full text-left text-sm uppercase tracking-wider py-2 text-white/80" data-target="contacto">Contacto</a>
                <a href="https://wa.me/244922257705?text=Olá,%20tenho%20interesse%20no%20produto!" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 bg-[#D4AF37] text-black border border-[#D4AF37] px-6 py-3 rounded-sm mt-4 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#F5D76E]">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Reservar Mesa
                </a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="inicio" class="relative h-screen flex items-center justify-center overflow-hidden">
        <!-- Slides will be injected by JS -->
        <div id="hero-slides-container"></div>

        <!-- Content -->
        <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div class="max-w-xl sm:max-w-2xl lg:max-w-3xl text-left pt-12 sm:pt-16 md:pt-20">
                <div class="inline-block rounded-[28px] bg-[rgba(248,241,231,0.42)] backdrop-blur-md border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.28)] px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
                    <p class="text-[#6d4c1f] text-sm sm:text-base md:text-lg font-semibold tracking-[0.18em] uppercase mb-4 sm:mb-5">
                        Restaurante Marisqueira
                    </p>

                    <div class="relative min-h-[170px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] overflow-hidden mb-6 sm:mb-8" id="hero-texts-container">
                        <!-- Texts injected by JS -->
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center mt-4">
                        <a href="https://wa.me/244922257705?text=Olá,%20tenho%20interesse%20no%20produto!" target="_blank" rel="noopener noreferrer" class="hero-reserve-btn group relative bg-[#D4AF37] hover:bg-[#F5D76E] text-black px-8 sm:px-10 py-4 sm:py-5 rounded-sm flex items-center gap-3 transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold shadow-[0_8px_30px_rgba(212,175,55,0.35)]">
                            <span class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm"></span>
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            <span class="relative z-10">Reservar Agora</span>
                        </a>
                        <a href="#menu" class="border border-[#1a1a1a] hover:border-black text-black hover:bg-black/10 px-8 sm:px-10 py-4 sm:py-5 rounded-sm transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold backdrop-blur-sm flex items-center justify-center">
                            Ver Menu
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <button id="hero-prev" class="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all z-20 group border border-white/20">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#F5E6C8] group-hover:text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button id="hero-next" class="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all z-20 group border border-white/20">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#F5E6C8] group-hover:text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        <div id="hero-dots-container" class="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-20"></div>

        <div class="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
    </section>

    <!-- Info Bar -->
    <section class="bg-[#111] border-y border-white/10">
        <div class="max-w-7xl mx-auto px-6 py-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div class="flex items-center justify-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                        <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div class="text-left">
                        <p class="text-white/50 text-xs uppercase tracking-wider mb-1">Horário</p>
                        <p class="text-white font-medium">12h00 – 23h30</p>
                        <p class="text-white/60 text-sm">Cozinha: até às 22h30</p>
                    </div>
                </div>
                <div class="flex items-center justify-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                        <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div class="text-left">
                        <p class="text-white/50 text-xs uppercase tracking-wider mb-1">Localização</p>
                        <p class="text-white font-medium">Condomínio Zenith Towers</p>
                        <p class="text-white/60 text-sm">Talatona, Luanda</p>
                    </div>
                </div>
                <div class="flex items-center justify-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                        <svg class="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <div class="text-left">
                        <p class="text-white/50 text-xs uppercase tracking-wider mb-1">Reservas</p>
                        <p class="text-white font-medium">+244 922 257 705</p>
                        <p class="text-white/60 text-sm">WhatsApp disponível</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="sobre" class="py-32 bg-[#0a0a0a]">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="font-serif text-4xl md:text-6xl font-medium mb-10 leading-tight">
                        Uma experiência <br />
                        <span class="italic text-[#D4AF37]">única</span> em Luanda
                    </h2>
                    <div class="space-y-6 text-white/80 leading-relaxed text-lg">
                        <p>Mais do que um restaurante, um destino.</p>
                        <p>Sabores autênticos do mar e da terra angolana. Técnicas europeias de alta cozinha, pensadas para paladares exigentes.</p>
                        <p>Ambiente sofisticado e discreto no coração de Talatona. O cenário perfeito para negócios, romance e momentos inesquecíveis.</p>
                        <p class="text-[#D4AF37] italic font-serif text-xl">A excelência não é uma opção, é o nosso padrão.</p>
                    </div>
                    <div class="flex items-center gap-10 mt-12">
                        <div class="text-center">
                            <p class="font-serif text-5xl text-[#D4AF37]">4.3</p>
                            <p class="text-white/50 text-sm mt-2 uppercase tracking-widest">Rating</p>
                        </div>
                        <div class="w-px h-12 bg-white/10"></div>
                        <div class="text-center">
                            <p class="font-serif text-5xl text-[#D4AF37]">198</p>
                            <p class="text-white/50 text-sm mt-2 uppercase tracking-widest">Críticas</p>
                        </div>
                        <div class="w-px h-12 bg-white/10"></div>
                        <div class="text-center">
                            <p class="font-serif text-5xl text-[#D4AF37]">7</p>
                            <p class="text-white/50 text-sm mt-2 uppercase tracking-widest">Dias/Sem</p>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <img src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweq0CB4snDk9pjQ1A9XYyLtbb8Q94CNMS2-kV48tfzT9C2sw92-Wfcz9C9FIvNjjy-2hqJu3QvmMGnhfBfLsBVwCrEl-7le-KXVUsPRVFHHhDC0rU19nTH87i7gCXIz38D-iWHul=w800-h1067-k-no" alt="Terraza Talatona" class="w-full h-[500px] object-cover rounded-lg" loading="lazy" />
                    <div class="absolute -bottom-8 -left-8 bg-[#D4AF37] text-black p-8 rounded-sm max-w-xs hidden lg:block shadow-2xl">
                        <p class="font-serif text-3xl italic mb-2">"Aberto todos os dias"</p>
                        <p class="text-white/80 text-sm">Venha desfrutar dos nossos pratos especiais</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="py-32 bg-[#111]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-20 md:mb-32">
                <p class="text-[#D4AF37] uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">Experiência Gastronómica</p>
                <h2 class="font-serif text-4xl sm:text-5xl md:text-6xl font-medium">
                    O Nosso <span class="italic text-[#D4AF37]">Menu</span>
                </h2>
                <div class="w-24 h-px bg-[#D4AF37]/50 mx-auto mt-8"></div>
            </div>

            <div id="menu-container">
                <!-- Injected via JS -->
            </div>

            <div class="text-center mt-14">
                <a href="https://wa.me/244922257705?text=Olá,%20tenho%20interesse%20no%20produto!" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
                    Ver Menu Completo no WhatsApp
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="galeria" class="py-24 bg-[#0a0a0a]">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-amber-500 uppercase tracking-[0.3em] text-sm mb-4">Galeria</p>
                <h2 class="font-serif text-4xl md:text-5xl font-medium">
                    Momentos <span class="italic text-amber-500">Especiais</span>
                </h2>
            </div>

            <div class="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl" id="gallery-container">
                <!-- Gallery Slides Injected via JS -->
            </div>

            <div class="mt-6 grid grid-cols-5 gap-2 md:gap-4" id="gallery-thumbs">
                <!-- Thumbs Injected via JS -->
            </div>

            <div class="flex justify-center mt-6">
                <p class="text-white/40 text-sm">
                    <span class="text-amber-500 font-medium" id="gallery-counter">1</span> / 5
                </p>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section id="criticas" class="py-24 md:py-32 bg-[#111] overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-12 sm:mb-16 md:mb-20">
                <p class="text-[#D4AF37] uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">Testemunhos</p>
                <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                    O Que Dizem os Nossos <span class="italic text-[#D4AF37]">Clientes</span>
                </h2>
                <div class="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
                    <div class="flex items-center gap-1 text-amber-500">
                        ★★★★★
                    </div>
                    <span class="text-white/70 text-xs sm:text-sm">4.3 de 5 · 198 críticas no Google</span>
                </div>
            </div>
        </div>

        <div class="relative">
            <div class="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none"></div>
            <div class="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none"></div>

            <div id="reviews-container" class="flex gap-6 overflow-hidden px-6">
                <!-- Reviews Injected via JS -->
            </div>
        </div>

        <div class="text-center mt-16 md:mt-24">
            <a href="https://www.google.com/maps/place/Terraza+Talatona..." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 px-8 py-4 rounded-sm text-white hover:bg-white/5 transition-all text-xs uppercase font-bold tracking-[0.2em]">
                Ver Todas as Críticas no Google
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
        </div>
    </section>

    <!-- Contact & Footer -->
    <section id="contacto" class="py-32 bg-[#0a0a0a]">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                <div class="bg-[#111] p-10 sm:p-14 rounded-sm border border-white/5">
                    <p class="text-[#D4AF37] uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">Contacto</p>
                    <h2 class="font-serif text-4xl md:text-5xl font-medium mb-10">
                        Visite-nos ou <br />
                        <span class="italic text-[#D4AF37]">Faça uma Reserva</span>
                    </h2>
                    
                    <div class="space-y-8">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <p class="text-white font-medium mb-1">Morada</p>
                                <p class="text-white/60">Condomínio Zenith Towers<br />Talatona, Luanda, Angola</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <p class="text-white font-medium mb-1">Horário</p>
                                <p class="text-white/60">Aberto todos os dias</p>
                                <p class="text-white/60">12h00 – 23h30</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            </div>
                            <div>
                                <p class="text-white font-medium mb-1">WhatsApp / Telefone</p>
                                <a href="tel:+244922257705" class="text-amber-500 hover:text-amber-400 transition-colors text-lg">+244 922 257 705</a>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12 flex flex-col sm:flex-row gap-4">
                        <a href="https://wa.me/244922257705?text=Olá,%20tenho%20interesse%20no%20produto!" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#F5D76E] text-black px-8 py-4 rounded-sm transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em]">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Reservar via WhatsApp
                        </a>
                        <a href="https://www.google.com/maps/place/Terraza+Talatona..." target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 rounded-sm transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em]">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                            Obter Direções
                        </a>
                    </div>
                </div>

                <div class="relative h-[550px] rounded-sm overflow-hidden border border-white/5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.8899999999994!2d13.2399999!3d-8.9399999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f1b5b5b5b5b5%3A0x1a51f1b5b5b5b5b5!2sZenith%20Towers%2C%20Talatona%2C%20Angola!5e0!3m2!1spt-PT!2sao!4v1234567890" width="100%" height="100%" style="border: 0; filter: invert(90%) hue-rotate(180deg) grayscale(30%) contrast(90%)" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- Floating WhatsApp -->
    <a href="https://wa.me/244922257705?text=Olá,%20tenho%20interesse%20no%20produto!" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>

    <script src="./script.js"></script>
</body>
</html>`;

const cssContent = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.hero-reserve-btn {
  position: relative;
  overflow: hidden;
  animation: reserveFloat 3s ease-in-out infinite, reserveGlow 2.8s ease-in-out infinite;
}

.hero-reserve-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -130%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
  transform: skewX(-20deg);
  animation: reserveShine 3.6s ease-in-out infinite;
}

@keyframes reserveFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

@keyframes reserveGlow {
  0%, 100% { box-shadow: 0 8px 26px rgba(212, 175, 55, 0.35); }
  50% { box-shadow: 0 12px 36px rgba(212, 175, 55, 0.62); }
}

@keyframes reserveShine {
  0% { left: -130%; }
  55% { left: 135%; }
  100% { left: 135%; }
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0a0a0a;
}
::-webkit-scrollbar-thumb {
  background: #d97706;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b45309;
}
`;

const jsContent = `document.addEventListener('DOMContentLoaded', () => {
    // Scroll and Navbar logic
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/95', 'backdrop-blur-md', 'py-4', 'shadow-2xl');
            navbar.classList.remove('bg-transparent', 'py-6');
        } else {
            navbar.classList.add('bg-transparent', 'py-6');
            navbar.classList.remove('bg-black/95', 'backdrop-blur-md', 'py-4', 'shadow-2xl');
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

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.target;
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Data 
    const heroSlidesData = [
        { image: 'https://drive.google.com/file/d/1kg-emPjQA5i1h_i61EtfvFqrSqeGNFXx/view?usp=sharing', title: 'Uma Viagem Gastronómica', subtitle: 'Entre o mar e a terra, descobre sabores únicos' },
        { image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=1920&q=80&auto=format', title: 'Marisco Fresco', subtitle: 'Do oceano diretamente para a sua mesa' },
        { image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=1920&q=80&auto=format', title: 'Carnes Selecionadas', subtitle: 'Picanha e filetes preparados com mestria' },
        { image: 'https://drive.google.com/file/d/1Q8c-XEF99vM5U_j2j35QXq5KBMYseuzX/view?usp=sharing', title: 'Ambiente Elegante', subtitle: 'O cenário perfeito para momentos especiais' },
        { image: 'https://drive.google.com/file/d/1h9ZwzWASZAi3Llk7l2-1kaCePFIkujj-/view?usp=drive_link', title: 'Terraça com Vista', subtitle: 'Desfrute de refeições ao ar livre' }
    ];

    const premiumCuts = [
        { name: 'T-BONE WAGYU 900g', origin: 'América', desc: 'Corte nobre wagyu com marmoreio excepcional', price: '113.500 KZ', img: 'https://drive.google.com/uc?export=view&id=1KeKzsVC45pqCS3F9p16C4DFrQ_AbcGAz' },
        { name: 'RIBEYE BELGA 400g', origin: 'Bélgica', desc: 'Ribeye de excelente marmoreio', price: '75.950 KZ', img: 'https://drive.google.com/uc?export=view&id=1Zb1h3ebhC-MzHpVr4vEtj2dFeTq1pBHF' },
        { name: 'COSTELÃO GALEGO 1kg', origin: 'Espanha', desc: 'Sabor profundo e incomparável', price: '122.500 KZ', img: 'https://drive.google.com/uc?export=view&id=1KeKzsVC45pqCS3F9p16C4DFrQ_AbcGAz' },
        { name: 'LOMBO BLACK ANGUS 240g', origin: 'Uruguai', desc: 'Corte magro e tenro', price: '65.000 KZ', img: 'https://drive.google.com/uc?export=view&id=1EsRZY4rACaV3s9rP-m-MuhgQaiU9MfVe' },
        { name: 'TOMAHAWK HUTTEN 900g', origin: 'Holanda', desc: 'Corte impressionante, osso longo', price: '168.500 KZ', img: 'https://drive.google.com/uc?export=view&id=10eoRMzZn4mF-JNm6-MhDqZCoIapMLn3-' },
        { name: 'PICANHA BLACK ANGUS 300g', origin: 'Uruguai', desc: 'A rainha das carnes', price: '49.500 KZ', img: 'https://drive.google.com/uc?export=view&id=1G3ebCbJKs3F7M2cmmReJ6bK9HL2DRGn8' },
        { name: 'ENTRECOTE BLACK ANGUS 300g', origin: 'Uruguai', desc: 'Excelente distribuição de gordura', price: '48.500 KZ', img: 'https://drive.google.com/uc?export=view&id=10eoRMzZn4mF-JNm6-MhDqZCoIapMLn3-' },
        { name: 'TOMAHAWK WAGYU PREMIUM', origin: 'Namíbia', desc: 'O mais exclusivo da casa', price: 'SOB CONSULTA', img: 'https://images.unsplash.com/photo-1607672632458-9eb56696346a?w=800&q=80&auto=format' }
    ];

    const galleryImages = [
        { src: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&q=80', title: 'Mariscos Frescos', desc: 'Sabores do mar atlântico' },
        { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', title: 'Ambiente Sofisticado', desc: 'Decoração moderna' },
        { src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80', title: 'Carnes Premium', desc: 'Seleção especial' },
        { src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80', title: 'Especialidades', desc: 'Receitas exclusivas' },
        { src: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80', title: 'Gastronomia', desc: 'Viagem de sabores' }
    ];

    const reviewsData = [
        { name: 'Ana P.', text: 'Fomos jantar em família e foi uma experiência maravilhosa.', rating: 5, date: 'há 2 semanas' },
        { name: 'Carlos M.', text: 'Melhor restaurante de Talatona sem dúvida. A vitela é de outro nível.', rating: 5, date: 'há 3 semanas' },
        { name: 'Graça V.', text: 'Celebrámos o nosso aniversário de casamento no Terraza e foi perfeito.', rating: 5, date: 'há 1 mês' },
        { name: 'Fernando G.', text: 'Boa comida e ambiente agradável. Pedi o camarão tigre.', rating: 4, date: 'há 1 mês' },
        { name: 'Luísa M.', text: 'Simplesmente fantástico! A esplanada é linda.', rating: 5, date: 'há 1 mês' },
        { name: 'Pedro N.', text: 'Ambiente discreto e elegante, perfeito para reuniões.', rating: 5, date: 'há 2 meses' }
    ];

    // Generate Menu
    const menuContainer = document.getElementById('menu-container');
    let menuHtml = \`<div class="mb-20">
        <div class="relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a] border border-[#D4AF37]/30 rounded-sm p-1">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0a0a0a] px-6">
                <p class="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold">Sugestão do Chefe</p>
            </div>
            <div class="border border-[#D4AF37]/10 p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center group relative overflow-hidden">
                <div class="w-full md:w-1/2 aspect-[4/3] rounded-sm overflow-hidden relative">
                    <img src="projeto-vanilla/negra.webp" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Pata Negra">
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
    </div>\`;

    menuHtml += \`<div class="mb-12">
        <h3 class="font-serif text-2xl sm:text-3xl text-white mb-10 flex items-center gap-4">
            <span class="w-12 h-px bg-[#D4AF37]/30"></span>
            Cortes Premium
            <span class="flex-1 h-px bg-white/5"></span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">\`;

    premiumCuts.forEach(corte => {
        menuHtml += \`
        <div class="group bg-[#0a0a0a] rounded-sm overflow-hidden border border-white/5 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col">
            <div class="relative h-64 sm:h-80 overflow-hidden">
                <img src="\${corte.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="\${corte.name}">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div class="absolute bottom-3 right-3"><span class="text-white/50 text-[10px] uppercase tracking-wider">\${corte.origin}</span></div>
            </div>
            <div class="p-6 flex flex-col flex-1">
                <h4 class="font-serif text-xl sm:text-2xl text-white mb-3 tracking-wide">\${corte.name}</h4>
                <p class="text-white/50 text-sm leading-relaxed mb-6">\${corte.desc}</p>
                <div class="flex items-center justify-between mt-auto">
                    <span class="font-serif text-2xl tracking-widest \${corte.price === 'SOB CONSULTA' ? 'text-white/60 text-sm italic' : 'text-[#D4AF37]'}">\${corte.price}</span>
                    <a href="https://wa.me/244922257705" class="w-10 h-10 rounded-full bg-amber-600/20 hover:bg-amber-600 flex items-center justify-center transition-colors group/btn">
                        <svg class="w-4 h-4 text-amber-400 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    </a>
                </div>
            </div>
        </div>\`;
    });
    menuHtml += '</div></div>';
    menuContainer.innerHTML = menuHtml;

    // Generate Hero
    const heroSlidesContainer = document.getElementById('hero-slides-container');
    const heroTextsContainer = document.getElementById('hero-texts-container');
    const heroDotsContainer = document.getElementById('hero-dots-container');
    
    heroSlidesData.forEach((slide, i) => {
        heroSlidesContainer.innerHTML += \`
            <div class="hero-slide absolute inset-0 transition-all duration-700 ease-in-out \${i===0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}">
                <img src="\${slide.image}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/35"></div>
                <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,240,228,0.94)_0%,rgba(247,240,228,0.86)_28%,rgba(247,240,228,0.34)_54%,rgba(0,0,0,0.22)_100%)]"></div>
            </div>\`;
        
        heroTextsContainer.innerHTML += \`
            <div class="hero-text absolute inset-0 transition-all duration-700 ease-in-out \${i===0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
                <h1 class="font-serif text-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] font-medium max-w-[11ch] [text-shadow:0_10px_30px_rgba(255,255,255,0.8)]">
                    \${slide.title}
                </h1>
                <p class="mt-4 sm:mt-5 text-black/80 text-3xl sm:text-4xl md:text-5xl font-light italic leading-relaxed max-w-[20ch] [text-shadow:0_2px_15px_rgba(255,255,255,0.9)]">
                    \${slide.subtitle}
                </p>
            </div>\`;
            
        heroDotsContainer.innerHTML += \`<button class="hero-dot transition-all duration-300 rounded-full \${i===0 ? 'w-6 sm:w-8 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] shadow-lg' : 'w-2 h-2 bg-[#F5E6C8]/40'}"></button>\`;
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
        dots[currentHero].className = 'hero-dot transition-all duration-300 rounded-full w-2 h-2 bg-[#F5E6C8]/40';
        
        currentHero = i;
        
        slides[currentHero].classList.replace('opacity-0', 'opacity-100');
        slides[currentHero].classList.replace('scale-105', 'scale-100');
        texts[currentHero].classList.replace('opacity-0', 'opacity-100');
        texts[currentHero].classList.replace('translate-y-4', 'translate-y-0');
        dots[currentHero].className = 'hero-dot transition-all duration-300 rounded-full w-6 sm:w-8 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] shadow-lg';
        
        setTimeout(() => heroTransitioning = false, 700);
    };
    
    document.getElementById('hero-next').onclick = () => goHero((currentHero + 1) % heroSlidesData.length);
    document.getElementById('hero-prev').onclick = () => goHero((currentHero - 1 + heroSlidesData.length) % heroSlidesData.length);
    document.querySelectorAll('.hero-dot').forEach((d,i) => d.onclick = () => goHero(i));
    
    heroSection.onmouseenter = () => heroPaused = true;
    heroSection.onmouseleave = () => heroPaused = false;
    setInterval(() => { if(!heroPaused) goHero((currentHero + 1) % heroSlidesData.length); }, 8000);

    // Generate Gallery
    const galleryContainer = document.getElementById('gallery-container');
    const galleryThumbs = document.getElementById('gallery-thumbs');
    
    galleryImages.forEach((img, i) => {
        galleryContainer.innerHTML += \`
            <div class="gallery-slide absolute inset-0 transition-all duration-700 ease-in-out \${i===0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}">
                <img src="\${img.src}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div class="gallery-text absolute bottom-0 left-0 right-0 p-6 md:p-10 transition-all duration-500 \${i===0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
                    <h3 class="font-serif text-2xl md:text-4xl text-white mb-2">\${img.title}</h3>
                    <p class="text-white/70 text-sm md:text-base">\${img.desc}</p>
                </div>
            </div>\`;
            
        galleryThumbs.innerHTML += \`
            <button class="gallery-thumb relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 \${i===0 ? 'ring-2 md:ring-4 ring-amber-500 scale-100' : 'ring-1 ring-white/10 opacity-60'}">
                <img src="\${img.src}" class="w-full h-full object-cover">
                <div class="thumb-overlay absolute inset-0 bg-black transition-opacity \${i===0 ? 'opacity-0' : 'opacity-30'}"></div>
            </button>\`;
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
    
    document.querySelectorAll('.gallery-thumb').forEach((t, i) => t.onclick = () => goGallery(i));
    setInterval(() => goGallery((currentGallery + 1) % galleryImages.length), 5000);

    // Generate Reviews
    const revContainer = document.getElementById('reviews-container');
    const allReviews = [...reviewsData, ...reviewsData, ...reviewsData];
    
    allReviews.forEach(r => {
        const starHtml = '<svg class="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>'.repeat(5);
        
        revContainer.innerHTML += \`
        <div class="flex-shrink-0 w-[300px] md:w-[340px] bg-[#0a0a0a] p-5 md:p-6 rounded-xl border border-white/5 hover:border-amber-500/20 transition-colors duration-300">
            <div class="flex items-center gap-3 mb-4">
                <img src="https://ui-avatars.com/api/?name=\${encodeURIComponent(r.name)}&background=random&color=fff&size=100&bold=true" class="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover bg-white/10" alt="\${r.name}">
                <div class="flex-1 min-w-0">
                    <p class="text-white font-medium text-sm truncate">\${r.name}</p>
                    <p class="text-white/40 text-xs">\${r.date}</p>
                </div>
            </div>
            <div class="flex items-center gap-0.5">\${starHtml}</div>
            <p class="text-white/65 text-xs sm:text-sm leading-relaxed mt-3 line-clamp-3 sm:line-clamp-4">\${r.text}</p>
        </div>\`;
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
});`;

fs.mkdirSync('./vanilla-project', { recursive: true });
fs.writeFileSync('./vanilla-project/index.html', htmlContent);
fs.writeFileSync('./vanilla-project/style.css', cssContent);
fs.writeFileSync('./vanilla-project/script.js', jsContent);
console.log('Project converted to Vanilla successfully in folder vanilla-project/');
