import { Component, OnInit } from "@angular/core";
import { Il } from "src/app/models/il";
import { Tasinmaz } from "src/app/models/tasinmaz";
import { IlService } from "src/app/services/il.service";
import { TasinmazService } from "src/app/services/tasinmaz.service";

@Component({
  selector: "app-tasinmaz",
  templateUrl: "./tasinmaz.component.html",
  styleUrls: ["./tasinmaz.component.css"],
})
export class TasinmazComponent implements OnInit {
  tasinmazs: Tasinmaz[] = [];
  dataLoaded=false
  constructor(private tasinmazService: TasinmazService) {}

  ngOnInit(): void {
    this.getTasinmazs();
  }
  getTasinmazs() {
    this.tasinmazService
      .getTasinmazs()
      .subscribe(response => {this.tasinmazs = response.data
        this.dataLoaded=true;
      })
      
  }
}
