import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css'
})

export class ForexComponent implements OnInit, AfterViewInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) {  }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $('#table1').DataTable
    (
      {
        "columnDefs" :
        [
          {
            "targets" : 2,
            "ClassName" : "text-right"
          }
        ]
      }
    );

    this.getData();
  }

  ngOnInit(): void {
  }

  getData(): void {
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=97cabacff569411a9656b203259081f5"

    this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD : " + idr2);
      var row = [ 1, "USD", idr2 ];
      this._table1.row.add(row);
      
      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD : " + sgd2);
      var row = [ 2, "SGD", sgd2 ];
      this._table1.row.add(row);
      
      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND : " + bnd2);
      var row = [ 3, "BND", bnd2 ];
      this._table1.row.add(row);
      
      var HKD = rates.IDR / rates.HKD;
      var HKD2 = formatCurrency(HKD, "en-US", "", "HKD");
      console.log("HKD : " + HKD2);
      var row = [ 4, "HKD", HKD2 ];
      this._table1.row.add(row);
      
      var BTC = rates.IDR / rates.BTC;
      var BTC2 = formatCurrency(BTC, "en-US", "", "BTC");
      console.log("BTC : " + BTC2);
      var row = [ 5, "BTC", BTC2 ];
      this._table1.row.add(row);
      
      var KRW = rates.IDR / rates.KRW;
      var KRW2 = formatCurrency(KRW, "en-US", "", "KRW");
      console.log("KRW : " + KRW2);
      var row = [ 6, "KRW", KRW2 ];
      this._table1.row.add(row);
      
      var JPY = rates.IDR / rates.JPY;
      var JPY2 = formatCurrency(JPY, "en-US", "", "JPY");
      console.log("JPY : " + JPY2);
      var row = [ 7, "JPY", JPY2 ];
      this._table1.row.add(row);
      
      var INR = rates.IDR / rates.INR;
      var INR2 = formatCurrency(INR, "en-US", "", "INR");
      console.log("INR : " + INR2);
      var row = [ 8, "INR", INR2 ];
      this._table1.row.add(row);
      
      var NZD = rates.IDR / rates.NZD;
      var NZD2 = formatCurrency(NZD, "en-US", "", "NZD");
      console.log("NZD : " + NZD2);
      var row = [ 9, "NZD", NZD2 ];
      this._table1.row.add(row);
      
      var AUD = rates.IDR / rates.AUD;
      var AUD2 = formatCurrency(AUD, "en-US", "", "BTC");
      console.log("AUD : " + AUD2);
      var row = [ 10, "AUD", AUD2 ];
      this._table1.row.add(row);

      this._table1.draw(false);
    })
  }
}
