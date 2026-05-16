<div align="center">

# EESE

**Dashboard de Ventas y Productos**

Aplicacion movil para la gestion y visualizacion de datos de ventas con graficos interactivos en tiempo real.

[![Expo](https://img.shields.io/badge/Expo-49.0-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React_Native-0.72-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev/)
[![Express](https://img.shields.io/badge/Express-4.19-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.5-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Required-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)

</div>

---

## Descripcion

EESE es una aplicacion movil desarrollada como proyecto colaborativo universitario que permite visualizar y gestionar informacion de ventas y productos. Cuenta con una interfaz de autenticacion, un dashboard principal con indicadores de estado, menus desplegables para la seleccion de categorias de ventas y productos, y una seccion de graficos que muestra los ingresos de forma interactiva consumiendo datos desde una API REST con MongoDB.

---

## Caracteristicas

- **Pantalla de inicio de sesion** con campos de usuario y contrasena (con toggle de visibilidad)
- **Dashboard principal** con indicador de estado del usuario (en linea)
- **Menus desplegables** para seleccionar categorias de ventas y productos
- **Grafico de ingresos** en tiempo real con datos obtenidos desde la API
- **Navegacion por pestaas** (Home y Charts) con Material Bottom Tabs
- **Fondo con degradado** en las pantallas principales
- **API REST** para almacenar y consultar datos de graficos en MongoDB

---

## Tecnologias

| Categoria | Tecnologia |
|-----------|-----------|
| Framework movil | React Native + Expo 49 |
| Navegacion | React Navigation (Stack + Material Bottom Tabs) |
| Backend | Express.js 4.19 |
| Base de datos | MongoDB 6.5 + Mongoose |
| Graficos | react-native-chart-kit |
| Cliente HTTP | Axios |
| Iconos | FontAwesome (via react-native-vector-icons) |
| Estilos | Expo Linear Gradient, React Native Paper |
| Seleccionadores | react-native-picker-select |

---

## Estructura del Proyecto

```
.
├── App.js                  # Punto de entrada principal - navegacion y pantallas
├── index.js                # Servidor Express + API REST con MongoDB
├── app.json                # Configuracion de Expo
├── babel.config.js         # Configuracion de Babel
├── package.json            # Dependencias y scripts
├── .env                    # Variables de entorno
├── assets/                 # Recursos graficos (iconos, splash)
│   ├── icon.png
│   ├── splash.png
│   ├── adaptive-icon.png
│   ├── favicon.png
│   └── snack-icon.png
└── components/             # Componentes reutilizables
    ├── ChartPage.js        # Grafico de linea para ingresos
    ├── dropdown.js         # Selector de categorias de ventas
    ├── dropdownV.js        # Selector de categorias de productos
    ├── usuario.js          # Campo de entrada de usuario
    └── pass.js             # Campo de entrada de contrasena
```

---

## Como correr el proyecto localmente

### Requisitos previos

- [Node.js](https://nodejs.org/) v16 o superior
- [MongoDB](https://www.mongodb.com/try/download/community) instalado y ejecutandose localmente
- [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado globalmente
- Emulador de Android/iOS o la app [Expo Go](https://expo.dev/go) en tu dispositivo

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd eese
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar la base de datos

Asegurate de que MongoDB este ejecutandose en `localhost:27017`. El servidor se conecta automaticamente a la base de datos `bd_grafica`.

### 4. Iniciar el servidor backend

```bash
node index.js
```

El servidor estara disponible en `http://localhost:3000`.

**Endpoints disponibles:**

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| `GET` | `/datos` | Obtener todos los datos del grafico |
| `POST` | `/agregar` | Agregar un nuevo dato (requiere `label` y `value` en el body) |

**Ejemplo para agregar datos:**

```bash
curl -X POST http://localhost:3000/agregar \
  -H "Content-Type: application/json" \
  -d '{"label": "Enero", "value": 1500}'
```

### 5. Iniciar la aplicacion movil

```bash
npx expo start
```

Escanea el codigo QR con Expo Go o selecciona un emulador desde la terminal.

> **Nota:** Si el backend corre en otra IP, actualiza la URL en `components/ChartPage.js` (actualmente apunta a `http://172.20.100.235:3000/datos`).

---

## Posibles mejoras futuras

- **Autenticacion real** con Supabase (ya configurado en `.env`) para login seguro
- **Corregir dependencia** `moongose` por `mongoose` en `package.json`
- **Variables de entorno** para la URL del backend en lugar de IP hardcodeada
- **Pantalla de registro** funcional para nuevos usuarios
- **CRUD completo** de productos y ventas desde la app
- **Mas tipos de graficos** (barras, torta, etc.)
- **Notificaciones push** para alertas de ventas o registros pendientes
- **Pantalla de confirmacion de correo** (actualmente solo texto placeholder)
- **Manejo de errores** mejorado en la obtencion de datos del grafico
- **Tests unitarios y de integracion**

---

## Creditos

Proyecto desarrollado de forma colaborativa como parte de un proyecto universitario.

---

## Licencia

Este proyecto es de uso educativo. Todos los derechos reservados a los autores.
