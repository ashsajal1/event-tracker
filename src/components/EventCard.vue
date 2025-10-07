<template>
  <div class="event-card" :class="`priority-${event.priority?.toLowerCase() || 'medium'}`">
    <div class="card-header">
      <h3 class="event-title">
        <CalendarIcon class="icon" />
        {{ event.name }}
      </h3>
      <span class="priority-badge">
        <AlertTriangleIcon v-if="event.priority?.toLowerCase() === 'high'" class="icon" />
        <AlertCircleIcon v-else-if="event.priority?.toLowerCase() === 'medium'" class="icon" />
        <InfoIcon v-else class="icon" />
        {{ event.priority || 'Normal' }}
      </span>
    </div>

    <p class="event-date">
      <ClockIcon class="icon" />
      {{ formatDate(event.date) }}
    </p>

    <div class="event-description">
      <p>{{ event.description || 'No description provided' }}</p>
    </div>

    <div class="card-actions">
      <button class="action-btn edit" @click="$emit('edit', event.id)">
        <EditIcon class="icon" />
        Edit
      </button>
      <button class="action-btn delete" @click="$emit('delete', event.id)">
        <Trash2Icon class="icon" />
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CalendarIcon,
  ClockIcon,
  EditIcon,
  Trash2Icon,
  AlertTriangleIcon,
  AlertCircleIcon,
  InfoIcon,
} from 'lucide-vue-next'
import type { Events } from '../stores/events'

defineProps<{
  event: Events
}>()

const formatDate = (dateString?: string) => {
  if (!dateString) return 'No date'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>

<style scoped lang="scss">
.event-card {
  background: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 1.25rem;
  margin-bottom: 1rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border-left: 4px solid #64748b;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  &.priority-high {
    border-left-color: #ef4444;
    .priority-badge {
      color: #ef4444;
    }
  }

  &.priority-medium {
    border-left-color: #f59e0b;
    .priority-badge {
      color: #f59e0b;
    }
  }

  &.priority-low {
    border-left-color: #10b981;
    .priority-badge {
      color: #10b981;
    }
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.event-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.priority-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: #f8fafc;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
}

.event-date {
  color: var(--text-color);
  font-size: 0.875rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.event-description {
  color: var(--text-color);
  font-size: 0.9375rem;
  line-height: 1.5;
  margin: 1rem 0;
  padding: 0.75rem;
  background-color: var(--bg-color);
  border-radius: 8px;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e2e8f0;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &.edit {
    background-color: #e0f2fe;
    color: #0369a1;

    &:hover {
      background-color: #bae6fd;
    }
  }

  &.delete {
    background-color: #fee2e2;
    color: #b91c1c;

    &:hover {
      background-color: #fecaca;
    }
  }
}

.icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
</style>
