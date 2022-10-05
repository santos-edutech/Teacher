import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
  template: `
  <ckeditor
    [(ngModel)]="ckeditorContent"
    [config]="{uiColor: '#99000'}"
    [readonly]="false"
    (change)="onChange($event)"
    (editorChange)="onEditorChange($event)" 
    (ready)="onReady($event)"
    (focus)="onFocus($event)"
    (blur)="onBlur($event)"
    (contentDom)="onContentDom($event)"
    (fileUploadRequest)="onFileUploadRequest($event)"
    (fileUploadResponse)="onFileUploadResponse($event)"
    (paste)="onPaste($event)"
    (drop)="onDrop($event)"
    debounce="500">
  </ckeditor>
  `,
  
})
export class CreateQuestionComponent implements OnInit {
  ckeditorContent: string = '<p></p>';
save: any;
  constructor() { }

  ngOnInit(): void {
  }

}