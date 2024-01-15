import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SelectorComponent } from './selector/selector.component';
import { ApiServiceService } from './api-service.service';
import { PhotoviewComponent } from './photoview/photoview.component';
import { MapcomponentComponent } from './mapcomponent/mapcomponent.component';
import { TextfieldComponent } from './textfield/textfield.component';
interface Arbol {
  arbol_id: number;
  nombre_arbol: string;
  ubicacion_id: number;
  created_at: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            SelectorComponent,
            PhotoviewComponent, 
            MapcomponentComponent,
            TextfieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-tecnica';
  parentItems: Arbol[] = [];
  itemParsed = <any>[];
  urls = <string[]>[];	
  lat = <number>0;
  lng = <number>0;
  id = <number>0;
  comments = <string>'';
  dataLoaded = false;
  constructor(private apiService: ApiServiceService) {}
  
  ngOnInit() {
    this.apiService.getArboles().subscribe((data: any) => { 
      this.parentItems = data;
      this.itemParsed = data.map((obj: Arbol) => ({id: obj.arbol_id, nombre: obj.nombre_arbol}));
    });
  }

  handleItemSeleccionado(item: any) {
    this.id = item;
    this.apiService.getFotos(item).subscribe((data: any) => {
      this.urls = data.map((foto: {arbol_id: number, foto_id: number, url_foto: string}) => foto.url_foto);
      this.checkDataLoaded();
    }) 
    this.apiService.getLocalizacion(item).subscribe((data: any) => {
      this.lat = data.latitud;
      this.lng = data.longitud;
      this.checkDataLoaded(); 
    })
  }

  checkDataLoaded() { // Nueva función
    if (this.urls.length > 0 && this.lat != 0 && this.lng != 0) {
      this.dataLoaded = true;
    }
  }

  handleCommentsChange(comments: any) {
    console.log('Los comentarios son:', comments);
    this.comments = comments;
    this.apiService.postComentario(this.id, {comentario: comments}).subscribe();
  }
}
