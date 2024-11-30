/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { createApp } from 'vue'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const temaCustomizado = {
  dark: false,
  colors: {
    background: '#ddead1', // Usando o branco da logo
    surface: '#ddead1', // Usando o branco da logo para superfícies
    'surface-bright': '#FFFFFF', // Um branco mais puro para contraste
    'surface-light': '#dfe9e4', // Um tom ligeiramente mais escuro do branco
    'surface-variant': '#0a2438', // Azul da logo para variação
    'on-surface-variant': '#ddead1', // Contraste com o branco
    primary: '#0a2438', // Azul da logo como cor primária
    'primary-darken-1': '#081d2e', // Azul ligeiramente mais escuro
    secondary: '#147b64', // Verde da logo como cor secundária
    'secondary-darken-1': '#10614f', // Verde ligeiramente mais escuro
    error: '#B00020', // Mantendo padrão de erro
    info: '#2196F3', // Mantendo padrão de info
    success: '#4CAF50', // Mantendo padrão de sucesso
    warning: '#FB8C00', // Mantendo padrão de aviso
  },
  variables: {
    'border-color': '#0a2438', // Azul da logo para bordas
    'border-opacity': 0.12, // Mantendo a opacidade padrão
    'high-emphasis-opacity': 0.87, // Mantendo o padrão para alto contraste
    'medium-emphasis-opacity': 0.60, // Mantendo o padrão para médio contraste
    'disabled-opacity': 0.38, // Mantendo o padrão para estados desativados
    'idle-opacity': 0.04, // Mantendo o padrão para inatividade
    'hover-opacity': 0.08, // Ligeiramente maior para destaque ao passar o cursor
    'focus-opacity': 0.12, // Mantendo o padrão para foco
    'selected-opacity': 0.08, // Mantendo o padrão para seleção
    'activated-opacity': 0.12, // Mantendo o padrão para estados ativados
    'pressed-opacity': 0.15, // Levemente maior para estados pressionados
    'dragged-opacity': 0.08, // Mantendo o padrão para estados arrastados
    'theme-kbd': '#0a2438', // Azul da logo para fundo de elementos como "kbd"
    'theme-on-kbd': '#ddead1', // Contraste com o branco da logo
    'theme-code': '#ddead1', // Branco da logo para fundo de blocos de código
    'theme-on-code': '#0a2438', // Azul da logo para contraste no texto do código
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'temaCustomizado',
    themes: {
      temaCustomizado,
    },
  },
})
