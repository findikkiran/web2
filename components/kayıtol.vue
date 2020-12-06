<template>
<div class="kayıtol-card">
        <div class="kaytol-logo">
          <img src="@/assets/epicgames-logo.png" alt="logo" />
        </div>
        <div class="kayıtol-droplist">
          <p
            style="
              color: #f4f4f4;
              font-size: 12px;
              font-family: Brutal, sans-serif;
              margin-left: 32px;
            "
          >
            KAYIT OL
          </p>
          <button class="kayıtol-dropbtn">
            Turkey
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style="width: 2rem; height: 2rem; float: right"
            >
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </button>
          <div class="kayıtol-drop-content">
            <!--
            <ul>
              <li>Turkey</li>
              <li>United States</li>
              <li>United Kingdom</li>
            </ul>
            -->
          </div>
        </div>
        <div class="kayıtol-adsoyad">
          <input  placeholder="*Ad" required />
          <input  placeholder="*Soyadı" required />
        </div>
        <div class="kayıtol-görünenad">
          <input  placeholder="*Görünen Ad" required />

          <input  placeholder="*E-posta Adresi" required />
        </div>

        <div class="kayıtol-şifre">
          <input  placeholder="*Şifre " type="password" required />
        </div>
        <div class="kayıtol-teklifler">
          <input type="checkbox" />
          <p>
            Epic Games'ten haberler, anketler ve özel teklifler almak istiyorum.
          </p>
        </div>
        <div class="kayıtol-okudum">
          <input type="checkbox" />
          <p>Okudum ve onaylıyorum</p>
        </div>
        <button class="kayıtol-devamet">DEVAM ET</button>
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
          Epic Games hesabın var mı? Giriş Yap
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
<script>
export default {
  name:"kayıtol",
}
</script>