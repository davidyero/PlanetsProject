## Inciar Proyecto
Para iniciar el proyecto es necesario tener configurado los simuladores correctamente y tener instalado Metro

```bash
#instalar dependencias
yarn install

#iniciar proyecto
yarn start --reset-cache
```

# CODIGO
Se realiza un proyecto con código reutilizable, escalable y mantenible. Se utilizan las siguientes tecnologías:
- React Native
- React Hooks
- React Context
- React Navigation
- Axios

## Estructura
- Se divide el proyecto en componentes, hooks, context, navigation, views y shared.
- Se implementa el patrón de diseño de contenedor y presentacional.
- Se implementa una arquitectura hexagonal.
- Se implementa el principio de responsabilidad única.
- Se implementa el principio de inversión de dependencias.
- Se implementa el principio de segregación de interfaces.
- Se centralizan colores en un archivo para alinear todo el proyecto.
- Todo componente, objeto o vista tiene su interface

## Linter
- Se implementa un sistema de linter con ESLint y Prettier para mantener un código limpio y ordenado.

## Componentes reutilizables
- Se implementan componentes reutilizables y configurables como SuperModal, SuperSwitch, SuperInput, SuperCard, 
SuperHeader, entre otros con el fin de estandarizar su uso, sus estilos y reducir la duplicidad de código.

## Dependencias
- Se usaron librerías de componentes como el Modal o Notificaciones, pero fueron encapsuladas con el fin de poder cambiarlas
  en cualquier momento sin necesidad de afectar todas las implementaciones

## Internacionalización
- Se implementa la internacionalización de una forma escalabe y extensible, permitiendo agregar más idiomas sin
  dificultad con i18next y react-i18next.

## Navegación
- Se implementa @react-navigation para la navegación entre pantallas, se centraliza la configuración de las rutas y se
  implementa un hook para navegar entre pantallas de forma sencilla.

## Context
- Se implementa context para manejar el estado global de la aplicación, se centraliza la configuración de los contextos y se
  implementa un hook para acceder a los valores de los contextos de forma sencilla.
- Igualmente se guardan los favoritos en el contexto para poder acceder a ellos desde cualquier parte de la aplicación
pero tambien se guarda en el AsyncStorage para persistir los datos.
- Y se guarda el idioma seleccionado en el contexto para poder cambiarlo en cualquier parte de la aplicación.

## Consultas al backend
- Se implementa axios como dependencia para consultar al backend, se crean hooks que centralizan la forma de hacer consultas
estableciendo un punto único de acceso a los servicios.
