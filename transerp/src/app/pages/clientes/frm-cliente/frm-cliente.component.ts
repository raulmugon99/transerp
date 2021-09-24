import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-cliente',
  templateUrl: './frm-cliente.component.html',
  styleUrls: ['./frm-cliente.component.scss'],
})
export class FrmClienteComponent implements OnInit {

  title = 'Angular Form Validation Tutorial';
  angForm: FormGroup;

  createForm() {
   this.angForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ]
   });
 }



  @ViewChild('nombre') nombre: any;
  @ViewChild('aform') aform: any;
  
  cliente: any = {};
  @Input() id: string = '';
  constructor(private menuController: MenuController,
    private route: ActivatedRoute,
    private _clientes: ClientesService,
    private fb: FormBuilder) {
    this.menuController.enable(false)
    this.createForm();
   }

  ngOnInit() {
     if (this.route.snapshot.paramMap.get('id')) {
      this.id =this.route.snapshot.paramMap.get('id')
    }
    if (this.id) {
      this._clientes.obtenerClientesCriterio('id', this.id).subscribe((data: any)=> {
        console.log(data);
        this.cliente = data.data[0];
      })
    }
  }

  ngOnDestroy(): void {
    this.menuController.enable(true)
  }


  test(a: any) {
    console.log(a)
  //   for (let variable in this.cliente) {         
  //     console.log(typeof this.cliente[variable])
  //  }
  }
}
