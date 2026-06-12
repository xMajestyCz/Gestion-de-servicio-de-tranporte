# Gestión de Órdenes de Servicio de Transporte

Aplicación web para crear, listar, editar, cancelar y filtrar órdenes de servicio de transporte, con asignación de clientes y conductores.

## Stack

| Frontend | React 18 + TypeScript + Tailwind CSS + Vite |
| Backend | Node.js + Express + TypeScript |
| ORM | Prisma 7 |
| Base de datos | PostgreSQL |

## Requisitos previos

- [Node.js](https://nodejs.org/) v20 o superior
- [PostgreSQL](https://www.postgresql.org/) v14 o superior
- npm v10 o superior

## Estructura del proyecto

```
gestion-transporte/
├── backend/          # API REST con Express
│   ├── prisma/      # Schema y migraciones
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── lib/
│   │   └── index.ts
│   └── package.json
└── frontend/          # Interfaz web con React
    ├── src/
    │   ├── components/
    │   ├── services/
    │   ├── types/
    │   └── App.tsx
    └── package.json
```

## Configuración local

### 1. Clonar el repositorio

```bash
git clone https://github.com/xMajestyCz/Gestion-de-servicio-de-tranporte
cd Gestion-de-servicio-de-tranporte
```

### 2. Configurar el backend

```bash
cd backend
npm install
```

Crea un archivo `.env` dentro de la carpeta `backend/` con el siguiente contenido:

```env
DATABASE_URL="postgresql://USUARIO:CONTRASEÑA@localhost:5432/NOMBRE_BD"
PORT=3000
```

Reemplaza `USUARIO`, `CONTRASEÑA` y `NOMBRE_BD` con los datos de tu instalación de PostgreSQL.

Ejemplo:

```env
DATABASE_URL="postgresql://postgres:1234@localhost:5432/transport_orders"
PORT=3000
```

### 3. Crear la base de datos

Antes de correr las migraciones, crea la base de datos desde pgAdmin o desde la terminal:

```bash
psql -U postgres -c "CREATE DATABASE transport_orders;"
```

### 4. Aplicar migraciones y generar el cliente de Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Poblar con datos de prueba (opcional)

```bash
npm run db:seed
```

Esto crea 3 clientes, 3 conductores y 4 órdenes de ejemplo con diferentes estados para facilitar las pruebas.

### 6. Configurar el frontend

```bash
cd ../frontend
npm install
```

### 7. Correr el proyecto

Abre dos terminales:

**Terminal 1 — Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 — Frontend:**

```bash
cd frontend
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Variables de entorno

`DATABASE_URL` 
`PORT`

## Endpoints de la API

| `GET` | `/api/ordenes` | Listar órdenes. Acepta `?estado=` y `?conductorId=` |
| `GET` | `/api/ordenes/:id` | Obtener una orden por ID |
| `POST` | `/api/ordenes` | Crear una orden |
| `PATCH` | `/api/ordenes/:id` | Editar una orden |
| `PATCH` | `/api/ordenes/:id/cancelar` | Cancelar una orden |
| `GET` | `/api/clientes` | Listar clientes |
| `POST` | `/api/clientes` | Crear un cliente |
| `GET` | `/api/conductores` | Listar conductores |
| `POST` | `/api/conductores` | Crear un conductor |

## Funcionalidades

- Crear, editar y cancelar órdenes de servicio
- Listar todas las órdenes con sus datos completos
- Filtrar por estado o por conductor
- Crear clientes y conductores desde la interfaz
- Confirmación visual antes de cancelar una orden
- Los datos persisten en PostgreSQL

## Estados de una orden

```
PENDIENTE → EN RUTA → ENTREGADO
    ↓           ↓          ↓
 CANCELADO  CANCELADO  CANCELADO
```

Una orden cancelada no puede volver a ningún estado anterior. Cancelar cambia el estado en la base de datos pero no elimina el registro.

## Notas

- En Windows, caracteres con tilde pueden mostrarse incorrectamente en la terminal debido al encoding WIN1252 por defecto. Los datos se almacenan y visualizan correctamente en la aplicación.
- El archivo `.env` no se incluye en el repositorio por seguridad. Usa `.env.example` como referencia para crear el tuyo.
