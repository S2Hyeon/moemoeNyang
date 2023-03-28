import React, { useEffect, useState } from "react";
import { getSearchUnivs } from "../../services/member";
import useDebounce from "../../utils/useDebounce";
import Input from "../common/Input";
import * as S from "./ModalStyle";

export default function UnivSearchModal({ setModalOpen, setUniversity }) {
  const [seleted, setSelected] = useState(null);
  const [univArray, setUnivArray] = useState([]);
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input);
  useEffect(() => {
    if (!debouncedInput) return;
    getSearchUnivs("debouncedInput").then((res) => {
      setUnivArray(res.data.universities);
    });
  }, [debouncedInput]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = () => {
    setUniversity(seleted);
    closeModal();
  };

  return (
    <S.Modal className="border">
      <div className="Container h-full flex flex-col">
        <div className="ModalHeader top-0 sticky">
          {/* <div className="font-bold text-2xl mb-2">🔍 학교 검색 🔍</div> */}
          <Input
            placeholder="학교 이름"
            className="text-center"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <hr className="mr-4 ml-4 mt-2 mb-4"></hr>
        </div>
        <div className="ModalBody overflow-scroll">
          {!univArray.length ? (
            <div className="text-lg mb-6">검색된 학교가 없습니다.</div>
          ) : (
            univArray.map((e) => {
              return (
                <div
                  className="flex items-baseline mb-1"
                  key={e.id}
                  onClick={() => {
                    setSelected(e);
                  }}
                >
                  <span className="text-lg">{e.name}</span>
                  <span className="text-xs">
                    {e.address
                      .split(" ")[0]
                      .replace("특별시", "")
                      .replace("광역시", "")}
                  </span>
                </div>
              );
            })
          )}
        </div>
        <div className="ModalFooter sticky bottom-0">
          <div className="pt-3 pb-2 h-9">
            {seleted ? seleted.name : "선택된 학교가 없습니다."}
          </div>
          <div className="flex justify-center align-bottom gap-4">
            <div
              className="grid place-items-center bg-lisa-300 w-20 h-8 rounded-lg"
              onClick={onSubmit}
              role="button"
            >
              적용
            </div>
            <div
              className="grid place-items-center bg-slate-200 w-20 h-8 rounded-lg "
              onClick={closeModal}
              role="button"
            >
              취소
            </div>
          </div>
        </div>
      </div>
    </S.Modal>
  );
}
