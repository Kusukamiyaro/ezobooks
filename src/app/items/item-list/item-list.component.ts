import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { item } from '../interfaces';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
    items: Array<item> | any;
    constructor(
        private commonServive: CommonServiceService
    ) { }
    ngOnInit(): void {
        // this.commonServive.getItemsResponse().subscribe({
        //     next: (data: any) => {
        //         data = JSON.parse(JSON.stringify(data));
        //         if (data.status === 'success') {
        //             this.items = data.items;
        //         } else {
        //             this.items = [];
        //         }
        //     },
        //     error: (error) => {
        //         if (error.status !== 200) {
        //             alert('Due to some problem request cannot be processed');
        //         }
        //     }
        // })
        this.items = [
            {
                "itemName": "dzMJ9CQ9iGkiNus",
                "itemPrice": 379,
                "itemBarcode": "399807873",
                "url": "https://db.ezobooks.in/kappa/image/get/6393042504/033c8447-5a3b-4fba-a519-bcf9cf80cc8b6387/a17845b0-1d45-4a9f-855d-a5ea543c3a10"
            },
            {
                "itemName": "ptXqO8ETzi0Pij8I",
                "itemPrice": 136,
                "itemBarcode": "973735503",
                "url": "https://db.ezobooks.in/kappa/image/get/6393042504/033c8447-5a3b-4fba-a519-bcf9cf80cc8b6387/2c3986e2-4e78-4e0b-86cb-dba15656f550"
            },
            {
                "itemName": "5vAq8PEjpb7RQ6",
                "itemPrice": 179,
                "itemBarcode": "805123989",
                "url": "https://db.ezobooks.in/kappa/image/get/8770625607/1954f8ae-cb70-4a27-9c3a-510c302372122720/658a4081-ce8d-43e8-a2de-dc4cea8002c8"
            },
            {
                "itemName": "b7woB",
                "itemPrice": 130,
                "itemBarcode": "875248978",
                "url": "https://db.ezobooks.in/kappa/image/get/8303638604/a9ca3cf3-41e6-494c-b3e3-6b6114b3e8313423/502bd47d-0207-44c0-a556-9300aad795f3"
            },
            {
                "itemName": "uk3HuqJR232ykjb",
                "itemPrice": 168,
                "itemBarcode": "761402102",
                "url": "https://db.ezobooks.in/kappa/image/get/7879721158/bcdf71e2-64ce-4885-8e4b-c13ce7ef45545445/a2a3822d-917b-49c3-a0b5-f31af963c9d7"
            },
            {
                "itemName": "8mC8pWZoYst15OtvT",
                "itemPrice": 164,
                "itemBarcode": "549845923",
                "url": "https://db.ezobooks.in/kappa/image/get/7488195083/498999e4-42da-43ec-a509-16cab966087267175/b5c28f8f-e32a-4cd3-9c4d-709a2bc58398"
            },
            {
                "itemName": "NlKhmcQj3A0OTrU",
                "itemPrice": 172,
                "itemBarcode": "942577233",
                "url": "https://db.ezobooks.in/kappa/image/get/7879721158/bcdf71e2-64ce-4885-8e4b-c13ce7ef45545445/896b9aa5-5e30-4434-85e2-856c051e9124"
            },
            {
                "itemName": "qNjTtQi3L",
                "itemPrice": 349,
                "itemBarcode": "531739920",
                "url": "https://db.ezobooks.in/kappa/image/get/9816824666/f4a8ceef-0286-43b6-94bd-9becd176dfbc91316/cff70c77-51d1-4329-a45d-2a6082525ce4"
            },
            {
                "itemName": "8M8htLjURc7Jp",
                "itemPrice": 379,
                "itemBarcode": "894651728",
                "url": "https://db.ezobooks.in/kappa/image/get/9816824666/f4a8ceef-0286-43b6-94bd-9becd176dfbc91316/230049d2-dd84-4fd3-9b8b-8616ba90e532"
            },
            {
                "itemName": "x0YDqGjMMU",
                "itemPrice": 319,
                "itemBarcode": "124884192",
                "url": "https://db.ezobooks.in/kappa/image/get/9816824666/f4a8ceef-0286-43b6-94bd-9becd176dfbc91316/847ef810-9913-4113-a852-3ffc5b3801da"
            },
            {
                "itemName": "45eFEHZQdPY0ZVX",
                "itemPrice": 130,
                "itemBarcode": "494760723",
                "url": "https://db.ezobooks.in/kappa/image/get/8889902308/5e055e71-5fd0-4829-8fae-25fd13f030964331/251d83a0-a1d0-40d7-9749-a834a302dc39"
            },
            {
                "itemName": "z8xd3bAjYMV1msEHRw",
                "itemPrice": 294,
                "itemBarcode": "427959860",
                "url": "https://db.ezobooks.in/kappa/image/get/7488195083/498999e4-42da-43ec-a509-16cab966087267175/a0928c3f-0481-4430-832b-ae8dca80bcb2"
            },
            {
                "itemName": "6qgWFAp60tDcSxns",
                "itemPrice": 328,
                "itemBarcode": "711511228",
                "url": "https://db.ezobooks.in/kappa/image/get/7488195083/498999e4-42da-43ec-a509-16cab966087267175/e838744a-f032-48d7-881f-98ba952bfde0"
            },
            {
                "itemName": "h4l9lJbOhNV",
                "itemPrice": 147,
                "itemBarcode": "552793210",
                "url": "https://db.ezobooks.in/kappa/image/get/7427019668/a33c01ac-f10c-41ee-b256-60447bdf85f51968/eeaa7cb7-127a-4e15-8486-fddcf6daf794"
            },
            {
                "itemName": "piv3Fzp979Wk8Dn0",
                "itemPrice": 293,
                "itemBarcode": "639729824",
                "url": "https://db.ezobooks.in/kappa/image/get/7427019668/a33c01ac-f10c-41ee-b256-60447bdf85f51968/29c5317f-44b3-4024-9119-c12c9dd8bea7"
            },
            {
                "itemName": "Bf6yXCnquOGt",
                "itemPrice": 319,
                "itemBarcode": "792922481",
                "url": "https://db.ezobooks.in/kappa/image/get/7427019668/a33c01ac-f10c-41ee-b256-60447bdf85f51968/e5c0c2ce-e6e9-489e-8913-0ed7515d68f9"
            },
            {
                "itemName": "BnjxOrhN8uYXomSSIL",
                "itemPrice": 302,
                "itemBarcode": "514218764",
                "url": "https://db.ezobooks.in/kappa/image/get/7427019668/a33c01ac-f10c-41ee-b256-60447bdf85f51968/5c0817ac-87b4-4245-be40-1e430a42fb27"
            },
            {
                "itemName": "7ITwKppWbuVeaCYtW",
                "itemPrice": 201,
                "itemBarcode": "128631325",
                "url": "https://db.ezobooks.in/kappa/image/get/7427019668/a33c01ac-f10c-41ee-b256-60447bdf85f51968/2a1a6c7f-1b0e-4fe4-92cc-c6670d7b57bd"
            },
            {
                "itemName": "1UvXVZAB7SYLMS0q",
                "itemPrice": 346,
                "itemBarcode": "746259954",
                "url": "https://db.ezobooks.in/kappa/image/get/8889902308/5e055e71-5fd0-4829-8fae-25fd13f030964331/634cb070-ac61-4510-8852-b466e4a78563"
            },
            {
                "itemName": "5vdabHJo",
                "itemPrice": 216,
                "itemBarcode": "324714557",
                "url": "https://db.ezobooks.in/kappa/image/get/7427019668/a33c01ac-f10c-41ee-b256-60447bdf85f51968/139bc891-18c3-417d-8edf-c09728ef4275"
            },
            {
                "itemName": "wlPqp2AIXPs",
                "itemPrice": 362,
                "itemBarcode": "295753202",
                "url": "https://db.ezobooks.in/kappa/image/get/7427019668/a33c01ac-f10c-41ee-b256-60447bdf85f51968/e0922baf-2464-4ab6-a15f-f1a37c39b25e"
            },
            {
                "itemName": "L5wvpVGI7n4DU5SOFs",
                "itemPrice": 142,
                "itemBarcode": "593731877",
                "url": "https://db.ezobooks.in/kappa/image/get/7427019668/a33c01ac-f10c-41ee-b256-60447bdf85f51968/7285b1d6-b0da-4043-9b68-1fd5ea8ead6d"
            },
            {
                "itemName": "eIn72GZE8E1lSFf29lz",
                "itemPrice": 290,
                "itemBarcode": "647939540",
                "url": "https://db.ezobooks.in/kappa/image/get/7427019668/a33c01ac-f10c-41ee-b256-60447bdf85f51968/9cee0eab-a901-4cc0-a0e6-4f601cfaff74"
            },
            {
                "itemName": "RsP4qpu",
                "itemPrice": 262,
                "itemBarcode": "934705344",
                "url": "https://db.ezobooks.in/kappa/image/get/8668241515/dafd2869-e138-4b54-93e6-5e5b252ede912497/89e72d3a-6f8d-459e-aaa6-868370f018c3"
            },
            {
                "itemName": "OVhd3E6Lt9sTYr",
                "itemPrice": 309,
                "itemBarcode": "282604184",
                "url": "https://db.ezobooks.in/kappa/image/get/8889902308/5e055e71-5fd0-4829-8fae-25fd13f030964331/c3c312e7-718c-415f-862a-2460aeccd58a"
            },]

    }

}
