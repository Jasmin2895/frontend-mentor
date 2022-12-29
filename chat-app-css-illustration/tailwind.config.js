/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.html',],
  theme: {
    extend: {},
    colors: {
      'app-white': 'hsl(0deg 0% 98%)',
      'app-chat-background': 'hsl(274deg 22% 96%)',
      'app-background-violet': 'hsl(272deg 46% 93%)',
      'submit-button-violet': 'hsl(271, 36%, 24%)',
      'radio-button-violet': 'hsl(289, 100%, 72%)',
      'light-magenta': 'hsl(293, 100%, 63%)',
      'light-violet': 'hsl(264, 100%, 61%)',
      'chat-violet-left-text': 'hsl(278deg 27% 64%)',
      'app-sub-text': 'hsl(240deg 1% 64%)'
    },
    fontSize: {
      'chat-text': '0.4em',
      'chat-user-name': '0.7em',
      'heading': '2.5em'
    },
    maxWidth: {
      'chat-bubble': '17em',
      'special-chat-bubble': 'fit-content',
      'text-box': '30%'
    },
    borderWidth: {
      'circle': '1px',
      'mobile-phone-width': '8px'
    },
  },
  plugins: [],
}
