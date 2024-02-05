import { envs } from './config/';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';


(async()=> {
  main();
})();


async function  main() {
  //Inicializo la conexion a BD
  // await MongoDatabase.connect({
  //   dbName : envs.MONGO_DB_NAME,
  //   mongoUrl: envs.MONGO_URL 
  // });
  
  //Server es el que orquesta toda mi aplicacion
  //recibe un puerto y las rutas
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
}