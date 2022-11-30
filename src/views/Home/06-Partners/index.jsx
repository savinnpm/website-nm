import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import { typography } from "../../../../styles/typography";
import { utils } from "../../../../styles/utils";
import { Button } from "../../../components/Button";

export const Partners = () => {
  const { t } = useTranslation("home");

  return (
    <Container>
      <InnerContainer>
        <Heading>{t("POWERED_BY_YOU")}</Heading>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;
  background-color: ${(props) =>
    props.theme.isLightMode ? colors.gray["50"] : colors.gray["700"]};

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.color};
  text-align: center;

  ${typography.styles.displayMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displaySm};
    ${typography.weights.semibold};
  }
`;
