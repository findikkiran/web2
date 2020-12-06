import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
export const state =()=>({
     type:0,
     counter:0,
    selected: false,
    
      itemss: [
        {
          key: 0,
          name: "RogueCompany",
          about:
            "Fixer geldi! En son güncellemeyle birlikte Rogue Company'de yeni Sniper'ı bugün oyna!",
          img:'roguecompany',
          

        }],
        newitem:[
            {
              key: 1,
              name: "AutoChess",
              corporation:"Dragonest Game",
              long:"Auto Chess, Dragonest Co.Ltd ve Drodo Studio tarafından ortaklaşa geliştirilen ve Dragonest Co.Ltd yayınlanan orijinal otomatik savaş oyunudur.Auto Chess çıkışından bu yana yepyeni oynanış modu ve stratejik rekabetçi özellikleriyle tüm dünyada önemli bir etki bıraktı. Ayrıca tüm dünyada milyonlarca oyuncunun ilgisini çekti. Her bir oyuncu İnternet üzerinden dünyanın dört bir köşesinden katılan başka oyunculara karşı oynayabilir.",
              about:
                "Auto Chess 1.0 çıktı! En iyi çevrimiçi rekabetçi strateji oyununda parçalarını seçerek ve takımını[...]",
              img:"autochess",
              listefiyatı:200.00,
            indirim:50.00,
            epickupon:50.00,
            ücret:100.00
            },
            {
              key: 2,
              name: "GhostRunner",
              corporation:"One More Level ve 3D Realms",
              long:"Ghostrunner; ışık hızında aksiyon, amansız bir mücadele ortamı, siber hacker tarzı mega yapı ile donatılmış, zorlu bir Birinci Şahıs (FPP) öldürme oyunudur. Dünyayı sona erdiren felaketten sonra insanlığın son sığınağı olan Darma Kulesine tırman. En aşağıdan en yukarıya çıkmak için yol bul, acımasız Keymaster'a karşı gel ve intikamını al.",
              about:
                "Ghostrunner'ı ayağa kaldırmanın ve kıyamet sonrasını yaşayan insanlığı acımasız Key Master'dan[...]",
              img:"ghostrunner",
              listefiyatı:250.00,
              indirim:30.00,
              epickupon:70.00,
              ücret:150.00
            },
            {
              key: 0,
              name: "RogueCompany",
              corporation:"First Watch Games",
              long:"Dünyanın kurtarılması gerekiyor ve bunu da sadece en iyiler yapabilir. Her birinin kendine has yetenekleri olan seçkin Rogue Company ajanlarından biri ol ve farklı oyun modlarında savaşa tutuş.Teçhizatını kuşan ve Rogue'la! Hemen indir ve ÜCRETSİZ oyna!",
              about:
                "Fixer geldi! En son güncellemeyle birlikte Rogue Company'de yeni Sniper'ı bugün oyna!",
              img:"roguecompany",
              listefiyatı:300.00,
              indirim:40.00,
              epickupon:90.00,
              ücret:170.00
            },
            {
                key: 4,
                name: "TonyHawks",
                corporation:"Vicarious Visions",
                long:"Efsanevi Tony Hawk ve diğer orijinal profesyonel kaykaycılar olarak kay. Ayrıca yeni profesyoneller kaykaycılar da eklendi. Yeni müziklerle birikte dönem belirleyici oyun müziklerinden parçaları dinle. Tony Hawk's™ Pro Skater™ serisinin benzersiz mekanikleriyle inanılmaz havalı kombolara imza at.",
                about:
                  "Fixer geldi! En son güncellemeyle birlikte Rogue Company'de yeni Sniper'ı bugün oyna!",
                img:"tonyhawk",
                listefiyatı:200.00,
                indirim:40.00,
                epickupon:40.00,
                ücret:120.00
              },
              {
                key: 5,
                name: "SuperliminalDouble-Albu",
                corporation:"Pillow Castle",
                long:"TV açık olarak sabah saat 03.00'te uykuya dalarken, Dr.Pierce’ın Somnasculpt rüya terapisi programından reklam filmine bir göz attığınızı hatırlıyorsunuz. Gözlerinizi açtığınızda, bu deneysel programın ilk aşamalarından itibaren rüya görmeye başlamışsınız bile. Superliminal'a hoş geldiniz.",
                about:
                  "Fixer geldi! En son güncellemeyle birlikte Rogue Company'de yeni Sniper'ı bugün oyna!",
                img:"superliminal",
                listefiyatı:100.00,
                indirim:10.00,
                epickupon:10.00,
                ücret:80.00
              },
              {
                key: 6,
                name: "WatchDogs:Legion",
                corporation:"Ubisoft Toronto",
                long:"Çöküşün eşiğindeki Londra'yı kurtarmak için, etrafında gördüğün herkesi kullanarak, sızma ve hack eylemleri gerçekleştirerek bir mücadele inşa etmek zorundasın. Direnişe hoş geldin.",
                about:
                  "Fixer geldi! En son güncellemeyle birlikte Rogue Company'de yeni Sniper'ı bugün oyna!",
                img:"watchdogs",
                listefiyatı:300.00,
                indirim:100.00,
                epickupon:50.00,
                ücret:150.00
              },
              {
                key: 7,
                name: "PumpkinJack",
                corporation:"Nicolas Meyssonnier",
                long:"Şeytanın emrine gir ve lanetlenerek parçalanan efsanevi bir âlem olan Boredom Kingdom'da yolculuğa çıkacağın destansı görevde en büyük düşmanını alt et. Yolculuğun sırasında kibirli bir baykuştan rahatsız edici bir kargaya kadar birçok yeni arkadaş edineceksin!",
                about:
                  "Fixer geldi! En son güncellemeyle birlikte Rogue Company'de yeni Sniper'ı bugün oyna!",
                img:"pumpkinjack",
                listefiyatı:100.00,
                indirim:5.00,
                epickupon:5.00,
                ücret:90.00
              }
          ]
    });



export const mutations={
    onClickm(state){
        state.selected=!state.selected
    },
    changeType1(state){
         if(state.counter%2==0){
        state.type=1;
        state.counter++;
         }
         else{
             state.type=0;
             state.counter=0;
         }
    },
    changeType2(state){
        if(state.counter%2==0){
        state.type=2;
        state.counter++
        }
        else{
            state.type=0;
            state.counter=0;
        }

    }
    
};
export  const actions={
    toggleSelected({commit}){
        commit('onClickm')

    },
    updatetype1({commit}){
        commit('changeType1')

    },
    updatetype2({commit}){
        commit('changeType2')

    }
    
};




