module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        'primary' : '#A18064',
        'secondary' : '#291710',
      },
      fontFamily : {
        "cookie" : ["Cookie", "cursive"],
        "grandhotel" : ['Grand Hotel', "cursive"],
        "poppins" : ['Poppins', "sans-serif"],
      },
      scale: {
        'mirror': '-1'
      }
    }
  },
  plugins: [],
}
