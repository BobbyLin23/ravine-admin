type AuthenticationFormProps = {
  children: React.ReactNode
  copyright: React.ReactNode
}

export const AuthenticationForm = ({
  children,
  copyright,
}: AuthenticationFormProps) => {
  return (
    <div className="flex-col-center dark:bg-background-deep bg-background relative px-6 py-10 lg:flex-initial lg:px-8">
      {children}
      <div className="text-muted-foreground absolute bottom-3 flex text-center text-xs">
        {copyright}
      </div>
    </div>
  )
}

{
  /* <script setup lang="ts">
defineOptions({
  name: 'AuthenticationFormView',
});
</script>

<template>
  <div
    class="flex-col-center dark:bg-background-deep bg-background relative px-6 py-10 lg:flex-initial lg:px-8"
  >
    <slot></slot>
    <!-- Router View with Transition and KeepAlive -->
    <RouterView v-slot="{ Component, route }">
      <Transition appear mode="out-in" name="slide-right">
        <KeepAlive :include="['Login']">
          <component
            :is="Component"
            :key="route.fullPath"
            class="enter-x mt-6 w-full sm:mx-auto md:max-w-md"
          />
        </KeepAlive>
      </Transition>
    </RouterView>

    <!-- Footer Copyright -->

    <div
      class="text-muted-foreground absolute bottom-3 flex text-center text-xs"
    >
      <slot name="copyright"> </slot>
    </div>
  </div>
</template> */
}
