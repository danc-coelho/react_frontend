import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 8px;
  padding: 1px;
  outline: 0;
  box-sizing: content-box;
}


body {
  -webkit-font-smoothing: antialiased;

}

body, input, button {
  font: 16px Roboto, sans-serif;
  border-color:#68b465;
  background:#dcf2df;
  button-background: #fff
  
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button:hover {
  cursor: pointer;
  border-color:#68b465;
  background:linear-gradient(to bottom, #abd5aa 5%, #68b465 100%);
  box-shadow:inset 0px 1px 0px 0px #e3f1e3;
  color:#fff;
  text-shadow:0px 1px 0px #528009;
  
}
tr td {
  padding: 0.3rem;
  border: 2px solid black;
  border: 1.5px solid green;
  border-collapse: collapse;
  text-align: center
  td:hover {background: #F0F0F0;}
  tr:nth-child(even);
  background:linear-gradient(to bottom, #abd5aa 5%, #9be099 100%);
}

td {
  td:hover {background: #F0F0F0;}
}
`;
