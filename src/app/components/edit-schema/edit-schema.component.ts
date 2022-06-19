import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-schema',
  templateUrl: './edit-schema.component.html',
  styleUrls: ['./edit-schema.component.scss'],
})
export class EditSchemaComponent implements OnInit {
  @Input() colors = [];

  loading = false;

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {

  }

  closeModal(output: any) {
    this.modalCtrl.dismiss(output);
  }

  changeColor(ev: any, index: number){
    if(ev.target){
      this.loading = true;
      setTimeout(()=>{
        this.colors[index] = ev.target.value;
        this.loading = false;
      }, 100);
    }
  }

  add(index: number){
    const color = `${this.colors[index]}`;
    this.colors.splice(index, 0, [color]);
  }

  remove(index: number){
    this.colors.splice(index, 1);
  }

}
