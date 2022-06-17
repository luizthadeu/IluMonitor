import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditSchemaComponent } from '../components/edit-schema/edit-schema.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public colors = ['FF0000','0000FF'];

  changeSchemaModal = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    const inputColors = (this.activatedRoute.snapshot.paramMap.get('id') || '').toUpperCase();
    if(inputColors){
      this.colors = inputColors.split(',');
    }
  }

  async changeSchema() {
    this.changeSchemaModal = await this.modalController.create({
      component: EditSchemaComponent,
      componentProps: {
        colors: [...this.colors],
      }
    });

    if (this.changeSchemaModal) {
      await this.changeSchemaModal.present();

      const { data } = await this.changeSchemaModal.onDidDismiss();
      if (data) {
        this.colors = [...data];
      }
    }
    return;
  }

}
