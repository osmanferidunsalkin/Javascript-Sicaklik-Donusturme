const Birimden=document.querySelector(".Birimden"),
Çevir=document.querySelector(".Çevir"),
Birime=document.querySelector(".Birime"),
deger=document.querySelector(".deger"),
sonuc=document.querySelector(".sonuc"),
sonuc1=document.querySelector(".sonuc1");
let i,Brmdn,Brm;
Çevir.addEventListener("click", () => deger.focus());
Çevir.addEventListener("click",()=>{
    for(i=0;i<Birimden.length;i++){
        if(Birimden.options[i].selected){
            Brmdn=Birimden.options[i].value;
        }
    }
         for(i=0;i<Birime.length;i++){
         if(Birime.options[i].selected){
            Brm=Birime.options[i].value;     
         }
     }
 if(Brmdn=="celsius"){
     if(Brm=="kelvin"){
    sonuc.innerHTML=(Number(deger.value)+273.15)+" Kelvin";
    sonuc1.innerHTML="";    
    }
        if(Brm=="fahrenheit"){
            sonuc.innerHTML=((Number(deger.value)*1.8)+32)+" Fahrenheit";
        sonuc1.innerHTML="";  
        }
            if(Brmdn==Brm){
                sonuc.innerHTML=(Number(deger.value)+273.15)+" Kelvin";    
                sonuc1.innerHTML= ( (Number(deger.value)*1.8)+32) +" Fahrenheit";            
            }
     }
     if(Brmdn=="kelvin"){
        if(Brm=="celsius"){
            sonuc.innerHTML=(Number(deger.value)-273.15)+" Celsius";
            sonuc1.innerHTML="";    
        }
            if(Brm=="fahrenheit"){
     sonuc.innerHTML=(((Number(deger.value)-273.15)*1.8)+32)+" Fahrenheit";
     sonuc1.innerHTML="";            
    }
                if(Brmdn==Brm){
                    sonuc.innerHTML="Celsius" +(Number(deger.value)-273.15);
                    sonuc1.innerHTML="Fahrenheit "+ (((Number(deger.value)-273.15)*1.8)+32)
                    }
     }
     if(Brmdn=="fahrenheit"){
         if(Brm=="celsius"){
            sonuc.innerHTML=(Number(deger.value-32)/1.8)+" Celsius";
            sonuc1.innerHTML="";    
        }
            if(Brm=="kelvin"){
    sonuc.innerHTML=(((Number(deger.value)-32)/1.8)+273.15)+" Kelvin";
    sonuc1.innerHTML="";            
}
            if(Brmdn==Brm){
                sonuc.innerHTML= (Number(deger.value-32)/1.8)+" Celsius";
                sonuc1.innerHTML= (((Number(deger.value)-32)/1.8)+273.15)+" Fahrenheit";
                }
            }})