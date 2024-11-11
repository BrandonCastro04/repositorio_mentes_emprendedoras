<template>
  <div class="main-container">
    <NavbarComponent />
    <HeroSection />
    <ServicesComponent />
    <TestimonialsComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import TestimonialsComponent from "@/components/TestimonialsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    NavbarComponent,
    HeroSection,
    ServicesComponent,
    TestimonialsComponent,
    FooterComponent
  }
};
</script>

<style scoped>
.main-container {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
