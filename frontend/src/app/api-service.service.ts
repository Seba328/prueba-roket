import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getArboles() {
    return this.http.get('http://localhost:3000/arboles');
  }

  getLocalizacion(id: number) {
    return this.http.get(`http://localhost:3000/ubicaciones/${id}/ubicacion`);
  }

  getFotos(id: number) {
    return this.http.get(`http://localhost:3000/fotos/${id}/foto`);
  }

  postComentario(id: number, body: any) {
    return this.http.post(`http://localhost:3000/comentarios/${id}/comentario`, body);
  }
}
