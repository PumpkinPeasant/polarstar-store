<template>
<div>
  <navigation/>
  <catalog-navigation/>
  <div class="lightsTabs">
    <breadcrumbs></breadcrumbs>
    <navigational-lights-tab/>
  </div>
</div>
</template>

<script>
import Navigation from '@/components/catalogPage/Navigation';
import CatalogNavigation from '@/components/catalogPage/CatalogNavigation';
import Breadcrumbs from '@/components/catalogPage/Breadcrumbs';
import NavigationalLightsTab from '@/components/catalogPage/tabs/NavigationalLightsTab';

export default {
name: "Catalog",
  components: {
    Navigation,
    CatalogNavigation,
    NavigationalLightsTab,
    Breadcrumbs
  },
}
</script>

<style scoped>
.lightsTabs{
  width: 100%;
  height: 100vh;
  padding: 23vh 9vw 18px 9vw;
}
</style>
