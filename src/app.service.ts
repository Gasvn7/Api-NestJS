import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("Han accedido a nuestras defensas!")
    return 'Hola! Haz accedido a mi puerto 3000. Si deseas interactuar con mi API de Tareas ve a /tasks';
  }
}
