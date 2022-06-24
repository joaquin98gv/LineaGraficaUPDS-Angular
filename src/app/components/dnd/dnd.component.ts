import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})
export class DndComponent implements OnInit {

  @Input() nameFile: string = "imagen";
  @Input() uri: string = "imagen";
  @Input() tipeAccept: string = "*";
  @Output() fileDropped: EventEmitter<string> = new EventEmitter<string>();

  isUpload = false;

  porcentajeProgreso: number = 0;

  constructor(public uploadService: UploadService) {
    uploadService.porcentajeSubida.subscribe((resp: number) => {
      this.porcentajeProgreso = resp;
    })
  }

  ngOnInit(): void {
  }

  onFileDropped(event: any) {
    this.uploadFile(event[0]);
  }

  fileBrowseHandler(file: any) {
    this.uploadFile(file.files[0]);
  }

  async uploadFile(file: any) {
    this.isUpload = true;
    this.uploadService.subirFoto(file).then((resp: any) => {
      this.isUpload = false;
      this.uri = resp.Uri;
      this.fileDropped.emit(this.uri);
      // return resp;
    });
  }

}
