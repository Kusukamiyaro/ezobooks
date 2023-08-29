import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { item } from '../interfaces';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items : Array<item>|any;
  constructor(
    private commonServive: CommonServiceService
  ){}
  ngOnInit(): void {
    //  this.commonServive.getItemsResponse().subscribe({
    //   next:(data:any)=>{
    //   data = JSON.parse(JSON.stringify(data));
    //   if(data.status ==='success'){
    //      this.items =data.items;
    //   }else{
    //     this.items =[];
    //   }
    //   },
    //   error:(error)=>{
    //     if(error.status !==200){
    //       alert('Due to some problem request cannot be processed');
    //     }
    //   }
    //  })
    this.items = [
      {
          "itemName": "J4WqjWrEyrdmV",
          "itemPrice": 141,
          "itemBarcode": "651690579",
          "url": "https://db.ezobooks.in/kappa/image/get/9449541147/b9b7d883-8567-4359-a028-0c31e6b076f93111/4296bb5c-7151-417d-950b-fede634ee117"
      },
      {
          "itemName": "mwdmPj19rgtFAo",
          "itemPrice": 176,
          "itemBarcode": "696751577",
          "url": "https://db.ezobooks.in/kappa/image/get/8601789999/bad6ba63-b9c5-41f2-a26a-3947789169bc91712/f95782b3-8659-416b-a4ee-819789a0cda0"
      },
      {
          "itemName": "ePeExm2O",
          "itemPrice": 258,
          "itemBarcode": "721482201",
          "url": "https://db.ezobooks.in/kappa/image/get/9659307722/89f600e7-da4e-4c86-b27a-5ecca5af43bf19408/d22981dc-0aec-4e08-b829-e66b9b36c1eb"
      },
      {
          "itemName": "YckpC",
          "itemPrice": 192,
          "itemBarcode": "260500808",
          "url": "https://db.ezobooks.in/kappa/image/get/9659307722/89f600e7-da4e-4c86-b27a-5ecca5af43bf19408/4583c127-ed29-4032-b702-f9d6099492ba"
      },
      {
          "itemName": "zjXUeZIqEn9kOYp",
          "itemPrice": 177,
          "itemBarcode": "613598646",
          "url": "https://db.ezobooks.in/kappa/image/get/9659307722/89f600e7-da4e-4c86-b27a-5ecca5af43bf19408/46432e4a-e042-4480-8357-28e6232633ca"
      },
      {
          "itemName": "nyYodXqSp1GpP7z4Ppye",
          "itemPrice": 234,
          "itemBarcode": "412117197",
          "url": "https://db.ezobooks.in/kappa/image/get/9659307722/89f600e7-da4e-4c86-b27a-5ecca5af43bf19408/1d3439be-675e-46a4-b738-a73d67cfd648"
      },
      {
          "itemName": "uG9OUMqf9MNhtqOQI",
          "itemPrice": 376,
          "itemBarcode": "178902573",
          "url": "https://db.ezobooks.in/kappa/image/get/7908761603/04681243-8b7c-4327-a667-efc1fe4e37401631/2a3ed30a-3071-4785-b472-6620b20573fd"
      },
      {
          "itemName": "9KSyGXS5NtM8wSJSS0Ay",
          "itemPrice": 199,
          "itemBarcode": "291229191",
          "url": "https://db.ezobooks.in/kappa/image/get/9659307722/89f600e7-da4e-4c86-b27a-5ecca5af43bf19408/437f7169-16c8-4804-bfb0-7373c6e2e21a"
      },
      {
          "itemName": "idhNrWMiao7",
          "itemPrice": 330,
          "itemBarcode": "897219892",
          "url": "https://db.ezobooks.in/kappa/image/get/9304828250/b53b6cc0-f7d1-4c15-a62f-aebcde5e291e19966/74ce06ab-42c7-4449-8c2e-b351eaebe1f1"
      },
      {
          "itemName": "hW7PXCj8rLigyabY3C",
          "itemPrice": 205,
          "itemBarcode": "801626155",
          "url": "https://db.ezobooks.in/kappa/image/get/9304828250/b53b6cc0-f7d1-4c15-a62f-aebcde5e291e19966/b7068701-10e5-436b-b35b-e94620948d3f"
      },
      {
          "itemName": "guXBzmIj",
          "itemPrice": 377,
          "itemBarcode": "736857644",
          "url": "https://db.ezobooks.in/kappa/image/get/7908761603/04681243-8b7c-4327-a667-efc1fe4e37401631/327ca585-1b11-4206-83d1-a449961785fe"
      },
      {
          "itemName": "lKakCNRFVz9zB",
          "itemPrice": 144,
          "itemBarcode": "844599348",
          "url": "https://db.ezobooks.in/kappa/image/get/9304828250/b53b6cc0-f7d1-4c15-a62f-aebcde5e291e19966/24a2c4bb-ed81-4f07-aabd-a4f782082b31"
      },
      {
          "itemName": "s6ZS3",
          "itemPrice": 313,
          "itemBarcode": "170955722",
          "url": "https://db.ezobooks.in/kappa/image/get/9659307722/89f600e7-da4e-4c86-b27a-5ecca5af43bf19408/272e798a-f448-47b4-91a7-0eae410fddc8"
      },
      {
          "itemName": "aUfrUP",
          "itemPrice": 377,
          "itemBarcode": "627441928",
          "url": "https://db.ezobooks.in/kappa/image/get/9659307722/89f600e7-da4e-4c86-b27a-5ecca5af43bf19408/29a4a6b3-7971-4888-8de7-0bac64705861"
      },
      {
          "itemName": "9oeQgGhTuy",
          "itemPrice": 157,
          "itemBarcode": "151262564",
          "url": "https://db.ezobooks.in/kappa/image/get/9659307722/89f600e7-da4e-4c86-b27a-5ecca5af43bf19408/f4d08cd4-0e44-4a9c-b6e3-b3ec39fb49f9"
      },]
  }

}
