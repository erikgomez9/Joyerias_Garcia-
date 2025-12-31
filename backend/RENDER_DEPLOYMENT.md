# Instrucciones de Implementación en Render

## Paso 3: Configuración en Render

Sigue estos pasos para desplegar la aplicación Node Express en Render:

### 1. Conectar el repositorio
- Ve a [https://render.com](https://render.com)
- Inicia sesión o crea una cuenta
- Haz clic en "New +" → "Web Service"
- Conecta tu repositorio de GitHub

### 2. Configurar el servicio

**Nombre del servicio:** joyerias-garcia-api

**Rama:** main

**Root Directory:** `backend/` (o deja en blanco si está en la raíz)

### 3. Comandos de compilación y ejecución

**Build Command (Comando de compilación):**
```
npm install express
```

**Start Command (Comando para iniciar):**
```
node app.js
```

### 4. Variables de entorno

En la sección **Environment** de Render, agrega:

| Key | Value |
|-----|-------|
| `VERIFY_TOKEN` | `vibecode` |
| `NODE_ENV` | `production` |

### 5. Plan
- Selecciona el plan gratuito o pagado según tus necesidades
- Haz clic en "Create Web Service"

## Verificar la implementación

Una vez desplegado, tu app estará disponible en una URL como:
```
https://joyerias-garcia-api.onrender.com
```

Prueba los endpoints:
- `GET /` - Ruta principal
- `GET /webhook?hub.verify_token=vibecode&hub.challenge=test` - Verificación de webhook

## Notas importantes

- El `VERIFY_TOKEN` debe coincidir en tu aplicación y en las variables de entorno de Render
- Render reiniciará el servicio cada 15 minutos de inactividad (plan gratuito)
- Asegúrate de usar el comando `npm install express` para instalar dependencias correctamente
