# Portfolio Professional - Jeremy Andrés Guzmán Vargas

Portafolio profesional construido con React, siguiendo los principios de diseño UX/UI y mejores prácticas de accesibilidad web.

## 🎯 Características

### Diseño y UX
- ✅ **Accesibilidad WCAG AA**: Skip links, ARIA labels, navegación por teclado, contrast ratio optimizado
- ✅ **Principios de Diseño**: Regla 60-30-10 para colores, jerarquía visual clara, espaciado consistente
- ✅ **Responsive Design**: Mobile-first approach con breakpoints optimizados
- ✅ **Tema Dark/Light**: Con persistencia en localStorage y detección de preferencia del sistema
- ✅ **Animaciones**: Usando Framer Motion con respeto a `prefers-reduced-motion`
- ✅ **Ley de Doherty**: Transiciones < 400ms para respuesta percibida instantánea

### Secciones del Portafolio
1. **Hero**: Introducción impactante con llamadas a la acción
2. **Sobre Mí**: Historia personal, educación y biografía
3. **Habilidades**: Technical y soft skills organizadas por categorías
4. **Experiencia**: Timeline interactiva con trabajos previos
5. **Proyectos**: Grid de proyectos con metodologías, tecnologías, roles y resultados
6. **Contacto**: Información de contacto y enlaces sociales

### Tecnologías
- **Frontend**: React 18, Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Vite
- **Styling**: CSS Modules con variables CSS

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173`

### Build para Producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes React
│   ├── Navigation/    # Navegación con tema toggle
│   ├── Hero/          # Hero section
│   ├── About/         # Sobre mí
│   ├── Skills/        # Habilidades
│   ├── Experience/    # Experiencia
│   ├── Projects/      # Proyectos
│   ├── Contact/       # Contacto
│   └── Footer/        # Footer
├── data/              # portfolioData.js
├── hooks/             # useTheme.js
├── styles/            # variables.css, global.css
└── App.jsx            # Main app
```

## 🎨 Sistema de Diseño

### Colores (Regla 60-30-10)
- **Primary (60%)**: `#0f172a`
- **Secondary (30%)**: `#334155`
- **Accent (10%)**: `#3b82f6`

### Tipografía
- **Font**: Inter
- **Escala**: 16px base, ratio 1.25

## ♿ Accesibilidad (WCAG 2.1 AA)

- ✅ Skip to main content
- ✅ Semantic HTML5
- ✅ ARIA labels
- ✅ Navegación por teclado
- ✅ Focus visible
- ✅ Contrast ratio > 4.5:1
- ✅ Respeta prefers-reduced-motion

## 📝 Personalización

Edita `src/data/portfolioData.js` para actualizar tu información, proyectos y habilidades.

## 🎭 Principios UX/UI

- ✅ 10 Heurísticas de Nielsen
- ✅ Leyes de UX (Fitts, Hicks, Miller, Gestalt, etc.)
- ✅ Peak-End Rule
- ✅ Efecto von Restorff
- ✅ Mapeo Natural
- ✅ Jerarquía Visual

## 📄 Licencia

© 2026 Jeremy Andrés Guzmán Vargas

---

**Construido con React, Framer Motion y ❤️**
