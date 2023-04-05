import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import UnivSearchModal from "../components/modal/UnivSearchModal";
import { getCheckEmail, postSignup } from "../services/member";
import { AlertSuccess } from "../utils/alertToastify";
import useDebounce from "../utils/useDebounce";

const SignupPage = () => {
  const navigate = useNavigate();
  const [errorMap, setErrorMap] = useState({
    emailError: "",
    nicknameError: "",
    passwordError: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    let newMessages = "";
    Object.values(errorMap).forEach((e) => {
      if (e) newMessages = e;
    });
    setErrorMessage(newMessages);
  }, [errorMap]);

  const [email, setEmail] = useState("");
  const debouncedEmail = useDebounce(email);
  //이메일 무결성
  useEffect(() => {
    if (!email) {
      setErrorMap((prev) => {
        return { ...prev, emailError: "" };
      });
      return;
    }

    if (!(email.includes("@") && email.includes("."))) {
      setErrorMap((prev) => {
        return { ...prev, emailError: "이메일이 형식에 맞지 않습니다." };
      });
      return;
    }

    getCheckEmail(debouncedEmail).then((res) => {
      const { msg } = res.data;
      if (msg === "N") {
        setErrorMap((prev) => {
          return { ...prev, emailError: "" };
        });
      } else {
        setErrorMap((prev) => {
          return { ...prev, emailError: "중복된 이메일입니다." };
        });
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedEmail]); //불필요한 서버 요청을 줄이기 위해 react-hooks/exhaustive-deps 비활성화

  //대학코드, 대학 모달창
  const [university, setUniversity] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  const [nickname, setNickname] = useState("");
  //닉네임무결성
  useEffect(() => {
    if (nickname.length) {
      if (nickname.length > 14 || nickname.length < 2) {
        setErrorMap((prev) => ({
          ...prev,
          nicknameError: "닉네임은 2~14글자 입니다.",
        }));
      } else if (
        !nickname.match(
          /^(?=.*[a-zA-Z0-9ㄱ-ㅎ가-힣])[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,14}$/,
        )
      ) {
        setErrorMap((prev) => ({
          ...prev,
          nicknameError: "닉네임에 특수문자를 사용할 수 없습니다.",
        }));
      } else {
        setErrorMap((prev) => ({
          ...prev,
          nicknameError: "",
        }));
      }
    }
  }, [nickname]);

  const [password, setPassword] = useState("");
  //패스워드무결성
  useEffect(() => {
    if (password.length) {
      if (password.length > 14 || password.length < 2) {
        return setErrorMap((prev) => ({
          ...prev,
          passwordError: "비밀번호은 2~16글자 입니다.",
        }));
      } else if (
        !password.match(
          /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
        )
      ) {
        return setErrorMap((prev) => ({
          ...prev,
          passwordError: "비밀번호는 영어, 숫자, 특수문자가 포함되어야 합니다.",
        }));
      }
    }
    setErrorMap((prev) => ({
      ...prev,
      passwordError: "",
    }));
  }, [password]);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  //패스워드확인무결성
  useEffect(() => {
    if (passwordConfirm.length && passwordConfirm !== password) {
      setErrorMap((prev) => ({
        ...prev,
        passwordConfirmError: "비밀번호가 일치하지 않습니다.",
      }));
      return;
    } else {
      setErrorMap((prev) => ({
        ...prev,
        passwordConfirmError: "",
      }));
    }
  }, [passwordConfirm, password]);

  //무결성검증 결과
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    if (errorMessage) return setCanSubmit(false);
    else if (
      email &&
      nickname &&
      university.university_id &&
      password &&
      passwordConfirm
    ) {
      setCanSubmit(true);
    }
  }, [errorMessage, email, nickname, university, password, passwordConfirm]);

  const onSubmit = () => {
    if (!canSubmit) return;
    postSignup(email, password, nickname, university.universityId).then(
      (res) => {
        AlertSuccess("회원가입에 성공하였습니다.");
        navigate("/login");
      },
    );
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5 w-full">
        <img
          src="/images/logo2.png"
          alt="logo"
          className="flex-grow-0 flex-shrink-0 w-[134px] h-[143px] object-cover"
        />
        <span className="text-lg font-bold text-center  text-black">
          회원가입
        </span>
        <div className="w-2/3">
          <Input
            autoFocus={true}
            placeholder="이메일"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="소속학교 선택 컨테이너" className="flex gap-[5px]">
            <Input
              autoFocus={true}
              placeholder="소속학교"
              type="text"
              value={university ? university.name : ""}
              disabled={true}
            />
            <div className="w-2/5">
              <Button onClick={showModal}>검색하기</Button>
            </div>
            {modalOpen && (
              <UnivSearchModal
                setModalOpen={setModalOpen}
                setUniversity={setUniversity}
              />
            )}
          </div>
          <Input
            placeholder="닉네임"
            type="text"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Input
            placeholder="비밀번호 확인"
            type="password"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          />
          <Button style={canSubmit ? "primary" : "disabled"} onClick={onSubmit}>
            가입하기
          </Button>
          <div className="h-5 my-4">
            <p className="BottomMessage text-[12px] text-center font-bold  text-lisa-500">
              {errorMessage}
            </p>
          </div>
        </div>
        <div className="flex gap-[5px]">
          <p className="text-[15px] text-left text-[#727272]">
            기존 계정으로 로그인하시겠어요?
          </p>
          <p
            className="flex-grow-0 flex-shrink-0 w-[60px] h-[27px] text-[15px] font-bold text-left text-[#ff7f7f]"
            onClick={() => navigate("/login")}
          >
            로그인
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
