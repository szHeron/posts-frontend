import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerAbsolute = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${rotate} 1s linear infinite;
`;

const SpinnerRelative = styled.div`
  align-self: center;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${rotate} 1s linear infinite;
`;

function ActivityIndicator({absolute}:{absolute: boolean}) {
  if(absolute)
    return <SpinnerAbsolute />;
  return <SpinnerRelative />;
}

export default ActivityIndicator;