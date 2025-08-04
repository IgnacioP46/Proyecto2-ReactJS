# Proyecto 2 - ReactJS: ADGES

# 🏢 ADGES - Administración de Fincas

Proyecto desarrollado con **ReactJS** como parte del _Proyecto 2 - ReactJS_ de ThePower.  
La aplicación simula la web corporativa de una empresa de administración de fincas, con diseño responsive y funcionalidades completas.

## 👤 Autor

Ignacio Perez

## ✅ Funcionalidades principales

- ✅ Web **responsive** para PC, tablet y móvil
- ✅ Diseño moderno y profesional inspirado en webs reales
- ✅ **3 páginas con React Router DOM**:
  - `/` ➜ Conócenos
  - `/tarifas` ➜ Tarifas
  - `/contacto` ➜ Formulario
- ✅ **Navbar dinámico** con menú hamburguesa en móvil
- ✅ **Hero rotativo** con imágenes aleatorias de Madrid (API Unsplash)
- ✅ **Hora, fecha y temperatura actual** vía API + custom hook
- ✅ **Formulario validado** con `react-hook-form` y alertas visuales
- ✅ Footer siempre fijo, con diseño responsive y limpio
- ✅ Código modular, reutilizable y bien estructurado

## 🏗️ Tecnologías

- ReactJS (Vite)
- React Router DOM
- React Hook Form
- CSS puro (sin frameworks)
- API de imágenes
- Context API
- Custom Hooks

## 📄 Estructura

- Home con Hero dinámico (imágenes desde API y fallback)
- Navbar fijo (con hora, fecha, temperatura y navegación por secciones)
- Sección "Conócenos" + "Tarifas" en una única vista
- Formulario de contacto con validaciones
- Footer fijo, adaptado a móvil/escritorio

## ⚙️ Instalación

- npm install
- npm run dev

## 📱 Responsive

- ✅ Ordenador: enlaces visibles, logo, reloj y temperatura
- ✅ Tablet: enlaces convertidos a menú desplegable
- ✅ Móvil: menú hamburguesa, logo y hora

## 📂 Organización

```bash
src/
├── assets/            # Imágenes y logos
├── components/        # Navbar, Hero, Footer, Formulario...
├── hooks/             # Custom hooks
├── context/           # Contexto de hora
├── pages/             # Página de inicio con secciones
├── App.jsx            # Estructura general
└── main.jsx           # Entry point
```
