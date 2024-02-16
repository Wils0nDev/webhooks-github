# WEBHOOKS 
 - Digamos que tenemos una aplicación que depende totalmente del frontend(Solo es una suposición ) , por ejemplo un e-commerce, y un usuario esta haciendo una compra, este se dirige a la pasarela de pago (paypal) a realizar el pago, una vez ya pagado, "EL USUARIO CIERRA LA PAGINA". y despues de esto PAYPAL le regresa la respuesta. Pero el usuario ya cerro la pagina. 
  - "Entonces no es bueno depender siempre del cliente"

 - Es aqui donde entran los WebHooks 

 ## ¿Qué es un webhook y para qué sirve?
Un webhook es una función de devolución de llamadas que se basa en el protocolo HTTP para que dos interfaces de programación de aplicaciones (API) se comuniquen mediante eventos de forma ligera. Muchas aplicaciones web los utilizan para recibir pequeñas cantidades de datos de otras aplicaciones, pero también sirven para activar flujos de trabajo de automatización en los entornos de GitOps.

## ¿ Que implementaremos? 

En esta aplicación veremos como se implementa un webhook para trabajar con github y discord
- Github enviara la petición a nuestro servidor (api), y nuestro webhook le respondera  a discord


# INTEGRACION DE GITHUB Y DISCORD 

# PASOS PARA EJECUTAR APLICACIÓN

- Clonar el repositorio
- Clonar .env.template a .env
- Ejecutar npm install
- Ejecutar npm run dev
- Ejecutar ngrok http 3000 -> Leer sección  "#TOKEN DE ACCESO"

# PASOS DE CONFIGURACIÓN 

## NGROK 
 ngrok para tunneling (install) : nos permitira hacer publico nuestro puerto en internet
    1. Descargar ngrok https://dashboard.ngrok.com/get-started/setup/windows
    2. Crear en C:\Development\ngrok y pegar ahí ngrok.exe
    3. Crear una nueva variable de enterno en Path -> C:\Development\ngro
    4. en CMD ejecutar ngrok version , para asegurarnos que esta instalado

## TOKEN DE ACCESO 
      - En la pagina de ngrok https://dashboard.ngrok.com/get-started/setup/windows
      - ngrok te dara un token de acceso, que deberas pegar en la terminal 
         . ngrok config add-authtoken "TOKEN_DE_ACCESO"
    -- Por ultimo ejecuta en la terminal "ngrok http 3000"  ,  "3000" es el puerto que vas a exponer a internet

## WEBHOOK GITHUB 

    - En tu repositorio creado ir Settings
    - En el menu lateral buscar webhooks
    - Click en el boton add webhook
    - En Payload URL : Pegar la url que te brinda ngrok al ejecutar 'ngrok http PUERTO'
    - En Content type : application/json
    - secret : Ingresar tu clave que deseas que sea secreta

    - Configura los eventos que deseas que detecte el webhook
        - Para esta app se uso el Issues y Star
    - Por ultimo click en "Add webhook"

## WEBHOOK DISCORD 

     - En discord crear un canal
     - En el canal creado, click derecho, ir a "Ajuster del servidor -> Vista general"
     - En el menu lateral buscar Aplicaciones/Integraciones
     -  Dar click en WebHooks
    - Posterior mente dar click en Nuevo WebHook
     - Dar click en el webhook creado por defecto para editar el nombre y copiar el el url
     - Si gustas puedes cambiar el nombre, en canal seleccionar #general
     - Por ultimo dar click en el boton Copiar URL de webhook

## .ENV
    - En tus variables de enterno, crear uno nuevo para el url de discord
    Ejemplo:
    
    DISCORD_WEBHOOK_URL='TU_URL_QUE_TE_BRINDA'
    SECRET_TOKEN=LLAVE_SECRETA_WEBHOOK_GITHUB

## AUTH WEBHOOK

    - Para que nuestro webhook solo permita peticiones desde nuestro github y que no cualquiera pueda usar nu estro servicio, este nos brinda la opción de colocar un token secret

    -En el webhook creado, le damos editar y en la parte de "Secret" le damos click a 
    "Change Secret"
    
    - Posterior mente colocamos un llave secreta unica que usaremos como token