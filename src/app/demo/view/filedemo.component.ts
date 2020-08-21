import { Component } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    templateUrl: './filedemo.component.html'
})
export class FileDemoComponent {

    msgs: Message[];

    uploadedFiles: any[] = [];

    onUpload(event) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Upload Completed' });
    }
}
