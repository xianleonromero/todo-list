# 📝 Lista de Tareas - Todo List

Aplicación simple de lista de tareas desarrollada con React. Permite añadir y eliminar tareas de forma intuitiva.

## 🚀 [**USAR AHORA**](https://xianleonromero.github.io/todo-list)

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📋 Características

✅ **Añadir tareas** - Escribe y añade tareas fácilmente  
✅ **Eliminar tareas** - Botón para eliminar tareas completadas  
✅ **Atajo de teclado** - Pulsa Enter para añadir tareas rápidamente  
✅ **Interfaz intuitiva** - Diseño limpio y fácil de usar  
✅ **Componentes modulares** - Código organizado en componentes reutilizables  
✅ **Responsive** - Se adapta a diferentes tamaños de pantalla  

---

## 🎯 Cómo Usar

1. Escribe una tarea en el campo de texto
2. Presiona **Enter** o haz click en **Añadir**
3. La tarea aparece en la lista
4. Para eliminar, haz click en la **X** roja

---

## 🛠️ Tecnologías Utilizadas

- **React 18.3.1** - Biblioteca de JavaScript para construir interfaces de usuario
- **React Hooks** - useState para el manejo del estado
- **CSS3** - Estilos personalizados con flexbox y efectos hover
- **GitHub Pages** - Hosting y despliegue

---

## 🚀 Instalación Local

Si quieres ejecutar el proyecto en tu máquina local:

### Prerrequisitos
- Node.js instalado (versión 14 o superior)
- npm o yarn

### Pasos
```bash
# 1. Clonar el repositorio
git clone https://github.com/xianleonromero/todo-list.git

# 2. Entrar al directorio del proyecto
cd todo-list

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm start
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`

---

## 📦 Scripts Disponibles
```bash
npm start          # Inicia el servidor de desarrollo
npm run build      # Crea una versión optimizada para producción
npm test           # Ejecuta los tests
npm run deploy     # Despliega la aplicación en GitHub Pages
```

---

## 📂 Estructura del Proyecto
```
todo-list/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskInput.css
│   │   ├── TaskList.js
│   │   ├── TaskList.css
│   │   ├── TaskItem.js
│   │   └── TaskItem.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## 🧩 Componentes

### App.js
Componente principal que gestiona el estado de las tareas y coordina los componentes hijos.

### TaskInput
Campo de entrada y botón para añadir nuevas tareas. Maneja el evento Enter para mayor comodidad.

### TaskList
Lista que renderiza todas las tareas usando el componente TaskItem.

### TaskItem
Componente individual para cada tarea con su botón de eliminación.

---

## 🎨 Características de Diseño

- **Paleta de colores**: Verdes para acciones positivas, rojos para eliminar
- **Espaciado consistente**: Márgenes y paddings armoniosos
- **Sombras sutiles**: Dan profundidad a los elementos
- **Esquinas redondeadas**: Diseño moderno y suave
- **Efectos hover**: Feedback visual al interactuar

---

## 🔮 Posibles Mejoras Futuras

- [ ] Checkbox para marcar tareas como completadas
- [ ] Persistencia con localStorage
- [ ] Editar tareas existentes
- [ ] Filtros (todas/activas/completadas)
- [ ] Drag & drop para reordenar
- [ ] Modo oscuro

---

## 👤 Autor

**Xian Leon Romero**

- GitHub: [@xianleonromero](https://github.com/xianleonromero)
- Proyecto: [Lista de Tareas](https://github.com/xianleonromero/todo-list)
- Demo: [Usar Online](https://xianleonromero.github.io/todo-list)
