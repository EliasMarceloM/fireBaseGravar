import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { gravaNoFire, consultaNoFire } from './funcoesFirebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  mostrarDois: any=null;
  formulario: FormGroup;
  busqueIsso: string = "";

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      name: [''],
      desc: [''],
      price: [''],
      quantidade: ['']
    });
  }

  ngOnInit() {
    // this.consultarDados(this.nomeDoProduto);
  }

  async consultarDados(nome: string) {
    this.mostrarDois = await consultaNoFire(nome); // Alteração da chamada da função para consultaNoFire
    console.log('Dados:', this.mostrarDois);
  }

  enviarFormulario() {
    const formValues = this.formulario.value;
    const nomeProduto = formValues.name;
    const descricaoProduto = formValues.desc;
    const precoProduto = formValues.price;
    const quantidadeProduto = formValues.quantidade;

    try {
      gravaNoFire(nomeProduto, descricaoProduto, precoProduto, quantidadeProduto); // Alteração da chamada da função para gravaNoFire
      this.formulario.reset();
    } catch (error) {
      console.error("Erro ao chamar gravaNoFire:", error); // Alteração da mensagem de erro
    }
  }

  buscar() {
    this.busqueIsso = this.formulario.value.name;
    this.consultarDados(this.busqueIsso);
    console.log("buscar ligado" + this.formulario.value.name);
  }
}
