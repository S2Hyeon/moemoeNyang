<<<<<<< HEAD
import React from "react";
import TimeLineCard from "./TimeLineCard";
import { HiPlusCircle } from "@react-icons/all-files/hi/HiPlusCircle";
import { useNavigate } from "react-router-dom";
=======
import React, { useState, useEffect } from "react";
import TimeLineCard from "./TimeLineCard";
import { HiPlusCircle } from "@react-icons/all-files/hi/HiPlusCircle";
import { useNavigate, useParams } from "react-router-dom";
import { getDiseases } from "../../services/symptom";
import Dropdown from "../../components/dropdown/Dropdown";
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21

export default function SymptomsPage() {
  const navigate = useNavigate();

  const navigateToPostSymptom = () => {
    navigate("/symptoms/register");
  };

<<<<<<< HEAD
  return (
    <>
      <div className="ml-4 mr-4">
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-lisa-300 dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                2023.03.13
              </p>
            </div>
            <div className="mt-2 ml-4 mb-6">
              <TimeLineCard />
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-lisa-300 dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                2023.03.13
              </p>
            </div>
            <div className="mt-2 ml-4 mb-6">
              <TimeLineCard />
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-lisa-300 dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                2023.03.13
              </p>
            </div>
            <div className="mt-2 ml-4 mb-6">
              <TimeLineCard />
            </div>
          </li>
=======
  const [catIdx, setCatIdx] = useState("");

  const [diseasesList, setDiseasesList] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    getDiseases(catId).then((res) => setDiseasesList(res.data));
  }, []);

  useEffect(() => {
    if (!diseasesList.length) return;
    console.log("diseases list 불러오기");
    console.log(diseasesList);
  }, [diseasesList]);

  return (
    <div className="m-2">
      <Dropdown parentFunction={setCatIdx} />
      <div className="ml-4 mr-4">
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          {diseasesList.map((list) => {
            return (
              <li>
                <div className="flex-start flex items-center pt-3">
                  <div className="-ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-lisa-300 dark:bg-neutral-500"></div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-300">
                    2023.03.13
                  </p>
                </div>
                <div className="mt-2 ml-4 mb-6">
                  <TimeLineCard />
                </div>
              </li>
            );
          })}
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
        </ol>
      </div>
      <HiPlusCircle
        onClick={navigateToPostSymptom}
        className="z-50 absolute text-lisa-500 w-12 h-12 right-8 bottom-14"
      />
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
  );
}
