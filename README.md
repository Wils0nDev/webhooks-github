
# PASOS PARA EJECUTAR APLICACIÓN

- Clonar el repositorio
- Clonar .env.template a .env
- Ejecutar npm install
- Ejecutar npm run dev

# PASOS DE CONFIGURACIÓN 

# -- NGROK 
- ngrok para tunneling (install) : nos permitira hacer publico nuestro puerto en internet
    -- Descargar ngrok https://dashboard.ngrok.com/get-started/setup/windows
    -- Crear en C:\Development\ngrok y pegar ahí ngrok.exe
    -- Crear una nueva variable de enterno en Path -> C:\Development\ngro
    -- en CMD ejecutar ngrok version , para asegurarnos que esta instalado

    --- TOKEN DE ACCESO 
      - En la pagina de ngrok https://dashboard.ngrok.com/get-started/setup/windows
      - ngrok te dara un token de acceso, que deberas pegar en la terminal 
         . ngrok config add-authtoken "TOKEN_DE_ACCESO"
    -- Por ultimo ejecuta en la terminal "ngrok http 3000"  ,  "3000" es el puerto que vas a exponer a internet

#  --- WEBHOOK GITHUB ----

    - En tu repositorio creado ir Settings
    - En el menu lateral buscar webhooks
    - Click en el boton add webhook
    - En Payload URL : Pegar la url que te brinda ngrok al ejecutar 'ngrok http PUERTO'
    - En Content type : application/json
    - secret : Ingresar tu clave que deseas que sea secreta

    - Configura los eventos que deseas que detecte el webhook
        - Para esta app se uso el Issues y Star
    - Por ultimo click en "Add webhook"

#  --- WEBHOOK DISCORD -- 

     - En discord crear un canal
     - En el canal creado, click derecho, ir a "Ajuster del servidor -> Vista general"
     - En el menu lateral buscar Aplicaciones/Integraciones
     -  Dar click en WebHooks
    - Posterior mente dar click en Nuevo WebHook
     - Dar click en el webhook creado por defecto para editar el nombre y copiar el el url
     - Si gustas puedes cambiar el nombre, en canal seleccionar #general
     - Por ultimo dar click en el boton Copiar URL de webhook

# -- .ENV --- 
    - En tus variables de enterno, crear uno nuevo para el url de discord
    Ejemplo:
    
    DISCORD_WEBHOOK_URL='TU_URL_QUE_TE_BRINDA'
    SECRET_TOKEN=LLAVE_SECRETA_WEBHOOK_GITHUB

 # -- AUTH WEBHOOK -- 

    - Para que nuestro webhook solo permita peticiones desde nuestro github y que no cualquiera pueda usar nu estro servicio, este nos brinda la opción de colocar un token secret

    -En el webhook creado, le damos editar y en la parte de "Secret" le damos click a 
    "Change Secret"
    
    - Posterior mente colocamos un llave secreta unica que usaremos como token