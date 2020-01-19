import Styled from 'styled-components';
const [pri,base,sec]=['gold','black','palevioletred'];
const Butt = Styled.div`
  color:${base};
  background:${props=>props.primary?pri:sec};
  width:max-content;
  margin:4px auto;
  padding:6px;
  border-radius:4px;
  font-size:20px;
`;
export {Butt};
