# 🎬 Movies Inc

¡Saludos!  
Primero que nada, gracias por la oportunidad.

Esta es una aplicación sencilla construida con **React Native**, **TypeScript** y **Expo**, creada con el objetivo de cumplir los requisitos de la prueba técnica.

---

## ⚙️ Tecnologías utilizadas

- React Native
- TypeScript
- Expo
- React Context API (para estado global)
- Jest + Testing Library (para pruebas)

> 🎯 Nota: Se utilizó **React Context** en lugar de Redux o Zustand debido a que es una app pequeña y solo requiere unos pocos estados globales.

---

## ⚠️ Importante

> Se dejó el archivo `.env` en el repositorio (aunque es una mala práctica) para evitar errores de configuración y facilitar la evaluación del proyecto.

---

## 🚀 ¿Cómo ejecutar la app?

1. Clona este repositorio.
2. Ejecuta:

   ```bash
   npm install
   ```

## 🧩 Funcionalidades

🔍 Ver películas en cartelera: Lista de películas que se están reproduciendo actualmente, ordenadas alfabéticamente.

🎥 Ver detalles de una película: Al hacer clic en una película, se accede a una pantalla con su descripción, duración, géneros, etc.

⭐ Calificar películas: Puedes agregar una calificación a cada película, que se refleja en la API.

📽️ Ver recomendaciones: La app muestra una lista de películas recomendadas en base a la que estés viendo.

❤️ Agregar a favoritos: Puedes guardar películas favoritas para tenerlas fácilmente accesibles.

🧪 Probar funciones y componentes: Se realizaron pruebas unitarias a funciones y componentes clave del proyecto.

## 🧪 Pruebas

Para correr los test usa el comando npx jest, debes poner hacer pruebas a los siguientes archivos:

- formatDate.ts
- formatMinutes.ts
- MovieCard.tsx

Gracias,
Gerald Serra
