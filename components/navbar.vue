<template>
    <div id="nav-bar">
        <ul>
            <nuxt-link :to="{name:'index'}"><li><img src="@/assets/epicgames-logo.png" alt="loho"></li> </nuxt-link>
            <nuxt-link :to="{name:'mağaza'}"><li>MAĞAZA</li>
            </nuxt-link>
            <li>HABERLER</li>
            <li>SSS</li>
            <li>YARDIM</li>
            <li>UNREAL ENGİNE</li>
            <li>EPİC GAMES'İ İNDİR</li>
           <nuxt-link :to="{name:'kayıt0l'}">
         <li id="papara">Kayıt ol</li>
           </nuxt-link>
            <li><i class="fas fa-globe"></i></li>
        </ul>
      </div>

</template>
<script>
export default {
    name:"navbar",
    
}
</script>
<style scoped>
#papara{
margin-left:52%;

}
</style>