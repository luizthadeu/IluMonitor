import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditSchemaComponent } from '../components/edit-schema/edit-schema.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public colors = ['#E70000','#CD19FF','#005AFB'];

  changeSchemaModal = null;
  showBackground = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public router: Router,
  ) { }

  ngOnInit() {
    const inputColors = (this.activatedRoute.snapshot.paramMap.get('id') || '').toUpperCase();
    this.showBackground = (this.activatedRoute.snapshot.paramMap.get('type') || '').toUpperCase() === 'FLUID';

    console.log(inputColors);
    if(inputColors){
      this.colors = inputColors.split(',');
    }
  }

  async changeSchema() {
    this.changeSchemaModal = await this.modalController.create({
      component: EditSchemaComponent,
      cssClass: 'full-opty-popover',
      componentProps: {
        colors: [...this.colors],
      }
    });

    if (this.changeSchemaModal) {
      await this.changeSchemaModal.present();

      const { data } = await this.changeSchemaModal.onDidDismiss();
      if (data) {
        const type = (this.showBackground) ? 'fluid' : '';
        this.colors = [...data];
        const rota = this.colors.join(',');
        this.router.navigate(['/'+rota+'/'+type]);
      }
    }
    return;
  }

}
