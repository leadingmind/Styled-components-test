import Styled from "styled-components";

const Chart = Styled.div`
  background:#eee;
  width:max-content;
  padding:40px;
  margin:20px auto;
  box-shadow:-12px -12px 20px 0 rgba(255,255,255,1),
            12px 12px 12px 0 rgba(0,0,0,.03);
`;
const Paper = Styled.div`
  background:#eee;
  width:100%;
  height:max-content;
  display:flex;
  flex-wrap:wrap;
`;
export { Chart, Paper };
