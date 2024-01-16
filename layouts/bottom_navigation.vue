
<template>
  <div>

    <main class="app-main">

      <slot />
    </main>

    <footer>
      <nav class="bottom-navbar">
        <li class="nav-items">

          <NuxtLink to="/app">

            <navbar-item text="Home" />
          </NuxtLink>
          <navbar-item icon_class="fa fa-history" text="History" />
          <button id="transact-btn" class="primary-btn">
            <i class="fa fa-exchange"></i>
          </button>
          <NuxtLink to="/app/accounts">

            <navbar-item icon_class="fa fa-wallet" text="Accounts" />
          </NuxtLink>
          <navbar-item icon_class="fa fa-user" text="Profile" />
        </li>
      </nav>
    </footer>



    <!-- <bottom_navbar /> -->
  </div>
</template>

<!-- <script lang="ts" setup>

</script> -->

<style lang="scss">
@import url("@/styles/bottom-navigation.scss");
</style>