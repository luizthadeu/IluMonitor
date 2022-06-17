import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-schema',
  templateUrl: './edit-schema.component.html',
  styleUrls: ['./edit-schema.component.scss'],
})
export class EditSchemaComponent implements OnInit {
  @Input() colors = [];

  public defaultColors = ['FF0000','00FF00','0000FF'];

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
    console.log(this.colors);
  }

  closeModal(output: any) {
    this.modalCtrl.dismiss(output);
  }

  changeColor(ev: any, index: number){
    if(ev.target){
      this.colors[index] = ev.target.value;
    }
  }

  add(){
    this.colors.push(this.defaultColors[this.colors.length % 3]);
  }

  remove(){
    this.colors.pop();
  }

}
