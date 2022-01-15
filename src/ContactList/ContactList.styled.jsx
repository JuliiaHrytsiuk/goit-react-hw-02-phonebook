import styled from "@emotion/styled";

export const ContactListField = styled.ul`
  color: black;
  font-weight: 500;
  margin: 25px auto 25px;
  font-size: 20px;
`;

export const ContactTitle = styled.p`
  color: red;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: auto;
  margin: auto;
`;

export const ContactInfo = styled.p`
  padding: 20px;

  cursor: pointer;
  transition: 0.3s all ease-in-out;

  border-radius: 5px;
  background: beige;
  box-shadow: 16px 16px 44px #0a0a0a, -16px -16px 44px #282a28;
`;

export const DeleteButton = styled.button`
  margin: 10px auto;
  padding: 20px;

  cursor: pointer;

  border: none;
  border-radius: 10px;
  background: pink;

  box-shadow: 16px 16px 44px #0a0a0a, -16px -16px 44px #282a28;
`;
