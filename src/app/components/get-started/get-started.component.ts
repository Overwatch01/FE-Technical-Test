import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  triggerModal (modalId: string, action: string, type?: string) {


     if (type === 'STATIC') {
     $(`#${modalId}`).modal({
         backdrop: 'static',
         keyboard: false
       });
     }

     (action === 'SHOW') ? $(`#${modalId}`).modal('show') : $(`#${modalId}`).modal('hide');
     // (action === "open") ? this.overlay.open(modalId, 'slideInLeft') : this.overlay.close(modalId, () => {
     // });
     if (type === 'DRAGABLE') {
       $(`#${modalId}`).draggable({
         handle: '.modal-header'
       });
     }
  };

}
