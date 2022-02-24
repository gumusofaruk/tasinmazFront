import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { TasinmazService } from "src/app/services/tasinmaz.service";
import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import Overlay from "ol/Overlay";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { fromLonLat, transform, toLonLat } from "ol/proj.js";
import { toStringHDMS } from "ol/coordinate";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import TileLayer from "ol/layer/Tile";

@Component({
  selector: "app-tasinmaz-add",
  templateUrl: "./tasinmaz-add.component.html",
  styleUrls: ["./tasinmaz-add.component.css"],
})
export class TasinmazAddComponent implements OnInit {
  tasinmazAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private tasinmazService: TasinmazService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.createTasinmazAddForm();
  }

  createTasinmazAddForm() {
    this.tasinmazAddForm = this.formBuilder.group({
      tasinmazAdi: ["", Validators.required],
      ilId: ["", Validators.required],
      tasinmazId: ["", Validators.required],
      ilceId: ["", Validators.required],
    });
  }

  add() {
    if (this.tasinmazAddForm.valid) {
      let tasinmazModel = Object.assign({}, this.tasinmazAddForm.value);
      this.tasinmazService.add(tasinmazModel).subscribe(
        (response) => {
          console.log(response);
          this.toastrService.success(response.message, "Başarılı");
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                "Doğrulama Hatası"
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat");
    }
  }
}
