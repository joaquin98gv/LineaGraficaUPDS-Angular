## Módulos y Estructurado Base
### Módulos
- app
    > Enruta el modulo de pages y el componente login y notpagefound de forma independiente
- pages
    > Enruta todas las "páginas del sitio"
    > Importa todos los componentes reutilizables
 
### Estructurado Base
- pages
    > Contiene el navbar, sidebar y la tarjeta de información del usuario
- navbar
    > Contiene el toggle para el sidebar y demas interacciones a la derecha
- sidebar
    > Contiene el menu de navegación
- card-user
    > Contiene la tarjeta de información del usuario

## Estilos
Contamos con una paleta de colores destinada tanto al modo light como al dark; la declaracion de esta paleta y algunas configuraciones podemos encontrarla en el archivo `styles.scss` junto los estilos globales de la app, la declaracion de los colores personalizados se encuentra en el archivo `/assets/styles/my-theme.scss`.

## Componentes y demás archivos
### Login
Obtiene mediante la url el token de autenticación y lo almacena en el localStorage, en caso de no recibirlo, sera una tarjeta con la induccion al inicio de sesion con office 365.

### App
Nada

### Pages
Gestiona el toggle del sidebar y el modo dark/light

### Sidebar
Gestiona las rutas de la app consultando a un servicio que devuelve los menus de la aplicacion en dependencia de los permisos que tenga el usuario logeado

### Navbar
Gestiona el modo dark/light junto a Pages

### Card-user
Visualiza la informacion basica del usuario logeado y permite cerrar sesion

### main.service
Contiene las funciones main para realizar peticiones http mediante get y post y cuenta con una funcion para introducir la cabecera a dichas peticiones

### Variables de entorno
Cuenta con 3 variables de entorno
- endPoint: Ruta de la api de la aplicacion
- urlLogin: Ruta de la api de login
- urlAccess: Ruta de la api de acceso para servicios generales