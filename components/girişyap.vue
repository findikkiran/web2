<template>
    <div class="giriş-card">
        <div class="giriş-logo">
          <img src="@/assets/epicgames-logo.png" alt="logo" />
        </div>
        <p
          style="
            color: rgba(255, 255, 255, 0.75);
            margin-left: 30px;
            font: Brutal, sans-serif;
            font-size: 13px;
          "
        >
          BİR EPIC GAMES HESABI ILE GIRIŞ YAP
        </p>

        <div class="giriş-görünenad">
          <input placeholder="*E-posta Adresi" required ><p style="margin-top:25px ;transform: translateX(-55px);">Gerekli</p> </input>
        </div>

        <div class="giriş-şifre">
          <input placeholder="*Şifre " type="password" required ><p style="margin-top:25px ;transform: translateX(-55px);" >Gerekli</p></input>

        </div>
        <div class="giriş-teklifler">
          <input type="checkbox" />
          <p style="margin-top: 18px; margin-right: 110px">Beni hatırla</p>
          <p style="margin-top: 18px">Şifreni Mİ Unuttun?</p>
        </div>

        <button class="giriş-devamet">HEMEN GİRİŞ YAP</button>
        <p
          style="
            text-align: center;
            color: rgba(255, 255, 255, 0.815);
            font-size: 12px;
          "
        >
          Gizlilik Politikası
        </p>
        <p
          style="
            color: rgba(244, 244, 244, 0.5);
            text-align: center;
            font-size: 12px;
          "
        >
          Epic Games hesabın yok mu? Kayıt Ol
        </p>
        <p
          style="
            color: rgba(244, 244, 244, 0.5);
            text-align: center;
            font-size: 12px;
            margin-top: -5px;
          "
        >
          Tüm kaydolma seçeneklerine geri dön
        </p>

      </div>

</template>