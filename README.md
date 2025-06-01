# 🧮 Concurso de Matemáticas - Sistema de Flashcards

Una aplicación web interactiva desarrollada en **Astro** con **Tailwind CSS** que permite a estudiantes de 13 años practicar matemáticas a través de un sistema de flashcards con timer.

## ✨ Características

### 🏠 Página Principal
- **Cajitas Interactivas**: 10 cajitas numeradas del 1 al 10 para seleccionar niveles
- **Diseño Responsivo**: Optimizado para móviles y escritorio
- **Efectos Visuales**: Animaciones suaves y efectos hover atractivos

### 🎯 Sistema de Flashcards
- **Timer de 10 segundos**: Cuenta regresiva visible en la esquina superior derecha
- **Preguntas Aleatorias**: Combina ejercicios matemáticos y problemas de texto
- **Visualización Clara**: Interfaz limpia con preguntas grandes y legibles
- **Revelación de Respuesta**: Muestra automáticamente la respuesta cuando termina el tiempo
- **Navegación Fácil**: Botón "Vuelve a Participar" para continuar y botón de regreso

### 🎨 Diseño Visual
- **Gradientes Atractivos**: Fondos coloridos con efectos de vidrio esmerilado
- **Tipografía Friendly**: Fuente Fredoka optimizada para jóvenes
- **Elementos Flotantes**: Iconos matemáticos animados de fondo
- **Responsivo**: Adaptado para todos los tamaños de pantalla

## 🚀 Funcionalidades Técnicas

### Base de Datos de Preguntas
- **80 Ejercicios**: Operaciones matemáticas con orden de operaciones
- **52 Problemas**: Problemas de texto con contexto real
- **Formato JSON**: Fácil de expandir y mantener

### Tecnologías Utilizadas
- **Astro**: Framework web moderno
- **Tailwind CSS**: Estilizado utilitario
- **JavaScript Vanilla**: Lógica del timer y navegación
- **CSS Animations**: Efectos visuales fluidos

## 📁 Estructura del Proyecto

```
src/
├── data/
│   └── questions.json      # Base de datos de preguntas
├── layouts/
│   └── Layout.astro        # Layout base
├── pages/
│   ├── index.astro         # Página principal con cajitas
│   └── quiz.astro          # Página de flashcards
└── styles/
    └── global.css          # Estilos globales + Tailwind
```

## 🎮 Cómo Usar

1. **Selecciona un Nivel**: Haz clic en cualquier cajita
2. **Lee la Pregunta**: Aparecerá una pregunta o ejercicio aleatorio
3. **Observa el Timer**: Tienes 10 segundos para resolver mentalmente
4. **Ve la Respuesta**: Se revela automáticamente al terminar el tiempo
5. **Continúa Practicando**: Usa "Vuelve a Participar" o regresa al inicio

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📱 Características Responsivas

- **Móvil**: Grid de 2 columnas, textos optimizados
- **Tablet**: Grid de 3-4 columnas, transiciones fluidas
- **Escritorio**: Grid de 5 columnas, efectos avanzados

## 🎯 Dirigido A

Estudiantes de **13 años** que quieren:
- Practicar operaciones matemáticas básicas
- Mejorar velocidad de cálculo mental
- Divertirse mientras aprenden
- Desafiarse con problemas de contexto real

---

¡Desarrollado con ❤️ para hacer las matemáticas más divertidas!
