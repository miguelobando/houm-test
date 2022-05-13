**Prueba técnica de Houm**

### `npm start`

Corre la aplicación en modo desarrollo y lo deja en el puerto 3000

### `npm test`

Lanza los test creados

### `npm run build`

Para modo producción

**Decisiones técnicas**

Se utilizó el stack: React, Material UI (debido a que es el utilizado dentro de Houm), Typescript, Jest y react-testing-library .\
coomo API se utilizó la api de [spacex](https://docs.spacexdata.com/)

En un principio se creó la aplicación utilizando mediante créate-react-app con la plantilla de redux/toolkit y typescript, sin embargo se terminó descartando el uso de redux y utilizando un hook llamado &quot;useLaunches&quot; para pasar la información a través de los componentes debido a que existen sólo 2 vistas y en ningún momento se cae en el [Prop Drilling](https://kentcdodds.com/blog/prop-drilling) dada la baja complejidad de esta app, teniendo como ventaja que es más fácil de leer y requiere menos código. Los componentes están organizados en &quot;vistas&quot;, cada vista se encuentra dentro de la carpeta llamada &quot;View&quot; que a su vez contiene una sub-carpeta llamada &quot;parts&quot; que agrupa todas las partes de ella misma.

Adicionalmente eixten las siguientes carpetas:

- Services: Donde se encuentran todas las funciones relacionadas al contacto con la API
- Types: Donde se encuentran todos los tipados utilizados a lo largo de la aplicación, esto incluye los tipados de los objetos que retorna la API
- Styles: Donde se encuentra un archivo con todos los compontes personalizados utilizando el motor &quot;styled&quot;
- Components: Componentes que son utilizados en toda la aplicación

**Hook useLaunches**

El hook useLaunches() contiene lo siguiente:

Estado Launches: Array utilizado para guardar la data que arroja la petición de la API

Estado Query: Estructura de tipo Record utilizado para setear los diversos filtros

Estado isLoading: Booleano utilizado para saber si una petición terminó

Estado hasMore: Booleano utilizado para saber si el icono de carga debe seguir apareciendo

Funcion addMore(): Utilizado para hacer una petición a la API y pedir más cohetes

setFilter (query): Utilizado setear query

**Vistas**

- Home: Donde se renderizan todos los lanzamientos
- Details: Donde se renderiza una página que muestran la descripción del lanzamiento y los links de información

**Testing**

Se hizo un code coverage bastante reducido en el unit testing, de 20% aproximadamente, solo para demostrar que el aplicante tiene noción de testing

**Puntos de mejora**

- Aumentar el code coverage testeando los hooks y agregando testing de integración y E2E a través de Cypress
- Una sección de favoritos guardando los seleccionados en el store local

**PD:** No sabía typescript pero en pro de demostrar mis habilidades como desarrollador y adaptabilidad lo implementé en esta prueba técnica (y me siento orgulloso 😊)
