import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController} from 'ionic-angular';
import { RuneStoneInfoPage } from '../rune-stone-info/rune-stone-info';


declare var google: any;

@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html',
})
export class GoogleMapsPage {
   
    @ViewChild('map') mapRef: ElementRef;

    map: any;

    constructor(private navCtrl: NavController) {
    }

    ionViewDidLoad(){
        //console.log(this.mapRef);
        this.showMap();
    }

    showMap(){
        //Location lat long
        var locations = [
            ['Fredriksdal', 58.9644444, 17.4625, "Gnue lät resa denna sten efter Gudlev, sin boder. Han ändades i öster i Tingalidet.",[
                "https://c1.staticflickr.com/5/4451/37742688396_843c2d50a1_k.jpg",
                "https://c1.staticflickr.com/5/4493/37742696476_8d6efe2f6c_k.jpg",
                "https://c1.staticflickr.com/5/4457/37533098380_1bb128a72d_k.jpg",
                "https://c1.staticflickr.com/5/4448/37533099410_ec3cf5365a_k.jpg"
            ]],          
            ['Kristinedal (sö37)', 58.97, 17.425555555555558, "Holmsten och Vigunn de läto resa stenen efter hennes son, och Vihjälm efter Ingefast.",[
                "https://c1.staticflickr.com/5/4500/37759580412_ceba6bd2d2_k.jpg",
                "https://c1.staticflickr.com/5/4500/37791296701_4e1e8d7c10_k.jpg"
            ]],                      
            ['Norastenen (sö30)', 58.9661111, 17.541111111111114, "(hela texten känd efter äldre illustration): Ingemar och Arne läto resa denna sten och göra bro efter Stenkel sin son. Gud hjälpe hans ande.",[
                "https://c1.staticflickr.com/5/4494/37791292541_020cb7ca36_k.jpg",
                "https://c1.staticflickr.com/5/4473/37791293171_492f736616_k.jpg"
            ]],                               
            ['Tjuvstigen (sö34)', 58.9777778, 17.54527777777778, "Ingegärd lät resa anuu en sten efter sina söner synliga minnesmärken. Gud hjälpe deras ande. Torer högg. Styrlög och Holm stenar reste efter sina bröder närmast vägen. De ändades i österväg. Torkel och Styrbjörn goda kämpar.",[
                "https://c1.staticflickr.com/5/4466/37121267813_8aab1a0405_k.jpg",
                "https://c1.staticflickr.com/5/4498/37121271613_cb368b2ee1_k.jpg"
            ]],                        
            ['Långbro (sö25)', 58.9286111, 17.477777777777778, "Vitgör och Ingjald och Assur, de reste denna sten efter Sven sin fader.",[
                "https://c1.staticflickr.com/5/4497/23938393918_13674c2c1a_k.jpg",
                "https://c1.staticflickr.com/5/4472/23938394718_1933f1d629_k.jpg"
            ]],            
            ['Skåängstenen (sö32)', 58.9638889, 17.43138888888889, "Harija, Lengar. Skamhals och Olov de läto göra märken dessa efter Sven fader sin. Gud hjälpe sjäens barn.",[
                "https://c1.staticflickr.com/5/4479/23938390588_2ce9cf559a_k.jpg",
                "https://c1.staticflickr.com/5/4476/23938391168_85c3b0f5fb_k.jpg"
            ]],
            ['Bergastenen (sö24)', 58.9363889, 17.498611111111114, "Finno, Saligastir.",[
                "https://c1.staticflickr.com/5/4459/37791301761_c1195fb0a3_k.jpg",
                "https://c1.staticflickr.com/5/4514/37791302101_929b7da1da_z.jpg",
                "https://c1.staticflickr.com/5/4491/37791302741_61fcb9b174_k.jpg",
                "https://c1.staticflickr.com/5/4489/37791267451_9b23cbda04_b.jpg",
                "https://c1.staticflickr.com/5/4459/23938367578_5bac82316a_b.jpg",
                "https://c1.staticflickr.com/5/4497/23938367728_aba6a49722_b.jpg",
                "https://c1.staticflickr.com/5/4467/37742672376_3399e8639f_b.jpg"
            ]],
            ['Västerljungkyrka', 58.9219444, 17.448888888888888,"Hunnäve reste efter Germar, sin fader. Han ändade i Tjust. Skamhals högg dessa runor.", [
                "https://c1.staticflickr.com/5/4462/37742688696_e5aa11b321_k.jpg", 
                "https://c1.staticflickr.com/5/4456/37533081170_8d9f4f449a_k.jpg", 
                "https://c1.staticflickr.com/5/4493/37742689606_cf8d5ccb4b_k.jpg", 
                "https://c1.staticflickr.com/5/4512/37533081640_72a5153240_k.jpg", 
                "https://c1.staticflickr.com/5/4511/37121262613_5e1083221e_k.jpg", 
                "https://c1.staticflickr.com/5/4501/23938385388_94127b9a14_k.jpg", 
                "https://c1.staticflickr.com/5/4459/23938385198_994fb448f5_k.jpg"]
            ],
            ['Björke', 58.9241667, 17.459166666666665, "Tate högg efter Skage sin far mäktiga märket man alltid skall minnas.", [
                "https://c1.staticflickr.com/5/4445/37081803394_e71934df77_b.jpg",
                "https://c1.staticflickr.com/5/4487/37791267051_1a4a6205cb_b.jpg",
                "https://c1.staticflickr.com/5/4509/37742671716_78d25e20dd_b.jpg"
            ]],
            ['Erikslund Gillberga (sö42)', 58.9161111, 17.450833333333332,"Sigval reste denna sten efter Torlek sin rättare.", [
                "https://c1.staticflickr.com/5/4486/37759581212_2f7e410d6b_k.jpg",
                "https://c1.staticflickr.com/5/4501/37759581452_193ebc175d_k.jpg",
                "https://c1.staticflickr.com/5/4471/37791300561_25991e65c0_k.jpg",
                "https://c1.staticflickr.com/5/4490/37791301061_dcb3d337f8_k.jpg",
                "https://c1.staticflickr.com/5/4454/37791300931_b7ca920d2c_k.jpg"
            ]],
            ['Ytterstene', 58.9161111, 17.549463699999933,"Faste och Ospak läto resa stenar efter Sigvat sin broder.", [
                "https://c1.staticflickr.com/5/4492/37121261153_198456e8cc_k.jpg", 
                "https://c1.staticflickr.com/5/4474/37533080240_0b5922e5b2_k.jpg"
            ]]
          ];

        // var i;
        // var locationens: any = [['Erikslund Gillberga (sö42)', 58.9161111, 17.450833333333332,"Här är texten10", [
        //     "https://c1.staticflickr.com/5/4486/37759581212_2f7e410d6b_k.jpg",
        //     "https://c1.staticflickr.com/5/4501/37759581452_193ebc175d_k.jpg",
        //     "https://c1.staticflickr.com/5/4471/37791300561_25991e65c0_k.jpg",
        //     "https://c1.staticflickr.com/5/4490/37791301061_dcb3d337f8_k.jpg",
        //     "https://c1.staticflickr.com/5/4454/37791300931_b7ca920d2c_k.jpg"
        // ]],
        // ['Ytterstene', 58.9161111, 17.549463699999933,"Här är texten11", [
        //     "https://c1.staticflickr.com/5/4492/37121261153_198456e8cc_k.jpg", 
        //     "https://c1.staticflickr.com/5/4474/37533080240_0b5922e5b2_k.jpg"
        // ]]];
        
        // var location = new google.maps.LatLng(58.9219444, 17.448888888888888);
        // var options = {
        //     center: location,
        //     zoom: 10,
        // }
        // var map = new google.maps.Map(this.mapRef.nativeElement, options);

        // for(var i = 0; i<locationens.length; i++)
        // {
        //     var location = new google.maps.LatLng(locationens[i][1], locationens[i][2]);
        //     // var marker = this.addMarker(location, map);
        //     var textRef = "KUUUUUK";
        //     let infowindow = new google.maps.InfoWindow({
        //         content: "<img src='" + locationens[i][4][0] + "' id='runeImg1'>"
        //     });
        //     google.maps.event.addListener(this.addMarker(location, map), 'click', () => {
        //         infowindow.open(this.map, this.addMarker(location, map));
        //         // var el = document.getElementById('runeImg1');
        //         // var classRef = this;
        //         // el.addEventListener('click', function(){
        //             //classRef.navCtrl.push(RuneStoneInfoPage, references); 
        //             // alert("kuk");
        //         // });
        //     });
        // }
        // var i;
        // const location = new google.maps.LatLng(58.9219444, 17.448888888888888);

        // const options = {
        // center: location,
        // zoom: 11,
        // }

        // const map = new google.maps.Map(this.mapRef.nativeElement, options);

        // for(i = 0; i<locations.length; i++)
        // {
        //     const location = new google.maps.LatLng(locations[i][1], locations[i][2]);
 
        //     //var marker = this.addMarker(location, map);
            
            
        //     var tempVar = <any>locations[i][4];
        //     var contentString: any = [];

        //     for(var x = 0; x < tempVar.length; x++)
        //     {
        //         contentString.push(locations[i][4][x]);
        //     }
            
        //     var textRef = locations[i][3];
    
        //     console.log(contentString[0]);
        //     var infowindow = new google.maps.InfoWindow({
        //       content: "<img src='" + contentString[0] + "' class='runeImg'>"
        //     });
        
        //     var references = {
        //     img : contentString,
        //     text : textRef
        //     }
    
        //     google.maps.event.addListener(this.addMarker(location, map), 'click', () => {
        //         infowindow.open(this.map, this.addMarker(location, map));
        //         var el = document.getElementsByClassName('runeImg');
        //         var classRef = this;
        //         //el.addEventListener('click', function(){
        //             //classRef.navCtrl.push(RuneStoneInfoPage, references); 
        //           //  alert("hejsan");
        //         //});
        //     });
        // }
        
        
        
        
        
        
        
        const location = new google.maps.LatLng(58.9219444, 17.448888888888888);
        var marker, i;
            var options = {
            center: location,
            zoom: 10,
        }
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        var infowindow = new google.maps.InfoWindow();
        var classRef = this;

        for (i = 0; i < locations.length; i++) {  
            marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (
            function(marker, i) {return function() {
            infowindow.setContent("<div class='runeTitle'>" + locations[i][0] + "</div>" + "<img src='" + locations[i][4][0] + "' id='rune" + i + "'>");
            infowindow.open(map, marker);

            var references = {
                name : locations[i][0],
                img : locations[i][4],
                text : locations[i][3]
            }

            var currId = document.getElementById("rune"+i);
            currId.addEventListener("click", function(){
                classRef.navCtrl.push(RuneStoneInfoPage, references); 
            });


            }})(marker, i));
        }
    }

    addMarker(position, map){
        return new google.maps.Marker({
            position,
            map
        });
    }

}