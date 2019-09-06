import React from "react";
import {
  SideBarContainer,
  ToggleMenuContainer,
  PageContainer,
  Sidebar
} from "./styled";

const { useState } = React;

export default () => {
  const [isOpen, updateState] = useState(false);

  const toggleHandler = () => updateState(!isOpen);

  return (
    <SideBarContainer width="100%" height="100%">
      <Sidebar id="sidenav">side nav</Sidebar>

      <PageContainer open={isOpen}>
        <ToggleMenuContainer onClick={toggleHandler}>
          <span />
          <span />
        </ToggleMenuContainer>
      </PageContainer>
    </SideBarContainer>
  );
};
