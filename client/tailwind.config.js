module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        footer: "30rem",
      },
      colors: {
        "dark-gray-bg": "#141414",
        "dark-icons": "#343434",
      },
      dropShadow: {
        white: "0 0 15px rgba(255,255,255, .5)",
      },
      textShadow: {
        white: "0 0 10px rgba(255,255,255,0.5)",
      },
      fontFamily: {
        custom: ["Saira Condensed", "sans-serif"],
      },
      animation: {
        type: "type 1.7s ease-out .8s alternate both",
        bottom: "bottom 3.7s ease-out .8s alternate both",
      },
      keyframes: {
        type: {
          "0%": { transform: "translateX(0ch)" },
          "10%, 25%": { transform: "translateX(1ch)" },
          "30%, 50%": { transform: "translateX(2ch)" },
          "55%, 70%": { transform: "translateX(3ch)" },
          "80%, 95%": { transform: "translateX(4ch)" },
          "95%, 100%": { transform: "translateX(5.5ch)" },
        },
        bottom: {
          "0%": { transform: "translateX(0ch)" },
          "2%, 4%": { transform: "translateX(1.41666667ch)" },
          "6%, 8%": { transform: "translateX(2.83333334ch)" },
          "10%, 12%": { transform: "translateX(4.25000001ch)" },
          "14%, 16%": { transform: "translateX(5.66666668ch)" },
          "18%, 20%": { transform: "translateX(7.08333335ch)" },
          "22%, 24%": { transform: "translateX(8.50000002ch)" },
          "26%, 28%": { transform: "translateX(9.91666669ch)" },
          "30%, 32%": { transform: "translateX(11.33333334ch)" },
          "34%, 36%": { transform: "translateX(12.75ch)" },
          "38%, 40%": { transform: "translateX(14.1666667ch)" },
          "42%, 44%": { transform: "translateX(15.5833334ch)" },
          "46%, 48%": { transform: "translateX(17ch)" },
          "50%, 52%": { transform: "translateX(18.4166667ch)" },
          "54%, 56%": { transform: "translateX(19.8333334ch)" },
          "58%, 60%": { transform: "translateX(21.25ch)" },
          "62%, 64%": { transform: "translateX(22.6666667ch)" },
          "66%, 68%": { transform: "translateX(24.0833334ch)" },
          "70%, 72%": { transform: "translateX(25.0000001ch)" },
          "74%, 76%": { transform: "translateX(26.9166667ch)" },
          "78%, 80%": { transform: "translateX(28.3333334ch)" },
          "82%, 84%": { transform: "translateX(29.7500001ch)" },
          "86%, 88%": { transform: "translateX(32.5833334ch)" },
          "94%, 96%": { transform: "translateX(34ch)" },
          "98%, 100%": { transform: "translateX(33.75ch)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
