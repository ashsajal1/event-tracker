<template>
  <nav>
    <h3>Logo</h3>
    <div>
      <button
        class="btn btn-icon"
        @click="toggleDark()"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <Sun v-if="isDark" class="icon" />
        <Moon v-else class="icon" />
        <span class="sr-only">{{ isDark ? 'Light' : 'Dark' }} mode</span>
      </button>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'

const isDark = useDark({
  selector: 'body',
  attribute: 'data-scheme',
  valueDark: 'dark',
  onChanged: (dark) => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  },
})

const toggleDark = useToggle(isDark)
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid var(--border-color);

  div {
    button {
      padding: 12px;
      background-color: var(--bg-color);
    }
  }
}
</style>
