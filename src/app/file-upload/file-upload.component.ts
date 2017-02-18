import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _onChange(files: FileList) : void {
    let fullArr: string[] = [];
    let rowArr: Array<any> = [];
    let nameArr: string[] = [];
    let valueArr: string[] = [];

    if (files && files.length > 0) {
      let file : File = files.item(0);
      // console.log(file.name);
      // console.log(file.size);
      // console.log(file.type);
      let reader: FileReader = new FileReader();

      reader.onload = (e) => {
        let csv: string = reader.result;
        let arr: string[] = csv.split('\n');

        for (let i = 0; i < arr.length; i++) {
          fullArr.push(arr[i]);
        }

        for (let i = 0; i < fullArr.length; i++) {
          rowArr.push(fullArr[i].split(','));
        }

        for (let i = 0; i < rowArr.length; i++) {
          nameArr.push(rowArr[i][0]);
          valueArr.push(rowArr[i][1]);
        }

        console.log(nameArr);
        console.log(valueArr);
      }

      reader.readAsText(file);
    }
  }

}
