import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components
import BluePrint from "../components/BluePrint";
import Btn from "../components/Btn";
import Header from "../components/Header";
import { Pagination } from "@mantine/core";
import Loading from "../components/Loading";
import DataEmpty from "../components/DataEmpty";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  width: 91%;
  height: 80%;
`;
const HeaderSection = styled.section`
  width: 100%;
  margin-bottom: 3%;
`;
const PrintSection = styled.section`
  width: 100%;
  margin-bottom: 3%;
`;
const PaginationSection = styled.section`
  width: 100%;
  height: 45vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3%;
  margin-bottom: 7%;
`;

const CenterSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectPage = ({
  dataList,
  handleReset,
  handleDataList,
  handleResultData,
  loading,
}) => {
  const navigator = useNavigate();
  const [page, setPage] = useState(1);

  //method
  const handleHome = () => {
    handleReset();
    navigator("/");
  };

  const handleAddType = () => {
    //dataList 초기화
    handleDataList([]);
    navigator(-1);
  };

  const handleResult = (item) => {
    // result로 해당 이미지들 도출하기
    handleResultData(item);
    navigator("/result");
  };

  return (
    <Wrapper>
      <Section>
        <HeaderSection>
          <Header onClick={handleHome} />
        </HeaderSection>
        <PrintSection>
          {loading ? <Loading /> : null}
          {loading ? (
            <div style={{ width: "100%", height: "45vh" }}></div>
          ) : dataList.length === 0 ? (
            <DataEmpty />
          ) : (
            <CenterSection>
              <PaginationSection>
                {/* dataList 출력 */}
                {dataList
                  .slice((page - 1) * 4, (page - 1) * 4 + 4)
                  .map((item, idx) => (
                    <BluePrint item={item} index={idx} onClick={handleResult} />
                  ))}
              </PaginationSection>
            </CenterSection>
          )}
          <CenterSection>
            <Pagination
              total={
                dataList.length % 4 === 0
                  ? dataList.length / 4
                  : parseInt(dataList.length / 4) + 1
              }
              onChange={setPage}
              page={page}
              initialPage={1}
              color={"gray"}
              size={"lg"}
            />
          </CenterSection>
        </PrintSection>
        <Btn
          onClick={handleAddType}
          width="9em"
          height="2.3em"
          item="+Add Type"
          fontSize="1.5em"
          borderRadius={"20px"}
          position={"center"}
        />
      </Section>
    </Wrapper>
  );
};
export default React.memo(SelectPage);
