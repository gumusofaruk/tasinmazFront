import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Il } from "src/app/models/il";
import { Tasinmaz } from "src/app/models/tasinmaz";
import { CartService } from "src/app/services/cart.service";
import { IlService } from "src/app/services/il.service";
import { TasinmazService } from "src/app/services/tasinmaz.service";

@Component({
  selector: "app-tasinmaz",
  templateUrl: "./tasinmaz.component.html",
  styleUrls: ["./tasinmaz.component.css"],
})
export class TasinmazComponent implements OnInit {
  tasinmazs: Tasinmaz[] = [];
  dataLoaded = false;
  filterText = "";
  constructor(
    private tasinmazService: TasinmazService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["ilId"]) {
        this.getTasinmazsByIl(params["ilId"]);
      } else {
        this.getTasinmazs();
      }
    });
  }
  getTasinmazs() {
    this.tasinmazService.getTasinmazs().subscribe((response) => {
      this.tasinmazs = response.data;
      this.dataLoaded = true;
    });
  }
  getTasinmazsByIl(ilId: number) {
    this.tasinmazService.getTasinmazsByIl(ilId).subscribe((response) => {
      this.tasinmazs = response.data;
      this.dataLoaded = true;
    });
  }
  reloadCurrentPage() {
    window.location.reload();
   }
  delete(tasinmaz:Tasinmaz){
    this.tasinmazService.delete(tasinmaz).subscribe((res)=>{
      //this.toastrService.success("Taşınmaz silindi",tasinmaz.tasinmazAdi);
    }
  );this.reloadCurrentPage();
  
  this.toastrService.success("Taşınmaz silindi",tasinmaz.tasinmazAdi)
    
  }
  addToCart(tasinmaz: Tasinmaz) {
    if (tasinmaz.tasinmazId === 1) {
      this.toastrService.error("Hata", "Bu taşınmaz sepete eklenemez");
    } else {
      this.toastrService.success("Sepete eklendi", tasinmaz.tasinmazAdi);
      this.cartService.addToCart(tasinmaz);
    }
  }
}
