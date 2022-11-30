import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { utils } from "../../../styles/utils";

export const RiskWarning = () => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <InnerContainer>
        <Heading>{t("RISK_WARNING")}</Heading>
        <Content>{t("RISK_WARNING_DESC")}</Content>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 48px;
`;

const InnerContainer = styled.div`
  padding: 32px 0;
  border-width: 1px 0px;
  border-style: solid;
  border-color: ${(props) =>
    props.theme.isLightMode ? colors.gray["200"] : colors.gray["600"]};
`;

const Heading = styled.p`
  color: ${(props) => props.theme.color};
  ${typography.styles.textXl}
  ${typography.weights.semibold}
`;

const Content = styled.p`
  margin-top: 8px;
  color: ${(props) =>
    props.theme.isLightMode ? colors.gray["600"] : colors.gray["300"]};

  ${typography.styles.textMd}
  ${typography.weights.regular}
`;
