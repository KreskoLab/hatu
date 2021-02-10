<template>
    <b-navbar transparent :mobile-burger="false" class="mx-4 mt-2">

        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://www.trulia.com/images/icons/favicon-rebrand-196.png"
                >
            </b-navbar-item>
        </template>

        <template #start>

            <b-navbar-dropdown boxed label="Київ">
              
                <b-navbar-item aria-role="listitem">Київ</b-navbar-item>
                <b-navbar-item aria-role="listitem">Львів</b-navbar-item>
                <b-navbar-item aria-role="listitem">Одеса</b-navbar-item>
              
            </b-navbar-dropdown>

            <b-navbar-dropdown boxed label="Кімнат">

                <b-navbar-item class="pr-4" aria-role="listitem">
                  <b-field>
                      <p class="control">
                          <b-button>1</b-button>
                      </p>
                      <p class="control">
                          <b-button>2</b-button>
                      </p>
                      <p class="control">
                          <b-button>3</b-button>
                      </p>
                      <p class="control">
                          <b-button>4+</b-button>
                      </p>
                  </b-field>
                </b-navbar-item>

            </b-navbar-dropdown>

        </template>

    </b-navbar>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
