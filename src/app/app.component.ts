import { Component } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FileUploadComponent]
})
export class AppComponent {
  title = 'Angular 2 File Upload!';
}
