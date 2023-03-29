import React from "react"
import KakaoMap from "../../components/common/KakaoMap";
import CatProfileBox from "../../components/cat/CatProfileBox";
import CatGrid from "../../components/cat/CatGrid";

export default function CatDetailPage() {
    return(
        <div className="flex justify-center items-center">
            <div className="w-11/12 grid gap-4 py-4">
                <CatProfileBox />
                <button class="rounded-full bg-[#e29c9c] px-10 py-3 text-base mb-10 font-medium text-white transition duration-200 ">팔로우</button>
                <div
                className="MapContainer w-full h-[10vh]"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                >
                    <KakaoMap />
                </div>
                <div>
                    <CatGrid />
                </div>
            </div>
        </div>
    )
}