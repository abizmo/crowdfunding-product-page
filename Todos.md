# Lista de tareas para desarrollar la página de producto de crowdfunding

## Stack: React + Vite + Tailwind CSS + shadcn/ui + Zustand

## 0. Configuración del proyecto (rama: `setup/initial-configuration`)

- [x] Inicializar proyecto con Vite: `npm create vite@latest crowdfunding-project -- --template react-ts`
- [x] Instalar y configurar Tailwind CSS con PostCSS
- [x] Configurar e instalar shadcn/ui y sus dependencias
- [x] Configurar Zustand para la gestión del estado
- [x] Establecer estructura de carpetas (components, store, hooks, types, utils)
- [x] Configurar ESLint y Prettier para mantener la calidad del código
- **Punto de control**: `tag v0.0.1-initial-setup`

## 1. Estructura básica de la aplicación (rama: `feature/base-structure`)

- [x] Crear layout principal con componente Layout de shadcn
- [x] Implementar navegación superior con componentes de shadcn
- [ ] ~~Configurar rutas básicas con React Router (si es necesario)~~
- [x] Crear store principal de Zustand para el estado global

  1. [x] **Store de Proyectos**

     - Información básica: nombre, descripción, imagen
     - Métricas: monto recaudado (\$89,914), objetivo total (\$100,000), número de backers (5,007), días restantes (56)
     - Descripción detallada del proyecto
     - Colección de niveles de contribución
       - Cada nivel contiene: nombre, precio mínimo, descripción, cantidad disponible, estado de disponibilidad

  2. [x] **Store de Usuario**

     - Proyectos guardados (bookmarks)

  3. [x] _[WIP]_ **Store de UI**

     - **Estado de modales**:
       - Control para mostrar/ocultar ventanas modales (pledge, confirmación, etc.)
       - Tipo de modal activo
       - Datos asociados al modal (como ID de pledge seleccionada)

- [x] Configurar tema base de Tailwind y variables CSS personalizadas
- **Punto de control**: `tag v0.1.0-estructura-base`

## 2. Sección de cabecera (rama: `feature/project-header`)

- [x] Crear componente Header utilizando Card de shadcn para el contenedor
- [x] Implementar banner con imagen del proyecto usando AspectRatio de shadcn
- [x] Crear título y descripción del proyecto con Typography de shadcn
- [x] Implementar botones "Back this project" y "Bookmark" con Button de shadcn
- [x] Aplicar estilos responsive con clases de Tailwind
- **Punto de control**: `tag v0.2.0-cabecera`

## 3. Sección de estadísticas (rama: `feature/statistics-display`)

- [x] Crear componente Stats utilizando Card de shadcn
- [x] Implementar store de Zustand para los datos de estadísticas
- [x] Desarrollar indicadores de progreso con Progress de shadcn
- [x] Crear contadores utilizando formateadores personalizados
- [x] Aplicar estilos responsive para móvil/desktop con Tailwind
- **Punto de control**: `tag v0.3.0-estadisticas`

## 4. Sección de descripción del proyecto (rama: `feature/project-description`)

- [ ] Crear componente Description con Card de shadcn
- [ ] Implementar contenido con componentes Typography de shadcn
- [ ] Desarrollar visualización de contenido Markdown si es necesario
- [ ] Aplicar estilos de texto y espaciado con Tailwind
- [ ] Implementar visualización responsive para todos los dispositivos
- **Punto de control**: `tag v0.4.0-descripcion`

## 5. Sección de recompensas (rama: `feature/reward-tiers`)

- [ ] Crear componente RewardCard utilizando Card de shadcn
- [ ] Implementar store de Zustand para gestionar las recompensas
- [ ] Crear componentes para cada nivel de recompensa con estados disponible/agotado
- [ ] Añadir Badges de shadcn para mostrar estado y precios
- [ ] Implementar botones de selección con Button de shadcn
- **Punto de control**: `tag v0.5.0-recompensas`

## 6. Modal de respaldo (rama: `feature/backing-modal`)

- [ ] Crear componente BackingModal utilizando Dialog de shadcn
- [ ] Implementar formulario con componentes Form de shadcn
- [ ] Crear RadioGroup de shadcn para selección de opciones de respaldo
- [ ] Conectar con el store de Zustand para manejo de estado
- [ ] Implementar validación de formulario con React Hook Form
- **Punto de control**: `tag v0.6.0-modal-respaldo`

## 7. Modal de confirmación (rama: `feature/confirmation-modal`)

- [ ] Crear componente SuccessModal con Dialog de shadcn
- [ ] Implementar diseño con componentes Alert y Typography de shadcn
- [ ] Añadir icono de confirmación con un componente Icon de shadcn/Lucide
- [ ] Conectar con Zustand para controlar visibilidad y estado
- [ ] Implementar animaciones con tailwindcss-animate
- **Punto de control**: `tag v0.7.0-modal-confirmacion`

## 8. Lógica de estado con Zustand (rama: `feature/state-management`)

- [ ] Implementar store para el proyecto y su información
- [ ] Crear store para gestionar recompensas y selecciones
- [ ] Implementar lógica para actualizar estadísticas en tiempo real
- [ ] Crear acciones para procesar selecciones de respaldo
- [ ] Implementar persistencia de estado con zustand/middleware
- **Punto de control**: `tag v0.8.0-state-management`

## 9. Hooks personalizados y optimización (rama: `feature/custom-hooks`)

- [ ] Crear hooks para gestionar modales y su estado
- [ ] Implementar hooks para el proceso de respaldo
- [ ] Optimizar renderizados con useMemo y useCallback
- [ ] Implementar lazy loading para componentes grandes
- [ ] Crear tests unitarios para hooks principales
- **Punto de control**: `tag v0.9.0-hooks-optimization`

## 10. Refinamiento y testing (rama: `feature/refinement`)

- [ ] Realizar testing de componentes con Vitest
- [ ] Implementar testing e2e con Playwright o Cypress
- [ ] Optimizar bundle size con análisis y code splitting
- [ ] Mejorar accesibilidad siguiendo estándares WCAG
- [ ] Implementar dark mode con el sistema de temas de shadcn
- **Punto de control**: `tag v1.0.0-producto-final`
