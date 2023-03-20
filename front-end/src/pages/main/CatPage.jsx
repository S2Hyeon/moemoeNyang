import React from "react";

const CatPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-[393px] h-[47px]">
      <div className="w-[393px] h-[47px] absolute left-[-0.5px] top-[46.5px] bg-[#ffe5e5]" />
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 absolute left-[359px] top-[58px]"
        preserveAspectRatio="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 0.749852C23.9999 0.638934 23.9753 0.529411 23.9278 0.429175C23.8803 0.328938 23.8111 0.240483 23.7254 0.170183C23.6396 0.0998829 23.5392 0.0494875 23.4316 0.0226277C23.324 -0.00423216 23.2118 -0.00688774 23.103 0.0148523L15.75 1.48485L8.397 0.0148523C8.29996 -0.00454382 8.20004 -0.00454382 8.103 0.0148523L0.603 1.51485C0.433042 1.54882 0.280096 1.64061 0.170165 1.7746C0.0602342 1.9086 0.000104673 2.07653 0 2.24985L0 23.2499C6.69791e-05 23.3608 0.0247353 23.4703 0.0722277 23.5705C0.11972 23.6708 0.188854 23.7592 0.274649 23.8295C0.360444 23.8998 0.460764 23.9502 0.568381 23.9771C0.675998 24.0039 0.788233 24.0066 0.897 23.9849L8.25 22.5149L15.603 23.9849C15.7 24.0042 15.8 24.0042 15.897 23.9849L23.397 22.4849C23.567 22.4509 23.7199 22.3591 23.8298 22.2251C23.9398 22.0911 23.9999 21.9232 24 21.7499V0.749852ZM7.5 21.1349V1.66485L8.25 1.51485L9 1.66485V21.1349L8.397 21.0149C8.29997 20.9954 8.20003 20.9954 8.103 21.0149L7.5 21.1349ZM15 22.3349V2.86485L15.603 2.98485C15.7 3.00425 15.8 3.00425 15.897 2.98485L16.5 2.86485V22.3349L15.75 22.4849L15 22.3349Z"
          fill="#FF7F7F"
        />
      </svg>
      <p className="w-[121px] h-7 absolute left-[137px] top-[58px] text-xl font-bold text-center text-black">
        싸피대학교
      </p>
    </div>
    
    <div className="w-[163px] h-[262px]">
      <div
        className="w-[163px] h-[262px] absolute left-[22.5px] top-[137.5px] rounded-[10px] bg-white"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      />
      <img
        src="cat-2.jpeg"
        className="w-[163px] h-[163px] absolute left-[22.5px] top-[137.5px] rounded-tl-[10px] rounded-tr-[10px] object-cover"
      />
      <p className="w-[113px] h-[55px] absolute left-[45px] top-[316px] text-base font-bold text-left text-black">
        <span className="w-[113px] h-[55px] text-base font-bold text-left text-black">
          이름 : 냥냥
        </span>
        <br />
        <span className="w-[113px] h-[55px] text-base font-bold text-left text-black">성별 : 남</span>
        <br />
        <span className="w-[113px] h-[55px] text-base font-bold text-left text-black">나이 : 3</span>
      </p>
    </div>
    <div className="w-[163px] h-[262px]">
      <div
        className="w-[163px] h-[262px] absolute left-[22.5px] top-[443.5px] rounded-[10px] bg-white"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      />
      <p className="w-[113px] h-[71px] absolute left-[45px] top-[622px] text-base font-bold text-left text-black">
        <span className="w-[113px] h-[71px] text-base font-bold text-left text-black">
          이름 : 치즈
        </span>
        <br />
        <span className="w-[113px] h-[71px] text-base font-bold text-left text-black">성별 : 남</span>
        <br />
        <span className="w-[113px] h-[71px] text-base font-bold text-left text-black">나이 : 1</span>
      </p>
    </div>
    <svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[153.5px] top-[303.5px]"
      preserveAspectRatio="none"
    >
      <path
        d="M11.1168 2.21205L11.4227 3.1536C11.9181 4.67808 13.3387 5.71024 14.9416 5.71024H15.9316C17.5785 5.71024 18.2632 7.81758 16.9309 8.78556L16.1299 9.36747C14.8331 10.3097 14.2905 11.9797 14.7858 13.5042L15.0918 14.4457C15.6007 16.012 13.808 17.3144 12.4757 16.3464L11.6748 15.7645C10.378 14.8223 8.622 14.8223 7.32519 15.7645L6.52427 16.3464C5.19195 17.3144 3.39934 16.012 3.90824 14.4457L4.21416 13.5042C4.7095 11.9797 4.16686 10.3097 2.87006 9.36747L2.06913 8.78556C0.736821 7.81758 1.42154 5.71024 3.06837 5.71024H4.05837C5.66131 5.71024 7.08194 4.67808 7.57728 3.1536L7.8832 2.21205C8.3921 0.645825 10.6079 0.645824 11.1168 2.21205Z"
        fill="#FFF500"
        stroke="black"
        stroke-width={2}
      />
    </svg>
    <svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[26px] h-[26px]"
      style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_d_230_2444)">
        <path d="M8.23256 5.44186H25.1628V20.5581H8.23256V5.44186Z" fill="white" />
        <path
          d="M30 13C30 16.4478 28.6304 19.7544 26.1924 22.1924C23.7544 24.6304 20.4478 26 17 26C13.5522 26 10.2456 24.6304 7.80761 22.1924C5.36964 19.7544 4 16.4478 4 13C4 9.55219 5.36964 6.24558 7.80761 3.80761C10.2456 1.36964 13.5522 0 17 0C20.4478 0 23.7544 1.36964 26.1924 3.80761C28.6304 6.24558 30 9.55219 30 13ZM17.8125 7.3125C17.8125 7.09701 17.7269 6.89035 17.5745 6.73798C17.4222 6.5856 17.2155 6.5 17 6.5C16.7845 6.5 16.5778 6.5856 16.4255 6.73798C16.2731 6.89035 16.1875 7.09701 16.1875 7.3125V12.1875H11.3125C11.097 12.1875 10.8903 12.2731 10.738 12.4255C10.5856 12.5778 10.5 12.7845 10.5 13C10.5 13.2155 10.5856 13.4222 10.738 13.5745C10.8903 13.7269 11.097 13.8125 11.3125 13.8125H16.1875V18.6875C16.1875 18.903 16.2731 19.1097 16.4255 19.262C16.5778 19.4144 16.7845 19.5 17 19.5C17.2155 19.5 17.4222 19.4144 17.5745 19.262C17.7269 19.1097 17.8125 18.903 17.8125 18.6875V13.8125H22.6875C22.903 13.8125 23.1097 13.7269 23.262 13.5745C23.4144 13.4222 23.5 13.2155 23.5 13C23.5 12.7845 23.4144 12.5778 23.262 12.4255C23.1097 12.2731 22.903 12.1875 22.6875 12.1875H17.8125V7.3125Z"
          fill="#FF7F7F"
        />
        <path d="M8.23256 5.44186H25.1628V20.5581H8.23256V5.44186Z" stroke="#FF7F7F" />
        <path
          d="M30 13C30 16.4478 28.6304 19.7544 26.1924 22.1924C23.7544 24.6304 20.4478 26 17 26C13.5522 26 10.2456 24.6304 7.80761 22.1924C5.36964 19.7544 4 16.4478 4 13C4 9.55219 5.36964 6.24558 7.80761 3.80761C10.2456 1.36964 13.5522 0 17 0C20.4478 0 23.7544 1.36964 26.1924 3.80761C28.6304 6.24558 30 9.55219 30 13ZM17.8125 7.3125C17.8125 7.09701 17.7269 6.89035 17.5745 6.73798C17.4222 6.5856 17.2155 6.5 17 6.5C16.7845 6.5 16.5778 6.5856 16.4255 6.73798C16.2731 6.89035 16.1875 7.09701 16.1875 7.3125V12.1875H11.3125C11.097 12.1875 10.8903 12.2731 10.738 12.4255C10.5856 12.5778 10.5 12.7845 10.5 13C10.5 13.2155 10.5856 13.4222 10.738 13.5745C10.8903 13.7269 11.097 13.8125 11.3125 13.8125H16.1875V18.6875C16.1875 18.903 16.2731 19.1097 16.4255 19.262C16.5778 19.4144 16.7845 19.5 17 19.5C17.2155 19.5 17.4222 19.4144 17.5745 19.262C17.7269 19.1097 17.8125 18.903 17.8125 18.6875V13.8125H22.6875C22.903 13.8125 23.1097 13.7269 23.262 13.5745C23.4144 13.4222 23.5 13.2155 23.5 13C23.5 12.7845 23.4144 12.5778 23.262 12.4255C23.1097 12.2731 22.903 12.1875 22.6875 12.1875H17.8125V7.3125Z"
          stroke="#FF7F7F"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_230_2444"
          x={0}
          y={0}
          width={34}
          height={34}
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feflood flood-opacity={0} result="BackgroundImageFix" />
          <fecolormatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feoffset dy={4} />
          <fegaussianblur stdDeviation={2} />
          <fecomposite in2="hardAlpha" operator="out" />
          <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_230_2444" />
          <feblend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_230_2444"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[335.5px] top-[267.5px]"
      preserveAspectRatio="none"
    >
      <path
        d="M11.1168 2.21205L11.4227 3.1536C11.9181 4.67808 13.3387 5.71024 14.9416 5.71024H15.9316C17.5785 5.71024 18.2632 7.81758 16.9309 8.78556L16.1299 9.36747C14.8331 10.3097 14.2905 11.9797 14.7858 13.5042L15.0918 14.4457C15.6007 16.012 13.808 17.3144 12.4757 16.3464L11.6748 15.7645C10.378 14.8223 8.622 14.8223 7.32519 15.7645L6.52427 16.3464C5.19195 17.3144 3.39934 16.012 3.90824 14.4457L4.21416 13.5042C4.7095 11.9797 4.16686 10.3097 2.87006 9.36747L2.06913 8.78556C0.736821 7.81758 1.42154 5.71024 3.06837 5.71024H4.05837C5.66131 5.71024 7.08194 4.67808 7.57728 3.1536L7.8832 2.21205C8.3921 0.645825 10.6079 0.645824 11.1168 2.21205Z"
        fill="white"
        stroke="black"
        stroke-width={2}
      />
    </svg>
    <div className="w-[163px] h-[262px]">
      <div
        className="w-[163px] h-[262px] absolute left-[207.5px] top-[137.5px] rounded-[10px] bg-white"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      />
      <p className="w-[113px] h-[70px] absolute left-[230px] top-[316px] text-base font-bold text-left text-black">
        <span className="w-[113px] h-[70px] text-base font-bold text-left text-black">
          이름 : 백설
        </span>
        <br />
        <span className="w-[113px] h-[70px] text-base font-bold text-left text-black">성별 : 여</span>
        <br />
        <span className="w-[113px] h-[70px] text-base font-bold text-left text-black">나이 : 6</span>
      </p>
    </div>
    <img
      src="image-30.png"
      className="w-[163px] h-[163px] absolute left-[207px] top-[137px] rounded-tl-[10px] rounded-tr-[10px] object-cover"
    />
    <img
      src="image-31.png"
      className="w-[163px] h-40 absolute left-[22px] top-[446px] rounded-tl-[10px] rounded-tr-[10px] object-cover"
    />
    <svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[335.5px] top-[306.5px]"
      preserveAspectRatio="none"
    >
      <path
        d="M11.1168 2.21205L11.4227 3.1536C11.9181 4.67808 13.3387 5.71024 14.9416 5.71024H15.9316C17.5785 5.71024 18.2632 7.81758 16.9309 8.78556L16.1299 9.36747C14.8331 10.3097 14.2905 11.9797 14.7858 13.5042L15.0918 14.4457C15.6007 16.012 13.808 17.3144 12.4757 16.3464L11.6748 15.7645C10.378 14.8223 8.622 14.8223 7.32519 15.7645L6.52427 16.3464C5.19195 17.3144 3.39934 16.012 3.90824 14.4457L4.21416 13.5042C4.7095 11.9797 4.16686 10.3097 2.87006 9.36747L2.06913 8.78556C0.736821 7.81758 1.42154 5.71024 3.06837 5.71024H4.05837C5.66131 5.71024 7.08194 4.67808 7.57728 3.1536L7.8832 2.21205C8.3921 0.645825 10.6079 0.645824 11.1168 2.21205Z"
        fill="white"
        stroke="black"
        stroke-width={2}
      />
    </svg>
    <svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[149.5px] top-[605.5px]"
      preserveAspectRatio="none"
    >
      <path
        d="M11.1168 2.21205L11.4227 3.1536C11.9181 4.67808 13.3387 5.71024 14.9416 5.71024H15.9316C17.5785 5.71024 18.2632 7.81758 16.9309 8.78556L16.1299 9.36747C14.8331 10.3097 14.2905 11.9797 14.7858 13.5042L15.0918 14.4457C15.6007 16.012 13.808 17.3144 12.4757 16.3464L11.6748 15.7645C10.378 14.8223 8.622 14.8223 7.32519 15.7645L6.52427 16.3464C5.19195 17.3144 3.39934 16.012 3.90824 14.4457L4.21416 13.5042C4.7095 11.9797 4.16686 10.3097 2.87006 9.36747L2.06913 8.78556C0.736821 7.81758 1.42154 5.71024 3.06837 5.71024H4.05837C5.66131 5.71024 7.08194 4.67808 7.57728 3.1536L7.8832 2.21205C8.3921 0.645825 10.6079 0.645824 11.1168 2.21205Z"
        fill="white"
        stroke="black"
        stroke-width={2}
      />
    </svg>
    <div className="w-[390px] h-[34px] absolute left-0 top-[810px] bg-white">


    </div>
  </div>
  );
};

export default CatPage;
