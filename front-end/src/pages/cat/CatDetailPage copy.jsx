import React from "react"

const CatDetailPage = () => {
    return(
        <div className="w-[393px] h-[852px] relative overflow-hidden bg-white">
           
            <p className="w-[134px] h-6 absolute left-[197px] top-[109px] text-[15px] font-bold text-left text-black">
                <span className="w-[134px] h-6 text-[15px] font-bold text-left text-black">냥냥이</span>
                <br />
            </p>
            <p className="w-[134px] h-6 absolute left-[26px] top-[411px] text-xl font-bold text-left text-black">
                기록
            </p>
            <p className="w-[134px] h-6 absolute left-[197px] top-[135px] text-[15px] font-bold text-left text-black">
                2살
            </p>
            <p className="w-[134px] h-6 absolute left-[197px] top-[161px] text-[15px] font-bold text-left text-black">
                <span className="w-[134px] h-6 text-[15px] font-bold text-left text-black">남</span>
                <br />
            </p>
            <p className="w-[134px] h-6 absolute left-[197px] top-[211px] text-[15px] font-bold text-left text-[#423636]">
                질병 없음
            </p>
            <p className="w-[134px] h-6 absolute left-[197px] top-[186px] text-[15px] font-bold text-left text-black">
                팔로워 : 3명
            </p>
            <img
                src="cat-2.jpeg"
                className="w-[113px] h-[113px] absolute left-[35px] top-[113px] rounded-[64px] object-cover"
            />
            <div className="w-[337px] h-[337px]">
                <img
                src="cat-2.jpeg"
                className="w-[111px] h-[111px] absolute left-[26.5px] top-[448.5px] object-cover"
                />
                <img
                src="cat-2.jpeg"
                className="w-[111px] h-[111px] absolute left-[139.5px] top-[448.5px] object-cover"
                />
                <img
                src="cat-2.jpeg"
                className="w-[111px] h-[111px] absolute left-[252.5px] top-[448.5px] object-cover"
                />
                <img
                src="cat-2.jpeg"
                className="w-[111px] h-[111px] absolute left-[26.5px] top-[561.5px] object-cover"
                />
                <img
                src="cat-2.jpeg"
                className="w-[111px] h-[111px] absolute left-[139.5px] top-[561.5px] object-cover"
                />
                <img
                src="cat-2.jpeg"
                className="w-[111px] h-[111px] absolute left-[252.5px] top-[561.5px] object-cover"
                />
                <img
                src="cat-2.jpeg"
                className="w-[111px] h-[111px] absolute left-[26.5px] top-[674.5px] object-cover"
                />
                <img
                src="cat-2.jpeg"
                className="w-[111px] h-[111px] absolute left-[139.5px] top-[674.5px] object-cover"
                />
                <img
                src="cat-2.jpeg"
                className="w-[111px] h-[111px] absolute left-[252.5px] top-[674.5px] object-cover"
                />
            </div>
            <div className="w-[335px] h-8">
                <div
                className="w-[335px] h-8 absolute left-[27.5px] top-[242.5px] rounded-[10px] bg-[#f1ebeb]"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                />
            </div>
            <p className="w-12 h-6 absolute left-[173px] top-[250px] text-[15px] font-bold text-left text-black">
                팔로우
            </p>
            <img
                src="image-25.png"
                className="w-[336px] h-[102px] absolute left-7 top-[296px] object-cover"
            />
            <div className="w-[390px] h-[47px] absolute left-0 top-0 overflow-hidden bg-white">
            </div>
        </div>
    )
}

export default CatDetailPage;